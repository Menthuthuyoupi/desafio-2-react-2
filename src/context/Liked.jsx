import { createContext, useState } from 'react'
import { photos } from '../../public/photos.json'

export const LikedContext = createContext()

const LikedProvider = ({children}) => {
    const [like, setLike] = useState(photos)
    return (
        <LikedContext.Provider value={{like, setLike}}>
            {children}
        </LikedContext.Provider>
    )
}

export default LikedProvider
