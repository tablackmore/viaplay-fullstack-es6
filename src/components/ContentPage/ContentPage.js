/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { Component, PropTypes } from 'react';

class ContentPage extends Component {
  static propTypes = {
    trailer: PropTypes.object.isRequired,
    film: PropTypes.object.isRequired,
  };

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  componentWillMount() {
    this.context.onSetTitle(this.props.film.content.title);
  }

  genreNodes(genres) {
    if (genres) {
      const returnValue = [];
      for (const genre of genres) {
        returnValue.push(<a href={genre.href} itemProp="genre"> {genre.title} </a>);
        returnValue.push(<span className="slash">/</span>);
      }
      returnValue.pop(); // remove the last slash
      return returnValue;
    }
  }

  peopleNodes(people) {
    if (people) {
      const returnValue = [];
      for (const person of people) {
        returnValue.push(<a href={'/search?query=&quot;' + person}> {person} </a>);
        returnValue.push(<span>, </span>);
      }
      returnValue.pop(); // remove the last comma
      return returnValue;
    }
  }

  render() {
    return (
      <div className="content-transition">
        <div id="content">
          <section className="block product" itemScope itemType="http://schema.org/Movie">
                <div className="scaffold">
                  <div className="player-wrapper">
                    <figure className="mediaplayer">
                      <iframe width="100%" height="100%" src={'//v.traileraddict.com/' + this.props.trailer.trailer_id} allowFullScreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" scrolling="no" frameBorder="0"></iframe>
                    </figure>
                  </div>
                  <div className="metadata">
                    <div className="group">
                      <h1 itemProp="name">{this.props.film.content.title}</h1>
                      <p className="summary">
                        <span className="genre divider">
                          { this.genreNodes(this.props.film._links['viaplay:genres']) }
                        </span>
                        <span className="year divider">
                          <span>{this.props.film.content.production.year}</span>
                        </span>
                        <span className="duration divider">
                          <span>{this.props.film.content.duration.readable}</span>
                        </span>
                      </p>
                    </div>
                    <div className="imdb-container" itemType="http://schema.org/AggregateRating" itemScope itemProp="aggregateRating">
                      <a className="imdb-link" href={this.props.film.content.imdb.url} target="_blank" rel="nofollow">
                        {this.props.film.content.imdb.rating} från {this.props.film.content.imdb.votes} användare
                      </a>
                    </div>
                    <div className="group">
                      <div className="synopsis" itemProp="description">
                        {this.props.film.content.synopsis}
                      </div>
                    </div>
                    <div className="group">
                      <div className="people-list actors">
                        <h2>Skådespelare: </h2>
                        <p>
                          {this.peopleNodes(this.props.film.content.people.actors)}
                        </p>
                      </div>
                      <div className="people-list directors">
                        <h2>Regissör: </h2>
                        <p>
                          {this.peopleNodes(this.props.film.content.people.directors)}
                        </p>
                      </div>
                      <div className="country">
                        <h2 onClick={this.test}>Land</h2>:
                        <p> {this.props.film.content.production.country}</p>
                      </div>
                    </div>
                    <span className="flag">hd</span>
                    <span className="flag">{this.props.film.content.parentalRating}</span>
                    <div className="group">
                      <a href data-action="https://star2.viaplay.se/setStar/pcdash-se/V51705/{starred}" data-tooltip-default="Stjärnmärk" data-tooltip-active="Ta bort stjärnmärkning" className="icon starred ">
                        <span />
                      </a>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
    );
  }
}

export default ContentPage;
