import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faMailBulk, faGlobe, faMapPin } from '@fortawesome/free-solid-svg-icons'

const ResumeComponent = () => {
    return(
        <div className="mx-10 lg:mx-20 mt-12 shadow-2xl top">
            <div className="grid lg:grid-cols-8 mb-4">
                <div className="xl:col-span-6 lg:col-span-5">
                    <div className="ml-10 mt-10">
                        <h1 className="text-5xl font-bold text-900 text-green-500">M. SUBHAN. S.H</h1>
                        <p className="mt-3 text-gray-500 text-2xl font-thin">Junior Javascript Developer</p>
                    </div>
                </div>
                <div className="xl:col-span-2 lg:col-span-3 xl:border-l-2 lg:border-l-2 mt-10 text-math text-gray-500">
                    <div className="flex ml-5">
                        <FontAwesomeIcon icon={faPhone} className="h-3 w-3 bg-gray-500 p-0.5 rounded-sm text-white mt-1 mr-5"/>
                        <p>0821 4899 1680</p>
                    </div>
                    <div className="flex ml-5">
                        <FontAwesomeIcon icon={faMailBulk} className="h-3 w-3 bg-gray-500 p-0.5 rounded-sm text-white mt-1 mr-5"/>
                        <p>adv.subhan@gmail.com</p>
                    </div>
                    <div className="flex ml-5">
                        <FontAwesomeIcon icon={faGlobe} className="h-3 w-3 bg-gray-500 p-0.5 rounded-sm text-white mt-1 mr-5"/>
                        <p>www.adv-subhan.com</p>
                    </div>
                    <div className="flex ml-5">
                        <FontAwesomeIcon icon={faMapPin} className="h-3 w-3 bg-gray-500 p-0.5 rounded-sm text-white mt-1 mr-5"/>
                        <p>Kalsel</p>
                    </div>
                </div>
            </div>
            <div className="border-b-2 mx-5 lg:mx-10"></div>
            <div className="md:flex md:mx-5 lg:mx-10 mt-5">
                <img src="/subhan6.jpeg" className="w-28 h-28 rounded-full mx-auto mb-5"/>
                <p className="mx-10 text-math text-sm text-gray-600">
                    Summarise your career here. You can make a PDF version of your resume using our free Sketch template here. Donec quam felis, ultricies nec, pellentesque eu. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh.
                </p>
            </div>
            <div className="border-b-2 mx-5 lg:mx-10 mb-5"></div>
            <div className="grid lg:grid-cols-8 mb-4">
                <div className="xl:col-span-6 lg:col-span-5">
                    <div className="border-l-8 border-green-500 ml-10">
                        <p className="ml-3 text-base text-math mt-1 font-thin text-green-600">WORK EXPERIENCES</p>
                    </div>
                    <div className="ml-10 mt-5">
                        <div>
                            <div className="grid lg:grid-cols-9">
                                <div className="col-span-6">
                                    <p className="font-semibold text-math">Anggota Advokat Bersatu Indonesia</p>
                                </div>
                                <div className="col-span-3">
                                    <p className="text-xs text-gray-600 mt-1 text-math text-right mr-2">Perkumpulan Advokat | 2021 - Present</p>
                                </div>
                            </div>
                            <div>
                                <p className="text-sm mt-2 text-justify mr-5 text-math text-gray-700">Role description goes here ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Donec pede justo, fringilla vel. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis.</p>
                                <ul className="list-disc text-math ml-10 mt-2 text-sm text-gray-700">
                                    <li>Menghadiri pertemuan advokat se-Indonesia</li>
                                    <li>Diskusi penting bersama para pejabat pemerintah pusat</li>
                                </ul>
                            </div>
                        </div>
                    </div>


                    <div className="ml-10 mt-5">
                        <div>
                            <div className="grid lg:grid-cols-9">
                                <div className="col-span-6">
                                    <p className="font-semibold text-math">Fullstack Programmer</p>
                                </div>
                                <div className="col-span-3">
                                    <p className="text-xs text-gray-600 mt-1 text-math text-right mr-2">CV. Twincom | 2020 - 2021</p>
                                </div>
                            </div>
                            <div>
                                <p className="text-sm mt-2 text-justify mr-5 text-math text-gray-700">Role description goes here ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Donec pede justo, fringilla vel. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis.</p>
                                <ul className="list-disc text-math ml-10 mt-2 text-sm text-gray-700">
                                    <li>Development Software</li>
                                    <li>Learn New Technology</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="ml-10 mt-5">
                        <div>
                            <div className="grid lg:grid-cols-9">
                                <div className="col-span-6">
                                    <p className="font-semibold text-math">IT Staff & Programmer</p>
                                </div>
                                <div className="col-span-3">
                                    <p className="text-xs text-gray-600 mt-1 text-math text-right mr-2">Pengadilan Agama Kotabaru | 2018 - 2020</p>
                                </div>
                            </div>
                            <div>
                                <p className="text-sm mt-2 text-justify mr-5 text-math text-gray-700">Role description goes here ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Donec pede justo, fringilla vel. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis.</p>
                                <ul className="list-disc text-math ml-10 mt-2 text-sm text-gray-700">
                                    <li>Development Software</li>
                                    <li>Learn New Technology</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-2 lg:col-span-3 xl:border-l-2 lg:border-l-2  text-math text-gray-500">
                    <div className="border-l-8 border-green-500 ml-5">
                        <p className="ml-3 text-base text-math mt-1 font-thin text-green-600">SKILLS</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResumeComponent