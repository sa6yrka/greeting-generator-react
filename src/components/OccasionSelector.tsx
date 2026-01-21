import { OccasionButton } from './OccasionButton'
import { Cake, Snowflake } from 'lucide-react'
import { OccasionType } from '../types/occasionType'
import { SectionHeader } from './SectionHeader'

interface IOccasionSelectorProps {
  occasion: OccasionType
  setOccasion: (value: OccasionType) => void
}

export const OccasionSelector = ({ occasion, setOccasion }: IOccasionSelectorProps) => {
  return (
    <section className='space-y-4'>
      <SectionHeader step={1} title="Выберите праздник" />

      <div className='grid grid-cols-2 gap-4'>
        <OccasionButton
          icon={Cake} label={OccasionType.BIRTHDAY}
          isSelected={occasion === OccasionType.BIRTHDAY}
          onClick={() => setOccasion(OccasionType.BIRTHDAY)}
        />
        <OccasionButton
          icon={Snowflake} label={OccasionType.NEW_YEAR}
          isSelected={occasion === OccasionType.NEW_YEAR}
          onClick={() => setOccasion(OccasionType.NEW_YEAR)}
        />
      </div>
    </section>
  )
}
