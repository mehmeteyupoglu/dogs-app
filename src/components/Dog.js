import React from 'react';
import FavoriteActions from "./FavoriteActions";
import {Link} from "react-router-dom"; 
import Details from './Details'; 
import { ListGroup, ListGroupItem, Container, Row, Col } from 'reactstrap';

const Dog = ({id, name, toggle, getStatus, breed }) => {


    function urlSlug(title) {

        return title
        .toLowerCase()
        .trim()
        .split(/\s+/)
        .join("-")
        
        }
    

    return (
    
    <ListGroup>

        <Row xs="2">
            <Col>
                <ListGroupItem tag="a" href="#" action>
                    <Link to={`/details/${id}/${urlSlug(breed)}`} key={id} >{name} </Link> 
                    <FavoriteActions toggle={toggle} id={id} getStatus={getStatus}/>
                </ListGroupItem>
            </Col>
        </Row>
    
    </ListGroup>

    )                                       

};

export default Dog;