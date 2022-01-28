import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'My new website', body: 'This is my new website', author: 'Max', id: 1},
        {title: 'Welcome to party!', body: 'This is the party blog', author: 'Angi', id: 2},
        {title: 'Web dev top tips', body: 'From dev to beginner', author: 'Max', id: 3}
    ]);
    return ( 
        <div className="home">
            <BlogList blogs = {blogs.filter((blog) => blog.author  === 'Max')} title="Max's Blogs"/>
            <BlogList blogs = {blogs.filter((blog) => blog.author  === 'Angi')} title="Angi's Blogs"/>
        </div>
     );
}
 
export default Home;