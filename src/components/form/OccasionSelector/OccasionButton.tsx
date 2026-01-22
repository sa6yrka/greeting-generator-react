import type { LucideIcon } from 'lucide-react'

interface Props {
  icon: LucideIcon
  label: string
  isSelected: boolean
  onClick: () => void
}

export const OccasionButton = ({ icon: Icon, label, isSelected, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`
      relative w-full h-32 rounded-2xl border-2 flex flex-col items-center justify-center gap-3 transition-all duration-200
      ${
        isSelected
          ? 'border-blue-500 bg-blue-50 text-blue-700 shadow-sm'
          : 'border-gray-200 bg-gray-50 text-gray-500 hover:border-blue-200 hover:bg-blue-50/50'
      }
      `}
    >
      <div className={`p-3 rounded-full ${isSelected ? 'bg-blue-200' : 'bg-white'}`}>
        <Icon className={`w-6 h-6 ${isSelected ? 'text-blue-700' : 'text-gray-400'}`} />
      </div>
      <span className='font-semibold text-sm sm:text-base'>{label}</span>

      {isSelected && <div className='absolute inset-0 border-2 border-blue-500 rounded-2xl pointer-events-none' />}
    </button>
  )
}
