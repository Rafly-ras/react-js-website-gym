import React from 'react';
import Header from '../Header/Header.jsx';
import './Hero.css';
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import Heart from '../../assets/heart.png'
import Calories from '../../assets/calories.png'

const Hero = () => {
    return (
        <div className='hero'>
            <div className="left-h">
                <Header />
    {/* the best ad*/}
                <div className="the-best-ad">
                    <div></div>
                    <span>The best fitness club in the town</span>
                </div>
        {/*Hero Heading*/}
                <div className="hero-text"
                style={{maxwidth: '768', fontSize: '3rem' , maxWidth: '368', fontSize: '1.5rem', gap: '1rem', textAlign: 'center' }}>
                <div>
                    <span className='stroke-text'>Shape </span>
                    <span>Your</span>
                </div>
                <div>
                    <span>Ideal body</span>
                </div>
                <div>
                    <span style={{maxWidth: '368', fontSize: '1rem', gap: '1rem', textAlign: 'center', alignItems: 'center', display: 'flex', margin: '1rem', marginLeft: '2.35rem', marginRight: '0.2rem', justifyContent: 'center'}}>
                    In here we will help you to shape and build your 
                    ideal body and live up your life to fullest
                    </span>
                </div>
            </div>

        {/*figures*/}
            <div className="figures" style={{maxWidth: '368', fontSize: '1rem', gap: '1rem', textAlign: 'center', marginTop: '0.5rem'}}>
                <div>
                    <span>+140</span>
                    <span>expert coachs</span>
                </div>
                <div>
                    <span>+978</span>
                    <span>members joined</span>
                </div>
                <div>
                    <span>+50</span>
                    <span>fitness programs</span>
                </div>
            </div>

        {/*hero button */}
            <div className="hero-buttons" style={{maxWidth: '368', fontSize: '1rem'}}>
                <button className="btn">Get Started</button>
                <button className="btn">Learn More</button>
            </div>
            </div>
            <div className="right-h" style={{maxWidth: '368', marginTop: '1rem', }}>
                <button className='btn' style={{ maxWidth: '368', display: 'none'}}>Join Now</button>

            <div className="heart-rate" style={{maxWidth: '368', width: '1rem', height: '1rem 0 1rem 0', fontSize: '1rem', backgroundColor: '#f5f5f5f5'}}>
                    <img src={Heart} alt="" />
                    <span style={{maxWidth: '368', color:'#000000',}}>Heart Rate</span>
                    <span style={{maxWidth: '368', color:'#000000', fontSize: '1.2rem'}}>116 bpm</span>
                </div>


        {/*hero images*/}
            <img src={hero_image} alt="" className='hero-image' />
            <img src={hero_image_back} alt="" className='hero-image-back' />
            {/*calories*/}
            <div className="calories">
                <img src={Calories} alt="" />
                <div>
                    <span>Calories Burned</span>
                    <span>220 kcal</span>
                </div>
            </div>

            </div>
        </div>
    );
}

export default Hero;
