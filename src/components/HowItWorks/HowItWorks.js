import React from "react";

const HowItWorks = () => (
    <div className='how-it-works section-padding'>
        <h1 className='mid-title'>How it works</h1>
        <ul className='how-works__steps'>
            <li className='how-works__item'>
                <span className='how-works__step-numb'>1</span>
                <span className='how-works__step-text'>Tell us your menus and locations.</span>
            </li>
            <li className='how-works__item'>
                <span className='how-works__step-numb'>2</span>
                <span className='how-works__step-text'>Update your prices using our app.</span>
            </li>
            <li className='how-works__item'>
                <span className='how-works__step-numb'>3</span>
                <span className='how-works__step-text'>Other menus will pull your up to date menu from us.</span>
            </li>
            <a className='block__btn'>Sign up</a>
        </ul>
    </div>
);

export default HowItWorks;
