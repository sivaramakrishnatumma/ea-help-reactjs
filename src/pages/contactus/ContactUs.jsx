import React, { Component } from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";

import {
  getProducts,
  resetToDefault,
  changePlatform,
  productSelected,
  platformSelected,
  topicSelected,
  issueSelected
} from "../../actions/actions";

import Breadcrumb from "../../shared/components/Breadcrumb/Breadcrumb";
import SearchBar from "../../shared/components/SearchBar/SearchBar";

import ImageGrid from "./Components/ImageGrid";
import SelectedItem from "./Components/SelectedItem";
import GridsCard from "./Components/GridsCard";
import EmailForm from "./Components/EmailForm";
import "./ContactUs.css";

class ContactUs extends Component {
  state = {
    searchKey: ""
  };

  componentDidMount() {
    this.props.dispatch(getProducts());
  }

  filterProducts = product => {
    return (
      product.altNames
        .toLowerCase()
        .indexOf(this.state.searchKey.toLowerCase()) > -1
    );
  };

  onSearch = key => {
    this.setState({ searchKey: key });
  };

  render() {
    const {
      product,
      products,
      platform,
      platforms,
      topic,
      topics,
      issue,
      issues,
      loading,
      isEmailSent,
      dispatch
    } = this.props;
    const parentPaths = [{ name: "Home", path: "/" }];
    return (
      <React.Fragment>
        <Breadcrumb items={parentPaths} currentPage="Case Information" />
        <div className="page_title">CASE INFORMATION</div>
        <div className="product_container">
          <div className="disclaimer">*Indicates required field</div>
          <div className="help-text">What can we help you with?</div>
          <div className="help-text">Select the game or service.*</div>
          {!product && (
            <SearchBar
              onKeyPress={this.onSearch}
              placeholder="Search any EA product"
              className="search-bar"
            />
          )}

          {!product && (
            <ImageGrid
              items={
                this.state.searchKey
                  ? products.filter(this.filterProducts)
                  : products
              }
              title="product"
              onSelect={product => {
                this.setState({ searchKey: "" });
                dispatch(productSelected(product));
              }}
            />
          )}

          {product && (
            <React.Fragment>
              <SelectedItem
                name={product.name}
                imageUrl={product.imageUrl}
                type="product"
                onChange={() => dispatch(resetToDefault())}
              />

              <div className="platforms-label">
                What platform are you playing on?*
              </div>
            </React.Fragment>
          )}

          {product && !platform && platforms && (
            <ImageGrid
              items={platforms}
              title="platform"
              onSelect={platform =>
                dispatch(platformSelected(platform, this.props.product.issues))
              }
            />
          )}

          {product && platform && (
            <SelectedItem
              name={platform.name}
              imageUrl={platform.imageUrl}
              type="platform"
              onChange={() => dispatch(changePlatform())}
            />
          )}

          {product && platform && (
            <GridsCard
              items={topics}
              title="topic"
              selectedItem={topic}
              onSelect={topic => dispatch(topicSelected(topic))}
            />
          )}

          {product && platform && topic && (
            <GridsCard
              items={issues}
              title="issue"
              selectedItem={issue}
              onSelect={issue => dispatch(issueSelected(issue))}
            />
          )}

          {product && platform && topic && issue && (
            <div className="submit-button-container">
              <EmailForm></EmailForm>
            </div>
          )}
        </div>
        {loading && (
          <Loader
            type="ThreeDots"
            color="#00BFFF"
            height={80}
            width={80}
            className="loader"
            //  timeout={3000} //3 secs
          />
        )}
        {isEmailSent && (
          <div className="alert alert-success" role="alert">
            <span
              className="close"
              onClick={() => {
                window.scrollTo(0, 0);
                dispatch(resetToDefault());
              }}
            >
              &times;
            </span>
            Email sent successfully
          </div>
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state,
    product: state.selectedProduct,
    platform: state.selectedPlatform,
    topic: state.selectedTopic,
    issue: state.selectedIssue
  };
};

export default connect(mapStateToProps)(ContactUs);
