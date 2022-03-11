import { useState } from 'react';
import {useQuery} from 'react-query';
import { getAllSubmissions } from '../../api/submission';
import Wrapper from "../../components/wrapper/Wrapper";
import { MDBDataTable } from 'mdbreact';

const Submissions = () => {
    const [submissions, setSubmissions] = useState([]);

    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjI3NjZlN2ExMGI1MjllNGE1NzZlMzIiLCJlbWFpbCI6ImFiZHVsbGFoQGdhbWlsLmNvbSIsInR5cGUiOiJhZG1pbiIsImlhdCI6MTY0Njk4NjMyOCwiZXhwIjoxNjQ3NTkxMTI4fQ.rmOHpQ9Zs25fXlJs89roK_H4TWjoiGlCbu7yC81lIoM'

    // get all submissions
    useQuery('submissoins', () => getAllSubmissions(token), {
        onSuccess: ({data}) => {
            setSubmissions(data);
        }
    })

    console.log(submissions)

    let subData = [];

    submissions?.map((sub, key) => {
        let data = {
            id: key,
            firstName: sub?.user?.firstName,
            lastName: sub?.user?.lastName,
            email: sub?.user?.email,
            challenge: sub?.problem?.name,
            type: sub?.status ? "Correct" : "Incorrect",
            flag: sub?.flag,
            date: sub?.createdAt
        }
        subData.push(data);
    });

    const data = {
        columns: [
            {
                label: 'Id',
                field: 'id',
                sort: 'asc',
                width: 150
        },
        {
            label: 'First Name',
            field: 'firstName',
            sort: 'asc',
            width: 150
        },
        {
            label: 'Last Name',
            field: 'lastName',
            sort: 'asc',
            width: 150
        },
        {
            label: 'Email',
            field: 'email',
            sort: 'asc',
            width: 150
        },
        {
            label: 'Challenge',
            field: 'challenge',
            sort: 'asc',
            width: 150
        },
        {
            label: 'Type',
            field: 'type',
            sort: 'asc',
            width: 150
        },
        {
            label: 'Flag',
            field: 'flag',
            sort: 'asc',
            width: 150
        },
        {
            label: 'Submission Date',
            field: 'date',
            sort: 'dsc',
            width: 200
        },
        
        ],
        rows: subData
  };

  

  console.log(subData);



    return (
        <Wrapper title={"All Submissions"}>
            <div className="container mt-5">
                <h3 className="text-center">All Submissions</h3>
                <MDBDataTable
                    striped
                    bordered
                    small
                    data={data}
                />
                {/* <table className="table">
                    <thead>
                        <tr>
                        <th scope="col">Id</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Challenge</th>
                        <th scope="col">Type</th>
                        <th scope="col">Flag</th>
                        <th scope="col">Submission Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            submissions?.map((submission, key) => (
                                <tr key={key}>
                                    <th scope="row">{key + 1}</th>
                                    <td>{submission?.user?.firstName}</td>
                                    <td>{submission?.user?.lastName}</td>
                                    <td>{submission?.user?.email}</td>
                                    <td>{submission?.problem?.name}</td>
                                    <td>Incorrect</td>
                                    <td>asfboiasnfasdfasofasdf</td>
                                    <td>asfboiasnfasdfasofasdf</td>
                                </tr>
                            ))
                        }
                        

                    </tbody>
                </table> */}
            </div>
        </Wrapper>
    )
}

export default Submissions;