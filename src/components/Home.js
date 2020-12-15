import React from 'react'
import { Card, CardContent, CardActions, Divider } from '@material-ui/core'
import cars from '../cars.json'
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap'
    },
    card: {        
        width: '300px',
        margin: '20px 40px'
    }
    
  });

let Home = () => {    
    let classes = useStyles();
    return (
        <div className={classes.root}>
            {cars.map((car, idx) => (
                <Card key={idx} className={classes.card}>
                    <CardContent className="text-gray">
                        <span>{car.Name.toUpperCase()}</span>
                        <ul>
                        <li>Miles_per_Gallon: {car["Miles_per_Gallon"]}</li>
                        <li>Cylinders: {car["Cylinders"]}</li>
                        <li>Displacement: {car["Displacement"]}</li>
                        <li>Horsepower: {car["Horsepower"]}</li>
                        </ul>
                    </CardContent>
                    <Divider />
                    <CardActions style={{ color: 'mediumblue' }}>
                        
                    <Link to={`/Car/${car.id}`}>See more Details</Link>
                    </CardActions>
                </Card>
            ))}
        </div>
    )
}

export default Home


/*




*/