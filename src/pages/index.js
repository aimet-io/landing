import { COMPANY_FULL_NAME } from "@/config";
import { IndexView } from "@/views/Index";
import Head from "next/head";

const IndexPage = () => {
  return (
    <>
      <Head>
        <title>{COMPANY_FULL_NAME} - Software Development for enterprise</title>
      </Head>
      <IndexView />
    </>
  );
};

export default IndexPage;
