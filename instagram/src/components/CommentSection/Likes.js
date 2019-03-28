import React, { Component } from "react";

class Likes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //setting the likes on this state to the props likes that was brough down
      likes: this.props.likes,
      // setting a state to a boolean of false
      clicked: false
    };
  }

  likesGoUp = () => {
    // storing a new likes variable that just adds the existing amount of
    // likes by 1
    let likes = this.state.likes + 1;
    // if the state of clicked shows true we will minus 1 from the existing likes
    // so not one account can give a post an umlimited amount of likes
    if (this.state.clicked === true) {
      likes = this.state.likes - 1;
    }
    this.setState({
      //setting the new likes variable to to the state inplace of the old likes
      likes,
      // everytime its clicked the boolean will show the opposite boolean
      // true / false toggle
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
