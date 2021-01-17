/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 * 
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from 'react';
import BlogArticle from 'views/BlogArticle';
import Main from 'layouts/Main';

const BlogArticlePage = () => {
  return (
    <div className="container">
      <Main>
        <BlogArticle />
      </Main>
    </div>
  )
};

export default BlogArticlePage;
