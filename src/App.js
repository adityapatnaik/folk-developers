import React, { createContext, useReducer } from "react";
import "./styles.css";
import { Switch, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Signin from "./components/Signin/Signin";
import Dashboard from "./components/Dashboard/Dashboard";
import { projects, profile, jobs } from "./components/data";
import ProtectedRoute from "./components/ProtectedRoutes/ProtectedRoute";
import * as firebase from 'firebase';

export const GlobalState = createContext();
export const GlobalDispatch = createContext();

// const config = {

// }

// firebase.initializeApp(config);

const initialState = {
  isRegister: false,
  isLogin: false,
  jobs: jobs,
  projects: projects,
  profile: {}
};

const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_ISREG":
      return { ...state, isRegister: action.payload };
    case "CHANGE_ISLOGIN":
      return { ...state, isLogin: action.payload };
    case "CHANGE_JOBS":
      return { ...state, jobs: action.payload };
    case "CHANGE_PROJECTS":
      return { ...state, projects: action.payload };
    case "CHANGE_PROFILE":
      return { ...state, profile: action.payload };
    default:
      return 0;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // if (!state.isLogin) {
  return (
    <GlobalState.Provider value={{ state: state }}>
      <GlobalDispatch.Provider value={{ dispatch: dispatch }}>
        <div className="App">
          <Switch>
            <Route exact path="/signup" component={Signin} />
            <Route exact path="/login" component={Login} />
            <ProtectedRoute
              path="/dashboard"
              isLogin={state.isLogin}
              component={Dashboard}
            />
            <Route exact path="*" component={Login} />
          </Switch>
        </div>
      </GlobalDispatch.Provider>
    </GlobalState.Provider>
  );
  // } else {
  //   return (
  //     <GlobalState.Provider value={{ state: state }}>
  //       <GlobalDispatch.Provider value={{ dispatch: dispatch }}>
  //         <Switch>
  //           <Route exact path="*" component={Dashboard} />
  //         </Switch>
  //       </GlobalDispatch.Provider>
  //     </GlobalState.Provider>
  //   );
  // }
};

export default App;
