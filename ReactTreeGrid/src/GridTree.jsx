import { Component } from 'react';
import './assets/GridTree.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import Header from './Header.jsx'
import Body from './Body.jsx'

class GridTree extends Component {
    headers = [];
    colWidths = [];
    colNames = [];
    gridClass = 'table table-striped table-hover';

    constructor(props) {
        super()

        if (props.gridClass != null)
            this.gridClass = props.gridClass;

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
                <table className={this.gridClass}>
                    <Header items={this.headers} columnsWidth={this.colWidths} headerClass={this.props.options.headerClass} />
                    <Body fields={this.colNames} data={this.props.data} /> 
            </table>
          </div>
        );
    }
}

export default GridTree;
