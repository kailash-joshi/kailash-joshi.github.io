import React from 'react';
import AutoChess from '../images/AutoChess.png';
const CampaignComponent = (props) => {
    return(
        <div>
            <img src={AutoChess} className="display-inline-block campaign-img" alt="campaign logo"/>
            <div className="display-inline-block campaign-text-main-div">
                <div>{props.name}</div>
                <div className="campaign-text-region">{props.region}</div>
            </div>
        </div>
    )
}
export default  CampaignComponent;