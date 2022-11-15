import { Box, Button, Container, Image, Text, useColorMode, useColorModeValue, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

import { Imagem } from 'next/image'

const Header = () => {

   return (
      <React.Fragment>
         <Container>
            <Box
               fontWeight='semibold'
               p={3}
               mb={5}
               borderRadius='lg'
               backgroundColor='blackAlpha.400'
               display={{ base: 'flex' }}
            >
               <VStack>
                  <Text></Text>
                  <Text>De uma olhada na nova colecao de inverno</Text>
                  <Button
                     bg={useColorModeValue("facebook", "cyan.900")}
                     color={useColorModeValue('red.400', 'green.200')}
                  >Ver mais</Button>
               </VStack>
               <Image src='../../public/varias_camisas.jpg' />
            </Box>
         </Container>
      </React.Fragment>
   )
}

export default Header;