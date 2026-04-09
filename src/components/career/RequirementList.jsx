const RequirementList = ({ requirements }) => {
  return (
    <div className="bg-brand-secondary rounded-3xl p-8 text-white shadow-xl space-y-6">
      <h3 className="text-2xl font-black uppercase italic">YÊU CẦU CHUNG</h3>
      <ul className="space-y-4">
        {requirements.map((req, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <div className="w-6 h-6 bg-brand-accent rounded-full flex items-center justify-center shrink-0 mt-0.5 text-xs font-black">
              {idx + 1}
            </div>
            <span className="text-sm font-medium leading-relaxed opacity-90">{req}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RequirementList;
