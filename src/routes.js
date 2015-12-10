/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React from 'react';
import Router from 'react-routing/src/Router';
import filmInfo from './data/filmInfo';
import App from './components/App';
import ContentPage from './components/ContentPage';
import NotFoundPage from './components/NotFoundPage';
import ErrorPage from './components/ErrorPage';

const router = new Router(on => {
  on('*', async(state, next) => {
    const component = await next();
    return component && <App context={state.context} title={component.props.title}>{component}</App>;
  });

  on('/web-se/film/:name', async(state) => {
    const film = await filmInfo.getFilm(state.params.name);
    return <ContentPage film={film.product} trailer={film.trailer}/>;
  });

  on('error', (state, error) => state.statusCode === 404
    ? <App context={state.context} error={error}><NotFoundPage/></App>
    : <App context={state.context} error={error}><ErrorPage/></App>
  );
});

export default router;
