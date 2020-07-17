import React from "react";
import { News } from "../types";
import "./NewsTile.css";

type OwnProps = {
  news: News;
};

function NewsTile(props: OwnProps) {
  const {
    source,
    author,
    title,
    description,
    url,
    urlToImage,
    publishedAt,
    content,
  } = props.news;
  return (
    <a href={url} target="_blank">
      <div className="tile">
        <div className="image">
          <img src={urlToImage} />
        </div>
        <div className="tile-body">
          <h3>{title}</h3>
          {/* </div> */}
          <p>{description}</p>
        </div>
      </div>
    </a>
  );
}

export default NewsTile;
