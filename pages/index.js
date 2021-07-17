import Layout from "../components/layout"
import HeaderComponent from "../components/page/home/HeaderComponent"

export default function Home() {
  return (
    <Layout props={{ title: 'Apriadi - Web & Android Development' }}>
      <div className="bg-gray-100">
        <HeaderComponent/>
      </div>
    </Layout>
  )
}
