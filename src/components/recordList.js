import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Record = (props) => (
    <tr>
        <td>{props.record.name}</td>
        <td>{props.record.highScore}</td>
        <td>{props.record.highLevel}</td>
        <td>{props.record.date}</td>
        <td>
            <Link className="btn btn-link" to={`/edit/${props.record._id}`}>Edit</Link> |
            <button className="btn btn-link"
                onClick={() => {
                    props.deleteRecord(props.record._id);
                }}
            >
                Delete
            </button>
        </td>
    </tr>
);

export default function RecordList() {
    const [records, setRecords] = useState([]);

    // This method fetches the records from the database.
    useEffect(() => {
        async function getRecords() {
            const response = await fetch(`https://cryptic-coast-84939.herokuapp.com/record/`);

            if (!response.ok) {
                const message = `An error occurred: ${response.statusText}`;
                window.alert(message);
                return;
            }

            const records = await response.json();
            setRecords(records);
            
        }

        getRecords();

        return;
    }, [records.length]);

    // This method will delete a record
    async function deleteRecord(id) {
        await fetch(`https://cryptic-coast-84939.herokuapp.com/${id}`, {
            method: "DELETE"
        });

        const newRecords = records.filter((el) => el._id !== id);
        setRecords(newRecords);
    }

    // This method will map out the records on the table
    function recordList() {
        return records.map((record) => {
            return (
                <Record
                    record={record}
                    deleteRecord={() => deleteRecord(record._id)}
                    key={record._id}
                />
            );
        });
    }

    // This following section will display the table with the records of individuals.
    return (
        <div>
            <h3 style={{textAlign:"center"}}>Top Scores</h3>
            <table className="table table-striped" style={{ marginTop: 20 }}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Score</th>
                        <th>Highest Level</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>{recordList()}</tbody>
            </table>
        </div>
    );
}