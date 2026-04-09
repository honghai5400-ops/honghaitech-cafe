import Heading from '../ui/Heading';

const ValuesGrid = ({ values }) => {
  return (
    <div className="space-y-12">
      <Heading 
        level={2} 
        align="center" 
        subtitle="Điều làm nên sự khác biệt của HongHaiTech"
      >
        Giá trị cốt lõi
      </Heading>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {values.map((val) => (
          <div key={val.title} className="p-10 bg-brand-bg rounded-3xl text-center space-y-6 border-2 border-transparent hover:border-brand-accent transition-all group shadow-sm hover:shadow-md">
            <div className="text-6xl group-hover:scale-110 transition-transform">{val.icon}</div>
            <h3 className="text-2xl font-black text-brand-secondary uppercase">{val.title}</h3>
            <p className="text-gray-600 leading-relaxed font-bold text-sm tracking-wide">{val.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ValuesGrid;
