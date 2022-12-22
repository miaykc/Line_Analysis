import "../styles.css";

import chat1 from "./chat1.png"
import chat2 from "./chat2.png"
import chat3 from  "./chat3.png"
import chat4 from  "./chat4.png"
import chat5 from  "./chat5.png"



function Aboutus() {
    return (
      <div className="article">
      <h1> 將聊天記錄匯出 👉🏻 選取並複製特定文字 👉🏻 貼上所選文字並進行分析</h1>
      <div className="wrap">
          <div>
          <img src={chat1} alt="chat1" style={{height: "450px", marginTop: "40px"}}/>
          </div>
          <div>
          <img src={chat2} alt="chat2" style={{height: "450px", marginTop: "40px"}}/>
 
          </div>
          <div>
          <img src={chat3} alt="chat3" style={{height: "450px", marginTop: "40px"}}/>
          </div>
          <div>
          <img src={chat4} alt="chat4" style={{height: "450px", marginTop: "40px"}}/>
          </div>
          <div>
          <img src={chat5} alt="chat5" style={{height: "450px", marginTop: "40px"}}/>
          </div>
      </div>
  </div>
    )
}
export default Aboutus;
