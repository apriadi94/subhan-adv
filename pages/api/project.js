// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    const data = [
        {
            id: 1,
            title: '20/Pdt.G/2021/PA.Ktb',
            imageUrl: '/ms1.jpg',
            type: 'perdata',
            text: 'Kasus perceraian antara seorang ibu rumah tangga yang sudah ditinggal lama oleh suami',
            tech: 'Perkara Gugatan Cerai, Ditinggal Suami'
        },
        {
            id: 2,
            title: '1/Pdt.P/2021/PA.Ktb',
            imageUrl: '/dispensasi.png',
            type: 'perdata',
            text: 'Permohonan izin pernikahan dibawah umur, karena calon perempuan sudah tidak memiliki wali kandung',
            tech: 'Perkara Permohonan, Dispensasi nikah, izin pernikahan dibawah umur'
        },
        {
            id: 3,
            title: '30/Pdt.G/2021/PA.Ktb',
            imageUrl: '/mediasi2.jpg',
            type: 'perdata',
            text: 'Gugatan ahli waris terhadap salah satu pihak yang menguasai harta yang harusnya dibagikan secara adil',
            tech: 'Perkara Gugatan Waris, Pembagian Waris'
        },
        {
            id: 4,
            title: '21/Pdt.G/2021/PA.Ktb',
            imageUrl: '/cerai.png',
            type: 'perdata',
            text: 'helps in managing budgets, planning expenses, and knowing the number of items purchased in a certain period, and we can make shopping notes',
            tech: 'React Native, NodeJS, ExpressJS, WebRTC, SocketIO'
        },
        {
            id: 5,
            title: '1/PDT.G/2013/PN.KTB',
            imageUrl: '/tanah.png',
            type: 'pidana',
            text: 'kasus pengalihan kepemilkan lahan tanpa proses hukum dan administrasi yang jelas',
            tech: 'Sengketa Tanah'
        },
        {
            id: 6,
            title: '1/PDT.G/2016/PN KTB',
            imageUrl: '/pidana.png',
            type: 'pidana',
            text: 'helps in managing budgets, planning expenses, and knowing the number of items purchased in a certain period, and we can make shopping notes',
            tech: 'Perbuatan Melawan Hukum'
        },
        {
            id: 7,
            title: '1/PDT.G/2016/PN KTB',
            imageUrl: '/cerai.png',
            type: 'perdata',
            text: 'Kasus perceraian antara seorang ibu rumah tangga yang sudah ditinggal lama oleh suami',
            tech: 'Perkara Gugatan Cerai, Ditinggal Suami'
        },
        {
            id: 8,
            title: '1/PDT.G/2016/PN KTB',
            imageUrl: '/cerai.png',
            type: 'perdata',
            text: 'helps in managing budgets, planning expenses, and knowing the number of items purchased in a certain period, and we can make shopping notes',
            tech: 'React Native, NodeJS, ExpressJS, WebRTC, SocketIO'
        },
        
    ]

    res.status(200).send(data)
  }
  