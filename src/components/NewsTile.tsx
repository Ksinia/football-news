import React from "react";
import { News } from "../types";
import "./NewsTile.css";

type OwnProps = {
  news: News;
};

function NewsTile(props: OwnProps) {
  const { title, description, url, urlToImage } = props.news;
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <div className="tile">
        {urlToImage && (
          <div className="image">
            <img src={urlToImage} alt={title} />
          </div>
        )}
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
