import React, { Component } from 'react'
import Title from './Title'
import {FaCocktail, FaHiking , FaShuttleVan,FaBeer,BiBus} from 'react-icons/fa'

export default class Services extends Component {
    state={
        services:[
            {
                icon:<FaCocktail/>,
                title: "Free CockTail",
                info: "Welcome cocktails, after-meeting cocktails or other special cocktail arrangements are available on request.All exotic flavours are available."
            },
            {
                icon:<FaHiking/>,
                title: "Endless Hiking",
                info: "We love hiking! That is why we have fully adjusted to our hiking guests.The nationally widespread and tested certificate for hiker-friendly hosts"
            },
            {
                icon:<FaShuttleVan/>,
                title: "Easy access",
                info: "Set off National Highway 32, this informal hotel is 4 km from Porur Lake, 9 km from the closest metro station and 10 km from St. Thomas Mount National Shrine."
            },
            

        ]
    }
    render() {
        return (
            <div className="container-fluid services">
             <Title title="Services" />
                <div className="row">
                   {this.state.services.map((item, index) => {
                      return(
                        <div className="col-md-4 col-lg-3 col-12 mx-auto my-3" key={index}>
                            <div className="card shadow-lg border-0 p-4">
                                <article className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                                </article>              
                           </div>
                        </div>
                      )
                   })}
                </div>
            </div>
        )
    }
}