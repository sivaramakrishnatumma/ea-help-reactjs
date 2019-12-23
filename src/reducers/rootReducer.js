const intialState = {
  products: [],
  platforms: [],
  topics: [],
  issues: [],
  selectedProduct: null,
  selectedPlatform: null,
  selectedTopic: null,
  selectedIssue: null,
  loading: false,
  error: false,
  isEmailSent: false
};
export default (state = intialState, action) => {
  switch (action.type) {
    case "SHOW_LOADER":
      return {
        ...state,
        loading: true
      };

    case "SHOW_SELECTED_PRODUCT":
      return {
        ...state,
        selectedProduct: action.product
      };

    case "PLATFORM_SELECTED":
      return {
        ...state,
        selectedPlatform: action.platform
      };

    case "SHOW_SELECTED_TOPIC":
      return {
        ...state,
        selectedTopic: action.topic,
        selectedIssue: null
      };

    case "ISSUE_SELECTED":
      return {
        ...state,
        selectedIssue: action.issue
      };
    case "GET_PRODUCTS_SUCCESS":
      return {
        ...state,
        products: action.data,
        loading: false
      };
    case "GET_PRODUCTS_ERROR":
      return {
        ...state,
        loading: false,
        error: true
      };
    case "GET_PLATFORMS_SUCCESS":
      return {
        ...state,
        platforms: action.data,
        loading: false
      };
    case "GET_PLATFORMS_ERROR":
      return {
        ...state,
        loading: false,
        error: true
      };
    case "GET_TOPICS_SUCCESS":
      return {
        ...state,
        topics: action.data,
        loading: false
      };
    case "GET_TOPICS_ERROR":
      return {
        ...state,
        loading: false,
        error: true
      };
    case "GET_ISSUES_SUCCESS":
      return {
        ...state,
        issues: action.data,
        loading: false
      };
    case "GET_ISSUES_ERROR":
      return {
        ...state,
        loading: false,
        error: true
      };
    case "SEND_EMAIL_SUCCESS":
      return {
        ...state,
        loading: false,
        isEmailSent: true
      };
    case "SEND_EMAIL_ERROR":
      return {
        ...state,
        loading: false,
        error: true,
        isEmailSent: false
      };

    case "RESET_ALL":
      return {
        ...state,
        selectedProduct: null,
        platforms: [],
        selectedPlatform: null,
        topics: [],
        selectedTopic: null,
        issues: [],
        selectedIssue: null,
        isEmailSent: false
      };
    case "CHANGE_PLATFORM":
      return {
        ...state,
        selectedPlatform: null,
        selectedTopic: null,
        issues: [],
        selectedIssue: null
      };
    default:
      return state;
  }
};
