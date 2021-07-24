
const HeaderComponent = () => {
    return(
        <div className="grid md:grid-cols-5">
            <div className="md:col-span-3 mx-10 mt-5 md:mt-14">
                <h1 className="text-5xl font-bold text-math">Apriadi</h1>
                <p className="mt-3 text-math text-gray-600 text-2xl">Junior Javascript Developer</p>
                <p className="mt-5 text-math text-justify md:text-left">
                    I'm a junior javasript developer specialised in frontend and backend development for complex scalable web and android apps. I write about software development on my blog. Want to know how I may help your project? Check out my project portfolio and online resume.
                </p>
                <div className="flex mt-5 md:mt-14 gap-5 mb-5">
                    <button className="text-xs md:text-base bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-10 rounded">My Resume</button>
                    <button className="text-xs md:text-base bg-gray-600 hover:bg-gray-800 text-white font-bold py-2 px-10 rounded">My Projects</button>
                </div>
            </div>
            <div className="md:col-span-2 mx-10 md:my-10">
                <img src="/apriadi2.jpg" className="w-full rounded-xl"/>
            </div>
        </div>
    )
}

export default HeaderComponent