'use strict';

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import DefaultLayout from './layouts/default';

class Web {
  constructor(vars) {
    const webVars = vars.function.web;

    this.vars = vars;

    this.data = {
      name : vars.name,
      title : webVars.title,
      description : webVars.description || '',
      resources : webVars.resources || [],
      body : '',
      layout : webVars.layout
    };
  }

  title(title) {
    this.data.title = title;
  }

  addResource(resource) {
    this.data.resources.push(resource);
  }

  body(body) {
    this.data.body = body;
  }

  render() {
    const layouts = {
      default : <DefaultLayout data={this.data} />
    };

    return ReactDOMServer.renderToStaticMarkup(layouts[this.data.layout]);
  }
}

export default Web;
