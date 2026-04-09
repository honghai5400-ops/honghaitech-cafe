import { MapPin, Phone, Clock } from '../common/Icons';
import Button from '../ui/Button';

const StoreCard = ({ name, address, phone, hours, image }) => {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group border-b-8 border-transparent hover:border-brand-orange">
      <div className="relative h-64 overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute top-4 left-4 bg-brand-orange text-white text-xs font-black px-3 py-1.5 rounded-full shadow-lg">24/7</div>
      </div>
      <div className="p-8 space-y-6">
        <h3 className="text-xl font-black text-brand-secondary line-clamp-1">{name}</h3>
        <ul className="space-y-4 text-gray-500 font-medium">
          <li className="flex items-start gap-3">
            <MapPin className="text-brand-accent shrink-0 mt-1" size={18} />
            <span className="text-sm">{address}</span>
          </li>
          <li className="flex items-center gap-3">
            <Phone className="text-brand-accent shrink-0" size={18} />
            <span className="text-sm">{phone}</span>
          </li>
          <li className="flex items-center gap-3">
            <Clock className="text-brand-accent shrink-0" size={18} />
            <span className="text-sm">{hours}</span>
          </li>
        </ul>
        <div className="pt-4 flex gap-3">
            <button className="flex-grow bg-brand-secondary text-white font-bold py-3 rounded-xl hover:bg-brand-accent transition-colors flex items-center justify-center gap-2 text-sm uppercase">
              <MapPin size={16} /> Chỉ đường
            </button>
           <Button variant="outline" size="sm" className="px-6 rounded-xl !normal-case">
             Gọi ngay
           </Button>
        </div>
      </div>
    </div>
  );
};

export default StoreCard;
