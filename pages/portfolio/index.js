import { PortfolioView } from "@/views/Portfolio";
import { fetchAPI } from "@/lib/strapi/api";

const PortfolioPage = ({ projects }) => {
  return <PortfolioView projects={projects} />;
};

export async function getStaticProps() {
  const projects = await fetchAPI("/portfolio-projects", {
    populate: "*",
  }).then((res) => res.data);

  return {
    props: { projects },
    revalidate: 1,
  };
}

export default PortfolioPage;
