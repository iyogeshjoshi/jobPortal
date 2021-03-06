import React, { PureComponent } from "react";
import "./App.css";

import { getJobListing } from "../../api";
import {
  Card,
  Col,
  Container,
  Form,
  Navbar,
  Row,
  Spinner
} from "react-bootstrap";
import SearchInput, { createFilter } from "react-search-input";
import JobPost from "../JobPost";
import _ from "underscore";

class App extends PureComponent {
  state = {
    jobs: [],
    query: "",
    filters: ["title"],
    sortBy: "title"
  };

  componentDidMount() {
    getJobListing().then(jobs => this.setState({ jobs: jobs.data }));
  }

  onQuery = query => {
    this.setState({ query });
  };

  updateFilter = key => {
    const { filters } = this.state;

    if (filters.indexOf(key) === -1) {
      this.setState({ filters: [...filters, key] });
    } else {
      let newFilters = filters.filter(item => item !== key);

      this.setState({ filters: newFilters });
    }
  };

  sortBy = key => this.setState({ sortBy: key });

  render() {
    const { jobs, query, filters, sortBy } = this.state;
    let filteredJobs = jobs.filter(createFilter(query, filters));

    filteredJobs = _.sortBy(filteredJobs, sortBy);

    return (
      <Container>
        <header className="header">
          <Navbar expand="lg" variant="light" bg="light">
            <Container>
              <Navbar.Brand href="#">Job Portal</Navbar.Brand>
            </Container>
          </Navbar>
        </header>
        <section>
          <Row
            className="justify-content-md-center"
            style={{ paddingBottom: 10 }}
          >
            <Col lg={4} md={6}>
              <Card bg="light" style={{ width: "20rem" }}>
                <Card.Body>
                  <Form
                    onSubmit={e => e.preventDefault()}
                    className="text-center"
                  >
                    <Form.Row>
                      <Col>
                        <SearchInput
                          className="search-input"
                          onChange={this.onQuery}
                        />
                      </Col>
                    </Form.Row>
                    <Row>
                      <Col>
                        <Form.Label className="float-left">
                          <strong>Jobs found:</strong> {filteredJobs.length}
                        </Form.Label>
                      </Col>
                    </Row>
                    <Form.Row>
                      <Col className="text-left">
                        <Form.Label>Filter By: </Form.Label>
                        <br />
                        <Form.Check
                          inline
                          name="location"
                          label="Location"
                          onChange={() => this.updateFilter("location")}
                        />
                        <Form.Check
                          inline
                          name="skills"
                          label="Skills"
                          onChange={() => this.updateFilter("skills")}
                        />
                        <Form.Check
                          inline
                          name="experience"
                          label="Experience"
                          onChange={() => this.updateFilter("experience")}
                        />
                      </Col>
                    </Form.Row>
                    <Form.Row>
                      <Col className="text-left">
                        <Form.Label>Sort By: </Form.Label>
                        <br />
                        <Form.Check
                          inline
                          type="radio"
                          name="sortBy"
                          label="Location"
                          onChange={() => this.sortBy("location")}
                        />
                        <Form.Check
                          inline
                          type="radio"
                          name="sortBy"
                          label="Skills"
                          onChange={() => this.sortBy("skills")}
                        />
                        <Form.Check
                          inline
                          type="radio"
                          name="sortBy"
                          label="Experience"
                          onChange={() => this.sortBy("experience")}
                        />
                      </Col>
                    </Form.Row>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </section>
        <section className="">
          <Row className="">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job, index) => (
                // <Row key={`job-post-${index}`}>
                <Col
                  lg={4}
                  md={6}
                  key={`job-post-${index}`}
                  style={{ marginBottom: 10 }}
                >
                  <JobPost job={job} />
                </Col>
                // </Row>
              ))
            ) : (
              <Col className="Spinner-container">
                <Spinner animation="grow" />
              </Col>
            )}
          </Row>
        </section>
      </Container>
    );
  }
}

export default App;
