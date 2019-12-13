import React from 'react';
import {Tabs, Tab} from 'react-bootstrap';
import CampaignTable from './CampaignTable';
import '../css/component.css';
import AppHeader from './AppHeader';
import moment from 'moment';
import lang from './language/language';

export default class App extends React.Component {
    state = {
        upcomingList: [],
        liveList: [],
        pastList: [],
        selectedLang:  lang.en
    }
    createData = () => {
        let live = [];
        let past = [];
        let upcoming = [];
        for(let i = 0; i <10; i++) {
            let objLive = {};
            objLive.id = i + 1;
            objLive.name= "Test Whatsapp";
            objLive.region= "US";
            objLive.createdOn= 1576800000;
            objLive.price= 100;
            objLive.csv= "Some CSV link for Whatsapp";
            objLive.report= "Some report link for Whatsapp";
            objLive.image_url="Some image url of the campaign";
            objLive.campaignDate=1576108800;
            live.push(objLive);

            let objUpcoming = {};
            objUpcoming.id = i + 1;
            objUpcoming.name= "Test Whatsapp";
            objUpcoming.region= "US";
            objUpcoming.createdOn= 1575849600;
            objUpcoming.price= 100;
            objUpcoming.csv= "Some CSV link for Whatsapp";
            objUpcoming.report= "Some report link for Whatsapp";
            objUpcoming.image_url="Some image url of the campaign";
            objUpcoming.campaignDate=1576800000;
            upcoming.push(objUpcoming);

            let objPast = {};
            objPast.id = i + 1;
            objPast.name= "Test Whatsapp";
            objPast.region= "US";
            objPast.createdOn= 1575158400;
            objPast.price= 100;
            objPast.csv= "Some CSV link for Whatsapp";
            objPast.report= "Some report link for Whatsapp";
            objPast.image_url="Some image url of the campaign";
            objPast.campaignDate=1575849600;
            past.push(objPast);
        }
        this.setState({
            upcomingList: upcoming,
            liveList: live,
            pastList: past
        })
    }
    componentDidMount(){
        this.createData();
    }
    updateList = (listFromType, date, rowId) => {
        let listFrom = [...this.state[listFromType]];
        const selectedDate = moment.unix(date);
        const currentDate = moment();
        let days = currentDate.diff(selectedDate, 'days');
        let listToType = '';
        if(days > 0) {
            listToType = 'pastList'
        } else {
            if (days < 0){
                listToType = 'upcomingList';
            } else {
                listToType = 'liveList';
            }
        }
        let listTo = this.state[listToType];
        let newRecord = listFrom.filter((row) => {
            return row.id === rowId
        });
        newRecord[0].campaignDate = date;
        let newListFrom = listFrom.filter((row) => {
           return row.id !== rowId
        });
       let newListTo = [...listTo, ...newRecord];
        this.setState({
            [listToType]: newListTo,
            [listFromType]: newListFrom
        })
    }
    onUpcomingChangeDate = (unixdate, rowId) => {
        this.updateList('upcomingList', unixdate, rowId);
    }
    onLiveChangeDate = (unixdate, rowId) => {
        this.updateList('liveList', unixdate, rowId);
    }
    onPastChangeDate = (unixdate, rowId) => {
        this.updateList('pastList', unixdate, rowId);
    }
    onLangChange = (e) => {
        // console.log((e.target.value));
        let selectedLang = e.target.value;
        this.setState({
            selectedLang: lang[selectedLang]
        });
        
    }
    render() {
        let upcomingList = this.state.upcomingList;
        let liveList = this.state.liveList;
        let pastList = this.state.pastList;
        let selectedLang = this.state.selectedLang;
        return(
            <div>
                <AppHeader 
                    onLangChange = {this.onLangChange}
                />
                <div className="content-container">
                <h2 className="sub-heading">{selectedLang.screenHeader}</h2>
                <Tabs defaultActiveKey="upcomingCampaigns" id="uncontrolled-tab-example" className="width-98">
                    <Tab eventKey="upcomingCampaigns" title={selectedLang.upcomingCampaign}>
                        <CampaignTable 
                            list={upcomingList}
                            onChangeDate={this.onUpcomingChangeDate}
                            selectedLang = {selectedLang}
                        />
                    </Tab>
                    <Tab eventKey="liveCampaign" title={selectedLang.liveCampaign}>
                        <CampaignTable 
                                list={liveList}
                                onChangeDate={this.onLiveChangeDate}
                                selectedLang = {selectedLang}
                            />
                    </Tab>
                    <Tab eventKey="pastCampaigns" title={selectedLang.pastCampaign}>
                        <CampaignTable 
                                list={pastList}
                                onChangeDate={this.onPastChangeDate}
                                selectedLang = {selectedLang}
                            />
                    </Tab>
                </Tabs>
                </div>
            </div>
        )
    }
}