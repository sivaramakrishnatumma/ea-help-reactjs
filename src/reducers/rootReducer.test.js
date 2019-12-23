import rootReducer from "./rootReducer";
const initialState = {
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
describe("it should test reducer", () => {
  it("has a default state", () => {
    expect(rootReducer(undefined, { type: "unexpected" })).toEqual(
      initialState
    );
  });

  it("type SHOW_LOADER", () => {
    expect(rootReducer(initialState, { type: "SHOW_LOADER" })).toEqual({
      ...initialState,
      loading: true
    });
  });

  it("type SHOW_SELECTED_PRODUCT", () => {
    expect(
      rootReducer(initialState, { type: "SHOW_SELECTED_PRODUCT", product: "" })
    ).toEqual({
      ...initialState,
      selectedProduct: ""
    });
  });

  it("type PLATFORM_SELECTED", () => {
    expect(
      rootReducer(initialState, { type: "PLATFORM_SELECTED", platform: "" })
    ).toEqual({
      ...initialState,
      selectedPlatform: ""
    });
  });

  it("type SHOW_SELECTED_TOPIC", () => {
    expect(
      rootReducer(initialState, { type: "SHOW_SELECTED_TOPIC", topic: "" })
    ).toEqual({
      ...initialState,
      selectedTopic: "",
      selectedIssue: null
    });
  });

  it("type ISSUE_SELECTED", () => {
    expect(
      rootReducer(initialState, { type: "ISSUE_SELECTED", issue: "" })
    ).toEqual({
      ...initialState,
      selectedIssue: ""
    });
  });

  it("type GET_PRODUCTS_SUCCESS", () => {
    expect(
      rootReducer(initialState, { type: "GET_PRODUCTS_SUCCESS", data: [] })
    ).toEqual({
      ...initialState,
      products: [],
      loading: false
    });
  });

  it("type GET_PRODUCTS_ERROR", () => {
    expect(rootReducer(initialState, { type: "GET_PRODUCTS_ERROR" })).toEqual({
      ...initialState,
      loading: false,
      error: true
    });
  });

  it("type GET_PLATFORMS_SUCCESS", () => {
    expect(
      rootReducer(initialState, { type: "GET_PLATFORMS_SUCCESS", data: [] })
    ).toEqual({
      ...initialState,
      platforms: [],
      loading: false
    });
  });

  it("type GET_PLATFORMS_ERROR", () => {
    expect(rootReducer(initialState, { type: "GET_PLATFORMS_ERROR" })).toEqual({
      ...initialState,
      loading: false,
      error: true
    });
  });

  it("type GET_TOPICS_SUCCESS", () => {
    expect(
      rootReducer(initialState, { type: "GET_TOPICS_SUCCESS", data: [] })
    ).toEqual({
      ...initialState,
      topics: [],
      loading: false
    });
  });

  it("type GET_TOPICS_ERROR", () => {
    expect(rootReducer(initialState, { type: "GET_TOPICS_ERROR" })).toEqual({
      ...initialState,
      loading: false,
      error: true
    });
  });

  it("type GET_ISSUES_SUCCESS", () => {
    expect(
      rootReducer(initialState, { type: "GET_ISSUES_SUCCESS", data: [] })
    ).toEqual({
      ...initialState,
      issues: [],
      loading: false
    });
  });

  it("type GET_ISSUES_ERROR", () => {
    expect(rootReducer(initialState, { type: "GET_ISSUES_ERROR" })).toEqual({
      ...initialState,
      loading: false,
      error: true
    });
  });

  it("type SEND_EMAIL_SUCCESS", () => {
    expect(rootReducer(initialState, { type: "SEND_EMAIL_SUCCESS" })).toEqual({
      ...initialState,
      loading: false,
      isEmailSent: true
    });
  });

  it("type SEND_EMAIL_ERROR", () => {
    expect(rootReducer(initialState, { type: "SEND_EMAIL_ERROR" })).toEqual({
      ...initialState,
      loading: false,
      error: true,
      isEmailSent: false
    });
  });

  it("type RESET_ALL", () => {
    expect(rootReducer(initialState, { type: "RESET_ALL" })).toEqual(
      initialState
    );
  });

  it("type CHANGE_PLATFORM", () => {
    expect(rootReducer(initialState, { type: "CHANGE_PLATFORM" })).toEqual({
      ...initialState,
      selectedPlatform: null,
      selectedTopic: null,
      issues: [],
      selectedIssue: null
    });
  });
});
