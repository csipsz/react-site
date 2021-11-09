import { useState } from "react";

const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'Riley', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'Tim', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'Kyle', id: 3 }

    ]);



    const handleClick = () => {
        
    }

    return ( 
        <div className="home">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>written by: {blog.author}</p>
                </div>
            ))}
            <button onClick={handleClick}>Click me</button>
        </div>
     );
}
 
export default Home;