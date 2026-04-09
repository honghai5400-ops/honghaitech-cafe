import PageBanner from '../components/common/PageBanner';
import ActivityItem from '../components/activities/ActivityItem';
import Newsletter from '../components/common/Newsletter';
import { activityList } from '../data/activitiesData';
import pageBanner from '../assets/page_banner_generic.jpg';

const Activities = () => {
  return (
    <div className="pt-20 md:pt-24 pb-20">
      <PageBanner 
        title="Hoạt động tại HongHaiTech" 
        bgImage={pageBanner}
      />

      <div className="container mx-auto px-4 mt-16 space-y-24">
        {activityList.map((act, idx) => (
          <ActivityItem 
            key={act.id} 
            {...act} 
            reverse={idx % 2 !== 0} 
          />
        ))}
      </div>
      
      <section className="container mx-auto px-4 mt-32">
        <Newsletter 
          title="Đăng ký tham gia sự kiện"
          description="Nhận thông báo sớm nhất về các đêm nhạc Acoustic và sự kiện đặc biệt tại HongHaiTech!"
        />
      </section>
    </div>
  );
};

export default Activities;
