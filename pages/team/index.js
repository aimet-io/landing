import { TeamView } from "@/views/Team";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Head from "next/head";

const TeamPage = () => {
  const { t } = useTranslation("team");
  return (
    <>
      <Head>
        <title>{t("metaTitle")}</title>
      </Head>
      <TeamView />
    </>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "team"])),
    },
  };
}

export default TeamPage;
