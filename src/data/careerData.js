import teamImg from '../assets/team_culture.jpg';

export const careerData = {
  categories: [
    { id: 'full-time', name: 'Toàn thời gian' },
    { id: 'part-time', name: 'Bán thời gian' },
  ],
  culture: {
    title: 'VĂN HÓA LÀM VIỆC',
    content: 'Tại HongHaiTech, chúng tôi xây dựng một môi trường làm việc năng động, trẻ trung và đầy cảm hứng. Mỗi nhân viên là một đại sứ thương hiệu, cùng nhau lan tỏa giá trị cốt lõi của HongHaiTech đến khách hàng.',
    image: teamImg
  },
  benefits: [
    { title: 'Lương thưởng', desc: 'Mức lương cạnh tranh cùng các khoản thưởng doanh thu hấp dẫn.' },
    { title: 'Đào tạo', desc: 'Được đào tạo bài bản về kỹ năng pha chế và dịch vụ khách hàng.' },
    { title: 'Môi trường', desc: 'Làm việc trong không gian hiện đại, chuyên nghiệp và thân thiện.' },
  ],
  jobs: [
    {
      id: 1,
      title: 'Nhân viên Pha chế (Barista)',
      location: 'Chi nhánh Quận 7 / Thủ Đức',
      type: 'full-time',
      salary: '6.000.000 - 8.000.000đ',
      desc: 'Pha chế các đồ uống theo tiêu chuẩn của HongHaiTech, đảm bảo chất lượng và vệ sinh.'
    },
    {
      id: 2,
      title: 'Nhân viên Phục vụ',
      location: 'Hệ thống HongHaiTech Coffee',
      type: 'part-time',
      salary: '25.000 - 30.000đ/giờ',
      desc: 'Chào đón và phục vụ khách hàng, đảm bảo không gian quán luôn sạch sẽ và ngăn nắp.'
    }
  ]
};
