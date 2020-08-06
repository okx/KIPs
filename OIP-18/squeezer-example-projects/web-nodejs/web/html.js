import React from 'react';
import includes from 'lodash/includes';
import omit from 'lodash/omit';
import assign from 'lodash/assign';

const parseResources = (resources, types) => {
  const metaData = resources.filter(obj => includes(types, obj.type)).map((obj) => {
    const type = obj.type;
    const val = assign(omit(obj, 'type'), { key: obj });
    return React.createElement(type, val);
  });

  return metaData;
};

const Html = ({ data, children }) => (
  <html lang="en">
    <head>
      <title>{data.title} | {data.name}</title>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      />
      {parseResources(data.resources, ['meta', 'link'])}
    </head>
    <body>
      {children}
      {parseResources(data.resources, ['script'])}
    </body>
  </html>
);

export default Html;
