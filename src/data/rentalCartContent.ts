interface rentalCartContent {
  [name: string]: { title: string; price: number; image: string; imageTop: number; imageLeft: number }[]
}

export const rentalCartContent: rentalCartContent = {
  hookah: [
    {
      title: 'Классический',
      price: 1000,
      image: '/images/rent/hookah-1.png',
      imageTop: -42,
      imageLeft: 10
    },
    {
      title: 'Дизайнерские',
      price: 1200,
      image: '/images/rent/hookah-2.png',
      imageTop: -42,
      imageLeft: 14
    }
  ],
  bowl: [
    {
      title: 'Классическая',
      price: 200,
      image: '/images/rent/bowl-1.webp',
      imageTop: -5,
      imageLeft: 7
    },
    {
      title: 'Грейпфрут',
      price: 350,
      image: '/images/rent/bowl-2.webp',
      imageTop: 19,
      imageLeft: 11
    },
    {
      title: 'Помело',
      price: 500,
      image: '/images/rent/bowl-3.webp',
      imageTop: 10,
      imageLeft: 9
    },
    {
      title: 'Ананас',
      price: 750,
      image: '/images/rent/bowl-4.webp',
      imageTop: 12,
      imageLeft: 13
    },
    {
      title: 'Дыня',
      price: 900,
      image: '/images/rent/bowl-5.webp',
      imageTop: 12,
      imageLeft: 5
    }
  ],
  tobacco: [
    {
      title: 'Легкий',
      price: 0,
      image: '/images/rent/tobacco-1.svg',
      imageTop: -5,
      imageLeft: 11
    },
    {
      title: 'Средней крепости',
      price: 0,
      image: '/images/rent/tobacco-2.svg',
      imageTop: -5,
      imageLeft: 11
    },
    {
      title: 'Крепкий',
      price: 0,
      image: '/images/rent/tobacco-3.svg',
      imageTop: -5,
      imageLeft: 11
    }
  ],
  taste: [
    {
      title: 'Сладкий',
      price: 0,
      image: '/images/rent/taste-1.webp',
      imageTop: 1,
      imageLeft: -23
    },
    {
      title: 'Свежий',
      price: 0,
      image: '/images/rent/taste-2.webp',
      imageTop: 1,
      imageLeft: -8
    },
    {
      title: 'Свеже-сладкий',
      price: 0,
      image: '/images/rent/taste-3.webp',
      imageTop: 9,
      imageLeft: -12
    },
    {
      title: 'Цитрус',
      price: 0,
      image: '/images/rent/taste-4.webp',
      imageTop: 9,
      imageLeft: -14
    },
    {
      title: 'Кислый',
      price: 0,
      image: '/images/rent/taste-5.webp',
      imageTop: 10,
      imageLeft: 5
    }
  ],
  extra: [
    {
      title: 'Вода',
      price: 0,
      image: '/images/rent/extra-1.webp',
      imageTop: -1,
      imageLeft: -7
    },
    {
      title: 'Молоко',
      price: 150,
      image: '/images/rent/extra-2.webp',
      imageTop: -5,
      imageLeft: 18
    },
    {
      title: 'Махито (Лайм+Мята)',
      price: 250,
      image: '/images/rent/extra-3.webp',
      imageTop: -5,
      imageLeft: 10
    },
    {
      title: 'Кока-кола',
      price: 150,
      image: '/images/rent/extra-4.webp',
      imageTop: -12,
      imageLeft: 19
    },
    {
      title: 'Сок',
      price: 200,
      image: '/images/rent/extra-5.webp',
      imageTop: -5,
      imageLeft: 12
    }
  ]
}
