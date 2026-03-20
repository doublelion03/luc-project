import { useState, useEffect, useCallback } from 'react'

export function useApi(apiFunction, dependencies = [], immediate = true) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const execute = useCallback(async (...args) => {
    setLoading(true)
    setError(null)
    
    try {
      const result = await apiFunction(...args)
      setData(result)
      return result
    } catch (err) {
      setError(err)
      throw err
    } finally {
      setLoading(false)
    }
  }, [apiFunction])

  const reset = useCallback(() => {
    setData(null)
    setError(null)
    setLoading(false)
  }, [])

  useEffect(() => {
    if (immediate) {
      execute()
    }
  }, [execute, immediate, ...dependencies])

  return {
    data,
    loading,
    error,
    execute,
    reset
  }
}

export function useLazyApi(apiFunction) {
  return useApi(apiFunction, [], false)
}

export function usePagination(apiFunction, initialParams = {}) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(true)
  const [params, setParams] = useState(initialParams)

  const loadPage = useCallback(async (pageNumber = page, pageParams = params) => {
    setLoading(true)
    setError(null)
    
    try {
      const result = await apiFunction({ ...pageParams, page: pageNumber })
      
      if (pageNumber === 1) {
        setData(result.data || result)
      } else {
        setData(prev => [...prev, ...(result.data || result)])
      }
      
      setHasMore(result.hasMore !== false && result.data?.length > 0)
      setPage(pageNumber + 1)
      
      return result
    } catch (err) {
      setError(err)
      throw err
    } finally {
      setLoading(false)
    }
  }, [apiFunction, page, params])

  const loadMore = useCallback(() => {
    if (!loading && hasMore) {
      loadPage()
    }
  }, [loadPage, loading, hasMore])

  const reset = useCallback((newParams = initialParams) => {
    setData([])
    setPage(1)
    setHasMore(true)
    setParams(newParams)
    setError(null)
  }, [initialParams])

  const refresh = useCallback(() => {
    reset(params)
    return loadPage(1, params)
  }, [reset, loadPage, params])

  return {
    data,
    loading,
    error,
    hasMore,
    page,
    params,
    loadPage,
    loadMore,
    reset,
    refresh,
    setParams
  }
}

export function useMutation(apiFunction, options = {}) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [data, setData] = useState(null)

  const mutate = useCallback(async (...args) => {
    setLoading(true)
    setError(null)
    
    try {
      const result = await apiFunction(...args)
      setData(result)
      
      if (options.onSuccess) {
        options.onSuccess(result)
      }
      
      return result
    } catch (err) {
      setError(err)
      
      if (options.onError) {
        options.onError(err)
      }
      
      throw err
    } finally {
      setLoading(false)
      
      if (options.onSettled) {
        options.onSettled()
      }
    }
  }, [apiFunction, options])

  const reset = useCallback(() => {
    setData(null)
    setError(null)
    setLoading(false)
  }, [])

  return {
    mutate,
    loading,
    error,
    data,
    reset
  }
}

export function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])

  return debouncedValue
}

export function useSearch(apiFunction, searchKey = 'search') {
  const [searchTerm, setSearchTerm] = useState('')
  const debouncedSearchTerm = useDebounce(searchTerm, 300)
  
  const {
    data,
    loading,
    error,
    execute,
    reset
  } = useApi(
    (params) => apiFunction({ [searchKey]: debouncedSearchTerm, ...params }),
    [debouncedSearchTerm],
    false
  )

  useEffect(() => {
    if (debouncedSearchTerm) {
      execute()
    } else {
      reset()
    }
  }, [debouncedSearchTerm, execute, reset])

  return {
    data,
    loading,
    error,
    searchTerm,
    setSearchTerm,
    execute
  }
}
