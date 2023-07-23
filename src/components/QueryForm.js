import React, { useState } from 'react';

const QueryForm = ({ onAddQuery }) => {
  const [queryText, setQueryText] = useState('');
  const [category, setCategory] = useState('');

  const handleAddButtonClick = () => {
    // Validate input fields
    if (!queryText.trim() || !category.trim()) {
      alert('Please fill in both query text and category.');
      return;
    }

    // Create a new query object
    const newQuery = {
      queryText: queryText.trim(),
      creationDate: new Date().toISOString().slice(0, 10),
      lastEditDate: new Date().toISOString().slice(0, 10),
      version: 1,
      category: category.trim(),
      submittedBy: 'User123', // Replace with actual user ID or username
    };

    // Add the new query
    onAddQuery(newQuery);

    // Clear input fields
    setQueryText('');
    setCategory('');
  };

  return (
    <div className="query-form">
      <h2>Add New Query</h2>
      <div>
        <label htmlFor="queryText">Query Text:</label>
        <input
          type="text"
          id="queryText"
          value={queryText}
          onChange={(e) => setQueryText(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="category">Category:</label>
        <input
          type="text"
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </div>
      <button onClick={handleAddButtonClick}>Add Query</button>
    </div>
  );
};

export default QueryForm;
