import { Price, Unit } from './price'
import { Deserializable } from './deserializable'

export class Product implements Deserializable {
  id: string = ''
  name: string = ""
  category: string = ""
  description1: string = ""
  description2: string = ""
  additionalInfo: string = ""
  photo: string = ""
  prices: Price[] = new Array()
  stars: number = 0

  deserialize(input: any): this {
    Object.assign(this, input)
    this.prices = input.prices.map((price: Price) =>
      new Price().deserialize(price),
    )
    return this
  }
}

export const PRODUCTS: Product[] = [
  {
    id: 'strive-shoulder-pack-1',
    name: 'Strive Shoulder',
    photo: 'assets/img/shop/7.webp',
    category: 'nutrition',
    stars: 4,
    prices: [
      { unit: '5 Kg', amount: 105 },
      { unit: '15 Kg', amount: 225 },
    ],
    description1:
      'Others use it to take the edge off their chronic pains and aches. Insomniacs take 1-3 hits approximately an hour before bedtime to induce relaxation. They report an increase in the number of restful nights following this routine. Those suffering from bipolar disorder, depression and other mood disorders use this strain to help relax and regulate their mood. The strain is also used to increase appetite as well as ease nausea and vomiting.',
    description2:
      'Others use it to take the edge off their chronic pains and aches. Insomniacs take 1-3 hits approximately an hour before bedtime to induce relaxation. They report an increase in the number of restful nights following this routine. Those suffering from bipolar disorder, depression and other mood disorders use this strain to help relax and regulate their mood. The strain is also used to increase appetite as well as ease nausea and vomiting.',
    additionalInfo: '',
  } as Product,
  {
    id: 'rival-field-messenger-1',
    name: 'Rival Field Mixed',
    photo: 'assets/img/shop/27.webp',
    category: 'nutrition',
    stars: 4,
    prices: [
      { unit: '5 Kg', amount: 105 },
      { unit: '15 Kg', amount: 225 },
    ],
    description1:
      'Others use it to take the edge off their chronic pains and aches. Insomniacs take 1-3 hits approximately an hour before bedtime to induce relaxation. They report an increase in the number of restful nights following this routine. Those suffering from bipolar disorder, depression and other mood disorders use this strain to help relax and regulate their mood. The strain is also used to increase appetite as well as ease nausea and vomiting.',
    description2:
      'Others use it to take the edge off their chronic pains and aches. Insomniacs take 1-3 hits approximately an hour before bedtime to induce relaxation. They report an increase in the number of restful nights following this routine. Those suffering from bipolar disorder, depression and other mood disorders use this strain to help relax and regulate their mood. The strain is also used to increase appetite as well as ease nausea and vomiting.',
    additionalInfo: '',

  } as Product,
  {
    id: 'mh02-gray',
    name: 'MH02 Date',
    photo: 'assets/img/shop/5.webp',
    category: 'nutrition',
    stars: 4,
    prices: [
      { unit: '5 Kg', amount: 105 },
      { unit: '15 Kg', amount: 225 },
    ],
    description1:
      'Others use it to take the edge off their chronic pains and aches. Insomniacs take 1-3 hits approximately an hour before bedtime to induce relaxation. They report an increase in the number of restful nights following this routine. Those suffering from bipolar disorder, depression and other mood disorders use this strain to help relax and regulate their mood. The strain is also used to increase appetite as well as ease nausea and vomiting.',
    description2:
      'Others use it to take the edge off their chronic pains and aches. Insomniacs take 1-3 hits approximately an hour before bedtime to induce relaxation. They report an increase in the number of restful nights following this routine. Those suffering from bipolar disorder, depression and other mood disorders use this strain to help relax and regulate their mood. The strain is also used to increase appetite as well as ease nausea and vomiting.',
    additionalInfo: '',

  } as Product,
  {
    id: 'apricots-1',
    name: 'Apricots Abricots',
    photo: 'assets/img/shop/3.webp',
    category: 'nutrition',
    stars: 4,
    prices: [
      { unit: '5 Kg', amount: 105 },
      { unit: '15 Kg', amount: 225 },
    ],
    description1:
      'Others use it to take the edge off their chronic pains and aches. Insomniacs take 1-3 hits approximately an hour before bedtime to induce relaxation. They report an increase in the number of restful nights following this routine. Those suffering from bipolar disorder, depression and other mood disorders use this strain to help relax and regulate their mood. The strain is also used to increase appetite as well as ease nausea and vomiting.',
    description2:
      'Others use it to take the edge off their chronic pains and aches. Insomniacs take 1-3 hits approximately an hour before bedtime to induce relaxation. They report an increase in the number of restful nights following this routine. Those suffering from bipolar disorder, depression and other mood disorders use this strain to help relax and regulate their mood. The strain is also used to increase appetite as well as ease nausea and vomiting.',
    additionalInfo: '',

  } as Product,
  {
    id: 'red-and-yellow-pepper',
    name: 'Red and Yellow',
    photo: 'assets/img/shop/23.webp',
    category: 'fruit',
    stars: 4,
    prices: [
      { unit: '5 Kg', amount: 105 },
      { unit: '15 Kg', amount: 225 },
    ],
    description1:
      'Others use it to take the edge off their chronic pains and aches. Insomniacs take 1-3 hits approximately an hour before bedtime to induce relaxation. They report an increase in the number of restful nights following this routine. Those suffering from bipolar disorder, depression and other mood disorders use this strain to help relax and regulate their mood. The strain is also used to increase appetite as well as ease nausea and vomiting.',
    description2:
      'Others use it to take the edge off their chronic pains and aches. Insomniacs take 1-3 hits approximately an hour before bedtime to induce relaxation. They report an increase in the number of restful nights following this routine. Those suffering from bipolar disorder, depression and other mood disorders use this strain to help relax and regulate their mood. The strain is also used to increase appetite as well as ease nausea and vomiting.',
    additionalInfo: '',

  } as Product,
  {
    id: 'fraise-1',
    name: 'Fraise',
    photo: 'assets/img/shop/1.webp',
    category: 'fruit',
    stars: 4,
    prices: [
      { unit: '5 Kg', amount: 105 },
      { unit: '15 Kg', amount: 225 },
    ],
    description1:
      'Others use it to take the edge off their chronic pains and aches. Insomniacs take 1-3 hits approximately an hour before bedtime to induce relaxation. They report an increase in the number of restful nights following this routine. Those suffering from bipolar disorder, depression and other mood disorders use this strain to help relax and regulate their mood. The strain is also used to increase appetite as well as ease nausea and vomiting.',
    description2:
      'Others use it to take the edge off their chronic pains and aches. Insomniacs take 1-3 hits approximately an hour before bedtime to induce relaxation. They report an increase in the number of restful nights following this routine. Those suffering from bipolar disorder, depression and other mood disorders use this strain to help relax and regulate their mood. The strain is also used to increase appetite as well as ease nausea and vomiting.',
    additionalInfo: '',

  } as Product,
  {
    id: 'apple-1',
    name: 'Apple',
    photo: 'assets/img/shop/24.webp',
    category: 'fruit',
    stars: 4,
    prices: [
      { unit: '5 Kg', amount: 105 },
      { unit: '15 Kg', amount: 225 },
    ],
    description1:
      'Others use it to take the edge off their chronic pains and aches. Insomniacs take 1-3 hits approximately an hour before bedtime to induce relaxation. They report an increase in the number of restful nights following this routine. Those suffering from bipolar disorder, depression and other mood disorders use this strain to help relax and regulate their mood. The strain is also used to increase appetite as well as ease nausea and vomiting.',
    description2:
      'Others use it to take the edge off their chronic pains and aches. Insomniacs take 1-3 hits approximately an hour before bedtime to induce relaxation. They report an increase in the number of restful nights following this routine. Those suffering from bipolar disorder, depression and other mood disorders use this strain to help relax and regulate their mood. The strain is also used to increase appetite as well as ease nausea and vomiting.',
    additionalInfo: '',

  } as Product,
  {
    id: 'apple-2',
    name: 'Yellow Apple',
    photo: 'assets/img/shop/2.webp',
    category: 'fruit',
    stars: 4,
    prices: [
      { unit: '5 Kg', amount: 105 },
      { unit: '15 Kg', amount: 225 },
    ],
    description1:
      'Others use it to take the edge off their chronic pains and aches. Insomniacs take 1-3 hits approximately an hour before bedtime to induce relaxation. They report an increase in the number of restful nights following this routine. Those suffering from bipolar disorder, depression and other mood disorders use this strain to help relax and regulate their mood. The strain is also used to increase appetite as well as ease nausea and vomiting.',
    description2:
      'Others use it to take the edge off their chronic pains and aches. Insomniacs take 1-3 hits approximately an hour before bedtime to induce relaxation. They report an increase in the number of restful nights following this routine. Those suffering from bipolar disorder, depression and other mood disorders use this strain to help relax and regulate their mood. The strain is also used to increase appetite as well as ease nausea and vomiting.',
    additionalInfo: '',

  } as Product,
  {
    id: 'granada-1',
    name: 'Granada Juice',
    photo: 'assets/img/shop/6.webp',
    category: 'fruit-juice',
    stars: 4,
    prices: [
      { unit: '5 Bottles', amount: 105 },
      { unit: '15 Bottles', amount: 225 },
    ],
    description1:
      'Others use it to take the edge off their chronic pains and aches. Insomniacs take 1-3 hits approximately an hour before bedtime to induce relaxation. They report an increase in the number of restful nights following this routine. Those suffering from bipolar disorder, depression and other mood disorders use this strain to help relax and regulate their mood. The strain is also used to increase appetite as well as ease nausea and vomiting.',
    description2:
      'Others use it to take the edge off their chronic pains and aches. Insomniacs take 1-3 hits approximately an hour before bedtime to induce relaxation. They report an increase in the number of restful nights following this routine. Those suffering from bipolar disorder, depression and other mood disorders use this strain to help relax and regulate their mood. The strain is also used to increase appetite as well as ease nausea and vomiting.',
    additionalInfo: '',

  } as Product,
  {
    id: 'banana-1',
    name: 'Strawberry Banana Juice',
    photo: 'assets/img/shop/8.webp',
    category: 'fruit-juice',
    stars: 4,
    prices: [
      { unit: '5 Bottles', amount: 105 },
      { unit: '15 Bottles', amount: 225 },
    ],
    description1:
      'Others use it to take the edge off their chronic pains and aches. Insomniacs take 1-3 hits approximately an hour before bedtime to induce relaxation. They report an increase in the number of restful nights following this routine. Those suffering from bipolar disorder, depression and other mood disorders use this strain to help relax and regulate their mood. The strain is also used to increase appetite as well as ease nausea and vomiting.',
    description2:
      'Others use it to take the edge off their chronic pains and aches. Insomniacs take 1-3 hits approximately an hour before bedtime to induce relaxation. They report an increase in the number of restful nights following this routine. Those suffering from bipolar disorder, depression and other mood disorders use this strain to help relax and regulate their mood. The strain is also used to increase appetite as well as ease nausea and vomiting.',
    additionalInfo: '',

  } as Product,
  {
    id: 'mango-1',
    name: 'Mighty Mango Juice',
    photo: 'assets/img/shop/33.webp',
    category: 'fruit-juice',
    stars: 4,
    prices: [
      { unit: '5 Bottles', amount: 105 },
      { unit: '15 Bottles', amount: 225 },
    ],
    description1:
      'Others use it to take the edge off their chronic pains and aches. Insomniacs take 1-3 hits approximately an hour before bedtime to induce relaxation. They report an increase in the number of restful nights following this routine. Those suffering from bipolar disorder, depression and other mood disorders use this strain to help relax and regulate their mood. The strain is also used to increase appetite as well as ease nausea and vomiting.',
    description2:
      'Others use it to take the edge off their chronic pains and aches. Insomniacs take 1-3 hits approximately an hour before bedtime to induce relaxation. They report an increase in the number of restful nights following this routine. Those suffering from bipolar disorder, depression and other mood disorders use this strain to help relax and regulate their mood. The strain is also used to increase appetite as well as ease nausea and vomiting.',
    additionalInfo: '',

  } as Product,
  {
    id: 'passion-1',
    name: 'Passion Fruit Juice',
    photo: 'assets/img/shop/26.webp',
    category: 'fruit-juice',
    stars: 4,
    prices: [
      { unit: '5 Bottles', amount: 105 },
      { unit: '15 Bottles', amount: 225 },
    ],
    description1:
      'Others use it to take the edge off their chronic pains and aches. Insomniacs take 1-3 hits approximately an hour before bedtime to induce relaxation. They report an increase in the number of restful nights following this routine. Those suffering from bipolar disorder, depression and other mood disorders use this strain to help relax and regulate their mood. The strain is also used to increase appetite as well as ease nausea and vomiting.',
    description2:
      'Others use it to take the edge off their chronic pains and aches. Insomniacs take 1-3 hits approximately an hour before bedtime to induce relaxation. They report an increase in the number of restful nights following this routine. Those suffering from bipolar disorder, depression and other mood disorders use this strain to help relax and regulate their mood. The strain is also used to increase appetite as well as ease nausea and vomiting.',
    additionalInfo: '',

  } as Product,
  {
    id: 'ressen-1',
    name: 'Ressen Juice',
    photo: 'assets/img/shop/4.webp',
    category: 'fruit-juice',
    stars: 4,
    prices: [
      { unit: '5 Bottles', amount: 105 },
      { unit: '15 Bottles', amount: 225 },
    ],
    description1:
      'Others use it to take the edge off their chronic pains and aches. Insomniacs take 1-3 hits approximately an hour before bedtime to induce relaxation. They report an increase in the number of restful nights following this routine. Those suffering from bipolar disorder, depression and other mood disorders use this strain to help relax and regulate their mood. The strain is also used to increase appetite as well as ease nausea and vomiting.',
    description2:
      'Others use it to take the edge off their chronic pains and aches. Insomniacs take 1-3 hits approximately an hour before bedtime to induce relaxation. They report an increase in the number of restful nights following this routine. Those suffering from bipolar disorder, depression and other mood disorders use this strain to help relax and regulate their mood. The strain is also used to increase appetite as well as ease nausea and vomiting.',
    additionalInfo: '',

  } as Product,

]
