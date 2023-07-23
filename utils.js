// Utility functions for data handling

// Sample queries data (replace this with actual database queries)
const sampleQueries = [
    {
      queryId: 1,
      queryText: "How does the weather look today?",
      creationDate: "2023-07-23",
      lastEditDate: "2023-07-23",
      version: 1,
      category: "Weather",
      submittedBy: "User123",
    },
    {
      queryId: 2,
      queryText: "What are some healthy breakfast options?",
      creationDate: "2023-07-23",
      lastEditDate: "2023-07-23",
      version: 1,
      category: "Health",
      submittedBy: "User456",
    },
  ];
  
  // Function to get all queries from the database
  export const getAllQueries = () => {
    // Replace this with actual database fetch logic
    // For now, we'll return the sample queries data
    return sampleQueries;
  };
  
  // Function to add a new query to the database
  export const addQuery = (newQuery) => {
    // Replace this with actual database insert logic
    // For now, we'll add the new query to the sample queries data
    const queryId = sampleQueries.length + 1;
    const queryWithId = { ...newQuery, queryId };
    sampleQueries.push(queryWithId);
  };
  
  // Function to edit an existing query in the database
  export const editQuery = (queryId, updatedQuery) => {
    // Replace this with actual database update logic
    // For now, we'll update the query in the sample queries data
    const index = sampleQueries.findIndex((query) => query.queryId === queryId);
    if (index !== -1) {
      sampleQueries[index] = { ...updatedQuery, queryId };
    }
  };
  
  // Function to delete a query from the database
  export const deleteQuery = (queryId) => {
    // Replace this with actual database delete logic
    // For now, we'll remove the query from the sample queries data
    sampleQueries = sampleQueries.filter((query) => query.queryId !== queryId);
  };
  