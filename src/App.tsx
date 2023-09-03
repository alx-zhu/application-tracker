import React, { FormEvent, useState } from "react";
import "./App.css";

function App() {
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);

  const submitJob = (e: FormEvent<HTMLInputElement>): void => {
    e.preventDefault();
    setShowConfirmation(true);
    setTimeout(() => {
      setShowConfirmation(false);
    }, 2000);
  };

  return (
    <div className="App">
      <h1>Add an application:</h1>
      <form>
        <label htmlFor="company">Company:</label>
        <input
          type="text"
          id="company"
          name="company"
          placeholder="Company Name"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          required
        />
        <label htmlFor="role">Role:</label>
        <input
          type="text"
          id="role"
          name="role"
          placeholder="Role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          required
        />
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          name="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <input type="button" value="Submit" onClick={submitJob} />
      </form>

      {showConfirmation && (
        <p>{`You have applied to the [${role}] position at [${company}] on [${date}].`}</p>
      )}
    </div>
  );
}

export default App;
