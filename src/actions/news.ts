import { MyThunkAction, News } from "../types";
import { AnyAction } from "redux";
import apiKey from "../apiKey";

export const fetchNews = (): MyThunkAction => async (dispatch) => {
  try {
    const response = await fetch(
      `http://newsapi.org/v2/everything?q=football&from=2020-07-09&sortBy=publishedAt&apiKey=${apiKey}`
    );
    const body = await response.json();
    const action = newsFetched(body.articles);
    dispatch(action);
  } catch (error) {
    console.warn("error:", error);
  }
};

export const NEWS_FETCHED = "NEWS_FETCHED";

export const newsFetched = (news: News[]): AnyAction => {
  return {
    type: NEWS_FETCHED,
    payload: news,
  };
};
