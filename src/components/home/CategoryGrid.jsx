import Heading from '../ui/Heading';

const CategoryGrid = ({ categories }) => {
  return (
    <section className="container mx-auto px-4">
      <Heading align="center" underline className="mb-12">
        DANH MỤC SẢN PHẨM
      </Heading>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((cat) => (
          <div key={cat.name} className="group cursor-pointer">
            <div className="aspect-square rounded-full overflow-hidden border-4 border-white shadow-md hover:shadow-xl transition-all">
              <img 
                src={cat.image} 
                alt={cat.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
              />
            </div>
            <h3 className="text-center mt-6 font-bold text-gray-800 group-hover:text-brand-accent transition-colors uppercase tracking-wider">
              {cat.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryGrid;
