import React from 'react';
import './About.css';


class About extends React.Component {
    render() {
        return (

            <main role="main">

                <section className="description">
                    <div className="description-element">
                        <img src="https://via.placeholder.com/200.png?text=teapic1" alt="tea" />
                        <h3>Sign up for a unique account</h3>
                        <p>Save your personal tea collection and maintain a detailed
                    inventory that you can acess any time</p>
                    </div>

                    <div className="description-element">
                        <img src="https://via.placeholder.com/200.png?text=teapic2" alt="tea" />
                        <h3>Keep track of your inventory</h3>
                        <p>Display, search, and filter through your collection and get a quick visual summary of all your
                    teas</p>
                    </div>
                    <div className="description-element">
                        <img src="https://via.placeholder.com/200.png?text=teapic3" alt="tea" />
                        <h3>Add new teas to your collection</h3>
                        <p>Easily create an entry with a simple form that will help you select the
                            most appropriate category
                </p>
                    </div>
                    <div className="description-element">
                        <img src="https://via.placeholder.com/200.png?text=teapic4" alt="tea" />
                        <h3>Get creaTEAve with the details</h3>
                        <p>Add comments such as tasting notes, brewing guides, purchasing recommendations, and more</p>
                    </div>
                </section>
            </main>


        )
    }
}
export default About