import React, { useState, useEffect, useContext } from "react";
import "./student.css";
import { schoolContext } from "../../../store/Provider";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";

function Student({ id, name, age, studentClass, gender }) {
  let history = useHistory();
  const { removeStudent } = useContext(schoolContext);

  const editHandler = editID => {
    history.push("/edit");
  };

  return (
    <div className={"student-container"}>
      <span className={"student"}>{id}</span>
      <span className={"student"}>{name}</span>
      <span className={"student"}>{age}</span>
      <span className={"student"}>{studentClass}</span>
      <span className={"student"}>{gender}</span>
      <div className="btn-container">
        <span className={"student"}>
          <Button variant="primary" onClick={() => editHandler(id)}>
            edit
          </Button>
        </span>
        <span className={"student"}>
          <Button variant="danger" onClick={() => removeStudent(id)}>
            delete
          </Button>
        </span>
      </div>
    </div>
  );
}

export default Student;
