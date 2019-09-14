import React from "react";
import { Card } from "react-bootstrap";

function JobPost({ job }) {
  return (
    <Card className="Job-post">
      <Card.Body>
        <Card.Title>{job.title}</Card.Title>
        <Card.Subtitle>
          {job.companyname} {job.experience && `- [${job.experience}]`}
        </Card.Subtitle>
        <Card.Text>
          {job.title && <li>Job Title - {job.title}</li>}
          {job.companyname && <li>Company - {job.companyname}</li>}
          {job.experience && <li>Experience - {job.experience}</li>}
          {job.jd && <li>Job Descriptiont - {job.jd}</li>}
          {job.type && <li>Type - {job.type}</li>}
          {job.location && <li>Location - {job.location}</li>}
          {job.skills && <li>Skills - {job.skills}</li>}
          {job.source && <li>Source - {job.source}</li>}
          {job.salary && <li>Salary - {job.salary}</li>}
          {job.startdate && (
            <li>Start Date - {new Date(job.startdate).toLocaleDateString()}</li>
          )}
          {job.enddate && (
            <li>End Date - {new Date(job.enddate).toLocaleDateString()}</li>
          )}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-right">
        <a
          className="btn btn-primary"
          variant="primary"
          href={job.applylink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Apply
        </a>
      </Card.Footer>
    </Card>
  );
}

export default JobPost;
