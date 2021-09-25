
const HeaderComponent = () => {
    return(
        <div className="grid md:grid-cols-5">
            <div className="md:col-span-3 mx-10 mt-5 md:mt-5">
                <div className="hidden md:block">
                    <div className="flex">
                        <div>
                            <h1 className="text-5xl font-bold text-math mt-5 mr-10">M. Subhan, S.H</h1>
                            <p className="mt-0 text-math text-gray-600 text-2xl">Advokat dan Konsultan Hukum</p>
                        </div>
                        <img src="/paham.jpeg" className="w-1/3 h-20 mt-5 ml-10"/>
                    </div>
                </div>
                <div className="md:hidden">
                    <img src="/paham.jpeg" className="w-full h-30 mt-5" style={{ marginTop: -5 }}/>
                </div>
                <p className="mt-5 text-math text-justify md:text-left">
                    Memberikan konsultasi hukum, bantuan hukum, menjalankan kuasa, mewakili, mendampingi, membela, dan melakukan tindakan hukum atau upaya hukum lain untuk kepentingan hukum klien, dengan berperilaku baik, jujur, bertanggung jawab, adil, dan mempunyai integritas tinggi dalam profesional.
                </p>
                <div className="flex">
                    <p className="text-math text-sm mt-5 md:mt-10 w-40">Nomor Handphone</p>
                    <p className="text-math text-sm mt-5 md:mt-10 font-extrabold">: 0852-4950-0262</p>
                </div>
                <div className="flex mb-7 md:mb-0">
                    <p className="text-math text-sm w-40">Alamat Email</p>
                    <p className="text-math text-sm font-extrabold">: adv.subhan@gmail.com</p>
                </div>
                {/* <div className="flex mt-5 md:mt-10 gap-5 mb-5">
                    <button className="text-xs md:text-base bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-10 rounded">Pelayanan</button>
                    <button className="text-xs md:text-base bg-gray-600 hover:bg-gray-800 text-white font-bold py-2 px-10 rounded">Client Kami</button>
                </div> */}
            </div>
            <div className="md:col-span-2 mx-10 md:my-10">
                <img src="/subhan-kanan.jpeg" className="w-full rounded-xl h-72"/>
            </div>
        </div>
    )
}

export default HeaderComponent