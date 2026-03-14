import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GraduationCap, LogIn, } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { headerVariants, navItemVariants, buttonVariants, containerVariants  } from "@/lib/animations";


function Selection() {
    return ( 
        <div className="">
            <motion.header 
      className="px-4 lg:px-10 h-16 flex items-center justify-between border-b bg-white fixed top-0 left-0 right-0 z-50 w-screen"
      initial="hidden"
      animate="visible"
      variants={headerVariants}
    >
      <motion.div 
        className="flex items-center justify-between gap-2"
        whileHover={{ scale: 1.05 }}
        variants={buttonVariants}
      >
        <Link to={"/landing-page"} className="flex items-center gap-2">
          <motion.div 
            className="p-2 bg-blue-800 rounded-md text-white"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <GraduationCap className="h-6 w-6" />
          </motion.div>
          <motion.span 
            className="font-bold text-2xl text-black"
            variants={buttonVariants}
          >
            LUC
          </motion.span>
        </Link>
      </motion.div>


      <div className="ml-auto flex items-center gap-4">
        {/* <motion.div variants={buttonVariants}>
          <Button className="bg-blue-800 text-white px-4 py-[18px] rounded-md cursor-pointer hover:opacity-80 hidden lg:flex">
            <UserPlus className="h-4 w-4 mr-2"/>
            Sign Up
          </Button>
        </motion.div> */}
        <motion.div 
          variants={buttonVariants}
          transition={{ delay: 0.2 }}
        >
          <Button className="bg-blue-800 text-white border border-gray-300 px-4 py-[18px] rounded-md cursor-pointer hover:bg-blue-800 hover:text-white">
            Sign In
            <LogIn className="h-4 w-4 ml-1" />
          </Button>
        </motion.div>
      </div>
    </motion.header>
        </div>
     );
}

export default Selection;