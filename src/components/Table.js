import React, {Component} from 'react';
import TableHead from './components/TableHead';
import TableBody from './components/TableBody';

class Table extends Component {
    render() {
        return (
            <div className="row">
                <div className="col">
                <table className="table">
                    <TableHead />
                    <TableBody />
                </table>
                </div>
            </div>
        )
    }
}

export default Table;