import React from 'react';
import CalendarModal from './CalendarModal';
class ScheduleCampaign extends React.Component {
    
    render() {
      return (
        <CalendarModal 
          onChangeDate={(date)=>this.props.onChangeDate(date)}
        />
      );
    }
  }
  export default ScheduleCampaign;