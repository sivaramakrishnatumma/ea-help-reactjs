import {
  showLoader,
  getProducts,
  getProductsSuccess,
  getProductsError,
  productSelected,
  platformSelected,
  topicSelected,
  issueSelected,
  showSelectedProduct,
  showSelectedTopic,
  getPlatformsSuccess,
  getPlatformsError,
  getTopicsSuccess,
  getTopicsError,
  getIssuesSuccess,
  getIssuesError,
  resetToDefault,
  changePlatform,
  sendEmail,
  sendEmailSuccess,
  sendEmailError
} from "./actions";

describe("it should test all actions", () => {
  it("show loader action", () => {
    const expectedAction = {
      type: "SHOW_LOADER"
    };
    expect(showLoader()).toEqual(expectedAction);
  });

  it("get products action", () => {
    const expectedAction = {
      type: "GET_PRODUCTS"
    };
    expect(getProducts()).toEqual(expectedAction);
  });

  it("get products success action", () => {
    const data = [];
    const expectedAction = {
      type: "GET_PRODUCTS_SUCCESS",
      data: []
    };
    expect(getProductsSuccess(data)).toEqual(expectedAction);
  });

  it("get products error action", () => {
    const expectedAction = {
      type: "GET_PRODUCTS_FAILURE"
    };
    expect(getProductsError()).toEqual(expectedAction);
  });

  it("product selected action", () => {
    const product = "";
    const expectedAction = {
      type: "PRODUCT_SELECTED",
      product: ""
    };
    expect(productSelected(product)).toEqual(expectedAction);
  });

  it("platform selected action", () => {
    const platform = "";
    const expectedAction = {
      type: "PLATFORM_SELECTED",
      platform: ""
    };
    expect(platformSelected(platform)).toEqual(expectedAction);
  });

  it("topic selected action", () => {
    const topic = "";
    const expectedAction = {
      type: "TOPIC_SELECTED",
      topic: ""
    };
    expect(topicSelected(topic)).toEqual(expectedAction);
  });

  it("issue selected action", () => {
    const issue = "";
    const expectedAction = {
      type: "ISSUE_SELECTED",
      issue: ""
    };
    expect(issueSelected(issue)).toEqual(expectedAction);
  });

  it("show selected product action", () => {
    const product = "";
    const expectedAction = {
      type: "SHOW_SELECTED_PRODUCT",
      product: ""
    };
    expect(showSelectedProduct(product)).toEqual(expectedAction);
  });

  it("show selected topic action", () => {
    const topic = "";
    const expectedAction = {
      type: "SHOW_SELECTED_TOPIC",
      topic: ""
    };
    expect(showSelectedTopic(topic)).toEqual(expectedAction);
  });

  it("get platforms success action", () => {
    const data = [];
    const expectedAction = {
      type: "GET_PLATFORMS_SUCCESS",
      data: []
    };
    expect(getPlatformsSuccess(data)).toEqual(expectedAction);
  });

  it("get platforms error action", () => {
    const expectedAction = {
      type: "GET_PLATFORMS_ERROR"
    };
    expect(getPlatformsError()).toEqual(expectedAction);
  });

  it("get topics success action", () => {
    const data = [];
    const expectedAction = {
      type: "GET_TOPICS_SUCCESS",
      data: []
    };
    expect(getTopicsSuccess(data)).toEqual(expectedAction);
  });

  it("get topics error action", () => {
    const expectedAction = {
      type: "GET_TOPICS_ERROR"
    };
    expect(getTopicsError()).toEqual(expectedAction);
  });

  it("get issues success action", () => {
    const data = [];
    const expectedAction = {
      type: "GET_ISSUES_SUCCESS",
      data: []
    };
    expect(getIssuesSuccess(data)).toEqual(expectedAction);
  });

  it("get issues error action", () => {
    const expectedAction = {
      type: "GET_ISSUES_ERROR"
    };
    expect(getIssuesError()).toEqual(expectedAction);
  });

  it("reset to defaults action", () => {
    const expectedAction = {
      type: "RESET_ALL"
    };
    expect(resetToDefault()).toEqual(expectedAction);
  });

  it("change platform action", () => {
    const expectedAction = {
      type: "CHANGE_PLATFORM"
    };
    expect(changePlatform()).toEqual(expectedAction);
  });

  it("change platform action", () => {
    const body = "";
    const expectedAction = {
      type: "SEND_EMAIL",
      body: ""
    };
    expect(sendEmail(body)).toEqual(expectedAction);
  });

  it("change platform action", () => {
    const body = "";
    const expectedAction = {
      type: "SEND_EMAIL",
      body: ""
    };
    expect(sendEmail(body)).toEqual(expectedAction);
  });

  it("email sending success action", () => {
    const data = "";
    const expectedAction = {
      type: "SEND_EMAIL_SUCCESS",
      data: ""
    };
    expect(sendEmailSuccess(data)).toEqual(expectedAction);
  });

  it("email sending success action", () => {
    const expectedAction = {
      type: "SEND_EMAIL_ERROR"
    };
    expect(sendEmailError()).toEqual(expectedAction);
  });
});
