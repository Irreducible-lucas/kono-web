import Nav from "./Nav";
import NavDisplay from "./NavDisplay";

const Header = () => {
  return (
    <div className="bg-white grid grid-rows-[70px_1fr]  ">
      <NavDisplay />
      <Nav />
    </div>
  );
};

export default Header;
