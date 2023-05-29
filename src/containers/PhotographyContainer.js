import styled from "styled-components"
import React, { useState, useEffect } from 'react';
import PhotoList from "../components/PhotoList";
import LK from "../LK.jpeg";
import MNT from "../MNT.jpeg"

const Home = () => {

    const [photoCollection, setPhotoCollection] = useState([])

    useEffect(() => {
        getPhotoCollection()
    }, [])
    
    const getPhotoCollection = () => {   
    let photoCollection = [{"id" : "MNT", "title" : "mountains", 
            "location" : "Canada", "jpeg" : LK},
            {"id" : "LK", "title" : "lake", 
            "location" : "switzerland", "jpeg" : MNT} 
    ];
    setPhotoCollection(photoCollection)
    }
        // fetch("https://api.artic.edu/api/v1/artworks/search?q=photography")
        //     .then(res => res.json())
        //     .then(photoCollection => setPhotoCollection(photoCollection))
            
    // const onPhotoClicked = () => {
    //     setPhot
    // }


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