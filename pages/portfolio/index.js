import { PortfolioView } from "@/views/Portfolio";
import { fetchAPI } from "@/lib/strapi/api";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const PortfolioPage = () => {
  return <PortfolioView />;
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
    revalidate: 1,
  };
}

export default PortfolioPage;
