import { useReducer, useEffect } from "react";
import axios from "axios";
const initialState = {
  laoding: true,
  post: {},
  error: "",
};
const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        post: action.payload,
        error: "",
      };

    case "FETCH_ERROR":
      return {
        loading: false,
        post: {},
        error: "SOMETHING WENT WRONG",
      };
  }
};

const DataFetching2 = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    try {
      const getData = async () => {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts/16"
        );
        dispatch({ type: "FETCH_SUCCESS", payload: response.data });
      };
      getData();
    } catch (e) {
      dispatch("FETCH_ERROR");
    }
  }, []);

  return <div>{state.loading ? "loading" : <h4>{state.post.title} </h4>}</div>;
};

export default DataFetching2;
