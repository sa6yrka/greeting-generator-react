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
            ${isImageEnabled ? 'border-blue-500 bg-blue-50' : 'border-gray-100 bg-white hover:border-blue-200'}
          `}
      >
        <input
          type='checkbox'
          className='w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 accent-blue-600'
          checked={isImageEnabled}
          onChange={(e) => setIsImageEnabled(e.target.checked)}
        />
        <span className={`ml-3 text-sm font-medium ${isImageEnabled ? 'text-blue-700' : 'text-gray-700'}`}>
              Сгенерировать открытку
            </span>
        {isImageEnabled && <ImageIcon className='w-4 h-4 ml-auto text-blue-600' />}
      </label>
    </div>
  )
}
