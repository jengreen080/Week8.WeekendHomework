import styled from "styled-components"
// import React, { useState, useEffect } from 'react';

const ListElement = ({photoCollection}) => {


    return (
        <>
            <h1>{photoCollection}</h1>
            <img>{photoCollection.jpeg}</img>
            
        </>
    )
}

export default ListElement