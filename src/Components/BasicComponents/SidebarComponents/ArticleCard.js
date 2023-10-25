import React from "react";

function ArticleCard({ title, date }) {
  return (
    <article className="media mb-4 px-4">
      <div className="inner-content px-5 py-4">
        <h2 className="subtitle is-6 mb-2 has-text-white-ter">{title}</h2>
        <h4 className="post-subtitle">
          <i className="fa fa-circle mr-2 is-size-7 has-color-theme"></i>
          <span className="has-text-grey">{date}</span>
        </h4>
      </div>
    </article>
  );
}

export default ArticleCard;
