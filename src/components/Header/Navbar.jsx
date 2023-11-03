import BurgerMenuButton from "../features/BurgerMenuButton";
import ThemeSelector from "../features/ThemeSelector";
import Logo from "../Header/Logo";

const Navbar = () => {
  return (
    <div className="fixed flex items-center navbarHeight top-0 left-0 w-[100%] z-10 border-b shadow-md bg-bgLight dark:bg-bgDark">
      <Logo />
      <ThemeSelector />
      <BurgerMenuButton />
    </div>
  );
};

export default Navbar;
