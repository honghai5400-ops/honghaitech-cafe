import Heading from '../ui/Heading';

const BrandStory = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-16 items-center">
      <div className="lg:w-1/2 space-y-6">
        <Heading level={2} underline>Câu chuyện thương hiệu</Heading>
        <p className="text-gray-600 leading-relaxed text-lg font-medium">
          Được thành lập từ những năm 2020, HongHaiTech Coffee & Tea bắt đầu từ một cửa hàng nhỏ với khát khao tạo ra một không gian mà tại đó, ranh giới giữa học tập và thư giãn được xóa nhòa. 
        </p>
        <p className="text-gray-600 leading-relaxed">
          Chúng tôi tin rằng, một tách cà phê ngon không chỉ nằm ở hương vị, mà còn nằm ở bối cảnh mà nó được thưởng thức. Đó là lý do HongHaiTech tiên phong trong việc cung cấp mô hình phục vụ 24/7, đồng hành cùng bạn qua những đêm chạy deadline hay những buổi sáng sớm đầy hứng khởi.
        </p>
      </div>
      <div className="lg:w-1/2">
        <img 
          src="https://placehold.co/800x600?text=Brand+Story" 
          alt="Story" 
          className="rounded-3xl shadow-xl w-full" 
        />
      </div>
    </div>
  );
};

export default BrandStory;
