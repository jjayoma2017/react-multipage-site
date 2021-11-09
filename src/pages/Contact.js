import { useLocation } from 'react-router'

export default function Contact() {
  const queryString = useLocation().search

  const queryParams = new URLSearchParams(queryString)
  const name = queryParams.get('name')
  console.log('name:' + name)
  return (
    <div>
      <h2>Contact</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit fugit
        laboriosam accusantium cumque sequi accusamus, aut, quos modi corporis
        vel esse iusto doloremque voluptates cupiditate, aliquid exercitationem
        optio ex culpa!
      </p>
    </div>
  )
}
