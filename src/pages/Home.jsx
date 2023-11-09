import HomeMainContent from "../components/home/HomeMainContent";
import Motivation from "../components/features/Motivation";
import AnimatedBackground from "../components/home/AnimatedBackground";

const Home = () => {
  return (
    <section className="section homePageHeight overflow-y-auto">
      <AnimatedBackground />
      <HomeMainContent />
      <Motivation />
    </section>
  );
};

export default Home;
