import React, { Component} from 'react';
import "../../styles/home.scss";

class Home extends Component {
    // 🤔 probably don't need a state here.

    render() {
        return (
            <section className='home'>
                <div class='top'>
                    <div class='left-content'>
                        <h1 class='block__title'>Manage menus,<br></br>
                            in one place.
                        </h1>

                        <p class='block__paragraph'>Update the prices for all your online menues using our intuitive menu manager.</p>

                        <a class='block__btn'>Sign up</a>
                    </div>
                </div>
            </section>
        );
    }
}

export default Home;