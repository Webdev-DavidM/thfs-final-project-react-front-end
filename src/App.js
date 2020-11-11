import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import NotFound from "./components/NotFound";
import UserSignUp from "./components/UserSignUp";
import UserSignIn from "./components/UserSignIn";
import UserSignOut from "./components/UserSignOut";
import Courses from "./components/Courses";
import CourseDetail from "./components/CourseDetail";
import CreateCourse from "./components/CreateCourse";
import UpdateCourse from "./components/UpdateCourse";
import Forbidden from "./components/Forbidden";
import Error from "./components/Error";
import ModalBox from "./components/ModalBox";
import withContext from "./Context";
import PrivateRoute from "./PrivateRoute";
import Modal from "react-bootstrap/Modal";

const HeaderWithContext = withContext(Header);
const UserSignUpWithContext = withContext(UserSignUp);
const UserSignInWithContext = withContext(UserSignIn);
const UserSignOutWithContext = withContext(UserSignOut);
const CoursesWithContext = withContext(Courses);
const CourseDetailWithContext = withContext(CourseDetail);
const CreateCourseWithContext = withContext(CreateCourse);
const UpdateCourseWithContext = withContext(UpdateCourse);

class App extends React.Component {
  state = { showModal: true };

  closeModel = () => {
    this.setState({
      showModal: false,
    });
  };

  render() {
    let modal = this.state.showModal ? (
      <ModalBox close={this.closeModel} />
    ) : null;

    return (
      <>
        <Router basename={process.env.PUBLIC_URL}>
          <div>
            {modal}
            <HeaderWithContext />
            <Switch>
              <Route exact path="/" component={CoursesWithContext} />
              <PrivateRoute
                exact
                path="/courses/create"
                component={CreateCourseWithContext}
              />
              <Route
                exact
                path="/courses/:id"
                component={CourseDetailWithContext}
              />
              ;
              <PrivateRoute
                exact
                path="/courses/:id/update"
                component={UpdateCourseWithContext}
              />
              <Route exact path="/forbidden" component={Forbidden} />
              <Route exact path="/signin" component={UserSignInWithContext} />
              <Route exact path="/signup" component={UserSignUpWithContext} />
              <Route exact path="/signout" component={UserSignOutWithContext} />
              <Route exact path="/error" component={Error} />
              <Route exact path="/notfound" component={NotFound} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </Router>
      </>
    );
  }
}

export default App;
