import React from 'react';
import FavoriteActions from "./FavoriteActions";
import {Link} from "react-router-dom"; 
import Details from './Details'; 
import { Card } from 'reactstrap';

const Dog = ({id, name, toggle, getStatus, breed, image }) => {


    function urlSlug(title) {

        return title
        .toLowerCase()
        .trim()
        .split(/\s+/)
        .join("-")
        
        }
    

    return (
        <Card style={Cardstyle}>
            <Link to={`/details/${id}/${urlSlug(breed)}` }  style={itemStyle} key={id} >{name} </Link> 
            <FavoriteActions toggle={toggle} id={id} getStatus={getStatus} />
        </Card>                   
    )     
};

const Cardstyle = {
    width : '250px', 
    height : '250px', 
    margin: '20px',
    display: 'flex', 
    justifyContent: 'center', 
    textAlign: 'center', 
    boxShadow: '5px 5px 6px 6px #c9c9c7', 
    
  
}

const itemStyle = {
    paddingBottom: '10px', 
    fontSize : '20px', 
    fontWeight : 'bold', 
    
}


export default Dog;