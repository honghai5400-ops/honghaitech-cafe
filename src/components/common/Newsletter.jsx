import Button from '../ui/Button';

const Newsletter = ({ 
  title = 'Đăng ký nhận tin', 
  description = 'Nhận thông báo sớm nhất về các khuyến mãi và sự kiện đặc biệt tại HongHaiTech!',
  buttonText = 'Gửi ngay'
}) => {
  return (
    <div className="bg-brand-primary rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="relative z-10 max-w-2xl mx-auto space-y-8">
        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight">
          {title}
        </h2>
        <p className="text-lg opacity-90 font-medium">
          {description}
        </p>
        <form className="flex flex-col md:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="email" 
            placeholder="Nhập địa chỉ Email của bạn..." 
            className="flex-grow px-8 py-5 rounded-full bg-white text-gray-800 font-bold outline-none border-4 border-transparent focus:border-brand-accent transition-all"
          />
          <Button variant="primary" type="submit" className="md:px-12 py-5 !normal-case">
            {buttonText}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
