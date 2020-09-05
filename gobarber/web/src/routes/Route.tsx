import React, { ComponentType } from 'react';
import {
  Route as ReactDOMRoute,
  RouteProps as ReactDOMProps,
  Redirect,
} from 'react-router-dom';

import { useAuth } from '../hooks/auth';

interface IRouteProps extends ReactDOMProps {
  isPrivate?: boolean;
  component: ComponentType;
}

/**
 * Lógica da autenticação
 *
 * isPrivate/user
 * true/true = OK
 * true/false = Redirecionar para o login
 * false/true = Redirecionar para dashboard
 * false/false = OK
 */

const Route: React.FC<IRouteProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const { user } = useAuth();

  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        // se não tiver user = false, logo isPrivate = false
        if (isPrivate === !!user) {
          return <Component />;
        }

        return (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : '/dashboard',
              state: { from: location }, // Manter histórico de navegação
            }}
          />
        );
      }}
    />
  );
};

export default Route;
