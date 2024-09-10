import ContactMainContent from "../components/contact/ContactMainContent";
import AboutBGImage from "../assets/images/background-images/aboutBGImage";
// import PageLinkIcons from "../components/features/PageLinkIcons";
// import SocialsLinkIcons from "../components/features/SocialsLinkIcons";

const ContactPage = () => {
  return (
    <section className="relative grid grid-cols-[10%_80%_10%] h-[var(--sectionHeight)] mt-[var(--navbarHeight)] col-start-2 bg-bgLight dark:bg-bgDark dark:text-white overflow-y-auto border-2 border-red-500">
      <AboutBGImage />
      <ContactMainContent />
    </section>
  );
};

export default ContactPage;
