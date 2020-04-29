import React from 'react';
import {Button} from "reactstrap";

const FavoriteActions = (props) => {
    return (
        <div>
            {
                props.getStatus(props.id) ?
                    <Button 
                    style = {buttonStyle}
                    size='sm'
                    outline
                    color="danger" 
                    onClick={() => {props.toggle(props.id)}}>Favorilerden Cikar
                    </Button>
                    
                    : 
                    
                    <Button 
                    style = {buttonStyle}
                    size='sm'
                    outline
                    color="primary" 
                    onClick={() => {props.toggle(props.id)}}>Favoriye Ekle
                    </Button>
            }
        </div>
    );
};

const buttonStyle = {
    marginTop: '15px'
}

export default FavoriteActions;