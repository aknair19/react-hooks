import { useState, useEffect } from "react";
import axios from "axios";

const DataFetching = () => {
  const [posts, setPosts] = useState([]);
  const [userId, setuserId] = useState(1);
  const [idFromBtn, setIdFromBtn] = useState(1);
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts?id=${idFromBtn}`
      );
      setPosts(response.data);
      console.log(response.data);
    };
    getData();
  }, [idFromBtn]);

  const handleIdChange = () => {
    setIdFromBtn(userId);
  };

  return (
    <div>
      <input
        type="number"
        value={userId}
        onChange={(e) => setuserId(e.target.value)}
      />
      <button onClick={() => handleIdChange()}>Fetch Post</button>

      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};
export default DataFetching;
