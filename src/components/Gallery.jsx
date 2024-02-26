import React from 'react'
import { useContext } from 'react'
import { LikedContext } from '../context/Liked'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

import Container from 'react-bootstrap/Container'

const Gallery = () => {
  const { like, setLike } = useContext(LikedContext)
  const hacerLiked = (foto) => {
    const actualiceArray = like.map(photo =>{
      if(photo.id === foto.id && foto.liked === true){
        return {
          ...photo,
          liked:false
        }
      }else if(photo.id === foto.id && foto.liked === false){
        return {
          ...photo,
          liked:true
        }
      }else{
        return photo
      }

    })

    setLike(actualiceArray)
  }
  return (
    <div className="gallery grid-columns-5 p-3">
      {
        like.map(foto =>
          <>
            <div className='photoContainer'>
              <img className='firstPhoto photo' src={foto.src.tiny} />
              <p className='container'>{foto.alt}</p>
              {
                foto.liked ? 
                            <i className='true' onClick={() => hacerLiked(foto)}><FontAwesomeIcon icon={faHeart} /></i>
                            :
                            <i className='false' onClick={() => hacerLiked(foto)}><FontAwesomeIcon icon={faHeart} /></i>
              }
            </div>
          </>
      )}
    </div>
  )
}

export default Gallery