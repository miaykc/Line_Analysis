import "../styles.css";

import chat1 from "/Users/ykcmia/React_lineconvo3/assignment/src/pages/chat1.jpg"
import chat2 from "/Users/ykcmia/React_lineconvo3/assignment/src/pages/chat2.jpg"
import chat3 from  "/Users/ykcmia/React_lineconvo3/assignment/src/pages/chat3.jpg"



function Aboutus() {
    return (
      <div className="article">
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
      </div>
  </div>
    )
}
export default Aboutus;
