import {Animated} from "react-animated-css";
import ScrollAnimation from 'react-animate-on-scroll';

const CardTestimoni = ({ nama, jabatan, text }) => {
    return(
        <div className="sm:flex items-start mr-10 text-testimoni mt-5 md:mt-0">
            <div>
                <div className="text-center text-sm mb-2">
                        <a href="#" className=" font-medium leading-none text-gray-900 hover:text-indigo-600 transition duration-500 ease-in-out">
                            { nama }
                        </a>
                    </div>
                <div className="text-left text-gray-500 text-sm mb-2">
                    <p>{ jabatan }</p>
                </div>
                <div className="text-left mb-4 text-gray-500">
                    <svg height="35px" className="mb-2" fill="#5a67d8" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 32 32" xmlSpace="preserve">
                    <g>
                        <g id="right_x5F_quote">
                        <g>
                            <path d="M0,4v12h8c0,4.41-3.586,8-8,8v4c6.617,0,12-5.383,12-12V4H0z"/>
                            <path d="M20,4v12h8c0,4.41-3.586,8-8,8v4c6.617,0,12-5.383,12-12V4H20z"/>
                        </g>
                        </g>
                    </g>
                    </svg>
                    <p className="mt-2 text-base leading-6">
                        {text}
                    </p>
                </div>
            </div>
            <hr/>
    </div>
    )
}

const LayananHukum = ({ nama, text }) => {
    return (
        <div className="border-2 rounded-lg mx-2 mb-5 md:mb-0">
            <p className="text-math text-xl font-bold text-center my-2 md:mt-5">{ nama }</p>
            <p className="text-sm text-math mx-5 text-justify mb-7 mt-5 hidden md:block">{ text }</p>
        </div>
    )
}


const RingkasanKomponent = () => {
    return(
        <div>
            <div className="mx-10 mt-10 mb-10">
                <div className="border-l-4 border-green-500">
                    <p className="ml-5 text-3xl text-math font-bold mt-1">Jenis Layanan Hukum</p>
                </div>
                <div className="mt-5 mb-5">
                    Saya memiliki beberapa layanan hukum yang insyaallah ada dan sesuai dengan permasalahan Anda, namun jika tidak ada yang sesuai maka Anda bisa menceritakan atau berkonsultasi terlebih dahulu dengan menghubungi kami. dibawah ini adalah layanan hukum dari kami.
                </div>

                <ScrollAnimation animateIn="fadeIn" offset={-300} delay={200}>
                    <div className="grid md:grid-cols-2 md:mb-7">
                        <LayananHukum nama={`"Konsultasi Hukum`} 
                        text={`
                            Memberikan pengetahuan yang sesuai dengan permasalahan yang sedang dihadapi Klien sehingga Klien memiliki langkah apa yang akan dilakukan kedepannya.
                            salah satu keuntungan melakukan konsultasi hukum terlebih dahulu yaitu agar Klien tidak terjebak dengan ketidakadilan hukum maupun kejahatan oknum yang memanfaatkan situasi dari permasalahan Klien dengan memanfaatkan hukum.
                        `}/>
                        <LayananHukum nama={`"Penegakan Hukum`} 
                        text={`
                            Setalah Klien melakukan konsultasi hukum kemudian mengetahui langkah kedepannya mau apa, maka Klien bisa mengajukan penanganan Hukum Secara profesional. Cipta Law Firm menangani banyak kasus terdiri dari kasus pidana / kriminal, korupsi, tindak pidana oleh militer, perdata, hutang – piutang, penyalahgunaan narkoba, sengketa waris, perkawinan, pengesahan nikah siri, perceraian, Kekerasan Dalam Rumah Tangga (KDRT), adopsi anak,jual-beli tanah, sengketa Tata Usaha Negara (Sengketa TUN), kasus perusahaan, sengketa bisnis dan lain-lain.
                        `}/>
                    </div>
                </ScrollAnimation>

                <ScrollAnimation animateIn="fadeIn" offset={-300} delay={200}>
                    <div className="grid md:grid-cols-2 md:mb-7">
                        <LayananHukum nama={`"Perceraian`} 
                        text={`
                            Menganalisa dokumen-dokumen suatu perjanjian yang dimiliki oleh Klien kemudian disampaikan dengan bahasa yang lebih mudah dipahami oleh Klien. Setelah penganalisaan selesai maka dibuatkanlah draft suatu perjanjian yang berhubungan dengan masalah Klien
                        `}/>
                        <LayananHukum nama={`"Sengketa`} 
                        text={`
                        Memberikan Pendapat Hukum secara tertulis dan resmi, yang didahului dengan pemeriksaan hukum, sehingga dapat digunakan oleh Klien sebagai pedoman bagi Klien dalam melakukan kegiatan transaksi usaha atau suatu permasalahan yang ada hubungannya dengan hukum.
                        `}/>
                    </div>
                </ScrollAnimation>

                <ScrollAnimation animateIn="fadeIn" offset={-300} delay={200}>
                    <div className="grid md:grid-cols-2 md:mb-7">
                        <LayananHukum nama={`"Harta Gono Gini`} 
                        text={`
                            Menganalisa dokumen-dokumen suatu perjanjian yang dimiliki oleh Klien kemudian disampaikan dengan bahasa yang lebih mudah dipahami oleh Klien. Setelah penganalisaan selesai maka dibuatkanlah draft suatu perjanjian yang berhubungan dengan masalah Klien
                        `}/>
                        <LayananHukum nama={`"Hak Waris`} 
                        text={`
                        Memberikan Pendapat Hukum secara tertulis dan resmi, yang didahului dengan pemeriksaan hukum, sehingga dapat digunakan oleh Klien sebagai pedoman bagi Klien dalam melakukan kegiatan transaksi usaha atau suatu permasalahan yang ada hubungannya dengan hukum.
                        `}/>
                    </div>
                </ScrollAnimation>

                <ScrollAnimation animateIn="fadeIn" offset={-300} delay={200}>
                    <div className="grid md:grid-cols-2 md:mb-7">
                        <LayananHukum nama={`"Pembuatan dan Analisa Perjanjian`} 
                        text={`
                            Menganalisa dokumen-dokumen suatu perjanjian yang dimiliki oleh Klien kemudian disampaikan dengan bahasa yang lebih mudah dipahami oleh Klien. Setelah penganalisaan selesai maka dibuatkanlah draft suatu perjanjian yang berhubungan dengan masalah Klien
                        `}/>
                        <LayananHukum nama={`"Pendapat Hukum`} 
                        text={`
                        Memberikan Pendapat Hukum secara tertulis dan resmi, yang didahului dengan pemeriksaan hukum, sehingga dapat digunakan oleh Klien sebagai pedoman bagi Klien dalam melakukan kegiatan transaksi usaha atau suatu permasalahan yang ada hubungannya dengan hukum.
                        `}/>
                    </div>
                </ScrollAnimation>
                <hr className="my-10"/>
                
            </div>
            <div className="mx-10">
                <div className="md:flex md:gap-5">
                    <img src="subhan3.jpeg" className="w-full mb-5 md:mb-0 md:w-40"/>
                    <img src="subhan4.jpeg" className="w-full mb-5 md:mb-0 md:w-40"/>
                    <img src="subhan2.jpeg" className="w-full mb-5 md:mb-0 md:w-40"/>
                </div>
            </div>
            <div className="mx-10 mt-5 mb-10">
                <div className="border-l-4 border-green-500">
                    <p className="ml-5 text-3xl text-math font-bold mt-1">Testimoni Mereka</p>
                </div>
                <div className="mt-5 mb-5">
                    Kami melayani dengan sepenuh hati, jiwa dan raga untuk membantu client saya. Berikut adalah beberapa testimoni jujur dari client saya terhadap apa yang telah saya berikan kepada mereka.
                </div>

                <ScrollAnimation animateIn="fadeIn" offset={-300} delay={200}>
                    <div className="grid md:grid-cols-3 mb-7">
                        <CardTestimoni nama={"Ibu Diah Eka Lestari, S.Pd"} jabatan={"Guru PNS"} text={"saya sangat terbantu sekali, saya dapat bekerja dengan tenang, tapi urusan saya beres"}/>
                        <CardTestimoni nama={"Bapak Suhendar Sejagat"} jabatan={"Karyawan Swasta"} text={"pelayanan yang berkualitas, benar benar memperhatikan apa yang dibutuhkan oleh client"}/>
                        <CardTestimoni nama={"Ibu Santhika Arahan"} jabatan={"Karyawan Swasta"} text={"pelayanan yang berkualitas, benar benar memperhatikan apa yang dibutuhkan oleh client"}/>
                    </div>
                </ScrollAnimation>
                <hr className="my-10"/>
                
            </div>
            
        </div>
    )
}

export default RingkasanKomponent