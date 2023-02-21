import About from '@/@about/components/About'
import Footer from '@/@footer/components/Footer'
import Projects from '@/@projects/components/Projects'
import Service from '@/@service/Service'
import Layout from '@/layouts/Layout'
import ViewMain from '@/views/ViewMain'

export default function Home() {
  return (
    <>
      <Layout>
        <ViewMain />
        <Projects />
        <About />
        <Service />
        <Footer />
      </Layout>
    </>
  )
}
