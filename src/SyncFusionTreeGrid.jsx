import { useState } from 'react';
import './ReactTreeGridCssImport';
import { ColumnDirective, ColumnsDirective, TreeGridComponent } from '@syncfusion/ej2-react-treegrid';

export function SyncFusionTreeGrid() {
    //Ref: https://www.syncfusion.com/react-components/react-tree-grid
    //Ref: https://www.npmjs.com/package/@syncfusion/ej2-react-treegrid
    //Ref: https://communitylicense.syncfusion.com/support/tickets/705836
    var [data, setData] = useState([]);
    function fetchVideos() {
        /* fetch('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
             .then(response => response.json())
             .then(data => {
                 console.log(data);
                 data = data;
             })
             .catch(error => {
                 console.error('Error fetching videos:', error);
             }); */
        setData([
            {
                taskID: 1,
                taskName: 'Planning',
                startDate: new Date('02/03/2017'),
                duration: 5,
                subtasks: [
                    { taskID: 2, taskName: 'Plan timeline', startDate: new Date('02/03/2017'), duration: 5 },
                    { taskID: 3, taskName: 'Plan budget', startDate: new Date('02/03/2017'), duration: 5 },
                    { taskID: 4, taskName: 'Allocate resources', startDate: new Date('02/03/2017'), duration: 5 },
                    { taskID: 5, taskName: 'Planning complete', startDate: new Date('02/07/2017'), duration: 0 }
                ]
            }]);
    }

    return (
        <div className="container">
            <h2>This example displays a tree grid </h2>
            <div className="toolbar mb-2">
                <button type="submit" onClick={fetchVideos}>Submit</button>
            </div>
            <TreeGridComponent dataSource={data} treeColumnIndex={1} childMapping='subtasks'>
                <ColumnsDirective>
                    <ColumnDirective field='taskID' headerText='Task ID' width='90' textAlign='Right' />
                    <ColumnDirective field='taskName' headerText='Task Name' width='180' />
                    <ColumnDirective field='startDate' headerText='Start Date' width='90' format='yMd' textAlign='Right' type='date' />
                    <ColumnDirective field='duration' headerText='Duration' width='80' textAlign='Right' />
                </ColumnsDirective>
            </TreeGridComponent>
        </div>
    );
}