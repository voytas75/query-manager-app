import React, { useState } from 'react';

const QueryItem = ({ query, onEditQuery, onDeleteQuery }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedQueryText, setUpdatedQueryText] = useState(query.queryText);
  const [updatedCategory, setUpdatedCategory] = useState(query.category);

  const handleEditButtonClick = () => {
    setIsEditing(true);
  };

  const handleCancelButtonClick = () => {
    setIsEditing(false);
    setUpdatedQueryText(query.queryText);
    setUpdatedCategory(query.category);
  };

  const handleSaveButtonClick = () => {
    // Validate input fields
    if (!updatedQueryText.trim() || !updatedCategory.trim()) {
      alert('Please fill in both query text and category.');
      return;
    }

    // Create a new query object with updated values
    const updatedQuery = {
      ...query,
      queryText: updatedQueryText.trim(),
      lastEditDate: new Date().toISOString().slice(0, 10),
      category: updatedCategory.trim(),
    };

    // Call the onEditQuery function to update the query
    onEditQuery(query.queryId, updatedQuery);

    // Exit edit mode
    setIsEditing(false);
  };

  const handleDeleteButtonClick = () => {
    // Call the onDeleteQuery function to delete the query
    onDeleteQuery(query.queryId);
  };

  return (
    <li className="query-item">
      {isEditing ? (
        <>
          <input
            type="text"
            value={updatedQueryText}
            onChange={(e) => setUpdatedQueryText(e.target.value)}
          />
          <input
            type="text"
            value={updatedCategory}
            onChange={(e) => setUpdatedCategory(e.target.value)}
          />
          <button onClick={handleSaveButtonClick}>Save</button>
          <button onClick={handleCancelButtonClick}>Cancel</button>
        </>
      ) : (
        <>
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
          <button onClick={handleEditButtonClick}>Edit</button>
          <button onClick={handleDeleteButtonClick}>Delete</button>
        </>
      )}
    </li>
  );
};

export default QueryItem;
