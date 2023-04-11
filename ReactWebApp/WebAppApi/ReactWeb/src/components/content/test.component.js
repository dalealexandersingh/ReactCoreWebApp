import TestService from '../../services/test.service';
import { useState, useEffect } from 'react';

function Test() {

    const [test, setTest] = useState('');
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));

        var options = window.getDataTableDefaultOptions(process.env.REACT_APP_API_URL + 'api/Test/GetPeople', user.access_token);

        options.columns = [
            {
                data: 'personid',
                orderable: false,
                render: function (data, type, row) {
                    let selected = '';
                    if (window.peopleTable.containsSelectedItem(data)) {
                        selected = ' checked="checked" ';
                    }
                    return '<input type="checkbox"' + selected + ' onchange="window.peopleTable.setSelected(\'' + data + '\', this.checked )"/>';
                }
            },
            { data: 'personid' },
            { data: 'name' },
            {
                data: 'dob',
                className: 'center',
                render: function (data, type, row) {
                    return window.formatDate(data);
                }
            },
            { data: 'age' },
            { data: 'city' },
            {
                data: 'savings',
                className: 'right',
                render: function (data, type, row) {
                    return window.formatFloat(data, ' ');
                }
            },
            {
                data: 'name',
                render: function (data, type, row) {
                    var city = row["city"];
                    var age = row["age"];
                    var sentence = data + ' lives in ' + city + ' and is ' + age + " years old";
                    return '<input type="button" class="btn-primary" value="' + data + '" onclick="alert(\'' + sentence + '\')" />';
                }
            }
        ]

        if (!window.peopleTable) {
            window.peopleTable = window.DataTable('#PeopleTable', options);
        }

    }, []);

    TestService.getTest().then(t => setTest(t.data));

    return (
        <div>
            <div>{test}</div>
            <br />
            <div class="card shadow mb-4">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table id="PeopleTable" class="table table-bordered">
                            <thead>
                                <tr>
                                    <th><input type="checkbox" onClick={window.selectAll} /></th>
                                    <th>Person Id</th>
                                    <th>Name</th>
                                    <th className="center">Date Of Birth</th>
                                    <th>Age</th>
                                    <th>City</th>
                                    <th className="right">Savings</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Test;