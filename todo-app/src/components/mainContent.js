import React from 'react';

const MainContent = ({ pageType }) => {
  return (
    <>
      <div>Main Content</div>
      <div>{pageType}</div>
    </>
  );
};

MainContent.PropTypes = {
  pageType: MainContent.toString.isRequired
};

export default MainContent;
