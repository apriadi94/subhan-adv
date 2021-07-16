import Head from 'next/head'
import NavigasiMenu from './navigation'
import { GlobalProvider } from '../provider/globalProvider'

const Layout = ({children, props}) => {
    return(
        <div>
            <GlobalProvider>
                <Head>
                    <title>{props.title}</title>
                    <meta name="description" content="Portfolio Apriadi, S.Si" />
                </Head>
                <div className="flex-none md:flex">
                    <div className="w-full md:w-72 max-h-screen overflow-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch" style={{ backgroundColor: '#54B689'}}>
                        <NavigasiMenu/>
                    </div>
                    <div className="w-full md:w-auto">
                        { children }
                    </div>
                </div>
            </GlobalProvider>
        </div>
    )
}

export default Layout