import { AboutView } from "@/views/About";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Head from "next/head";

const AboutPage = () => {
  const { t } = useTranslation("about")
  return (
    <>
      <Head>
        <title>{t("metaTitle")}</title>
      </Head>
      <AboutView />
    </>
  )
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "about"])),
    },
  };
}

export default AboutPage;
