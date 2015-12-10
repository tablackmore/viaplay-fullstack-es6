jest.dontMock('../ContentPage.js');

const React = require('react/addons');
const ContentPage = require('../ContentPage.js');
const TestUtils = React.addons.TestUtils;

describe('Datagrid', function() {
    it('should set header with correct label for each field, plus an empty header for actions', function() {
        const fields = {
            film: {
              content:{
                title:'Pulp fiction',
                production:{
                  year:1997
                },
                duration: {
                  readable:'1hr 52mins'
                },
                imdb:{
                  url:'http://imdb.org/test',
                  rating: 4.5,
                  votes: 5679
                },
                synopsis: 'crazy violent mad',
                people: {
                  actors:['Fred Perry', 'Tom Blackmore'],
                  directors:['Inga Ivardsson']
                },
                production: {
                  country: 'USA'
                },
                parentalRating: '15'
              },
              _links:{
                'viaplay:genres': [{
                  href: 'http://somesite.com/comedy',
                  title: 'comedy'
                },{
                  href: 'http://somesite.com/horror',
                  title: 'horror'
                }]
              }
            }
        };

        let contentPage = TestUtils.renderIntoDocument(<ContentPage film={fields}/>);
            contentPage = React.findDOMNode(contentPage);

        const headers = [].slice.call(datagrid.querySelectorAll('thead th')).map(h => h.textContent);
        expect(headers).toEqual(['#', 'Title', 'Creation date', '']);
    });
});
