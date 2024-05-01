import "../../../Pages/Style/CommonSection.css"
const CommonSection = ({title}) => {
  return (
    <section className="common__section w-[425px] md:w-full">
      <div className="">
        <h1 className="text-6xl text-center py-28 text-white">{title}</h1>
      </div>
    </section>
  );
};

export default CommonSection;
