import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms';

export default function Home() {
    return (
        <>
        <Hero hero="defaultHero">
        </Hero>
        <Banner title="Michelle Rooms" subtitle="deluxe rooms starting at INR 3000">
                <Link to="/rooms" className="btn btn-primary">
                      VISIT NOW
                </Link>
        </Banner>
        <Services/> 
        <FeaturedRooms/>
        </>

    )
}
