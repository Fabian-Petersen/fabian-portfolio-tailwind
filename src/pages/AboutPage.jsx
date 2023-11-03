import AboutMainContent from "../components/about/AboutMainContent";
import SocialsLinkIcons from "../components/features/SocialsLinkIcons";
import PageLinkIcons from "../components/features/PageLinkIcons";

const AboutPage = () => {
  return (
    <section className="section">
      <SocialsLinkIcons />
      <AboutMainContent />
      <PageLinkIcons />
    </section>
  );
};

export default AboutPage;
