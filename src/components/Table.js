import React, {Component} from 'react';
import TableHead from './TableHead';
import TableBody from './TableBody';

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