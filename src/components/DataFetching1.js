
import { useState, useEffect } from "react";
import axios from "axios";
const DataFetching1 = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [post, setPost] = useState({});

  useEffect(() => {
    try {
      const getPosts = async () => {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/9`
        );
        setLoading(false);
        setPost(response.data);
        console.log(response.data);
        setError("");
      };
      getPosts();
    } catch (error) {
      setLoading(false);
      setPost({});
      setError("Someting went wrong" + error);
    }
  }, []);

  return (
    <div>
      {loading ? "Loading" : <h4>{post.title}</h4>}
      {error && error}
    </div>
  );
};

export default DataFetching1;
