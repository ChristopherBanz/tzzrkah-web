import React, { useState } from "react";
import { useNavigate } from "react-router";

export default function Create() {
    const [form, setForm] = useState({
        name: "",
        highScore: "",
        highLevel: "",
        date: "",
    });
    const navigate = useNavigate();

    // These methods will update the state properties.
    function updateForm(value) {
        return setForm((prev) => {
            return { ...prev, ...value };
        });
    }

    // This function will handle the submission.
    async function onSubmit(e) {
        e.preventDefault();

        // When a post request is sent to the create url, we'll add a new record to the database.
        const newScore = { ...form };

        await fetch("https://cryptic-coast-84939.herokuapp.com/record/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newScore),
        })
            .catch(error => {
                window.alert(error);
                return;
            });

        setForm({ name: "", highScore: "", highLevel: "", date: "" });
        navigate("/");
    }

    // This following section will display the form that takes the input from the user.
    return (
        <div>
            <h3>New Score:</h3>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        value={form.name}
                        onChange={(e) => updateForm({ name: e.target.value })}
                        required="true"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="highScore">High Score</label>
                    <input
                        type="number"
                        className="form-control"
                        id="highScore"
                        value={form.highScore}
                        onChange={(e) => updateForm({ highScore: e.target.value })}
                        required="true"

                    />
                </div>
                <div className="form-group">
                    <label htmlFor="highLevel">Highest Level</label>
                    <input
                        type="number"
                        className="form-control"
                        id="highLevel"
                        value={form.highLevel}
                        onChange={(e) => updateForm({ highLevel: e.target.value })}
                        required="true"

                    />
                </div>
                <div className="form-group">
                    <label htmlFor="date">Date</label>
                    <input
                        type="date"
                        className="form-control"
                        id="date"
                        value={form.date}
                        onChange={(e) => updateForm({ date: e.target.value })}
                        required="true"

                    />
                </div>

                <div className="form-group">
                    <input
                        type="submit"
                        value="Submit Score"
                        className="btn btn-primary"
                    />
                </div>
            </form>
        </div>
    );
}