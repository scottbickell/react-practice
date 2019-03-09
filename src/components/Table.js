import React, {Component} from 'react';
// import TableHead from './components/TableHead';
// import TableBody from './components/TableBody';

const TableHead = () => {
    return (
        <thead>
            <tr>
                <th scope="col">Name</th>
                <th scope="col">Job</th>
            </tr>
        </thead>
    )
}

const TableBody = () => {
    return (
                <tbody>
                     <tr>
                         <td>Charlie</td>
                         <td>Janitor</td>
                     </tr>
                     <tr>
                         <td>Mac</td>
                         <td>Bouncer</td>
                     </tr>
                     <tr>
                         <td>Dee</td>
                         <td>Aspiring actress</td>
                     </tr>
                     <tr>
                         <td>Dennis</td>
                         <td>Bartender</td>
                     </tr>
             </tbody>
    )
}

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