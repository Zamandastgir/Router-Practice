import React from "react";
import styles from "../css/styles";
import { Link } from "react-router-dom";

function Blog() {
  const [data, setData] = React.useState([]);

  console.log(data);

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  }, []);

  const respose = data.map((blog, index) => {
    return (
      <tr key={index}>
        <th scope="row">{index + 1}</th>
        <td>
          <Link to={`/blogshow/${blog.id}`}>{blog.name}</Link>
        </td>
        <td>{blog.email}</td>
        <td>{blog.phone}</td>
      </tr>
    );
  });

  return (
    <div style={styles.HomeStyle}>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>{respose}</tbody>
      </table>
    </div>
  );
}

export default Blog;
