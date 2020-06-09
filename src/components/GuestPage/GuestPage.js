import React from 'react';
import CardList from './../Card/CardList';
import { robots } from './../Card/robots';

const GuestPage = ({onRouteChange}) => {
    return (
        <article className="">
         <h1>Guest Page</h1>
         <CardList robots={robots} />
        </article>
            );
}

export default GuestPage;