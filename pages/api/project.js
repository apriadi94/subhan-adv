// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    const data = [
        {
            id: 1,
            title: 'My Android',
            imageUrl: '/ts.png',
            type: 'android',
            text: 'helps in managing budgets, planning expenses, and knowing the number of items purchased in a certain period, and we can make shopping notes, helps in managing budgets, planning expenses, and knowing the number of items purchased in a certain period, and we can make shopping notes',
            tech: 'React Native, NodeJS, ExpressJS, WebRTC, SocketIO'
        },
        {
            id: 2,
            title: 'My Website',
            imageUrl: '/ts.png',
            type: 'web',
            text: 'helps in managing budgets, planning expenses, and knowing the number of items purchased in a certain period, and we can make shopping notes',
            tech: 'React Native, NodeJS, ExpressJS, WebRTC, SocketIO'
        },
        {
            id: 3,
            title: 'My Website',
            imageUrl: '/ts.png',
            type: 'web',
            text: 'helps in managing budgets, planning expenses, and knowing the number of items purchased in a certain period, and we can make shopping notes',
            tech: 'React Native, NodeJS, ExpressJS, WebRTC, SocketIO'
        },
        {
            id: 4,
            title: 'My Website',
            imageUrl: '/ts.png',
            type: 'web',
            text: 'helps in managing budgets, planning expenses, and knowing the number of items purchased in a certain period, and we can make shopping notes',
            tech: 'React Native, NodeJS, ExpressJS, WebRTC, SocketIO'
        },
    ]

    res.status(200).send(data)
  }
  