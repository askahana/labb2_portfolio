import React, {useState, useEffect} from 'react'
import '../css/github.css'

const Git = () => {
    const [posts, setPosts] = useState([]);
    useEffect( () => {
        fetch('https://api.github.com/users/askahana/repos')
        .then(response => response.json())
        .then(data => setPosts(data))
        .catch(error => console.error('Kunde inte läsa data ', error))
    }, []);
  return (
        <div className="wrapper">  
          <div className="table-container">
          <table>
          <thead>
            <tr>
              <th>Projektnamn</th>
              <th>Beskrivning</th>
              <th>Stjärnor</th>
              <th>Länk</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.id}>
                <td>{post.name}</td>
                <td>{post.description || 'Ingen beskrivning tillgänglig'}</td>
                <td>{post.stargazers_count}</td>
                <td><a href={post.html_url} target="_blank" rel="noopener noreferrer" cursor="pointer">Projektlänk</a></td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
        </div>
      
  )
}

export default Git