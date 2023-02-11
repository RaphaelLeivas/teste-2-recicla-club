import FormHelperText from '@mui/material/FormHelperText'
import TextField, { TextFieldProps } from '@mui/material/TextField'
import React from 'react'

// import FieldErrorMessage from 'components/formik/FieldErrorMessage'
// import InputLabel from 'components/formik/InputLabel'
// import styles from '../../formik/styles'

export type InputTextProps = {
  id: string
  label?: string
  type?: string
  helperText?: string
  errorText?: string
} & TextFieldProps

const InputText: React.ForwardRefRenderFunction<React.Ref<HTMLInputElement>, InputTextProps> = (
  { id, label, type, helperText, errorText, ...rest },
  ref
) => {
  // const classes = styles()
  const hasError = !!errorText

  return (
    <>
      {/* <InputLabel
				label={label}
				htmlFor={id}
				error={hasError}
				disabled={rest.disabled}
				optionalLabel={optionalLabel}
				bottomSpacing
			/> */}
      {/* {hasError && <p>{errorText}</p>} */}
      <TextField
        fullWidth
        autoComplete="nope"
        variant="outlined"
        type={type || 'text'}
        InputLabelProps={{ shrink: type === 'date' ? true : undefined }}
        error={hasError}
        inputRef={ref}
        id={id}
        label={label}
        helperText={errorText}
        {...rest}
      />
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </>
  )
}

export default React.forwardRef(InputText)
