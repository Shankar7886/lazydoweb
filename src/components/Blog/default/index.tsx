
import { Calendar, User } from "lucide-react";

import { useNavigate } from "react-router-dom";
import ImageHostLink from "../../../variable";

const blogPosts = [
  {
    id: 1,
    title: "Why Custom Software is a Game-Changer for Modern Enterprises",
    excerpt:
      "Explore how custom solutions outperform off-the-shelf products in flexibility, scalability, and security.",
    date: "July 1, 2025",
    author: "Lazy Do",
    image: "blog1.jpg",
  },
  {
    id: 2,
    title: "Top Web Development Trends to Watch in 2025",
    excerpt:
      "From serverless to edge computing and AI-driven UI—here’s what’s redefining web apps today.",
    date: "June 25, 2025",
    author: "Lazy Do",
    image: "blog2.jpg",
  },
  {
    id: 3,
    title: "Crafting Delightful Mobile Apps: Our UX Process Revealed",
    excerpt:
      "See how we blend performance and design to create high-converting mobile experiences for clients worldwide.",
    date: "June 15, 2025",
    author: "Lazy Do",
    image: "blog3.jpg",
  },
];

const BlogPage = () => {
   const navigate = useNavigate();

   const handlePageChange =(pageNumber:number)=>{
    navigate(`/blogs/${pageNumber}`)
   }

  return (
    <div className="bg-gray-50 min-h-screen py-16 px-4 md:px-20">
      <h1 className="text-4xl md:text-6xl font-bold text-center text-gray-800 mb-10">
        Insights from Lazy Do
      </h1>
      <p className="text-center max-w-3xl mx-auto text-gray-600 text-lg mb-16">
        Stay updated with industry trends, engineering insights, and innovation tips from our team of experts in software, web, and mobile development.
      </p>

      <div className="grid md:grid-cols-3 gap-10">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
            style={{cursor:"pointer"}}
            onClick={()=>handlePageChange(post.id)}
          >
            <img
              src={`${ImageHostLink}${post.image}`}
              alt={post.title}
              className="w-full h-56 object-cover"
               loading="lazy"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-3">
                {post.title}
              </h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <div className="flex items-center text-sm text-gray-500 space-x-4">
                <span className="flex items-center gap-1">
                  <Calendar size={16} /> {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <User size={16} /> {post.author}
                </span>
              </div>
              <button className="mt-4 inline-block text-orange-500 hover:text-orange-700 text-sm font-medium" >
                Read More →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
