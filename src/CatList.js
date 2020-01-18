import React from 'react'

const CatList = ({catPics}) => (
  <ul>
    {catPics.map(pic => (
      <li key={pic.id}>
        <img src={pic.url} alt={`cat pic ${pic.id}`} id={pic.id}/>
      </li>
    ))}
  </ul>
)

export default CatList