import ContactMainContent from "../components/contact/ContactMainContent";
import AboutBGImage from "../assets/images/background-images/aboutBGImage";
// import PageLinkIcons from "../components/features/PageLinkIcons";
// import SocialsLinkIcons from "../components/features/SocialsLinkIcons";

const ContactPage = () => {
  return (
    <section className="section">
      <AboutBGImage />
      {/* <SocialsLinkIcons /> */}
      <ContactMainContent />
      {/* <PageLinkIcons /> */}
    </section>
  );
};

export default ContactPage;
