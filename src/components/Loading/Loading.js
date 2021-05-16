import React from "react";

const Loading = ({ isLoading, setLoadingState }) => {
  
  // Fake load
    if (isLoading) {
    setTimeout(() => {
      setLoadingState(false);
    }, 1000);
  }
  return (
    <main className="not-found-container">
      <h2>Content loading...</h2>
    </main>
  );
};

export default Loading;
