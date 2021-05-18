import { Link } from "react-router-dom";

const Error = () => {
  return (
    <main className="erLoading-container">
      <h2>Oops!</h2>
      <p>Something went wrong</p>
      <Link to="/"><h4>Go Back</h4></Link>
    </main>
  );
};

export default Error;
