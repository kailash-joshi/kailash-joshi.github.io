import React from 'react';
import GridRow from './GridRow';
export default class GridRowList extends React.Component {
    render(){
        const {list,selectedLang} = this.props;
        return(
            list ? <tbody>
                {
                    list.map(item => {
                        return <GridRow key={item.id} row={item}
                        onChangeDate={this.props.onChangeDate}
                        selectedLang={selectedLang}
                        />
                    })
                }
            </tbody> : null
        )
        
    }
}