import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "../../../shared/components/UIElements/Button/Button";
import { sendEmail } from "../../../actions/actions";

class EmailForm extends Component {
  state = { formValues: {} };

  inputHandler = e => {
    let formValues = this.state.formValues;
    formValues[e.target.id] = e.target.value;
    this.setState({ formValues });
  };

  submitHandler = e => {
    e.preventDefault();
    const { product, platform, topic, issue } = this.props;
    const body = {
      product: product && product.name,
      platform: platform && platform.name,
      topic: topic && topic.name,
      issue: issue && issue.name,
      name: this.state.formValues.name,
      email: this.state.formValues.email,
      comments: this.state.formValues.comments
    };
    this.props.dispatch(sendEmail(body));
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Please enter your name"
            id="name"
            onInput={this.inputHandler}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            className="form-control"
            placeholder="Please enter your email address"
            id="email"
            onInput={this.inputHandler}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Comments:</label>
          <textarea
            className="form-control"
            placeholder="Write your comments"
            id="comments"
            onInput={this.inputHandler}
            rows="8"
          ></textarea>
        </div>
        <Button type="submit" className="btn btn-dark">
          Send Email
        </Button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  // if (state.isEmailSent) {
  //   alert("Email Sent Successfully");
  // }
  return {
    ...state,
    product: state.selectedProduct,
    platform: state.selectedPlatform,
    topic: state.selectedTopic,
    issue: state.selectedIssue
  };
};

export default connect(mapStateToProps)(EmailForm);
