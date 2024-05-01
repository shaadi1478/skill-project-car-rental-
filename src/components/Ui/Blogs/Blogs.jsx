import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = () => {
    const [blogs, setBlogs] = useState([])

    useEffect( () => {
        fetch('blogData.json')
        .then(ref => ref.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className="max-w-7xl mx-auto md:mt-20 mt-10 bg-white">
            <div className="text-center space-y-5">
            <h3 className="text-[#f9a826] text-2xl font-bold">Explopre our Blogs</h3>
            <h1 className="text-[#000d6b] text-5xl font-bold">Latest Blogs</h1>
            </div>
            <div className="grid md:grid-cols-3 gap-4 md:gap-0 mt-14 bg-white">
                {
                    blogs.map(blog => <Blog key={blog.id} blog={blog}></Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;