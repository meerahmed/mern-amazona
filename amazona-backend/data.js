import bcrypt from 'bcryptjs';
const data = {
  users: [
    {
      name: 'Meer',
      email: 'admin@gmail.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Ahmed',
      email: 'user@gmail.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: 'Nike Slim Shirt',
      slug: 'nike-slim-shirt',
      category: 'Shirt',
      image: '/images/p1.jpg', //679px x 829px
      price: 120,
      countInStock: 10,
      brand: 'Nike',
      rating: 3.0,
      numReviews: 12,
      description: 'High quality product',
    },
    {
      name: 'Adidas Fit Shirt',
      slug: 'adidas-fit-shirt',
      category: 'Shirt',
      image: '/images/p2.jpg',
      price: 120,
      countInStock: 0,
      brand: 'Adidas',
      rating: 3.9,
      numReviews: 14,
      description: 'High quality product',
    },
    {
      name: 'Nike Slim Pant',
      slug: 'nike-slim-pant',
      category: 'Pant',
      image: '/images/p3.jpg',
      price: 120,
      countInStock: 10,
      brand: 'Nike',
      rating: 4.8,
      numReviews: 16,
      description: 'High quality product',
    },
    {
      name: 'Adidas Fit Pant',
      slug: 'adidas-fit-pant',
      category: 'Shirt',
      image: '/images/p4.jpg',
      price: 120,
      countInStock: 10,
      brand: 'Adidas',
      rating: 5.0,
      numReviews: 18,
      description: 'High quality product',
    },
  ],
};

export default data;
