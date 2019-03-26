import React, { Component } from "react";

class Likes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      likes: this.props.likes,
      clicked: false
    };
  }

  likesGoUp = () => {
    let likes = this.state.likes + 1;
    this.setState({
      likes,
      clicked: !this.state.clicked
    });
  };

  render() {
    return (
      <div className="icons">
        <i
          onClick={this.likesGoUp}
          className={`far fa-heart fa-2x heart ${
            this.state.clicked ? "fas fa-heart " : null
          }`}
        />
        <i className="far fa-comment fa-2x" />
        <p>{this.state.likes} likes </p>
      </div>
    );
  }
}
export default Likes;
