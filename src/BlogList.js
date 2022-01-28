const BlogList = (props) => {
    const blogs = props.blogs;
    const title = props.title;
    return (
        <div className="blog-list">
            <h3>{title}</h3>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h4>{blog.title}</h4>
                    <p>Written by {blog.author}</p>
                </div>
            ))}
        </div>
    );
}

export default BlogList;