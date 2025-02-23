import { useState } from 'react';
import './assets/App.css';
//import GridTree from 'react-gridtree';
import GridTree from './GridTree.jsx';

export function TreeGridDemo() {
	var [data, setData] = useState([]);

	//Below example is based upon https://github.com/PhillBeck/react-treegrid/tree/master
	function fetchVideos() {
		var curData =
			[
				{
					name: "item 1",
					qty: 2,
					children: [
						{
							name: "item 1.1",
							qty: 1
						}
					]
				},
				{
					name: "item 2",
					qty: 4
				}
			];
		setData(curData);
		//sessionStorage.setItem('videosData', curData);
		console.log('I got called');
	}


	var options = {
		fields: [
			{
				property: 'name',
				displayName: 'Name',
				columnWidth: '70%'
			},
			{
				property: 'qty',
				displayName: 'Quantity',
				columnWidth: '30%',
				format: (value) => value.toFixed(2)
			}
		]
	};

	console.log('data length', data.length);
    return (
        <div className="container">
            <h2>This example displays a tree grid </h2>
			<div className="toolbar mb-2">
				<button type="submit" onClick={fetchVideos}>Submit</button>
			</div>
			<GridTree
				data={data}
				options={options}
			/>
        </div>
    );
}