import Button from '../ui/Button';

const ProductCard = ({ name, price, image, isHot = false }) => {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all group flex flex-col">
      <div className="relative aspect-square overflow-hidden bg-gray-50 flex items-center justify-center p-8">
        <img src={image} alt={name} className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" />
        {isHot && (
          <div className="absolute top-4 right-4 bg-brand-accent text-white text-[10px] font-black px-2 py-1 rounded-md rotate-3 shadow-sm">HOT</div>
        )}
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <Button 
          variant="dark" 
          size="md" 
          className="absolute bottom-[-50px] left-1/2 -translate-x-1/2 shadow-xl group-hover:bottom-8 transition-all duration-300 whitespace-nowrap"
        >
          XEM NHANH
        </Button>
      </div>
      <div className="p-8 space-y-3 flex-grow text-center">
         <h3 className="text-xl font-black text-brand-secondary uppercase line-clamp-1">{name}</h3>
         <div className="flex items-center justify-center gap-2">
           <span className="text-2xl font-black text-brand-accent">{price}</span>
         </div>
      </div>
    </div>
  );
};

export default ProductCard;
