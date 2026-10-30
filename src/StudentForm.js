import React from "react";

function StudentForm() {
  return (
    <div>
      <h2>Student Registration Form</h2>

      <form>
        <label>Name:</label>
        <input type="text" placeholder="Enter Name" required />

        <br /><br />

        <label>Roll No:</label>
        <input type="text" placeholder="Enter Roll No" required />

        <br /><br />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default StudentForm;