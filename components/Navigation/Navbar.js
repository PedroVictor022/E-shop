import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Container,
  Flex,
  Heading,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import ThemeToggleButton from "../ButtonTheme";
import NavLink from "./LinkItem";

export const Navbar = (props) => {
  const path = props;
  return (
    <Box
      position='relative'
      as="nav"
      w="100%"
      bg={useColorModeValue("red.400", "#20202380")}
      style={{ backdropFilter: "blur10px" }}
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justifyContent="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={"tighter"}>
            <NavLink path={path} href="/">
              E-shop
            </NavLink>
          </Heading>
        </Flex>
        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: "none", md: "flex" }}
          align={{ base: "none", md: "center" }}
         
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
          gap="1rem"
        >
          <NavLink href="/profile" path={path}>
            Profile
          </NavLink>
          <NavLink href="/Cart" path={path}>
            Card
          </NavLink>
        </Stack>

        <Box align="rigth">
          <ThemeToggleButton />
          <Box ml={2} display={{ base: "inline-block", md: "none" }}>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="options"
              />
              <MenuList>
               <NavLink
                  href='/profile'
                  passHref
               >
                  <MenuItem>Profile</MenuItem>
               </NavLink>
               <NavLink
                  href='/card'
               >
                  <MenuItem>Cart</MenuItem>
               </NavLink>
               <NavLink
                href='/createAccount'
               >
                  <MenuItem>Create Account</MenuItem>
               </NavLink>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
