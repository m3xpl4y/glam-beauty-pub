import { useState } from "react";

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'My new website', body: 'This is my new website', author: 'Max', id: 1},
        {title: 'Welcome to party!', body: 'This is the party blog', author: 'Angi', id: 2},
        {title: 'Web dev top tips', body: 'From dev to beginner', author: 'Max', id: 3}
    ]);
    return ( 
        <div className="home">
            {blogs.map((blog)=>(
                <div className="blog-preview" key={blog.id}>
                    <h4>{blog.title}</h4>
                    <p>Written by {blog.author}</p>
                </div>
            ))}
        </div>
     );
}
 
export default Home;