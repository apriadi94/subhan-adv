import Layout from "../../components/layout"
import HeaderComponent from "../../components/page/resume/HeaderComponent"
import ResumeComponent from "../../components/page/resume/ResumeComponent"

export default function Resume() {
  return (
    <Layout props={{ title: 'Resume / CV Apriadi - Web & Android Development' }}>
      <div className="bg-gray-100">
        <HeaderComponent/>
      </div>
      <ResumeComponent/>
    </Layout>
  )
}
