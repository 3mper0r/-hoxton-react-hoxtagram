import { useEffect, useState } from 'react'
import './styles.css'

import Likes_section from './components/likes-section'
import Comments_section from './components/comments-section'
import Card_section from './components/card-section'
import Search_Image from './components/search-image'



function App() {

  const [images, setImages] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch('http://localhost:3000/images')
      .then(resp => resp.json())
      .then(imagesFromDB => setImages(imagesFromDB))
  }, [])

  function likeImage(image) {
    fetch(`http://localhost:3000/images/${image.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ likes: image.likes + 1 })
    })

    const updatedImages = JSON.parse(JSON.stringify(images))
    const match = updatedImages.find(target => target.id === image.id)
    match.likes++
    setImages(updatedImages)

  }

  return (
    <div className="App">

      <img className="logo" src="assets/hoxtagram-logo.png" />
      <h2>Search your image</h2>
      <Search_Image />
      <section className="image-container">
        <article className="image-card">
          {images.map(image => (
            <Card_section
              key={image.id}
              image={image}
            />
          ))}
          {images.map(image => (
            <Comments_section
              key={image.id}
              image={image}
            />
          ))}

        </article>
      </section>
      <div className="likes-section">
        {images.map(image => (
          <Likes_section
            image={image}
            likeImage={likeImage}
          />

        ))}
      </div>
    </div>
  )
}

export default App
