import { useEffect } from "react";
import BIRDS from "vanta/dist/vanta.birds.min";
import ContextAPI from "../../customHooks/useGlobalContext";

const AnimatedBackground = () => {
  const { theme } = ContextAPI();

  useEffect(() => {
    let bgColor = "#eff5f5"; // Default dark background color

    if (theme === "dark") {
      bgColor = "#050f1a"; // Change to light background color when the theme is 'light'
    }

    BIRDS({
      el: "#animated-bg",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      backgroundColor: bgColor,
      color1: "#e43f5a",
      color2: 0x0,
      wingSpan: 25.0,
      alignment: 14.0,
      cohesion: 17.0,
      quantity: 3.0,
    });
  }, [theme]);

  return (
    <div
      className="absolute top-0 left-0 bg-cover h-full w-full z-[-1]"
      id="animated-bg"
    ></div>
  );
};

export default AnimatedBackground;
