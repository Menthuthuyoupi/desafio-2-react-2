import React, { useState, useEffect} from 'react'
import { useContext } from 'react'
import { LikedContext } from '../context/Liked'

import Container from 'react-bootstrap/Container'

const Favorites = () => {
  const { like, setLike } = useContext(LikedContext)
  const [renderLike, setRenderLike] = useState([])
  
  useEffect(()=>{
    renderLiked()
  })
  
  const renderLiked = () => {
    const newArray = []
    like.map(photo =>{
      
      if(photo.liked){
        return newArray.push(photo)
      }
    },[])

    setRenderLike(newArray)
  }

  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 gallery grid-columns-4">
        {
          renderLike.map(photo =>
            <>
              <Container><img className='photo' src={photo.src.tiny} style={{width:'100%'}} /></Container>
            </>
          )
        }
      </div>
    </div>
  );
};
export default Favorites;
