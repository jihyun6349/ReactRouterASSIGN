import React from "react";
import { Link, useRouteMatch, Switch, Route } from "react-router-dom";
import TopicsItem from "./TopicsItem";

function Contact() {
  const { url, path } = useRouteMatch();

  return (
    <div>
      <ul>
        <li>
          <Link to={`${url}/cellphone`}>Cellphone</Link>
        </li>
        <li>
          <Link to={`${url}/email`}>Email</Link>
        </li>
      </ul>

      <Switch>
        <Route path={`${path}/:contact`}>
          <TopicsItem></TopicsItem>
        </Route>
      </Switch>
    </div>
  );
}

export default Contact;
