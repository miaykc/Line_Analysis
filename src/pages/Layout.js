import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <h1
        style={{
          fontSize: "50px",
          color: "white",
          textAlign: "center",
          padding: 0,
        }}
      >
        Line 對話分析
      </h1>
      <nav style={{ align: "center" }}>
        <ul>
          <Link to="/">
            <button className="button">首頁</button>
          </Link>

          <Link to="/About">
            <button className="button">分析</button>
          </Link>

          <Link to="/Flashcard">
            <button className="button">其他東西</button>
          </Link>

          <Link to="/Translate">
            <button className="button">關於我們</button>
          </Link>
        </ul>
      </nav>

      <Outlet />
    </div>
  );
};

export default Layout;
