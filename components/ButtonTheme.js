import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react"
import { AnimatePresence, motion } from "framer-motion";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

const ThemeToggleButton = () => {
   const { toggleColorMode } = useColorMode();
   return (
      <AnimatePresence
         exitBeforeEnter initial={false}
      >
         <motion.div
            style={{ display: 'inline-block' }}
            key={useColorModeValue('light', 'dark')}
         >
            <IconButton 
               aria-label="Toggle theme"
               colorScheme={useColorModeValue('red', 'orange')}
               icon={useColorModeValue(<MoonIcon/>, <SunIcon/>)}
               onClick={toggleColorMode}
            />
         </motion.div>
      </AnimatePresence>
   )
};

export default ThemeToggleButton;