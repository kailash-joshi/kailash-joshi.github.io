import React from 'react';
import DateComponent from './DateComponent';
import moment from 'moment';
import ViewPricing from './ViewPricing';
import ScheduleCampaign from './ScheduleCampaign';
import CampaignComponent from './CampaignComponent';
import file from '../images/file.png';
import statisticsReport from '../images/statisticsReport.png';
import calendar from '../images/calendar.png';
import {Button} from 'react-bootstrap';
export default class GridRow extends React.Component {
    getDateStr = () => {
        const {row} = this.props;
        const campaignDate = row.campaignDate;
        const dateString = moment.unix(campaignDate).format("MMM YYYY, DD");
        return dateString;
    }
    getDaysDiffStr = () => {
        const {row} = this.props;
        const createdOn = moment.unix(row.createdOn);
        const currentDate = moment();
        let days = currentDate.diff(createdOn, 'days');
        let daysDiffStr = '';
        if(days > 0) {
            daysDiffStr = days + " days ago";
        } else {
            daysDiffStr = -days + " days ahead";
        }
        return daysDiffStr;
    }
    downloadFile = () => {

    }
    downloadReport = () => {

    }
    render(){
        const {row} = this.props;
        return(
            row ? <tr>
                <td>
                    <DateComponent 
                        dateStr = {this.getDateStr()}
                        daysDiffStr = {this.getDaysDiffStr()}
                    />
                </td>
                <td>
                    <CampaignComponent 
                        name = {row.name}
                        region = {row.region}
                    />
                </td>
                <td className="td-img-icon">
                    <ViewPricing 
                        price = {row.price}
                        name = {row.name}
                        region = {row.region}
                    />
                </td>
                <td className="td-img-icon">
                    <img src = {file} alt="csv logo"/>
                    <Button variant='link' onClick={this.downloadFile}>CSV</Button>
                </td>
                <td className="td-img-icon">
                    <img src = {statisticsReport} alt="report logo" />
                    <Button variant='link' onClick={this.downloadReport}>Report</Button>
                </td>
                <td className="td-img-icon">
                    <img src = {calendar} alt="calendar logo"/>
                    <ScheduleCampaign 
                        onChangeDate={(date) => this.props.onChangeDate(date, row.id)}
                    />
                </td>
            </tr> : null
        )
    }
}