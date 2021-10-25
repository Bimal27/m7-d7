import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "react-bootstrap";
import { StarFill } from "react-bootstrap-icons";
import { connect } from "react-redux";
import { removeFromFav } from "../actions";
import { useSelector, useDispatch } from "react-redux"



// const mapDispatchToProps = (dispatch) => ({
//   removeFromFav: (f) => {
//     dispatch(removeFromFav(f));
//   },
// });

const Favourites = () => {

  const fab = useSelector(state => state)

  const dispatch = useDispatch()

    return (
      <Container>
        <Row>
          <Col xs={12}>
            <ListGroup>
              {fab.favourites.elements.map((f) => (
                <ListGroupItem>
                  <StarFill onClick={() => dispatch(removeFromFav(f))} />
                  <span>{f}</span>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    );
  
}

export default Favourites