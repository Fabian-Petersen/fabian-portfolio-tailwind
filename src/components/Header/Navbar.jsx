import BurgerMenuButton from "../features/BurgerMenuButton";
import ThemeSelector from "../features/ThemeSelector";
import Logo from "../Header/Logo";

const Navbar = () => {
  return (
    <div className="fixed flex items-center justify-between navbarHeight top-0 left-0 w-[100%] z-10 border-b-[0.2px] border-gray-500 dark:border-gray-50 border-opacity-50 dark:border-opacity-5 shadow-slate-300 dark:shadow-slate-900 shadow-md bg-bgLight dark:bg-bgDark">
      <Logo />
      <div className="flex gap-[0.2rem] md:gap-[0.3rem] mr-[1.5rem] md:mr-[3rem] items-center">
        <ThemeSelector />
        <BurgerMenuButton />
      </div>
    </div>
  );
};

export default Navbar;
