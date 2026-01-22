import { Heart } from 'lucide-react'

interface Props {
  interests: string
  setInterests: (interests: string) => void
}

export const InterestsField = ({ interests, setInterests }: Props) => {
  return (
    <div className='relative group'>
      <label htmlFor='interests' className='block text-sm font-medium text-gray-700 mb-1 ml-1'>
        Интересы и увлечения
      </label>
      <div className='relative'>
        <div className='absolute top-3.5 left-3 flex items-start pointer-events-none'>
          <Heart className='h-4 w-4 text-gray-400 group-focus-within:text-blue-500 transition-colors' />
        </div>
        <textarea
          cols={30} rows={2} id='interests'
          name='interests' value={interests}
          placeholder='Путешествия, IT, гонки...'
          onChange={(e) => setInterests(e.target.value)}
          className='block w-full pl-9 pr-4 py-3 bg-white border-2 border-gray-100 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all resize-none'
        ></textarea>
      </div>
    </div>
  )
}
