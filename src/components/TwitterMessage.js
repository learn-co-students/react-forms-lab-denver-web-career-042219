import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message:"default",
      count:140
    };
  }


  handleMessage = event => {
    this.setState({
      message: event.target.value
    }),
    this.setState(previousState => {
      return {
        count: previousState.count - 1
      }
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={event =>this.handleMessage(event) }/>
        <strong>Characters Remaining:</strong>
        <a>{this.state.count}</a>
      </div>
    );
  }
}

export default TwitterMessage;
