import Layout from "../components/layout"
import HeaderComponent from "../components/page/home/HeaderComponent"
import RingkasanKomponent from "../components/page/home/RingkasanKomponent"

export default function Home() {
  return (
    <Layout props={{ title: 'Advokat Subhan - Konsultan Hukum' }}>
      <div className="bg-gray-100">
        <HeaderComponent/>
      </div>
      <RingkasanKomponent/>
    </Layout>
  )
}
