import axios from "axios";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const GitHistory = (props) => {
  const [exampleData, setExampleData] = useState([]);
  const { repoName } = props;
  useEffect(() => {
    axios
      .get(`http://localhost:3000/commit-history-back/${repoName}`)
      .then((response) => {
        setExampleData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [repoName]);

  return (
    <div className="tab-container">
      <div className="title">
        <h3>Commit History for {repoName}</h3>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>SHA</th>
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
    </div>
  );
};

GitHistory.propTypes = {
  repoName: PropTypes.string.isRequired,
};

export default GitHistory;
