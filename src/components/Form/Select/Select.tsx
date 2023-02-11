import FormControl from '@mui/material/FormControl'
import FormHelperText from '@mui/material/FormHelperText'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select, { SelectChangeEvent, SelectProps } from '@mui/material/Select'
import React from 'react'

export interface SelectOptions {
  value: string | number
  label: string | number
  disabled?: boolean
}

export type InputSelectProps = {
  id: string
  label: string
  onChange: (event: SelectChangeEvent<any>, child?: React.ReactNode) => void
  options: SelectOptions[]
  errorText?: string
} & SelectProps

const InputSelect: React.ForwardRefRenderFunction<React.Ref<HTMLInputElement>, InputSelectProps> = (
  { id, label, onChange, options, errorText, ...rest },
  ref
) => {
  const hasError = !!errorText

  const menuItems =
    options &&
    options.map(({ value, label: labelOption, disabled: optionDisabled = false }: SelectOptions, key) => (
      <MenuItem key={`item-${value}`} id={`${id}-${key + 1}`} value={value} disabled={optionDisabled}>
        {labelOption}
      </MenuItem>
    ))

  return (
    <>
      <FormControl fullWidth variant="outlined">
        <InputLabel id={`label-${id}`}>{label}</InputLabel>
        <Select
          fullWidth
          id={id}
          labelId={`label-${id}`}
          label={label}
          inputRef={ref}
          onChange={onChange}
          error={hasError}
          variant="outlined"
          {...rest}
        >
          {menuItems}
        </Select>
      </FormControl>
      {errorText && <FormHelperText>{errorText}</FormHelperText>}
    </>
  )
}

export default React.forwardRef(InputSelect)
