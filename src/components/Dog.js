import React from 'react';
import FavoriteActions from "./FavoriteActions";
import {Link} from "react-router-dom"; 
import { Card } from 'reactstrap';

const Dog = ({id, name, toggle, getStatus, breed }) => {


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
    boxShadow: '10px 10px 15px 3px #dbdbd9', 
    
  
}

const itemStyle = {
    paddingBottom: '10px', 
    fontSize : '20px', 
    fontWeight : 'bold', 
    
}


export default Dog;