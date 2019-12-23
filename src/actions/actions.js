export const showLoader = () => {
  return {
    type: "SHOW_LOADER"
  };
};
export const getProducts = () => {
  return {
    type: "GET_PRODUCTS"
  };
};

export const getProductsSuccess = data => {
  return {
    type: "GET_PRODUCTS_SUCCESS",
    data: data
  };
};

export const getProductsError = () => {
  return {
    type: "GET_PRODUCTS_FAILURE"
  };
};

export const productSelected = product => {
  return {
    type: "PRODUCT_SELECTED",
    product
  };
};

export const platformSelected = platform => {
  return {
    type: "PLATFORM_SELECTED",
    platform
  };
};

export const topicSelected = topic => {
  return {
    type: "TOPIC_SELECTED",
    topic
  };
};
export const issueSelected = issue => {
  return {
    type: "ISSUE_SELECTED",
    issue
  };
};

export const showSelectedProduct = product => {
  return {
    type: "SHOW_SELECTED_PRODUCT",
    product
  };
};

export const showSelectedTopic = topic => {
  return {
    type: "SHOW_SELECTED_TOPIC",
    topic
  };
};

export const getPlatformsSuccess = data => {
  return {
    type: "GET_PLATFORMS_SUCCESS",
    data
  };
};

export const getPlatformsError = () => {
  return {
    type: "GET_PLATFORMS_ERROR"
  };
};

export const getTopicsSuccess = data => {
  return {
    type: "GET_TOPICS_SUCCESS",
    data
  };
};

export const getTopicsError = () => {
  return {
    type: "GET_TOPICS_ERROR"
  };
};

export const getIssuesSuccess = data => {
  return {
    type: "GET_ISSUES_SUCCESS",
    data
  };
};

export const getIssuesError = () => {
  return {
    type: "GET_ISSUES_ERROR"
  };
};

export const resetToDefault = () => {
  return {
    type: "RESET_ALL"
  };
};

export const changePlatform = () => {
  return {
    type: "CHANGE_PLATFORM"
  };
};

export const sendEmail = body => {
  return {
    type: "SEND_EMAIL",
    body
  };
};

export const sendingEmail = () => {
  return {
    type: "EMAIL_SENDING"
  };
};

export const sendEmailSuccess = data => {
  return {
    type: "SEND_EMAIL_SUCCESS",
    data
  };
};

export const sendEmailError = () => {
  return {
    type: "SEND_EMAIL_ERROR"
  };
};
