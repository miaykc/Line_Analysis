import "../styles.css";
import Joanne from "/Users/ykcmia/React_lineconvo3/assignment/src/pages/Joanne.png"
import Mia from "/Users/ykcmia/React_lineconvo3/assignment/src/pages/Mia.png"
import Maika from  "/Users/ykcmia/React_lineconvo3/assignment/src/pages/Maika.png"



function Aboutus() {
    return (
      <div className="article">
      <div className="wrap">
          <div className="item">
          <img src={Joanne} alt="Joanne" style={{height: "200px", marginTop: "40px"}}/>
              <p>
                姓名：紀柔安 <br/>
                學號：R11142005 <br/>
                Email: R11142005@ntu.edu.tw
              </p>
          </div>
          <div className="item">
          <img src={Mia} alt="Mia" style={{height: "200px", marginTop: "40px"}}/>
              <p>
                姓名：葉凱晴 <br/>
                學號：R11142006 <br/>
                Email: R11142006@ntu.edu.tw
              </p>
          </div>
          <div className="item">
          <img src={Maika} alt="Maika" style={{height: "200px", marginTop: "40px"}}/>
              <p>
                姓名：橘內每歌 <br/>
                學號：R11142010 <br/>
                Email: R11142010@ntu.edu.tw
              </p>
          </div>
      </div>
  </div>
    )
}
export default Aboutus;