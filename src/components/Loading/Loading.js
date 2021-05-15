import React from "react";

const Loading = ({ isLoading, finishLoading }) => {
  if (isLoading) {
    setTimeout(() => {
      finishLoading();
    }, 2500);
  }
  return (
    <main className="not-found-container">
      <h2>Content loading...</h2>
    </main>
  );
};

export default Loading;
