import Layout from "@/components/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";

import "@/scss/index.scss";

import '@/components/Card/card.scss'
import '@/components/Cta/cta.scss'
import '@/components/CustomCursor/customcursor.scss'
import '@/components/Footer/footer.scss'
import '@/components/FunFact/funfact.scss'
import '@/components/Header/header.scss'
import '@/components/Hero/hero.scss'
import '@/components/IconBox/iconbox.scss'
import '@/components/LogoList/logolist.scss'
import '@/components/MovingText/movingtext.scss'
import '@/components/Portfolio/portfolio.scss'
import '@/components/Post/post.scss'
import '@/components/PricingTable/pricing.scss'
import '@/components/ServiceList/servicelist.scss'
import '@/components/Spacing/spacing.scss'
import '@/components/Team/team.scss'
import '@/components/Testimonial/testimonial.scss'
import '@/components/Timeline/timeline.scss'
import '@/components/VerticalLinks/vertical-links.scss'

import "@/styles/index.css";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
