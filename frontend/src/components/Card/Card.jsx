import { Button } from "@mui/material";
import React from "react";
import { Link } from 'react-router-dom';


function Card(props) {
    return (
        <div className="card--container">
            <p className="card--category">ID:{props.id} </p>
            <h1 className="card--title">{props.name} </h1>
            <p className="card--cost">{props.cost} </p>
            <p className="card--category">{props.category} </p>
            <div>
                <Button
                    variant="contained"
                    color="primary"
                    style={{ marginRight: 10 }}
                    component={Link} to={'/'} >
                        Detalhes
                </Button>
            </div>


        </div>

    )
}

export default Card