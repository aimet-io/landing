import { ContactView } from "@/views/Contact";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const ContactPage = () => {
  return <ContactView />;
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "contact"])),
    },
    // // revalidate: 1,
  };
}

export default ContactPage;
