interface Props {
  step: number
  title: string,
}

export const SectionHeader = ({ step, title }: Props) => {
  return (
    <h3 className='text-lg font-bold text-gray-900 flex items-center gap-2'>
      <span className='flex items-center justify-center w-6 h-6 rounded-full bg-gray-900 text-white text-xs'>
        {step}
      </span>
      {title}
    </h3>
  )
}
