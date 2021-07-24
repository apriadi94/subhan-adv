import Layout from "../../components/layout"
import HeaderComponent from '../../components/page/project/HeaderComponent'
import ProjectListComponent from '../../components/page/project/ProjectListComponent'

export default function Project() {
  return (
    <Layout props={{ title: 'My Project Apriadi - Web & Android Development' }}>
      <div className="bg-gray-100">
        <HeaderComponent/>
      </div>
      <ProjectListComponent/>
    </Layout>
  )
}
