import store1 from '../assets/store_01.jpg';
import store2 from '../assets/store_02.jpg';

export const regions = [
  { id: 'all', name: 'Tất cả' },
  { id: 'TPHCM', name: 'TP. Hồ Chí Minh' },
  { id: 'outside', name: 'Khu vực khác' }
];

export const storesData = [
  {
    id: 1,
    name: 'HongHaiTech - Quận 7',
    address: 'Số 123 Nguyễn Thị Thập, P. Tân Hưng, Quận 7, TP. HCM',
    phone: '0901 234 567',
    image: store1,
    region: 'TPHCM',
    mapUrl: 'https://maps.google.com',
    services: ['Wifi', 'Parking', 'Air Conditioning', '24/7']
  },
  {
    id: 2,
    name: 'HongHaiTech - Thủ Đức',
    address: 'Số 456 Võ Văn Ngân, P. Bình Thọ, TP. Thủ Đức, TP. HCM',
    phone: '0901 234 568',
    image: store2,
    region: 'TPHCM',
    mapUrl: 'https://maps.google.com',
    services: ['Wifi', 'Parking', 'Outdoor Seating', '24/7']
  },
  {
    id: 3,
    name: 'HongHaiTech - Bình Thạnh',
    address: 'Số 789 Phan Xích Long, P. 7, Q. Bình Thạnh, TP. HCM',
    phone: '0901 234 569',
    region: 'TPHCM',
    image: store1,
    mapUrl: 'https://maps.google.com',
    services: ['Wifi', 'Parking', 'Working Space', '24/7']
  }
];
