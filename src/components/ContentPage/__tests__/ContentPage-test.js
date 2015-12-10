/* global jest, describe, it, expect */
jest.dontMock('../ContentPage.js');

const React = require('react/addons');
const ContentPage = require('../ContentPage.js');
const TestUtils = React.addons.TestUtils;

describe('ContentPage', function cb() {
  it('should set header with correct label for each field, plus an empty header for actions', function cbIt() {
    const fields = {
      trailer: {
        trailer_id: 77789,
      },
      film: {
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
      },
    };

    let contentPage = TestUtils.renderIntoDocument(<ContentPage film={fields}/>);
    contentPage = React.findDOMNode(contentPage);

    const headers = [].slice.call(contentPage.querySelectorAll('h1')).map(h => h.textContent);
    expect(headers).toEqual(['Pulp fiction']);
  });
});
