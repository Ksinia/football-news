import React from "react";
import { News } from "../types";

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
    <div className="tile">
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={url}>Link</a>
    </div>
  );
}

export default NewsTile;
