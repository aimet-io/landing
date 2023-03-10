import { FaqView } from "@/views/Faq";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const FaqPage = () => {
  return <FaqView />;
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default FaqPage;
