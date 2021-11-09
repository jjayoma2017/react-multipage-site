import { useFetch } from '../hooks/useFetch'
import { useParams } from 'react-router'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

export default function Article() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { data: article, isPending, error } = useFetch(
    `http://localhost:3000/articles/${id}`,
  )

  useEffect(() => {
    if (error) {
      // redirect
      setTimeout(() => {
        navigate('/')
      }, 2000)
    }
  }, [error, navigate])

  return (
    <div>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {article && (
        <div key={article.id} className="card">
          <h2>{article.title}</h2>
          <p>{article.author}</p>
          <p>{article.body}</p>
        </div>
      )}
    </div>
  )
}
