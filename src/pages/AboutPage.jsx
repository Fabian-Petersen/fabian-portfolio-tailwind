import AboutMainContent from "../components/about/AboutMainContent";
// import SocialsLinkIcons from "../components/features/SocialsLinkIcons";
// import PageLinkIcons from "../components/features/PageLinkIcons";
import AboutBGImage from "../assets/images/background-images/aboutBGImage";

const AboutPage = () => {
  return (
    <section className="section">
      <AboutBGImage />
      <AboutMainContent />
    </section>
  );
};

export default AboutPage;
