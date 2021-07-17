import {Animated} from "react-animated-css";
import ScrollAnimation from 'react-animate-on-scroll';

const CardSkill = ({img, name, text, width = "25px", height = "25px"}) => {
    return(
        <div>
            <div className="flex gap-3">
            {
                img.map((list, index) => 
                    <img key={index} width={width} src={list} className="rounded-sm" style={{ height }}/>
                )
            }
            </div>
            <p className="mt-1 text-math font-bold">{name}</p>
            <p className="mt-1 text-sm text-math">{text}</p>
        </div>
    )
}


const RingkasanKomponent = () => {
    
    
    return(
        <div className="mx-10 mt-10">
            <div className="border-l-4 border-green-500">
                <p className="ml-5 text-3xl text-math font-bold mt-1">What I Do?</p>
            </div>
            <div className="mt-5">
                I have more than 7 years in my learning and work experience of more than 3 years, and sometimes i receive some external projects personally. I keep learning about anythink that helpful to my project. Big Thanks to Allah, that give me chance to became a part of software house industrion. below, I try to summarize what I've been doing
            </div>

            <ScrollAnimation animateIn="fadeIn" offset={-300} delay={200}>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 mb-10">
                    <CardSkill name="Javascript & TypeScript" img={["/js.png","/ts.png"]} text="Currently almost all my project built with javascript, but if my project is big scale and i will make many updates with it, or i work with team, then i use typescript."/>
                    <CardSkill name="NodeJs & DenoJs" img={["/node.png","/deno.svg"]} text="I ever yet use Deno JS for my project, all of them used Node JS or PHP. but i know Deno JS will rising and became the future of javascript or typescript."/>
                    <CardSkill name="PHP" img={["/php.png"]} text="I used to really study hard for this, I wake up at night, try to stay awake, and believe I can do it. I'm self-taught on all that, thanks to internet, and people that shared their skill"/>
                    <CardSkill name="Ruby & Rails" img={["/ruby.png"]} text="Sometime, i don't have tasks, i don't have project. so i try to learning this beautiful programming language. it is so clean, clearly and  also oop, but i dont have any project with it."/>
                </div>
            </ScrollAnimation>

            <ScrollAnimation animateIn="fadeIn" offset={-300} delay={200}>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 mb-10">
                    <CardSkill name="ExpressJS & NestJs" img={["/express.png","/nest.png"]} width="80px" text="Express for fast project and work without hard rule, and Nest for big project with clearly rule, readable for other people, and easy for the scale up."/>
                    <CardSkill name="ReactJS & React Native" img={["react.png"]} text="Good decision that i used to choose react for my front-end, it's easy, even i cant built android app with it. Also thanks to hooks that make react more simple to use."/>
                    <CardSkill name="Next JS for React" img={["next.jpeg"]} text="For my web app that necessary SSR, like SEO and public app, i use this framework. Besides SSR, i was also helped by the ease of creating routes."/>
                    <CardSkill name="Laravel & CodeIgniter" img={["laravel.png", "codeigniter.png"]} text="When i was using PHP, i used CodeIgniter for my fullstack app, and when i was starting to use API, i using Laravel."/>
                </div>
            </ScrollAnimation>

            <ScrollAnimation animateIn="fadeIn" offset={-300} delay={200}>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 mb-10">
                    <CardSkill name="Mysql & Postgre" img={["/mysql.png","/postgre.svg"]} text="Mysql cannot use type data like object, so i often manipulate data for make json data for data group, that's make me choose PostgreSql, i can store object for group data."/>
                    <CardSkill name="Mongoose for MongoDB" img={["/mongodb.png"]} text="MongoDB store data with json format, and i often use none json database like mysql to make json, it's funny, so i starting use MongoDB, with Mongoose which ORM for MongoDB"/>
                    <CardSkill name="Realm" img={["/realm.png"]} text="Make use of MongoDB, Realm like MongoDB, even Realm can build offline app without BackEnd API, i use Realm when i development an android app that used for no internet connection data."/>
                    <CardSkill name="Firebase" img={["/firebase.png"]} text="Sometime my client wants a feature like google authentication or phone authentication, then i use firebase, sometime when i build small app, i use firestore or reltime database from firebase ."/>
                </div>
            </ScrollAnimation>
            

            <ScrollAnimation animateIn="fadeIn" offset={-300} delay={200}>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 mb-10">
                    <CardSkill name="Bootstrap & Tailwind" img={["/bootstrap.png", "/tailwind.png"]} width="30px" text="I mostly use bootstrap for design, and recently I used tailwind for design. I think I should  be master of both, but now tailwind is stronger than before."/>
                    <CardSkill name="Git, Github, Gitlab" img={["/git.png","/github.png", "/gitlab.png"]} text="Very Important for programmer to know this technology, back to the past, cancel a feature, joining some features to one branch, very easy collaborate with team."/>
                    <CardSkill name="Docker & CI/CD Concept" img={["/docker.png","/ci-cd.png"]} width="70px" text="if clients server not compatible with my feature use docker, if not used linux use docker, no more reason for not compatible, and use docker for CI-CD my app."/>
                    <CardSkill name="Socket & WebRTC" img={["/socket.png", "/webrtc.png"]} text="Realtime apps needs triggers, and i use socket.io for give triggers to client. Even i use socket.io for my webRTC apps, its very difficult to learn webRTC, especially in android, but now i can handle it."/>
                </div>
            </ScrollAnimation>

            
        </div>
    )
}

export default RingkasanKomponent