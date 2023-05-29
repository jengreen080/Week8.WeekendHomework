import styled from "styled-components"
import ListElement from "./ListElement"

// import React, { useState, useEffect } from 'react';

const PhotoList = ({photoCollection}) => {

    const photoItems = photoCollection.map((individualPhoto) => {
        return (
            <>
                <p>this the list items</p>
                <ListElement
                    photoCollection = {individualPhoto.title}
                    
                    key = {individualPhoto.id}
            />
            </>
        )
    })
    
    return (
        <>
            <ul>
                {photoItems}
            </ul>
        </>
    )
}

export default PhotoList