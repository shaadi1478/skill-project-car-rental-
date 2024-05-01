import { IoTimeOutline } from "react-icons/io5";
import { MdDateRange, MdSupervisorAccount } from "react-icons/md";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Blog = ({ blog }) => {
  const { id, title, description, author, date, time, imgUrl } = blog;
  return (
    <div>
      <div className="card card-compact md:w-96 w-[425px] bg-base-100 shadow-xl">
        <figure>
          <img src={imgUrl} />
        </figure>
        <div className="card-body">
          <Link className="card-title hover:underline hover:text-[#f9a826]">{title}</Link>
          <p>
            {description.length > 100 ? description.substr(0, 100) : description}
          </p>
          <Link className="text-blue-500 underline" to={`blogs/${id}`}>
              Read More
            </Link>
          <div className="flex">
          <p className="flex items-center gap-1"><MdSupervisorAccount className="text-[18px] text-[#f9a826]" />{author}</p>
          <div className="flex gap-3">
            <p className="flex items-center  gap-1"> <MdDateRange className="text-[18px] text-[#f9a826]" />{date}</p>
            <p className="flex items-center gap-1"> <IoTimeOutline className="text-[18px] text-[#f9a826]" />{time}</p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;

Blog.propTypes ={
    blog: PropTypes.object
}

