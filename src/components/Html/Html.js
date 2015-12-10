/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { Component, PropTypes } from 'react';

class Html extends Component {

  static propTypes = {
    title: PropTypes.string,
    body: PropTypes.string.isRequired,
    entry: PropTypes.string.isRequired,
  };

  static defaultProps = {
    title: 'film',
  };

  render() {
    return (
      <html className="no-js" lang="">
        <head>
          <title>Viaplay - {this.props.title}</title>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content />
          <meta name="og:image" content />
          <link href="http://assets.viaplay.tv/frontend-2015113001/css/index.min.cf37ebcf.css" rel="stylesheet" type="text/css" />
          <link href="http://fonts.googleapis.com/css?family=Open+Sans:400italic,600italic,700italic,400,600,700,300" rel="stylesheet" type="text/css" />
        </head>
        <body>
            <div id="content-wrapper">
              <div id="app" dangerouslySetInnerHTML={{ __html: this.props.body }}/>
            </div>
            <script src={this.props.entry}></script>
        </body>
      </html>
    );
  }
}

export default Html;
