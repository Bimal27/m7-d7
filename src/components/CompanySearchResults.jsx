import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Job from './Job'
import uniqid from 'uniqid'
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

 class CompanySearchResults extends React.Component {

    componentDidMount() {
        this.props.getJobs()
    }

    render() {
        return <Container>
            <Row>
                <Col>
                    {
                        this.props.company.jobs.map(jobData => <Job key={uniqid()} data={jobData} />)
                    }
                </Col>
            </Row>
        </Container>
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CompanySearchResults)