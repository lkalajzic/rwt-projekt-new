import React from 'react';
import './App.css';
import { ScheduleComponent, Inject, Agenda, Day, Month, Week, WorkWeek, EventSettingsModel } from '@syncfusion/ej2-react-schedule';
import { DataManager,WebApiAdaptor } from '@syncfusion/ej2-data';
class App extends React.Component {
  private localData: EventSettingsModel = {
    dataSource: [{
      Id:1,
      Subject: "Riteh Web Team",
      EndTime: new Date(2022, 11, 2, 19, 0),
      StartTime: new Date(2022, 11, 2, 17, 0)
    },
    {
      Id:2,
      Subject: "URS",
      EndTime: new Date(2022, 11, 2, 12, 0),
      StartTime: new Date(2022, 11, 2, 9, 0)
    },
    {
      Id:3,
      Subject: "a",
      EndTime: new Date(2022, 11, 3, 19, 0),
      StartTime: new Date(2022, 11, 3, 17, 0)
    }]
  };

  
  public render() {
    return (
      <ScheduleComponent currentView='Month'
      eventSettings={this.localData} > 
         <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
      </ScheduleComponent>  
      
    );
  }
}
   

export default App;