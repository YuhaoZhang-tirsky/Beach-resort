import React, { Component } from 'react'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa'

import Title from './Title'

export default class Services extends Component {
  state = {
    services: [
      {
        icons: <FaCocktail />,
        title: "Free cocktails",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, velit."
      },
      {
        icons: <FaHiking />,
        title: "Free hiking",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, velit."
      },
      {
        icons: <FaShuttleVan />,
        title: "Free shuttle",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, velit."
      },
      {
        icons: <FaBeer />,
        title: "Strongest Beer",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, velit."
      }
    ]
  }
  render() {
    return (
      <section className="services">
        <Title title="Services" />
        <div className="services-center">
          {this.state.services.map((item, index) => (
            <article key={index} className="service">
              <span>{item.icons}</span>
              <h6>{item.title}</h6>
              <p>{item.info}</p>
            </article>
          ))}
        </div>
      </section>
    )
  }
}
