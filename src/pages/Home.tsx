import React, { useState } from "react";
// import Button from "../component/Common/Button";
import Cancel from '../icons/Cancel'


function Home() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "hii my name is john",
      completed: false,
    },
  ]);

  

  function showAllPosts() {
    setPosts((posts) => [
      ...posts,
      {
        id: 1,
        title: "hii there",
        completed: true,
      },
    ]);
  }
  return (
    <div className="cursor-pointer">
      <button onClick={showAllPosts}>Add Post</button>
      {posts.map((post,index) => (
        <div key={post.id}>
            <span>{index + 1}. {post.title}</span>
              {post.completed?
              <label htmlFor="completed">
                <input className="m-2" type="checkbox" />
              </label>: <div><Cancel size="md"/></div>
              }
        </div>
        ))}
    </div>
  );
}

export default Home;
