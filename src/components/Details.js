import React from 'react'; 
import dogs from '../dogsdata'; 
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { useParams } from 'react-router';


// const findDog = dogs.find(dog => {
//   id === id 
// })


const Details = () => {
    let { id } = useParams(); 
    console.log(id); 

    const myDog = dogs.find(dog=> dog.id === id)
    const {name, description, age, breed, image} = myDog
    const imgStyle = {
      maxHeight: 500,
      maxWidth: 500
    }
    
    return (
        <div>

      <Card className='cardClass'>
        <CardImg className="img-thumbnail" src={image} style={imgStyle} alt="Card image cap" />
        <CardBody>
          <CardTitle><h1>Adı: {name}</h1></CardTitle>
          <CardSubtitle><h4>Cinsi: {breed}</h4></CardSubtitle>
          <CardSubtitle><h4>Yaşı: {age === 'Adult' ? 'Yaşlı' : 'Genç'}</h4></CardSubtitle>
        </CardBody>
        
      </Card>
        
    </div>

    )
}

export default Details