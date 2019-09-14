import React from "react";
import ReactDOM from "react-dom";
import JobPost from ".";

it("JobPost renders without crashing", () => {
  const div = document.createElement("div");
  const Job = {
    _id: "5b2b8a98263a5020388e87dc",
    title: "Senior Knowledge Analyst CKA",
    applylink:
      "https://www.techgig.com/jobs/Senior-Knowledge-Analyst-CKA/59843",
    jd: "",
    companyname: "Boston Consultancy Group",
    location: "Bengaluru/Bangalore",
    experience: "4-6 yrs",
    salary: "",
    type: "",
    skills: "cassandra",
    startdate: "",
    enddate: "",
    created: "",
    source: "techgig",
    timestamp: 1528959791.958316,
    __v: 0
  };

  ReactDOM.render(<JobPost job={Job} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
