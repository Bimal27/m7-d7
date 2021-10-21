import React from 'react'
import { Container, Row, Col, Form, Alert, Spinner} from 'react-bootstrap'
import JobResult from './JobResult'
import uniqid from 'uniqid'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'

import { getJobAction } from "../actions";

const mapStateToProps = (state) => ({
  jobs: state.company.companyName,
  isError: state.company.isError,
  isLoading: state.company.isLoading
})

const mapDispatchToProps = (dispatch) => ({
  getJobs: () => {
    dispatch(getJobAction())
  }
})

 class MainSearch extends React.Component {

    state = {
        query: '',
        jobs: []
    }

    baseEndpoint = 'https://strive-jobs-api.herokuapp.com/jobs?search='


    handleChange = (e) => {
        this.setState({ query: e.target.value })
    }

    handleSubmit = async (e) => {
        e.preventDefault()

        const response = await fetch(this.baseEndpoint + this.state.query + '&limit=20')

        if (!response.ok) {
            alert('Error fetching results')
            return
        }

        const { data } = await response.json()

        this.setState({ jobs: data })

    }

    render() {
        return  this.props.isError ?(
            <Alert variant="danger">Error fetching books in stock</Alert>
            ) : this.props.isLoading ? (
                <Spinner variant="success" animation="border" />
              ) : (
            <Container>
                <Row>
                    <Col xs={10} className='mx-auto my-3'>
                        <h1>Remote Jobs Search</h1>
                        <Link to="/favourites" className="btn btn-primary">Favourites</Link>
                    </Col>
                    <Col xs={10} className='mx-auto'>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Control type="search" value={this.state.query} onChange={this.handleChange} placeholder="type and press Enter" />
                        </Form>
                    </Col>
                    <Col xs={10} className='mx-auto mb-5'>
                        {
                            this.state.jobs.map(jobData => <JobResult key={uniqid()} data={jobData} />)
                        }
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainSearch)