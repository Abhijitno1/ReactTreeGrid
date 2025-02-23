import { Component } from 'react';
import './assets/GridTree.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import Header from './Header.jsx'
import Body from './Body.jsx'

class GridTree extends Component {
    headers = [];
    colWidths = [];
    colNames = [];

    constructor(props) {
        super()

        var fields = props.options.fields;
        var count = fields.length;

        for (var i = 0; i < count; i++) {
            this.colNames.push(fields[i].property);
            this.headers.push(fields[i].displayName);
            this.colWidths.push(fields[i].columnWidth);
        }
   }

    render() {
        return (
          <div>
            <table className="table table-striped table-hover">
                    <Header items={this.headers} columnsWidth={this.colWidths}/>
                    <Body fields={this.colNames} data={this.props.data} /> 
            </table>
          </div>
        );
    }
}

export default GridTree;
