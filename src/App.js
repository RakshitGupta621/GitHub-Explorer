import React, { useState } from "react";
import "./App.css";

//bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

//react-router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

//firebase
import firebase from "firebase/app";
import "firebase/auth";


//components
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import PageNotFound from "./pages/PageNotFound";
import { UserContext } from "./context/UserContext";
import Footer from "./layout/Footer";
import Header from "./layout/Header";

//init firebase
import firebaseConfig from "./Config/firebaseConfig"
firebase.initializeApp(firebaseConfig)

const App = () => {
  /*Make sure state's initial value is null, not an empty object otherwise it will not be checked properly if the user in logged in or not */
  const [user, setUser] = useState(null);

  return (
    <Router>
      <ToastContainer />
      <UserContext.Provider value={{ user, setUser }}>
        <Header />
        {/*Inside the Header we need a Switch to be able to be able to conditionally render different pages on different routes */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="*" component={PageNotFound} />
        </Switch>
        <Footer />
      </UserContext.Provider>
    </Router>
  );
};

export default App;
