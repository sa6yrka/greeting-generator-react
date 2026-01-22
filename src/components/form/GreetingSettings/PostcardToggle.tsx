import { ImageIcon } from 'lucide-react'

interface Props {
  isImageEnabled: boolean
  setIsImageEnabled: (value: boolean) => void
}

export const PostcardToggle = ({ isImageEnabled, setIsImageEnabled }: Props) => {
  return (
    <div className='flex items-center pt-2 sm:pt-6'>
      <label
        className={`
            relative flex items-center p-3 rounded-xl border-2 cursor-pointer w-full h-13 transition-all duration-200 select-none
            ${isImageEnabled ? 'border-sky-500 bg-sky-50' : 'border-gray-100 bg-white hover:border-sky-200'}
          `}
      >
        <input
          type='checkbox'
          className='w-5 h-5 text-sky-600 border-gray-300 rounded focus:ring-sky-500 accent-sky-600'
          checked={isImageEnabled}
          onChange={(e) => setIsImageEnabled(e.target.checked)}
        />
        <span className={`ml-3 text-sm font-medium ${isImageEnabled ? 'text-sky-700' : 'text-gray-700'}`}>
              Сгенерировать открытку
            </span>
        {isImageEnabled && <ImageIcon className='w-4 h-4 ml-auto text-sky-600' />}
      </label>
    </div>
  )
}
