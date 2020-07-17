import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchNews } from "../actions/news";
import { RootState } from "../reducer";
import { AnyAction } from "redux";
import { News } from "../types";
import { ThunkDispatch } from "redux-thunk";
import NewsTile from "./NewsTile";

interface OwnProps {
  newsList: News[];
}

interface DispatchProps {
  dispatch: ThunkDispatch<RootState, unknown, AnyAction>;
}

type Props = OwnProps & DispatchProps;

class NewsList extends Component<Props> {
  componentDidMount() {
    this.props.dispatch(fetchNews());
  }

  render() {
    if (this.props.newsList.length === 0) {
      return "Loading...";
    }
    return (
      <div>
        <h1>Football News</h1>
        <div className="newsList">
          {this.props.newsList.map((news) => (
            <NewsTile key={news.url} news={news} />
          ))}
        </div>
      </div>
    );
  }
}
function MapStateToProps(state: RootState) {
  return {
    newsList: state,
  };
}

export default connect(MapStateToProps)(NewsList);
