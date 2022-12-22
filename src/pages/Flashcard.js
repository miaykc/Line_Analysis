import React, { Component } from "react";
import sentiment from "sentiment-zh_cn_web";
import Chinese from "chinese-s2t"
class Flashcard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sentimentScore: null,
      generalSentiment: null,
    };
    this.findSentiment = this.findSentiment.bind(this);
  }

  findSentiment(event) {
    const s2tResult = Chinese.t2s(event.target.value)
    const result = sentiment(s2tResult);
    this.setState({
      sentimentScore: result.score,
    });
    if (result.score < 0) {
      this.setState({
        generalSentiment: "岌岌可危😰🤯😱",
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
        <h2>Sentiment Analysis in Line</h2>
        <p>Enter text for real-time analysis:</p>
        <textarea onChange={this.findSentiment} />
        <p>關係分數: {this.state.sentimentScore}</p>
        <p>你們的關係: {this.state.generalSentiment}</p>
      </div>
    );
  }
}

export default Flashcard;