import TestService from '../../services/test.service';
import { useState, useEffect } from 'react';
import $ from 'jquery';


function Test() {

    const [test, setTest] = useState('');

    useEffect(() => {
        //$('#PeopleTable').DataTable();
    },[]);

    TestService.getTest().then(t => setTest(t.data));

    return (
        <div>
            <div>Test...</div>
            <br />
            <div>{test}</div>
            <br />
            <table id="PeopleTable" >
                <thead>
                    <tr>
                        <th>Person Id</th>
                        <th>Name</th>
                        <th>Date Of Birth</th>
                        <th>Age</th>
                        <th>City</th>
                        <th>Savings</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>One</td>
                        <td>wef</td>
                        <td>1</td>
                        <td>wevv</td>
                        <td>Osdv vsne</td>
                        <td>svvs</td>
                    </tr>
                    <tr>
                        <td>cvev</td>
                        <td>wef</td>
                        <td>1</td>
                        <td>wevv</td>
                        <td>Osdv vsne</td>
                        <td>svvs</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Test;