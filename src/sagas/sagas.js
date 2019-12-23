import { put, takeEvery, takeLatest, all, call } from "redux-saga/effects";
import axios from "axios";
import {
  showLoader,
  getProductsSuccess,
  getProductsError,
  showSelectedProduct,
  showSelectedTopic,
  getPlatformsSuccess,
  getPlatformsError,
  getTopicsSuccess,
  getTopicsError,
  getIssuesSuccess,
  getIssuesError,
  sendEmailSuccess,
  sendEmailError
} from "../actions/actions";

const baseURL = "http://localhost:5000";

// Sagas
function* watchFetchProducts() {
  yield takeEvery("GET_PRODUCTS", fetchProductsAsync);
}

function* fetchProductsAsync() {
  try {
    yield put(showLoader());
    const res = yield call(() => axios(`${baseURL}/products`));
    yield put(getProductsSuccess(res.data));
  } catch (error) {
    yield put(getProductsError());
  }
}

function* watchProductSelect() {
  yield takeLatest("PRODUCT_SELECTED", fetchPlatformsAndTopicsAsync);
}

function* fetchPlatformsAndTopicsAsync(action) {
  yield put(showSelectedProduct(action.product));
  try {
    yield put(showLoader());
    const res = yield call(() =>
      axios.post(`${baseURL}/platforms/`, {
        platforms: action.product.platforms
      })
    );
    yield put(getPlatformsSuccess(res.data));
  } catch (error) {
    yield put(getPlatformsError());
  }
  try {
    yield put(showLoader());
    const res = yield call(() =>
      axios.post(`${baseURL}/topics/`, {
        topics: action.product.topics
      })
    );
    yield put(getTopicsSuccess(res.data));
  } catch (error) {
    yield put(getTopicsError());
  }
}

function* watchTopicSelect() {
  yield takeEvery("TOPIC_SELECTED", fetchIssuesAsync);
}

function* fetchIssuesAsync(action) {
  yield put(showSelectedTopic(action.topic));
  try {
    yield put(showLoader());
    const res = yield call(() =>
      axios.post(`${baseURL}/issues/`, {
        issues: action.topic.issues
      })
    );
    yield put(getIssuesSuccess(res.data));
  } catch (error) {
    yield put(getIssuesError());
  }
}

function* watchSendEmail() {
  yield takeEvery("SEND_EMAIL", sendEmailAsync);
}

function* sendEmailAsync(action) {
  try {
    yield put(showLoader());
    const res = yield call(() => axios.post(`${baseURL}/email/`, action.body));
    yield put(sendEmailSuccess(res.data));
  } catch (error) {
    yield put(sendEmailError());
  }
}

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    watchFetchProducts(),
    watchProductSelect(),
    watchTopicSelect(),
    watchSendEmail()
  ]);
}
