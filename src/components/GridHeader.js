import React from 'react';
export default class GridHeader extends React.Component {
    render(){
        return(
            <thead>
                <tr>
                <th>DATE</th>
                <th>CAMPAIGN</th>
                <th>VIEW</th>
                <th>ACTIONS</th>
                <th></th>
                <th></th>
                </tr>
            </thead>
        )
    }
}