import Heading from '../ui/Heading';
import Button from '../ui/Button';

const ActivityItem = ({ title, date, desc, image, reverse = false }) => {
  return (
    <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}>
      <div className="lg:w-1/2 relative group">
        <div className="absolute -inset-4 bg-brand-accent/10 rounded-3xl blur-2xl group-hover:bg-brand-accent/20 transition-all"></div>
        <img 
          src={image} 
          alt={title} 
          className="rounded-3xl shadow-2xl relative z-10 w-full hover:scale-105 transition-transform duration-700" 
        />
        <div className="absolute top-8 left-8 bg-brand-accent text-white font-black px-6 py-2 rounded-full z-20 shadow-xl tracking-wider">
          {date}
        </div>
      </div>
      <div className="lg:w-1/2 space-y-6">
        <Heading level={2} underline>{title}</Heading>
        <p className="text-gray-600 text-lg leading-relaxed">
          {desc}
        </p>
        <p className="text-gray-500 italic">
          * Vui lòng liên hệ hotline hoặc fanpage để đặt chỗ trước cho các sự kiện đặc biệt.
        </p>
        <Button variant="dark" size="lg">
          Xem chi tiết lịch diễn
        </Button>
      </div>
    </div>
  );
};

export default ActivityItem;
