import React from 'react'; 
import dogs from '../dogsdata'; 
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';


const Details = (props) => {
    return (
        <div>
      <Card>
        <CardImg top width="100%" src=
        {dogs.image} alt="Card image cap" />
        <CardBody>
          <CardTitle>{dogs.name}</CardTitle>
          <CardSubtitle>{dogs.description}</CardSubtitle>
          <CardText>Dog Breed: {dogs.breed}</CardText>
          <Button>Turn Back</Button>
        </CardBody>
      </Card>
    </div>

    )
}

export default Details