import catCoffee from '../assets/cat_beans.jpg';
import catTea from '../assets/cat_leaves.jpg';
import catFruit from '../assets/cat_fruit.jpg';
import catCake from '../assets/cat_pastry.jpg';

import prodSeaSalt from '../assets/prod_seasalt_coffee.jpg';
import prodCharcoal from '../assets/prod_charcoal_latte.jpg';
import prodMango from '../assets/prod_mango_oolong.jpg';

export const menuCategories = [
  { id: 'ALL', name: 'Tất cả' },
  { id: 'coffee', name: 'CÀ PHÊ', image: catCoffee },
  { id: 'tea', name: 'TRÀ', image: catTea },
  { id: 'ice-blended', name: 'ĐÁ XAY', image: catFruit },
  { id: 'snacks', name: 'BÁNH & SNACK', image: catCake },
];

export const menuProducts = [
  {
    id: 1,
    name: 'Cà Phê Muối HongHaiTech',
    price: '45.000đ',
    category: 'coffee',
    image: prodSeaSalt,
    desc: 'Sự kết hợp hoàn hảo giữa vị đắng của cà phê và vị mặn của lớp kem muối đặc trưng.',
    isSignature: true,
  },
  {
    id: 2,
    name: 'Than Đà Latte',
    price: '55.000đ',
    category: 'coffee',
    image: prodCharcoal,
    desc: 'Hương vị bùi béo của tinh than tre kết hợp với cà phê espresso đậm đà.',
    isSignature: true,
  },
  {
    id: 3,
    name: 'Trà Ô Long Xoài',
    price: '50.000đ',
    category: 'tea',
    image: prodMango,
    desc: 'Trà ô long thanh khiết hòa quyện cùng mứt xoài tươi và thạch trái cây.',
    isSignature: true,
  },
  {
    id: 4,
    name: 'Matcha Xuân',
    price: '50.000đ',
    category: 'tea',
    image: catTea,
    desc: 'Matcha Nhật Bản cao cấp với lớp bọt kem mịn màng.',
    isSignature: false,
  },
];
