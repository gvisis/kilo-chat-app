import { Link } from "react-router-dom";


const NotFound = () => {
  const style = {
    width: "500px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <main className="main-content-wrap">
      <div style={style} className="user-header">
        <h2>Sorry</h2>
        <p>That page cannot be found</p>
        <Link to="/">Back to home</Link>
      </div>
    </main>
  );
};

export default NotFound;
