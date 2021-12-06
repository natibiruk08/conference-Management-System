import React, {Component} from 'react';
import conference from "./image/sci.jpg"
import workshop from "./image/workshop.png"
import research from "./image/research.jpg"
import './css/ParalaxStyles.css'

class MenuCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container p-3">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                        <div className="card h-100">
                            <img src={conference} className="card-img-top" alt="..."/>
                            <card className="text-center card-body">
                                <h5 className="card-title"><b>CONFERENCES</b></h5>
                                <p className="card-text">An academic conference or scientific conference (also symposium, workshop, or meeting) is an event for researchers to present and discuss their work.
                                The scientific conferences are important because it provides opportunities to meet people, exchange or develop ideas, new strategies to approach your research, establish collaborations, getting suggestions about their work, and get inspired.</p>
                            </card>
                        </div>
                    </div>
                    <div className="col">
                        
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <img src={research} className="card-img-top" alt="..."/>
                            <card className="text-center card-body" >
                                <h5 className="card-title"><b>RESEARCH</b></h5>
                                <p className="card-text">An academic conference is a meeting which researchers attend to present their findings and hear about the latest work within their field. Exhibit expertise knowledge in the any area of Information
                                    Technology. Discover open association of excellent Professionals,
                                    and Scholars and help researchers & professionals to carry and
                                    accomplish their research</p>
                            </card>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MenuCard;