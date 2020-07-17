import { Action, AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";

import { RootState } from "./reducer";

export interface News {
  source: {
    id: null | number;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

export type MyThunkAction<A extends Action = AnyAction> = ThunkAction<
  void,
  RootState,
  unknown,
  A
>;
