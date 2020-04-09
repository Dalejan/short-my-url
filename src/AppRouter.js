import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router";

class AppRouter extends Component {
  render() {
    const { routes } = this.props;
    return (
      <Switch>
        {routes.map((prop, key) => {
          if (prop.redirect)
            return <Redirect from={prop.path} to={prop.to} key={key} />;
          return (
            <Route path={prop.path} component={prop.component} key={key} />
          );
        })}
      </Switch>
    );
  }
}

export default AppRouter;
