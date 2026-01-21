import { useState } from 'react'
import { OccasionType } from '../types/occasionType'

export const Editor = () => {
  const [occasion, setOccasion] = useState<OccasionType>(OccasionType.BIRTHDAY)

  const [name, setName] = useState<string>('')
  const [age, setAge] = useState<string>('')

  const [interests, setInterests] = useState<string>('')

  return (
    <div className='max-w-7xl mx-auto'>
      <div>
        <p>{occasion}</p>
        <p>{name}</p>
        <p>{age}</p>
        <p>interests</p>
      </div>

      <div>
        <button onClick={() => setOccasion(OccasionType.BIRTHDAY)}>День Рождения</button>
        <button onClick={() => setOccasion(OccasionType.NEW_YEAR)}>Новый Год</button>
      </div>

      <div>
        <div>
          <label htmlFor='name'>Name: </label>
          <input
            id='name'
            type='text'
            value={name}
            placeholder='Сабыржан'
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor='age'>Age: </label>
          <input
            type='text'
            id='age'
            value={age}
            placeholder='18'
            onChange={(e) => setAge(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor='interests'>Interests: </label> <br />
          <textarea
            cols={30}
            rows={2}
            id='interests'
            name='interests'
            value={interests}
            placeholder='Traveling, Coding, Motorsport'
            onChange={(e) => setInterests(e.target.value)}
          ></textarea>
        </div>
      </div>
    </div>
  )
}
