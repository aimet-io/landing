import { TeamView } from "@/views/Team";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const TeamPage = () => {
  return <TeamView />;
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "team"])),
    },
  };
}

export default TeamPage;
