import { useState, useEffect, useCallback } from 'react'
import QueueAnim from 'rc-queue-anim';
import axios from 'axios'

const ProjectListComponent = () => {
    const [active, setActive] = useState('all')
    const [projects, setProjects] = useState([])
    const [loading, setLoading] = useState(true)

    const fetchProjects = useCallback(async () => {
        setProjects([])
        await axios({
            method: 'get',
            url : 'http://localhost:3000/api/project',
            headers: {
                Accept : 'aplication/json'
            }
        }).then(res => {
            if(active === 'all'){
                setProjects(res.data)
            }
            if(active === 'android'){
                setProjects(res.data.filter(project => project.type === 'android'))
            }
            if(active === 'web'){
                setProjects(res.data.filter(project => project.type === 'web'))
            }
        })
        setLoading(false)
    }, [active])
    
    useEffect(() => {
        fetchProjects()
    }, [fetchProjects])

    return(
        <div className="mt-12">
            <div className="grid grid-cols-3  mx-auto w-96">
                <p onClick={() => setActive('all')} className={`cursor-pointer hover:text-gray-800 text-center font-bold text-math text-gray-500 text-sm ${active === 'all' ? 'border-b-4' : null}`}>All</p>
                <p onClick={() => setActive('web')} className={`cursor-pointer hover:text-gray-800 text-center font-bold text-math text-gray-500 text-sm ${active === 'web' ? 'border-b-4' : null}`}>Web App</p>
                <p onClick={() => setActive('android')}  className={`cursor-pointer hover:text-gray-800 text-center font-bold text-math text-gray-500 text-sm ${active === 'android' ? 'border-b-4' : null}`}>Android App</p>
            </div>
            <div>
                <QueueAnim  className="lg:grid grid-cols-2 p-10 mx-11 mt-5 lg:mx-0 gap-4"
                 type="bottom"
                 interval={[100, 0]}
                 duration={[130, 0]}
                >
                {
                    projects.map((project, index) => 
                            <div key={project.id} className="lg:flex mt-5 lg:mt-0 bg-gray-100 rounded-sm duration-500 hover:bg-gray-300">
                                <img src={project.imageUrl} className="w-full h-52 lg:h-full lg:w-40 rounded-sm"/>
                                <div className="grid mx-2 lg:ml-10 mt-3">
                                    <div>
                                        <h1 className="text-math text-xl font-bold underline">{project.title}</h1>
                                        <p className="text-xs mt-1 text-gray-500 text-math line-clamp">
                                            {project.text}
                                        </p>
                                    </div>
                                    <div>
                                        <span className="text-xs inline-block align-text-bottom text-math text-gray-600">{`Tech: ${project.tech}`}</span>
                                    </div>
                                </div>
                            </div>
                    )
                }
                </QueueAnim>
            </div>
        </div>
    )
}

export default ProjectListComponent