import React from "react";

const Loading = ({ isLoading, finishLoading }) => {
  // Fake load
  if (isLoading) {
    setTimeout(() => {
      finishLoading();
    }, 1000);
  }
  return (
    <main className="not-found-container">
      <h2>Content loading...</h2>
    </main>
  );
};

export default Loading;
