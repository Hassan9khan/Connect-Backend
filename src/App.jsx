import axios from "axios";
import React, { useEffect, useRef, useState } from "react";

const App = () => {
  const title = useRef();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    axios("http://localhost:3000/users")
      .then((res) => {
        console.log(res.data.data);
        setData(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const addTodo = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/user", {
        title: title.current.value,
      });
      console.log(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={addTodo}>
        <input type="text" placeholder="enter title" ref={title} />
        <button type="submit">Add User</button>
      </form>
      {data ? (
        data.map((item) => {
          return (
            <div key={item.id}>
              <h1>{item.title}</h1>
              <button onClick={() => console.log("hello")}>Delete</button>
            </div>
          );
        })
      ) : (
        <h1>No Data Found</h1>
      )}
    </>
  );
};

export default App;
