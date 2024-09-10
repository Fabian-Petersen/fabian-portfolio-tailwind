import SectionHeading from "../features/SectionHeadings";
// import ContactCards from "./ContactCards";
import ContactForm from "./ContactForm";
import CardFlowbite from "./CardFlowbite";

const ContactMainContent = () => {
  return (
    <main className="w-screen">
      <SectionHeading title="Contact Me" />
      <div className="grid grid-cols-2 border-2 border-blue-700">
        <CardFlowbite />
        {/* <ContactCards /> */}
        <ContactForm />
      </div>
    </main>
  );
};

export default ContactMainContent;
