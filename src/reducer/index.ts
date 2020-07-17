import { AnyAction } from "redux";

import { News } from "../types";
import { NEWS_FETCHED } from "../actions/news";

export function reducer(state: News[] = [], action: AnyAction) {
  switch (action.type) {
    case NEWS_FETCHED: {
      return action.payload;
    }
    default:
      return state;
  }
}

export type RootState = ReturnType<typeof reducer>;
