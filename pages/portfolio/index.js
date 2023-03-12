import { PortfolioView } from "@/views/Portfolio";
import { fetchAPI } from "@/lib/strapi/api";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { useTranslation } from "next-i18next";

const PortfolioPage = () => {
  const { t } = useTranslation("portfolio");
  return (
    <>
      <Head>
        <title>{t("metaTitle")}</title>
      </Head>
      <PortfolioView />
    </>
  );
};

export async function getStaticProps({ locale }) {
  const portfolioProjects = await fetchAPI("/portfolio-projects", {
    populate: "*",
  }).then((res) => res.data);

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "portfolio"])),
      initialData: { portfolioProjects },
    },
    // revalidate: 300,
  };
}

export default PortfolioPage;
