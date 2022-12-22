import React, { Component } from "react";
import sentiment from "sentiment-zh_cn_web";
import Chinese from "chinese-s2t";
class Analysis extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sentimentScore: null,
      generalSentiment: null,
    };
    this.findSentiment = this.findSentiment.bind(this);
  }

  findSentiment(event) {
    const s2tResult = Chinese.t2s(event.target.value);
    const result = sentiment(s2tResult);
    this.setState({
      sentimentScore: result.score,
    });
    if (result.score < 0) {
      this.setState({
        generalSentiment: "森氣氣or桑心😰🤯😱",
      });
    } else if (result.score > 0) {
      this.setState({
        generalSentiment: "不錯不錯🥰🥳🤭",
      });
    } else {
      this.setState({
        generalSentiment: "還...ok🤔😌😶‍🌫️",
      });
    }
  }

  render() {
    return (
      <div className="App">
        <h2>話中有話｜他心情如何🥰</h2>
        <p>請貼上你想分析的一句對話紀錄</p>
        <textarea cols="50" rows="5" onChange={this.findSentiment} />
        <p>森氣氣or桑心😰🤯😱</p>
        <p>不錯不錯🥰🥳🤭</p>
        <p>還...ok🤔😌😶‍🌫️</p>
        <p>開心指數:👉 {this.state.sentimentScore}</p>
        <p>他覺得:👉 {this.state.generalSentiment}</p>
      </div>
    );
  }
}

export default Analysis;
