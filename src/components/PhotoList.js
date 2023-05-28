import styled from "styled-components"
import ListElement from "./ListElement"

// import React, { useState, useEffect } from 'react';

const PhotoList = ({photoCollection}) => {

    const photoItems = photoCollection.map((individualPhoto, index) => {
        return (
            <ListElement
                photoCollection = {individualPhoto}
                key = {index}
            />
        )
    })
    
    return (
        <>
            <h1>This is the photo list</h1>
                {photoItems}
            <ul>
                {}
            </ul>
        </>
    )
}

export default PhotoList