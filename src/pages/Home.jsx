import HomeMainContent from "../components/home/HomeMainContent";
import Motivation from "../components/features/Motivation";
import HomeBG from "../assets/images/BGImages_Rect_Light/HomeBG";

const Home = () => {
  return (
    // <section className="relative section homePageHeight overflow-y-auto">
    <main className="grid md:grid-cols-[10%_80%_10%] w-screen h-screen">
      <HomeBG />
      <HomeMainContent />
      <Motivation />
    </main>
  );
};

export default Home;
