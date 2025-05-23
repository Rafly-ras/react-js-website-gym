import React from 'react'
import './Plans.css'
import {plansData} from '../data/plansData'
import whiteTick from '../assets/whiteTick.png'

const Plans = () => {
    return (
    <div className="plans-container">

        <div className="programs-header">
            <span className='stroke-text'>Ready to Start</span>
            <span>Your Journey</span>
            <span className='stroke-text'>now withus</span>
        </div>
        {/* plans card */}
        <div className="plans">
            {plansData.map((plan, i)=> (
                <div className="plan" key={i}>
                    {plan.icon}
                    <span>{plan.name}</span>
                    <span>$ {plan.price}</span>

                    <div className="features">
                        {plan.features.map((feature, i)=> (
                            <div className="feature">
                                <img src={whiteTick} alt="" />
                                <span key={i}>{feature}</span>
                            </div>
                        ))}
                    </div>
                    <div><span>See more benefits -></span></div>
                    <button className="btn">Join Now</button>
                </div>
            ))}
        </div>
    </div>
    )
}

export default Plans
