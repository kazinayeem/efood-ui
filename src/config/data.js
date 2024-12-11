export const foodItems = [
  {
    id: 1,
    name: 'Pepperoni Pizza',
    category: 'Pizza',
    description:
      'Classic pizza topped with pepperoni, mozzarella, and tomato sauce.',
    price: 12.99,
    rating: 4.5,
    image:
      'https://img.freepik.com/free-photo/real-food-pyramid-assortment-top-view_23-2150238927.jpg', // Valid Link
  },
  {
    id: 2,
    name: 'Margherita Pizza',
    category: 'Pizza',
    description:
      'Traditional Margherita with fresh mozzarella, basil, and olive oil.',
    price: 10.99,
    rating: 4.8,
    image: 'https://i.ibb.co.com/N720QM5/pngegg-6.png', // Valid Link
  },
  {
    id: 3,
    name: 'BBQ Chicken Pizza',
    category: 'Pizza',
    description: 'Pizza topped with BBQ chicken, red onions, and cilantro.',
    price: 13.99,
    rating: 4.7,
    image:
      'https://i.ibb.co.com/XLzYDM5/Pngtree-sausage-cheese-pizza-slice-three-dimensional-13137250.png', // Valid Link
  },
  {
    id: 4,
    name: 'Cheeseburger',
    category: 'Burgers',
    description:
      'Juicy beef patty with melted cheese, lettuce, tomato, and mayo.',
    price: 8.99,
    rating: 4.3,
    image: 'https://i.ibb.co.com/tzbm7Sr/pngegg-5.png', // Valid Link
  },
  {
    id: 5,
    name: 'Veggie Burger',
    category: 'Burgers',
    description: 'Delicious veggie patty with fresh vegetables and vegan mayo.',
    price: 7.99,
    rating: 4.6,
    image: 'https://i.ibb.co.com/tzbm7Sr/pngegg-5.png', // Valid Link
  },
  {
    id: 6,
    name: 'Coca-Cola',
    category: 'Drinks',
    description: 'Chilled can of Coca-Cola.',
    price: 1.99,
    rating: 4.2,
    image: 'https://i.ibb.co.com/37ThxqR/pngegg-7.png', // Valid Link
  },
  {
    id: 7,
    name: 'Fresh Orange Juice',
    category: 'Drinks',
    description: 'Freshly squeezed orange juice, no sugar added.',
    price: 3.99,
    rating: 4.9,
    image: 'https://i.ibb.co.com/N720QM5/pngegg-6.png', // Replaced with valid link
  },
  {
    id: 8,
    name: 'Chocolate Cake',
    category: 'Desserts',
    description: 'Rich and moist chocolate cake topped with ganache.',
    price: 5.99,
    rating: 4.8,
    image:
      'https://i.ibb.co.com/XLzYDM5/Pngtree-sausage-cheese-pizza-slice-three-dimensional-13137250.png', // Replaced with valid link
  },
  {
    id: 9,
    name: 'Vanilla Ice Cream',
    category: 'Desserts',
    description: 'Creamy vanilla ice cream made with real vanilla beans.',
    price: 2.99,
    rating: 4.7,
    image: 'https://i.ibb.co.com/tzbm7Sr/pngegg-5.png', // Replaced with valid link
  },
  {
    id: 10,
    name: 'Caesar Salad',
    category: 'Salads',
    description: 'Fresh Romaine lettuce, Parmesan cheese, and Caesar dressing.',
    price: 6.99,
    rating: 4.5,
    image: 'https://i.ibb.co.com/37ThxqR/pngegg-7.png', // Replaced with valid link
  },
];

export const categories = [
  {
    id: 1,
    name: 'Pizza',
    image: 'https://i.ibb.co.com/N720QM5/pngegg-6.png', // Valid link from "foodItems"
    items: [
      {
        id: 1,
        name: 'Pepperoni Pizza',
        description:
          'Classic pizza topped with pepperoni, mozzarella, and tomato sauce.',
        price: 12.99,
        rating: 4.5,
        image:
          'https://i.ibb.co.com/XLzYDM5/Pngtree-sausage-cheese-pizza-slice-three-dimensional-13137250.png', // Valid link
      },
      {
        id: 2,
        name: 'Margherita Pizza',
        description:
          'Traditional Margherita with fresh mozzarella, basil, and olive oil.',
        price: 10.99,
        rating: 4.8,
        image: 'https://i.ibb.co.com/N720QM5/pngegg-6.png', // Valid link
      },
      {
        id: 3,
        name: 'BBQ Chicken Pizza',
        description: 'Pizza topped with BBQ chicken, red onions, and cilantro.',
        price: 13.99,
        rating: 4.7,
        image:
          'https://i.ibb.co.com/XLzYDM5/Pngtree-sausage-cheese-pizza-slice-three-dimensional-13137250.png', // Valid link
      },
    ],
  },
  {
    id: 2,
    name: 'Burgers',
    image: 'https://i.ibb.co.com/tzbm7Sr/pngegg-5.png', // Valid link
    items: [
      {
        id: 4,
        name: 'Cheeseburger',
        description:
          'Juicy beef patty with melted cheese, lettuce, tomato, and mayo.',
        price: 8.99,
        rating: 4.3,
        image: 'https://i.ibb.co.com/tzbm7Sr/pngegg-5.png', // Valid link
      },
      {
        id: 5,
        name: 'Veggie Burger',
        description:
          'Delicious veggie patty with fresh vegetables and vegan mayo.',
        price: 7.99,
        rating: 4.6,
        image: 'https://i.ibb.co.com/tzbm7Sr/pngegg-5.png', // Valid link
      },
    ],
  },
  {
    id: 3,
    name: 'Drinks',
    image: 'https://i.ibb.co.com/37ThxqR/pngegg-7.png', // Valid link
    items: [
      {
        id: 6,
        name: 'Coca-Cola',
        description: 'Chilled can of Coca-Cola.',
        price: 1.99,
        rating: 4.2,
        image: 'https://i.ibb.co.com/37ThxqR/pngegg-7.png', // Valid link
      },
      {
        id: 7,
        name: 'Fresh Orange Juice',
        description: 'Freshly squeezed orange juice, no sugar added.',
        price: 3.99,
        rating: 4.9,
        image: 'https://i.ibb.co.com/N720QM5/pngegg-6.png', // Replaced with valid link
      },
    ],
  },
  {
    id: 4,
    name: 'Desserts',
    image: 'https://i.ibb.co.com/N720QM5/pngegg-6.png', // Replaced with valid link
    items: [
      {
        id: 8,
        name: 'Chocolate Cake',
        description: 'Rich and moist chocolate cake topped with ganache.',
        price: 5.99,
        rating: 4.8,
        image:
          'https://i.ibb.co.com/XLzYDM5/Pngtree-sausage-cheese-pizza-slice-three-dimensional-13137250.png', // Replaced with valid link
      },
      {
        id: 9,
        name: 'Vanilla Ice Cream',
        description: 'Creamy vanilla ice cream made with real vanilla beans.',
        price: 2.99,
        rating: 4.7,
        image: 'https://i.ibb.co.com/tzbm7Sr/pngegg-5.png', // Replaced with valid link
      },
    ],
  },
  {
    id: 5,
    name: 'Salads',
    image: 'https://i.ibb.co.com/37ThxqR/pngegg-7.png', // Replaced with valid link
    items: [
      {
        id: 10,
        name: 'Caesar Salad',
        description:
          'Fresh Romaine lettuce, Parmesan cheese, and Caesar dressing.',
        price: 6.99,
        rating: 4.5,
        image: 'https://i.ibb.co.com/37ThxqR/pngegg-7.png', // Replaced with valid link
      },
    ],
  },
];
