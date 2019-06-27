import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: "",
      currentCharCount: 0
    };
  }

  changeHandler = (event) => {

    this.setState({
      [event.target.name]: event.target.value,
      currentCharCount: event.target.value.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={event => this.changeHandler(event)} />
        <div>Total characters used: <span>{this.state.currentCharCount}</span></div>
        <div>Total characters remaining: <span>{this.props.maxChars - this.state.currentCharCount}</span></div>
      </div>
    );
  }
}

export default TwitterMessage;
