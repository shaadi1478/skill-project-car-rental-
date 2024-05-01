import PropTypes from "prop-types";

const ServicesLists = ({ services }) => {
  const { title, desc, icons } = services;
  return (
    <div className="mt-20">
      <div className="space-y-3">
        <img src={icons} alt="" className=" rounded-full h-10 w-10" />
        <h2 className="text-xl font-bold text-[#000d6b]">{title}</h2>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default ServicesLists;

ServicesLists.propTypes = {
  services: PropTypes.node,
};
