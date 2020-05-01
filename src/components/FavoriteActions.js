import React from 'react';
import {Button} from "reactstrap";



const FavoriteActions = ({id, disabled, getStatus, toggle}) => {
    
    return (
        <div>
        
            {
                getStatus(id) ?
                    <Button 
                    disabled={disabled}
                    style = {buttonStyle }
                    size='sm'
                    outline
                    color="danger" 
                    onClick={() => toggle(id)}>Favorilerden Cikar
                    </Button>
                    
                    : 
                    <Button 
                    style = {buttonStyle}
                    disabled = {disabled}
                    size='sm'
                    outline
                    color="primary" 
                    onClick={() => {toggle(id)}}>Favoriye Ekle
                    </Button>
            }
        </div>
    );
};

const buttonStyle = {
    marginTop: '15px'
}

export default FavoriteActions;