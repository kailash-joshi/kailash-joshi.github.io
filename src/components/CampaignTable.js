import React from 'react';
import {Table} from 'react-bootstrap';
import GridHeader from './GridHeader';
import GridRowList from './GridRowList';

export default class CampaignTable extends React.Component {
    constructor(props) {
        super();
    }
    render(){
        const {list,selectedLang} = this.props;
        return (
            list? <div>
                <Table className="tbl-css width-98" responsive>
                    <GridHeader selectedLang={selectedLang}/>
                    <GridRowList 
                        list={list}
                        onChangeDate={this.props.onChangeDate}
                        selectedLang={selectedLang}
                    />
                </Table>
            </div> : null
        )
    }
}