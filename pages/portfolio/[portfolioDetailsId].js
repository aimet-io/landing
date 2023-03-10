import { fetchAPI } from "@/lib/strapi/api";
import { PortfolioDetailsView } from "@/views/PortfolioDetails";

const PortfolioDetailsPage = ({ project }) => {
  return <PortfolioDetailsView project={project} />;
};

export async function getStaticProps({ params: { portfolioDetailsId }}) {
  const projects = await fetchAPI("/portfolio-projects", {
    populate: "*",
  }).then((res) => res.data);
  
  const project = projects.find(({ attributes: { slug } }) => slug === portfolioDetailsId)

  return {
    props: { project },
    revalidate: 1,
  };
}

export async function getStaticPaths() {
  const data = await fetchAPI("/portfolio-projects").then((res) => res.data);

  const paths = data.map(({ attributes: { slug } }) => ({
    params: { portfolioDetailsId: slug },
  }));

  return {
    paths,
    fallback: false, // can also be true or 'blocking'
  };
}

export default PortfolioDetailsPage;
