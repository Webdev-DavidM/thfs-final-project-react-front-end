import React from "react";
import Button from "react-bootstrap/Button";

function ModalBox(props) {
  return (
    <div className="modal">
      <div className="container">
        <h1>How to use and navigate this site</h1>
        <h2>
          This website allows users to browse available courses. If you are
          signed in and have created a course, when you click on that course to
          view it, you can edit and delete it. You can view other people's
          course but can't edit or delete them. To play around with it you can
          create your own user to create a course, or sign in as
          david@mulholland.com, password easy123 if you want to edit my courses.
        </h2>

        <Button variant="primary" onClick={() => props.close()}>
          OK
        </Button>
      </div>
    </div>
  );
}

export default ModalBox;
