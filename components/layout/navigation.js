import { useRouter } from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faInstagram, faLinkedinIn, faPinterest } from '@fortawesome/free-brands-svg-icons'
import { faFileCode, faUser } from '@fortawesome/free-regular-svg-icons'
import { faBlog, faLaptopCode, faNetworkWired } from '@fortawesome/free-solid-svg-icons'

const NavMenu = ({ router, asPath, routePath, routeName, icon }) => {
    return(
        <div className="flex ml-4 cursor-pointer mt-5" onClick={() => router.push(routePath)}>
            <div className="w-4">
                <FontAwesomeIcon icon={icon} color={asPath === routePath ? '#275941' : '#DDF0E7'} size="sm" className="my-auto"/>
            </div>
            <h1 className="text-center font-bold text-math ml-5 my-auto mt-1" style={{ color: asPath === routePath ? '#275941' : '#DDF0E7' }}>{routeName}</h1>
    </div>
    )
}

const NavigasiMenu = () => {
    const router = useRouter()
    const { asPath } = useRouter()

    return(
        <div className="pt-5 mx-5">
           <div>
               <h1 className="text-center font-bold text-4xl text-white text-math">Apriadi</h1>
               <img className="mt-5 w-40 h-40 rounded-full mx-auto" src="/apriadi.jpg"/>
               <p className="text-center text-sm mt-2 text-white text-math">
                    Hi, my name is Apriadi and I'm a junior javascript developer. welcome to my portfolio website!
               </p>
               <div className="mx-auto ml-28 mr-28 p-4 mt-4 md:ml-10 md:mr-10 grid grid-cols-4">
                    <div className="bg-white w-7 h-7 rounded-full text-center">
                        <FontAwesomeIcon icon={faFacebook} color="#54B689"/>
                    </div>
                    <div className="bg-white w-7 h-7 rounded-full text-center">
                        <FontAwesomeIcon icon={faGithub} color="#54B689"/>
                    </div>
                    <div className="bg-white w-7 h-7 rounded-full text-center">
                        <FontAwesomeIcon icon={faLinkedinIn} color="#54B689"/>
                    </div>
                    <div className="bg-white w-7 h-7 rounded-full text-center">
                        <FontAwesomeIcon icon={faInstagram} color="#54B689"/>
                    </div>
               </div>

              <div>
                    <div className="mx-5 mb-5">
                        <hr className="w-full" style={{ borderColor: '#4DA87E' }}/>
                    </div>
                    <NavMenu router={router} asPath={asPath} routePath={'/'} routeName={'About Me'} icon={faUser}/>
                    <NavMenu router={router} asPath={asPath} routePath={'/project'} routeName={'Project'} icon={faLaptopCode}/>
                    <NavMenu router={router} asPath={asPath} routePath={'/resume'} routeName={'Resume / CV'} icon={faFileCode}/>
                    <NavMenu router={router} asPath={asPath} routePath={'/service'} routeName={'Service & Pricing'} icon={faNetworkWired}/>
                    <NavMenu router={router} asPath={asPath} routePath={'/github'} routeName={'Github Activity'} icon={faGithub}/>
                    <NavMenu router={router} asPath={asPath} routePath={'/contact'} routeName={'Contact'} icon={faPinterest}/>
                    <NavMenu router={router} asPath={asPath} routePath={'/blog'} routeName={'My Blog'} icon={faBlog}/>

              </div>

              <div className="flex justify-center mt-10 mb-5">
                <button className="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-10 rounded">
                    Hire Me
                </button>
              </div>
               
           </div>
        </div>
    )
}

export default NavigasiMenu