import NavLink from "./NavLink";
function NavLinks() {
  return (
    <>
      <NavLink href={"/"}> Home</NavLink>
      <NavLink href={"aboutus"}> About Us</NavLink>
      <NavLink href={"blogs"}> Blogs</NavLink>
      <NavLink href={"contactus"}> Contact Us</NavLink>
      <NavLink href={"getinvolved"}> Get Involved</NavLink>
      <NavLink href={"projects"}> Projects</NavLink>
    </>
  );
}

export default NavLinks;