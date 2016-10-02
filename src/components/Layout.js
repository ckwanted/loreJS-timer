/**
 * This component is intended to reflect the high level structure of your application,
 * and render any components that are common across all views, such as the header or
 * top-level navigation. All other components should be rendered by route handlers.
 **/

import React from 'react';

import Timer from './Timer';

export default class Layout extends React.Component {

  render() {
    return (
      <Timer start={+new Date()} />
    );
  }

}
