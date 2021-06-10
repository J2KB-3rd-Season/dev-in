import React from "react";
import { Route, Switch, withRouter } from "react-router";
import MainContainer from "./pages/main";
import CommunityContainer from "./pages/community";
import ErrorContainer from "./pages/_error";
import MainLayout from "./layouts/main";
import IntroContainer from "./pages/intro";
import RankingContainer from "./pages/ranking";
import ServiceContainer from "./pages/service";
import UserContainer from "./pages/_user";
function Routes(props) {
  return (
    <MainLayout>
      <Switch location={props.location}>
        <Route path="/" component={MainContainer} exact />
        <Route path="/community" component={CommunityContainer} exact />
        <Route path="/intro" component={IntroContainer} exact />
        <Route path="/ranking" component={RankingContainer} exact />
        <Route path="/service" component={ServiceContainer} exact />
        <Route path="/:user" component={UserContainer} exact />
        <Route path="*" component={ErrorContainer} />
      </Switch>
    </MainLayout>
  );
}
export default withRouter(Routes);
