export type SelectOption = {
  value: number
  label: string
}

export type Tab = {
  label: string
  component: React.FC
}

// ColorTypes
export type ColorTypes = | 'primary' | 'secondary'
export type AlertColorTypes = | 'success' | 'danger'

// Flex types
export type FlexDirectionTypes = | 'row' | 'column' | 'row-reverse' | 'column-reverse'
export type JustifyContentTypes = | 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly' 
export type AlignItemsTypes = | 'center' | 'flex-start' | 'flex-end'

// Other types
export type TextAlignTypes = | 'left' | 'center' | 'right'