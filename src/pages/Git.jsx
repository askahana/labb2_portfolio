import React, {useState, useEffect} from 'react'
import '../css/github.css'
import Loading from './Loading';

const Git = () => {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const handleLinkClick = (e) => {
      e.preventDefault(); // デフォルトのリンク動作をキャンセル
      setIsLoading(true); // ローディングを表示
      const url = e.target.href;
      setTimeout(() => {
        window.location.href = url; // リダイレクト
      }, 1000); // ローディング表示後、1秒後にリダイレクトを実行
    };
  
  
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
                <td><a href={post.html_url} target="_blank" rel="noopener noreferrer" cursor="pointer" onClick ={handleLinkClick}>Projektlänk</a>{isLoading && <Loading />} {/* ローディング表示 */}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
        </div>
      
  )
}

export default Git

