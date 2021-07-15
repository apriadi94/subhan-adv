import Head from 'next/head'
import NavigasiMenu from './navigation'

const Layout = ({children, props}) => {
    return(
        <div>
            <Head>
                <title>{props.title}</title>
                <meta name="description" content="Portfolio Apriadi, S.Si" />
            </Head>
            <div className="flex">
                <NavigasiMenu/>
                { children }
            </div>
        </div>
    )
}

export default Layout