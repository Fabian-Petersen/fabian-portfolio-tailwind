import HomeMainContent from "../components/home/HomeMainContent";
import Motivation from "../components/features/Motivation";

const Home = () => {
  return (
    <section className="relative section homePageHeight">
      <HomeMainContent />
      <Motivation />
    </section>
  );
};

export default Home;
