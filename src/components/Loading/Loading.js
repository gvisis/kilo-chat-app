import React from "react";

const Loading = ({ isLoading, setLoadingState }) => {
  // setTimeout(() => {
  //   setLoadingState(false);
  // }, 1000);
  
  // Fake load
  return (
    <main className="not-found-container">
      <h2>Content loading...</h2>
    </main>
  );
};

export default Loading;
