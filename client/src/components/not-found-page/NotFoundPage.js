import React, { Fragment } from "react";

const NotFoundPage = () => {
  return (
    <Fragment>
      <div className="container">
        <div className="jumbotron text-center">
          <p className="font-weight-bold">Sorry, this page isn't available.</p>
          <p>
            The link you followed may be broken, or the page may have been
            removed.
            {/* <a href="/">Go back to Favorite Places.</a> */}
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default NotFoundPage;
