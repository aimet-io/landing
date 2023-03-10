import { ServicesView } from '@/views/Service'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const ServicePage = () => {
  return (
    <ServicesView />
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default ServicePage