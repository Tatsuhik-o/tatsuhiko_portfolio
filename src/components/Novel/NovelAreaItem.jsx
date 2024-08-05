import React from "react";
import { Link } from "react-router-dom";

const NovelAreaItem = (props) => {
  return (
    <div className="blog-item-two">
      <div className="blog-thumb-two">
        <Link to={props.item.url} target="_blank">
          <img src={props.item.src} alt="" />
        </Link>
      </div>

      <div className="blog-content-two">
        <Link
          to="https://www.linkedin.com/in/tatsuhiko/"
          target="_blank"
          className="tag"
        >
          {props.item.tag}
        </Link>
        <h2 className="title">
          <Link to={props.item.url} target="_blank">
            {props.item.title}
          </Link>
        </h2>
        <p>{props.item.desc}</p>
      </div>
    </div>
  );
};

export default NovelAreaItem;
