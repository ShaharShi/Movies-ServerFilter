import React from "react"
import "./index.css";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Trash2 } from 'react-bootstrap-icons';


import Rank from "../rank";

export interface IMovie {
    title: string
    poster: string
    year: string,
    type: string,
    rate: number,
    id: string,
    baseAdditionalInfoUrl: string,
    deleteMovie: Function,
    configuration?: any
}
export default function Movie(props: IMovie) {
    const showLink = isValidUrl(props.baseAdditionalInfoUrl);

    return <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.poster} />
        <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>
                {props.year}
            </Card.Text>
            {showLink && <Card.Link href={`${props.baseAdditionalInfoUrl}/${props.id}`}>Go To</Card.Link>}
            <Rank stars={props.rate} starsColor={props.configuration.starsColor} />
            <Button onClick={() => props.deleteMovie(props.id)} variant="danger"><Trash2 /></Button>
        </Card.Body>
    </Card>
}

function isValidUrl(url: string): boolean {
    const expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
    const regex = new RegExp(expression);
    return regex.test(url)
}
