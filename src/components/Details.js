import React, { useState } from 'react'; 
import dogs from '../dogsdata'; 
import {
  Card, CardImg, CardText, CardBody,
  CardHeader, CardSubtitle, Button, Popover, 
  PopoverHeader, PopoverBody
} from 'reactstrap';

const Details = ({match}) => {
    let { id } = match.params

    const myDog = dogs.find(dog=> dog.id === id)
    const {name, description, age, breed, image} = myDog
    const imgStyle = {
      maxHeight: 500,
      maxWidth: 500
    }
    
    const [popoverOpen, setPopoverOpen] = useState(false);

    const toggle = () => setPopoverOpen(!popoverOpen);

    return (
        <div>

      <Card className='cardClass' style={cardStyle}>
        <CardHeader ><h1>{name}</h1></CardHeader>
        <CardImg className="img-thumbnail" src={image} style={imgStyle} alt="Card image cap" />
        <CardBody>
          <CardSubtitle><h4>Cinsi: {breed}</h4></CardSubtitle>
          <CardSubtitle><h4>Yaşı: {age === 'Adult' ? 'Yaşlı' : 'Genç'}</h4></CardSubtitle>
        </CardBody>
        <Button id="Popover1" type="button">
        Detaylı Bilgi
      </Button>
      <Popover placement="right" isOpen={popoverOpen} target="Popover1" toggle={toggle}>
        <PopoverHeader>{name}</PopoverHeader>
        <PopoverBody>{description}</PopoverBody>
      </Popover>
      </Card>
        
    </div>

    )
}

const cardStyle = {
  margin : '125px auto 0', 
  width : '30%', 
  textAlign : 'center', 
  boxShadow: '5px 8px 8px 5px #e6e6e3'
}


export default Details