/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 * 
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from 'react';
import BlogReachView from 'views/BlogReachView';
import Main from 'layouts/Main';

const BlogReachViewPage = () => {
  return (
    <div className="container">
      <Main>
        <BlogReachView />
      </Main>
    </div>
  )
};

export default BlogReachViewPage;
