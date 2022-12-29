import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div>
        <h1 className="title1">LINE對話分析</h1>

        <nav style={{ align: "center" }}>
          <ul>
            <Link to="/">
              <button className="button">首頁</button>
            </Link>

            <Link to="/Upload">
              <button className="button">檔案上傳</button>
            </Link>

            <Link to="/Analysis">
              <button className="button">情緒分析</button>
            </Link>

            <Link to="/Aboutus">
              <button className="button">關於我們</button>
            </Link>
          </ul>
        </nav>

        <Outlet />
      </div>
    </>
  );
};

export default Layout;
