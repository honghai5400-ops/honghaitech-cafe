import { MapPin, Clock, DollarSign, ChevronRight } from '../common/Icons';
import Button from '../ui/Button';

const JobCard = ({ title, location, type, salary, image }) => {
  return (
    <div className="bg-white rounded-3xl p-6 md:p-8 shadow-md hover:shadow-xl transition-all border-l-8 border-brand-primary hover:border-brand-accent group">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="w-full md:w-48 h-32 shrink-0 rounded-2xl overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
          />
        </div>
        <div className="flex-grow space-y-4">
          <h3 className="text-xl font-black text-brand-secondary leading-tight">{title}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6 text-sm font-bold text-gray-500">
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-brand-accent" /> {location}
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-brand-accent" /> {type}
            </div>
            <div className="flex items-center gap-2">
              <DollarSign size={16} className="text-brand-accent" /> {salary}
            </div>
          </div>
        </div>
        <Button variant="dark" className="w-full md:w-auto gap-2">
          ỨNG TUYỂN <ChevronRight size={18} />
        </Button>
      </div>
    </div>
  );
};

export default JobCard;
