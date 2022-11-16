import { Box, Button, Container, Heading, Image, Text, useColorMode, useColorModeValue, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const Header = () => {

   const imagem = '../../public/camisa_malha.jpg'

   return (
      <React.Fragment>
         <Container>
            <Box
               maxW={{
                  base: '700px',
                  md: 'auto'
               }}
               fontWeight='semibold'
               p={3}
               mb={5}
               borderRadius='lg'
               backgroundColor='blackAlpha.400'
               display={{ base: 'flex' }}
               flexDir={{ base: 'column', md: 'row'}}
               gap='3'
            >
               <VStack
                  p={3}
               >
                  <Heading as='h2'>New shirts collections</Heading>
                  <Button
                     bg={useColorModeValue("facebook", "cyan.900")}
                     color={useColorModeValue('red.400', 'green.200')}
                  >Ver mais</Button>
               </VStack>
               <Image 
                  p={4}
                  src='v1.jpg' 
                  width='auto' 
                  minW='100px' 
                  borderRadius='md'
                  objectFit='cover'
               />
            </Box>
         </Container>
      </React.Fragment>
   )
}

export default Header;