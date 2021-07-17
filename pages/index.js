import Layout from "../components/layout"
import HeaderComponent from "../components/page/home/HeaderComponent"
import RingkasanKomponent from "../components/page/home/RingkasanKomponent"

export default function Home() {
  return (
    <Layout props={{ title: 'Apriadi - Web & Android Development' }}>
      <div className="bg-gray-100">
        <HeaderComponent/>
      </div>
      <RingkasanKomponent/>
    </Layout>
  )
}
