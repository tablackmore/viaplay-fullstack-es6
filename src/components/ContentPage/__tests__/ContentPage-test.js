/* global jest, describe, it, beforeEach, expect */
jest.dontMock('react-addons-test-utils');
jest.dontMock('react-dom');
jest.dontMock('../ContentPage.js');

const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const ContentPage = require('../ContentPage.js');

describe('ContentPage', function cb() {
  let contentPageDOM;
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

  beforeEach(function cbBeforeEach() {
    const contentPage = TestUtils.renderIntoDocument(<ContentPage film={film} trailer={trailer}/>);
    contentPageDOM = ReactDOM.findDOMNode(contentPage);
  });

  it('should set an h1 with the value of the passed object', function cbIt() {
    const h1 = contentPageDOM.querySelector('h1');
    expect(h1.textContent).toBe('Pulp fiction');
  });

  it('should set an set the iframe src with the value of the passed object', function cbIt() {
    const iframe = contentPageDOM.querySelector('iframe');
    expect(iframe.src).toBe('//v.traileraddict.com/77789');
  });

  it('should set the actors paragraph with the value of the passed object', function cbIt() {
    const actorsParagraph = contentPageDOM.querySelector('.people-list.actors p');
    expect(actorsParagraph.textContent).toBe('Fred Perry, Tom Blackmore');
  });

  it('should set the directors with the value of the passed object', function cbIt() {
    const directorsParagraph = contentPageDOM.querySelector('.people-list.directors p');
    expect(directorsParagraph.textContent).toBe('Inga Ivardsson');
  });

  it('should set the genre paragraph with the value of the passed object', function cbIt() {
    const genreSpan = contentPageDOM.querySelector('.genre.divider');
    expect(genreSpan.textContent).toBe('comedy/horror');
  });

  it('should set the year with the value of the passed object', function cbIt() {
    const yearSpan = contentPageDOM.querySelector('.year.divider span');
    expect(yearSpan.textContent).toBe('1997');
  });

  it('should set the country with the value of the passed object', function cbIt() {
    const countryParagraph = contentPageDOM.querySelector('.country p');
    expect(countryParagraph.textContent).toBe('USA');
  });

  it('should set the parentRating with the value of the passed object', function cbIt() {
    const parentalRating = contentPageDOM.querySelector('.flag.rating');
    expect(parentalRating.textContent).toBe('15');
  });

  it('should set the synopsis with the value of the passed object', function cbIt() {
    const synopsis = contentPageDOM.querySelector('.synopsis');
    expect(synopsis.textContent).toBe('crazy violent mad');
  });

  it('should set up the imdb elements correctly', function cbIt() {
    const imdbLink = contentPageDOM.querySelector('.imdb-link');
    expect(imdbLink.href).toBe('http://imdb.org/test');
    expect(imdbLink.textContent).toBe('4.5 från 5679 användare');
  });
});
