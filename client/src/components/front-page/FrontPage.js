import React, { Fragment, useState } from "react";
// import { connect } from "react-redux";

import AuthModal from "../auth-modal/AuthModal";

const FrontPage = props => {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  return (
    <Fragment>
      <AuthModal show={show} onHide={handleClose} />
    </Fragment>
  );
};

export default FrontPage;
// export default connect(mapStateToProps)(FrontPage);
