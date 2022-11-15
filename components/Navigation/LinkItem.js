import NextLink from 'next/link';

const NavLink = ({ children, href, ...props }) => {
   return (
      <NextLink href={href} {...props}>
         { children }
      </NextLink>
   )
}

export default NavLink;