import axios from "axios";
import { useEffect, useState } from "react";

const GitHistory = () => {
  const [exampleData, setExampleData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/commit-history-back`)
      .then((response) => {
        setExampleData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Commit</th>
          <th>Author</th>
          <th>Date</th>
          <th>Message</th>
        </tr>
      </thead>
      <tbody>
        {exampleData.map((data) => {
          return (
            <tr key={data.sha}>
              <td>{data.sha}</td>
              <td>{data.author}</td>
              <td>{data.date}</td>
              <td>{data.message}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default GitHistory;
