import Head from 'next/head'
import NavigasiMenu from './navigation'

const Layout = ({children, props}) => {
    return(
        <div>
            <Head>
                <title>{props.title}</title>
                <meta name="description" content="Portfolio Apriadi, S.Si" />
            </Head>
            <div className="flex-none md:flex">
                <div className="w-full md:w-80" style={{ backgroundColor: '#54B689'}}>
                    <NavigasiMenu/>
                </div>
                <div className="w-full md:w-auto">
                    { children }
                </div>
            </div>
        </div>
    )
}

export default Layout