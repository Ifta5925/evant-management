import React from 'react';
import Layout from './hoc/Layout/Layout'
import { Route, Switch } from 'react-router-dom';
import HomePage from './Container/homepage/homepage';
import OurTeam from './Container/ourTeam/ourTeam';
import Gallery from './Container/gallery/gallery'
import Packages from './Container/packages/packages'
import SocialWork from './Container/socialWorks/socialWorks'
import  ContactUs from './Container/contactUs/contactUs'
import About from './Container/about/about';
import Work from './Container/ourWork/ourWork'
import Login from "../src/Container/login/login";
import SignUp from "../src/Container/signUp/signUp";
import ChangePassword from "./Container/changePassword/changePassword";
import ForgetPassword from "./Container/forgetPassword/forgetPassword";
import User from './Container/UserProfile/UserProfile'
import '@fortawesome/fontawesome-free/css/all.min.css'; import
'bootstrap-css-only/css/bootstrap.min.css'; import
'mdbreact/dist/css/mdb.css';

function App() {
  return (
    <Layout >
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" exact component={About} />
        <Route path="/ourWork" exact component={Work} />

        <Route path="/contact" exact component={ContactUs} />
        <Route path="/gellary" exact component={Gallery} />
        <Route path="/socialWork" exact component={SocialWork} />
        <Route path="/ourTeam" exact component={OurTeam} />
        <Route path="/package" exact component={Packages} />
        <Route path="/login" exact component={Login} />
        <Route path="/signUp" exact component={SignUp} />
        <Route path="/User" exact component={User}/>
        <Route path="/changePassword" exact component={ChangePassword} />
        <Route path="/forgetPassword" exact component={ForgetPassword} />
      </Switch>
    </Layout>
  );
}

export default App;
