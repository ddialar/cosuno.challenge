import type { FC, ChangeEvent } from 'react'

interface FilterItemProps {
  text: string
  isSelected: boolean
  onChange: (filter: string) => void
}

const FilterItem: FC<FilterItemProps> = ({ text, isSelected, onChange }) => {
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.name)
  }

  return (
    <li key={text} className='w-[30%] md:pr-2 md:w-32 mb-1'>
      <input
        type='checkbox'
        id={text}
        name={text}
        className='hidden peer'
        checked={isSelected}
        onChange={onChangeHandler}
      />
      <label
        htmlFor={text}
        className={`
          p-1
          rounded-md
          border
          border-gray-400
          bg-white
          text-gray-400
          truncate
          block
          peer-checked:bg-blue-main
          peer-checked:text-white
          peer-checked:border-blue-main
        `}
      >
        {text}
      </label>
    </li>
  )
}

interface Props {
  availableFilters: Array<string>
  selectedFilters: Array<string>
  onChange: (filter: string) => void
  className?: string
}

export const FilterBox: FC<Props> = ({ availableFilters, selectedFilters, onChange, className = '' }) =>
  <ul className={`flex flex-wrap justify-between md:justify-start w-full text-sm ${className}`}>
    {
      availableFilters.map(filter =>
        <FilterItem
          key={filter}
          text={filter}
          isSelected={selectedFilters.includes(filter)}
          onChange={onChange}
        />
      )
    }
  </ul>
