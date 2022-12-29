import "../styles.css";
import Joanne from "./pics/Joanne.png";
import Mia from "./pics/Mia.png";
import Maika from "./pics/Maika.png";
import MediaCard from "./mediacard";

import { Box, Grid } from "@mui/material";

function Aboutus() {
  return (
    <>
      <h2>關於我們/About Us</h2>

      <div className="article">
        <div className="wrap">
          <div className="item">
            <img
              src={Joanne}
              alt="Joanne"
              style={{ height: "200px", marginTop: "40px" }}
            />
            <p>
              姓名：紀柔安 <br />
              學號：R11142005 <br />
              Email: R11142005@ntu.edu.tw
            </p>
          </div>
          <div className="item">
            <img
              src={Mia}
              alt="Mia"
              style={{ height: "200px", marginTop: "40px" }}
            />
            <p>
              姓名：葉凱晴 <br />
              學號：R11142006 <br />
              Email: R11142006@ntu.edu.tw
            </p>
          </div>
          <div className="item">
            <img
              src={Maika}
              alt="Maika"
              style={{ height: "200px", marginTop: "40px" }}
            />
            <p>
              姓名：橘內每歌 <br />
              學號：R11142010 <br />
              Email: R11142010@ntu.edu.tw
            </p>
          </div>
        </div>
      </div>

    </>
  );
}
export default Aboutus;
