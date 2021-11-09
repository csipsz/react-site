import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./usefetch";


const Home = () => {
    const {data, isPending, error} = useFetch('http://localhost:8000/blogs')

    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter((blog) => blog.id !== id)
    //     setBlogs(newBlogs);
    // }

    return ( 
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading data...</div>}
            {data && <BlogList blogs={data} title={"All blogs"}/>}
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'Tim')} title={"Tim's blogs"}/> */}
        </div>
     );
}
 
export default Home;