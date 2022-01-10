import { useState } from 'react'
import './styles.css'
import './App.css'
import Likes_section from './components/likes-section'
import Comments_section from './components/comments-section'
import Card_section from './components/card-section'


function App() {

  const [images, setImages] = useState([])

  return (
    <div className="App">

      <img class="logo" src="assets/hoxtagram-logo.png" />

      <section class="image-container">
        <article class="image-card">
          <Card_section />
          <Comments_section />
        </article>
      </section>
      <div class="likes-section">
        <Likes_section />
      </div>
    </div>
  )
}

export default App
