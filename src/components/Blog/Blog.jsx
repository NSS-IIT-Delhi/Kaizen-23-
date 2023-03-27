import React from "react";
import "./Blog.css";
import blogThumbnail from "./blogThumbnail.jpg";

export default function Blog() {
  return (
    <div className="app__blog app__container app__flex">
      <h1 className="head-text text-gradient">Featured in Conscious Carma</h1>
      <div className="app__blog-container gradient">
        <a href="https://consciouscarma.com/initiatives/events/kaizen-2023-a-vow-to-celebrate-mankind-at-its-best" target='_blank'>
          <img
            className="blog__thumbnail"
            src={blogThumbnail}
            alt="thumbnail"
          />
        </a>
      </div>
    </div>
  );
}
