function NavLink({ href, children }) {
  return (
    <li className="bg-cyan-200 rounded-lg m-2 p-2">
      <a href={href}>{children}</a>
    </li>
  );
}

export default NavLink;