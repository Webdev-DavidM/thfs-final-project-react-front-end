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
          course but can't edit or delete them. You can log in as myself,
          username davidm.webdeveloper@gmail.com, password admin123 to amend and
          delete my courses, or create a profile yourself and create your own
          courses.
        </h2>

        <Button variant="primary" onClick={() => props.close()}>
          OK
        </Button>
      </div>
    </div>
  );
}

export default ModalBox;
