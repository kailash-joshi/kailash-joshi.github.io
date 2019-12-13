import React from 'react';
export default class GridHeader extends React.Component {
    render(){
        return(
            <thead>
                <tr>
                <th>{this.props.selectedLang.date}</th>
                <th>{this.props.selectedLang.campaign}</th>
                <th>{this.props.selectedLang.view}</th>
                <th>{this.props.selectedLang.actions}</th>
                <th></th>
                <th></th>
                </tr>
            </thead>
        )
    }
}