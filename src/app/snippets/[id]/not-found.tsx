import React from "react";

const SnippetNotFound = (props) => {
  console.log(props);
  return (
    <div>
      <h1 className="text-xl bold">
        Sorry but we couldn't find that particular snippet
      </h1>
    </div>
  );
};

export default SnippetNotFound;
