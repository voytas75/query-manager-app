import React from 'react';

const QueryDashboard = ({ queries, onEditQuery, onDeleteQuery }) => {
  return (
    <div className="query-dashboard">
      <h2>Query Dashboard</h2>
      {queries.length === 0 ? (
        <p>No queries found.</p>
      ) : (
        <ul>
          {queries.map((query) => (
            <li key={query.queryId}>
              <div>
                <strong>Query Text:</strong> {query.queryText}
              </div>
              <div>
                <strong>Category:</strong> {query.category}
              </div>
              <div>
                <strong>Created on:</strong> {query.creationDate}
              </div>
              <div>
                <strong>Last Edited on:</strong> {query.lastEditDate}
              </div>
              <div>
                <strong>Version:</strong> {query.version}
              </div>
              <button onClick={() => onEditQuery(query.queryId, query)}>
                Edit
              </button>
              <button onClick={() => onDeleteQuery(query.queryId)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default QueryDashboard;
