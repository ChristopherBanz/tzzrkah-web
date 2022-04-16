import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";

export default function Edit() {
    const [form, setForm] = useState({
        name: "",
        highScore: "",
        highLevel: "",
        date: "",
    });
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchData() {
            const id = params.id.toString();
            const response = await fetch(`https://cryptic-coast-84939.herokuapp.com/record/${params.id.toString()}`);

            if (!response.ok) {
                const message = `An error has occurred: ${response.statusText}`;
                window.alert(message);
                return;
            }

            const record = await response.json();
            if (!record) {
                window.alert(`Record with id ${id} not found`);
                navigate("/");
                return;
            }

            setForm(record);
        }

        fetchData();

        return;
    }, [params.id, navigate]);

    // These methods will update the state properties.
    function updateForm(value) {
        return setForm((prev) => {
            return { ...prev, ...value };
        });
    }

    async function onSubmit(e) {
        e.preventDefault();
        const editedPerson = {
            name: form.name,
            highScore: form.highScore,
            highLevel: form.highLevel,
            date: form.date
        };

        // This will send a post request to update the data in the database.
        await fetch(`https://cryptic-coast-84939.herokuapp.com/update/:${params.id}`, {      
            method: "POST",
            body: JSON.stringify(editedPerson),
            headers: {
                'Content-Type': 'application/json'
            },
        });
        console.log("maybe this is where it happens?!?!");

        navigate("/");
    }

    // This following section will display the form that takes input from the user to update the data.
    return (
        <div>
            <h3>Update Record</h3>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name: </label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        value={form.name}
                        onChange={(e) => updateForm({ name: e.target.value })}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="highScore">High Score: </label>
                    <input
                        type="number"
                        className="form-control"
                        id="highScore"
                        value={form.highScore}
                        onChange={(e) => updateForm({ highScore: e.target.value })}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="highLevel">Highest Level: </label>
                    <input
                        type="number"
                        className="form-control"
                        id="highLevel"
                        value={form.highLevel}
                        onChange={(e) => updateForm({ highLevel: e.target.value })}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="date">Date: </label>
                    <input
                        type="date"
                        className="form-control"
                        id="date"
                        value={form.date}
                        onChange={(e) => updateForm({ date: e.target.value })}
                    />
                </div>
                <br />

                <div className="form-group">
                    <input
                        type="submit"
                        value="Update Record"
                        className="btn btn-primary"
                    />
                </div>
            </form>
        </div>
    );
}