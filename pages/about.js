import { AboutView } from "@/views/About";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const AboutPage = () => {
  return <AboutView />;
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "about"])),
    },
  };
}

export default AboutPage;
