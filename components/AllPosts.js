import SinglePost from "./SinglePost"
import { useState, useEffect } from "react"

const AllPosts = () => {
    const dbHeroku = "https://shoe-string.herokuapp.com/posts"
    const dbLocalHost = "http://localhost:4000/posts"
    const [post, setPost] = useState({})

    const getPosts = async () => {
        try {
            //Get data from BE
            const response = await fetch(dbLocalHost)
            const allPosts = await response.json()
            setPost(allPosts)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getPosts()
    }, [])

    return (
        <div className="flex flex-col-reverse">
            {post.allPosts?.map((post, index) => {
                return (
                    <div key={index}>
                        <SinglePost key={index} username={post.username} _id={post._id} body={post.body} likes={post.likes} img={post.img} profile_img={post.profile_img} location={post.location} />
                    </div>
                )
            })}
        </div>
    )
}

export default AllPosts
