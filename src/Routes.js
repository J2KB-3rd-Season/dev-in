import React from "react";
import { Route, Switch, withRouter } from "react-router";
import MainContainer from "./pages/main";
import ErrorContainer from "./pages/_error";
import MainLayout from "./layouts/main";
function Routes(props) {
  return (
    <MainLayout>
      <Switch location={props.location}>
        <Route path="/" component={MainContainer} exact />
        <Route path="*" component={ErrorContainer} />
      </Switch>
    </MainLayout>
  );
}
export default withRouter(Routes);
