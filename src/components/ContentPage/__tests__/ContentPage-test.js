/* global jest, describe, it, expect */
jest.dontMock('object-assign');
jest.dontMock('react-addons-test-utils');
jest.dontMock('react-dom');
jest.dontMock('../ContentPage.js');
jest.dontMock('../../../../test_core/ReactRouterContext.js');

const ReactDOM = require('react-dom');
const React = require('react');
const TestUtils = require('react-addons-test-utils');
const reactRouterContext = require('../../../../test_core/ReactRouterContext.js');
let ContentPage = require('../ContentPage.js');

describe('ContentPage', function cb() {
  const film = {
    content: {
      title: 'Pulp fiction',
      production: {
        year: 1997,
        country: 'USA',
      },
      duration: {
        readable: '1hr 52mins',
      },
      imdb: {
        url: 'http://imdb.org/test',
        rating: 4.5,
        votes: 5679,
      },
      synopsis: 'crazy violent mad',
      people: {
        actors: ['Fred Perry', 'Tom Blackmore'],
        directors: ['Inga Ivardsson'],
      },
      parentalRating: '15',
    },
    _links: {
      'viaplay:genres': [{
        href: 'http://somesite.com/comedy',
        title: 'comedy',
      }, {
        href: 'http://somesite.com/horror',
        title: 'horror',
      }],
    },
  };

  const trailer = {
    trailer_id: 77789,
  };

  const routeContext = {
    onSetTitle: function cbContext() {},
    trailer,
    film,
  };

  it('should set header with correct label for each field, plus an empty header for actions', function cbIt() {
    ContentPage = reactRouterContext(ContentPage, routeContext);
    const contentPage = TestUtils.renderIntoDocument(<contextContentPage film={film} trailer={trailer}/>);
    const h1 = ReactDOM.findDOMNode(contentPage, 'h1');
    expect(ReactDOM.findDOMNode(h1).textContent).toBe('Pulp fiction');
  });
});
