import React, { useEffect, useState } from "react";
import { trackPromise} from 'react-promise-tracker';

//import { Link } from "react-router-dom";

const Record = (props) => (
    <tr>
        <td>{props.record.name}</td>
        <td>{props.record.highScore}</td>
        <td>{props.record.highLevel}</td>
        <td>{props.record.date}</td>
        {/* <td>
            <Link className="btn btn-link" to={`/edit/${props.record._id}`}>Edit</Link> |
            <button className="btn btn-link"
                onClick={() => {
                    props.deleteRecord(props.record._id);
                }}
            >
                Delete
            </button>
        </td> */}
    </tr>
);



export default function RecordList() {
    const [records, setRecords] = useState([]);

   // trackPromise(
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
        trackPromise(
        getRecords()
        )

        return;
    }, [records.length])
   // )
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
            <h3>Top Scores</h3>
            <table id="myTable2">
                <thead>
                    <tr>
                        <th onClick={() => altSort(0)}>Name<div class="arrow-up"></div></th>
                        <th onClick={() => altSort(1)}>Score</th>
                        <th onClick={() => altSort(2)}>Highest Level</th>
                        <th onClick={() => altSort(3)}>Date</th>
                    </tr>
                </thead>
                <tbody>{recordList()}</tbody>
            </table>
        </div>
    );
}

function altSort(n) {
    var table, i, x, y;
    table = document.getElementById("myTable2");
    var switching = true;
    var direction = "ascending";
    var count = 0;

    console.log(table.rows.length)
    while (switching) {
        switching=false;
        var rows = table.rows;

        for(i = 1; i < (rows.length - 1); i++){
            var Switch = false
            x = rows[i].getElementsByTagName("td")[n].innerHTML;
            y = rows[i + 1].getElementsByTagName("td")[n].innerHTML;
            if (direction === "ascending"){
                console.log("ascend to heaven!!");
                if (Number(x) && Number(y)){
                    parseInt(x);
                    parseInt(y);
                   if (parseInt(x) > parseInt(y)){
                       Switch = true;
                       break;
                   }
                } else{ 
                    if (x.toLowerCase() > y.toLowerCase()){
                        Switch = true;
                        break;
                    }
                }
            }
            if (direction === "descending"){
                console.log("descend to helllll");
                if (Number(x) && Number(y)){
                    parseInt(x);
                    parseInt(y);
                   if (parseInt(x) < parseInt(y)){
                       Switch = true;
                       break;
                   }
                } else{ 
                    if (x.toLowerCase() < y.toLowerCase()){
                        Switch = true;
                        break;
                    }
                }
            }             
        }
        if (Switch){
            console.log('SWITCH!!!');
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i])
            switching = true;
            count ++;
        } else {
            console.log("swappa");
            console.log(count);
            console.log(direction);
            if (count === 0 && direction === "ascending"){
                direction = "descending";
                switching = true;
            }
        }
    }
}