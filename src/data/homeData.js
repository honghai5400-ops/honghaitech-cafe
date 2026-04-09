import hero1 from '../assets/hero_slide_01.jpg';
import hero2 from '../assets/hero_slide_02.jpg';
import hero3 from '../assets/hero_slide_03.jpg';

import catCoffee from '../assets/cat_beans.jpg';
import catTea from '../assets/cat_leaves.jpg';
import catFruit from '../assets/cat_fruit.jpg';
import catCake from '../assets/cat_pastry.jpg';

import prodSeaSalt from '../assets/prod_seasalt_coffee.jpg';
import prodCharcoal from '../assets/prod_charcoal_latte.jpg';
import prodMango from '../assets/prod_mango_oolong.jpg';

export const categories = [
  { id: 'all', name: 'Tất cả', image: hero1 },
  { id: 'coffee', name: 'Cà phê', image: catCoffee },
  { id: 'tra', name: 'Trà', image: catTea },
  { id: 'da-xay', name: 'Đá xay', image: catFruit },
  { id: 'banh', name: 'Bánh', image: catCake },
  { id: 'khac', name: 'Khác', image: hero2 },
];

export const heroSlides = [
  {
    image: hero1,
    title: 'BÌNH MINH',
    subtitle: 'HƯƠNG VỊ KHỞI ĐẦU NGÀY MỚI',
  },
  {
    image: hero2,
    title: 'THANH MÁT',
    subtitle: 'NĂNG LƯỢNG NGÀY MỚI',
  },
  {
    image: hero3,
    title: 'COZY NIGHT',
    subtitle: 'GÓC NHỎ THƯ GIÃN',
  }
];

export const featuredProducts = [
  { 
    id: 1,
    name: 'CÀ PHÊ MUỐI HONGHAITECH', 
    price: '45.000đ', 
    desc: 'Vị mặn của muối hòa quyện cùng béo ngậy của kem sữa', 
    image: prodSeaSalt,
    category: 'coffee'
  },
  { 
    id: 2,
    name: 'THAN ĐÀ LATTE', 
    price: '55.000đ', 
    desc: 'Sự kết hợp độc đáo giữa than tre và cà phê đặc sản', 
    image: prodCharcoal,
    category: 'coffee'
  },
  { 
    id: 3,
    name: 'TRÀ Ô LONG XOÀI', 
    price: '50.000đ', 
    desc: 'Trà ô long thanh mát kết hợp xoài tươi nhiệt đới', 
    image: prodMango,
    category: 'tra'
  },
  { 
    id: 4,
    name: 'TRÀ XUÂN MATCHA', 
    price: '50.000đ', 
    desc: 'Matcha Nhật Bản nguyên chất với lớp bọt trà mịn màng', 
    image: catTea,
    category: 'tra'
  }
];
