import Head from 'next/head'
import NavigasiMenu from './navigation'
import { GlobalProvider } from '../provider/globalProvider'
import { useState } from 'react'
import {Animated} from "react-animated-css";


const Layout = ({children, props}) => {
    const [open, setOpen] = useState(false)
    return(
        <div>
            <GlobalProvider>
                <Head>
                    <title>{props.title}</title>
                    <meta name="description" content="Adv. Subhan" />
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"/>

                </Head>
                <div className="flex-none md:flex">
                    <div className="grid-cols-2 md:hidden block h-12" style={{ backgroundColor: '#54B689' }}>
                        <div className="h-12 flex">
                            <button onClick={() => setOpen(!open)} className="h-12">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 ml-2" fill="non" viewBox="0 0 24 24" stroke="white">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </button>
                            <div className="w-full h-12">
                                <h1 className="text-center h-12 text-3xl text-math mt-2 font-bold text-white mr-10">M. Subhan</h1>
                            </div>
                        </div>
                    </div>
                    <div className={`sticky top-0 hidden md:block space-x-2 space-y-2 w-full md:w-72 md:max-h-screen overflow-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch`} style={{ backgroundColor: '#54B689' }}>
                        <NavigasiMenu/>
                    </div> 
                                
                    <div className={`${open ? 'open-animation' : 'close-animation'} md:hidden space-x-2 space-y-2 w-full md:w-72 md:max-h-screen overflow-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch`} style={{ backgroundColor: '#54B689' }}>
                        <Animated animationIn="fadeInDown" animationOut="fadeOutUp" animationInDuration={1000} animationOutDuration={1000} isVisible={open}>
                           <NavigasiMenu/>
                        </Animated>
                    </div>

                    <div className="w-full md:w-full float-left">
                        { children }
                    </div>
                </div>
            </GlobalProvider>
        </div>
    )
}

export default Layout