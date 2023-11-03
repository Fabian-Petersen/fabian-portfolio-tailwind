import ContactMainContent from "../components/contact/ContactMainContent";
import PageLinkIcons from "../components/features/PageLinkIcons";
import SocialsLinkIcons from "../components/features/SocialsLinkIcons";

const ContactPage = () => {
  return (
    <div className="relative section">
      <SocialsLinkIcons />
      <ContactMainContent />
      <PageLinkIcons />
    </div>
  );
};

export default ContactPage;
