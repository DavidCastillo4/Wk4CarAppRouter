//Car.js

import React, { useState, useEffect } from 'react'
import cars from '../cars.json'
import Chip from '@material-ui/core/Chip';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


let Car = ({ match }) => {
    let [car, setCar] = useState({});

    useEffect(() => {
        getCar(match.params.id);
    }, []);

    let getCar = (id) => {
        let c = cars.find(e => e.id.toString() === id);
        setCar(c);
    };

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            margin: '50px 10px'
        }}>
            <Card style={{ width: '500px', height: '300px' }} >
                <CardContent>
                    <h1>{car.Name}</h1>
                    <div>
                        <Chip label={`Acceleration:${car.Acceleration}`} />
                        <Chip label={`Cylinders:${car.Cylinders}`} />
                        <Chip label={`Displacement:${car.Displacement}`} />
                        <Chip label={`Horsepower:${car.Horsepower}`} />
                        <Chip label={`Miles_per_Gallon:${car.Miles_per_Gallon}`} />
                        <Chip label={`Name:${car.Name}`} />
                        <Chip label={`Origin:${car.Origin}`} />
                        <Chip label={`Weight_in_lbs:${car.Weight_in_lbs}`} />
                        <Chip label={`Year:${car.Year}`} />
                        <Chip label={`id:${car.id}`} />
                    </div>
                </CardContent>
            </Card>
        </div>
    )
};

export default Car