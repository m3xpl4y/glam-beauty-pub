import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'My new website', body: 'This is my new website', author: 'Max', id: 1},
        {title: 'Welcome to party!', body: 'This is the party blog', author: 'Angi', id: 2},
        {title: 'Web dev top tips', body: 'From dev to beginner', author: 'Max', id: 3}
    ]);
    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }
    return ( 
        <div className="home">
            <BlogList blogs = {blogs.filter((blog) => blog.author  === 'Max')} title="Max's Blogs" handleDelete={handleDelete}/>
            <BlogList blogs = {blogs.filter((blog) => blog.author  === 'Angi')} title="Angi's Blogs" handleDelete={handleDelete}/>
        </div>
     );
}
 
export default Home;