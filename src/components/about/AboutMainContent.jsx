import SectionHeading from "../features/SectionHeadings";
import MyInfo from "./MyInfo";
import MySkills from "./MySkills";

const About = () => {
  return (
    <main className="flex flex-col gap-2 col-start-2 col-end-3" id="about">
      <SectionHeading title={"About Me"} />
      <MyInfo />
      <MySkills />
    </main>
  );
};

export default About;
