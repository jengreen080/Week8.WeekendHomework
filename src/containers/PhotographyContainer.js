import styled from "styled-components"
import React, { useState, useEffect } from 'react';
import PhotoList from "../components/PhotoList";

const Home = () => {

    const [photoCollection, setPhotoCollection] = useState({})

    useEffect(() => {
        getPhotoCollection();
    }, [])

    const getPhotoCollection = () => {
        fetch("https://picsum.photos/v2/list?page=2&limit=100")
        .then(res => res.json())
        .then(photoCollection => setPhotoCollection(photoCollection))
    }



    return (
        <>
            <h1>This is the photography container</h1>
            <ul>
                <PhotoList photoCollection = {photoCollection}/>
            </ul>
        </>
    )
}

export default Home