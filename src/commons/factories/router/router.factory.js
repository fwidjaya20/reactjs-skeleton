import React from 'react';
import { Route } from 'react-router-dom';

export const routeFactory = (routeObj) => {
    return routeObj.map((value, index) => {
        return (
          <Route
              key={index}
              exact={value.exact}
              path={value.path}
              render={(props) => {
                  if (value.middleware) {
                      const mdRet = value.middleware
                          .map((cl) => {
                              const obj = new cl();
                              return obj.handle() ? obj.handle() : null;
                          })
                          .filter((el) => el != null);

                      if (mdRet.length > 0) {
                          return mdRet[0];
                      }
                  }

                  return <value.component {...props} />
            }}/>
        );
    });
};
