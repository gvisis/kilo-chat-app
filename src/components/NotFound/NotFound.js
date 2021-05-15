import { Link } from "react-router-dom";


const NotFound = () => {

  return (
    <main className="not-found-container">
        <h2>Sorry</h2>
        <p>That page cannot be found</p>
        <Link to="/">Back to home</Link>
    </main>
  );
};

export default NotFound;
