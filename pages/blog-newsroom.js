/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 * 
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from 'react';
import BlogNewsroom from 'views/BlogNewsroom';
import Main from 'layouts/Main';

const BlogNewsroomPage = () => {
  return (
    <div className="container">
      <Main>
        <BlogNewsroom />
      </Main>
    </div>
  )
};

export default BlogNewsroomPage;
