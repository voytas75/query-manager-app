import React, { useState, useEffect } from 'react';
import './App.css';
import { getAllQueries, addQuery, editQuery, deleteQuery } from './components/utils';
import QueryForm from './components/QueryForm';
import QueryDashboard from './components/QueryDashboard';

function App() {
  const [queries, setQueries] = useState([]);

  useEffect(() => {
    fetchQueries();
  }, []);

  const fetchQueries = () => {
    const allQueries = getAllQueries();
    setQueries(allQueries);
  };

  const handleAddQuery = (newQuery) => {
    addQuery(newQuery);
    fetchQueries();
  };

  const handleEditQuery = (queryId, updatedQuery) => {
    editQuery(queryId, updatedQuery);
    fetchQueries();
  };

  const handleDeleteQuery = (queryId) => {
    deleteQuery(queryId);
    fetchQueries();
  };

  return (
    <div className="app-container">
      <h1>Query Manager App</h1>
      <QueryForm onAddQuery={handleAddQuery} />
      <QueryDashboard
        queries={queries}
        onEditQuery={handleEditQuery}
        onDeleteQuery={handleDeleteQuery}
      />
    </div>
  );
}

export default App;
