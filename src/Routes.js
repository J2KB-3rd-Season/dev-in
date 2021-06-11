import React from "react";
import { Route, Switch, withRouter } from "react-router";
import MainContainer from "./pages/main";
import CommunityContainer from "./pages/community";
import ErrorContainer from "./pages/_error";
import MainLayout from "./layouts/main";
import IntroContainer from "./pages/intro";
import RankingContainer from "./pages/ranking";
import ServiceContainer from "./pages/service";
import SignInContainer from "./pages/signIn";
import SignUpContainer from "./pages/signUp";
import EmailSignupContainer from "./pages/emailSignup";
import FindIdContainer from "./pages/findId";
import FindPwdContainer from "./pages/findPwd";
import IdConfirmContainer from "./pages/idConfirm";
import ProfileContainer from "./pages/profile";
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
        <Route path="/signIn" component={SignInContainer} exact />
        <Route path="/signUp" component={SignUpContainer} exact />
        <Route path="/emailSignup" component={EmailSignupContainer} exact />
        <Route path="/findId" component={FindIdContainer} exact />
        <Route path="/findPwd" component={FindPwdContainer} exact />
        <Route path="/idConfirm" component={IdConfirmContainer} exact />
        <Route path="/profile" component={ProfileContainer} exact />
        <Route path="/:user" component={UserContainer} exact />
        <Route path="*" component={ErrorContainer} />
      </Switch>
    </MainLayout>
  );
}
export default withRouter(Routes);
