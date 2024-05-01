import { IoTimeOutline } from "react-icons/io5";
import { MdDateRange, MdSupervisorAccount } from "react-icons/md";
import { Link, useLoaderData, useParams } from "react-router-dom";

const BlogDetails = () => {
  const blogs = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const blog = blogs.find((blog) => blog.id === idInt);
  console.log(blog);
  return (
    <div>
     <div className="card card-compact md:w-96 w-[425px] bg-base-100 shadow-xl">
        <figure>
          <img src={blog.imgUrl} />
        </figure>
        <div className="card-body">
          <Link className="card-title hover:underline hover:text-[#f9a826]">{blog.title}</Link>
          <p>
           {blog.description}
          </p>
          <Link className="text-blue-500 underline" to={`blog/${blog.id}`}>
              Read More
            </Link>
          <div className="flex">
          <p className="flex items-center gap-1"><MdSupervisorAccount className="text-[18px] text-[#f9a826]" />{blog.author}</p>
          <div className="flex gap-3">
            <p className="flex items-center  gap-1"> <MdDateRange className="text-[18px] text-[#f9a826]" />{blog.date}</p>
            <p className="flex items-center gap-1"> <IoTimeOutline className="text-[18px] text-[#f9a826]" />{blog.time}</p>
          </div>
        </div>
        </div>
      </div>    </div>
  );
};

export default BlogDetails;