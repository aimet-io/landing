import { fetchAPI } from "@/lib/strapi/api";
import { PortfolioDetailsView } from "@/views/PortfolioDetails";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const PortfolioDetailsPage = ({ project }) => {
  return <PortfolioDetailsView project={project} />;
};

export async function getStaticProps({ params: { portfolioDetailsId } }) {
  const projects = await fetchAPI("/portfolio-projects", {
    populate: "*",
  }).then((res) => res.data);

  const project = projects.find(
    ({ attributes: { slug } }) => slug === portfolioDetailsId
  );

  return {
    props: { 
      ...(await serverSideTranslations(locale, ["common"])),
      project
    },
    // revalidate: 1,
  };
}

export async function getStaticPaths() {
  const data = await fetchAPI("/portfolio-projects").then((res) => res.data);

  // esperar soporte de internazionalization en Strapi
  // (https://docs.strapi.io/dev-docs/plugins/i18n)

  const paths = data
    .map(({ attributes: { slug } }) => [
      {
        params: { portfolioDetailsId: slug },
        locale: "en",
      },
      {
        params: { portfolioDetailsId: slug },
        locale: "es",
      },
    ])
    .flat();

  return {
    paths,
    fallback: false, // can also be true or 'blocking'
  };
}

export default PortfolioDetailsPage;
