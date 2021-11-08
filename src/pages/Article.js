import { useFetch } from '../hooks/useFetch'
import { useParams } from 'react-router'

export default function Article() {
  const { id } = useParams()

  const { data: article, isPending, error } = useFetch(
    `http://localhost:3000/articles/${id}`,
  )

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
