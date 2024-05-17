import React, { useMemo } from 'react'
import { useNavigate, Navigate, useParams } from 'react-router-dom'
import { getHeroById } from '../helpers';


export const HeroPage = () => {

  const { id, superhero } = useParams();

  const hero = useMemo(() => getHeroById(id), [id]) 

  const navigate = useNavigate()

  const onNavigateBack = () =>{
    navigate(-1)
  }

  if (!hero) {
    return <Navigate to='/marvel' />
  }

  return (
    <div className='row mt-5'>
      <div className="col-4">
        <img src={`/assets/heroes/${id}.jpg`}
          alt={hero.superhero}
          className="img-thumbnail animate__animated animate__bounceInLeft animate__slow"
        />
      </div>
      <div className="col-8">
        <h3>{hero.superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Alter ego:</b> {hero.alter_ego}
          </li>
          <li className="list-group-item">
            <b>Publisher:</b> {hero.publisher}
          </li>
          <li className="list-group-item">
            <b>First appearance:</b> {hero.first_appearance}
          </li>
        </ul>

        <h5 className="mt-3">Characters</h5>
        <p>{hero.characters}</p>

        <button 
        className='btn btn-outline-primary'
        onClick={onNavigateBack}
        >Back</button>
      </div>
    </div>
  )
}

