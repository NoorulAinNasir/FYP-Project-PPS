import React, { useEffect, useState } from "react";

const StudentNotes = () => {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    getNotes();
  }, []);

  const getNotes = async () => {
    let responseData;
    try {
      const response = await fetch("http://localhost:5000/gettingFile");
      responseData = await response.json();
      console.log(responseData.notes.map((n) => n));
    } catch (err) {
      console.log(err);
    }
    if (responseData) {
      setNotes(responseData.notes);
      console.log(notes);
      return;
    }
  };

  return (
    <>
      <div>
        {notes.map((n) => (
          <li>
            {" "}
            <a href={n.uploadedFile} download>
              {n.uploadedFile}
            </a>
          </li>
        ))}
      </div>
    </>
  );
};

export default StudentNotes;
