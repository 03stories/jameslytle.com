import React from 'react';
import { StaticRouter } from 'react-router-dom/server';
import { renderToString } from 'react-dom/server';
import App from './App';

export function render(url) {
  return renderToString(
    <React.StrictMode>
      <StaticRouter basename={import.meta.env.BASE_URL} location={url}>
        <App />
      </StaticRouter>
    </React.StrictMode>
  );
}
