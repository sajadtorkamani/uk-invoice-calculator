import classNames from 'classnames'
import { CleaveOptions } from 'cleave.js/options'
import Cleave from 'cleave.js/react'
import { ChangeEvent } from 'cleave.js/react/props'
import { useField, useFormikContext } from 'formik'
import React, { useState } from 'react'
import { InputGroup } from 'react-bootstrap'

import { THEME_PALETTE } from '../../lib/constants'
import FieldError from './FieldError'
import FieldLabel from './FieldLabel'

export interface MaskedInputProps {
  autoFocus?: boolean
  name: string
  label?: string | React.ReactNode
  className?: string
  placeholder?: string
  inputGroupText?: string
  maskOptions?: CleaveOptions
  useFormattedValue?: boolean
  min?: number
  max?: number
  transformRawValue?: (rawValue: string) => number | string | undefined
  isDisabled?: boolean
  onChange?: (value: string) => void
}

const MaskedInput: React.FC<MaskedInputProps> = ({
  autoFocus,
  name,
  label,
  placeholder,
  className,
  inputGroupText,
  maskOptions,
  useFormattedValue = false,
  min,
  max,
  transformRawValue,
  isDisabled,
  onChange,
}) => {
  const { setFieldValue, setFieldTouched, submitCount } = useFormikContext()
  const [field, { error }] = useField(name)
  const id = `field_${name}`

  const showError = !!(submitCount > 0 && error)
  const [isFocused, setIsFocused] = useState(false)

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    // Cleave creates the event.target.rawValue property.
    // (https://github.com/nosir/cleave.js/blob/master/src/Cleave.react.js#L291)
    // Pass this raw value to Formik.
    const rawValue = useFormattedValue
      ? event.target.value
      : event.target.rawValue

    setFieldTouched(name, true)
    setFieldValue(
      name,
      transformRawValue ? transformRawValue(rawValue) : rawValue,
    )

    if (onChange) {
      onChange(rawValue)
    }
  }

  return (
    <div className={className}>
      {label && <FieldLabel htmlFor={id}>{label}</FieldLabel>}

      <InputGroup
        hasValidation
        className={isFocused ? 'input-group-focused' : ''}
      >
        {inputGroupText && (
          <InputGroup.Text
            className={classNames(
              { 'border-danger': showError },
              'border-end-0',
            )}
            style={{
              backgroundColor: isDisabled ? THEME_PALETTE.disabled : 'white',
            }}
          >
            {inputGroupText}
          </InputGroup.Text>
        )}

        <Cleave
          autoFocus={autoFocus}
          id={id}
          {...field}
          value={field.value ?? ''}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          data-field={id}
          placeholder={placeholder}
          className={classNames('form-control', {
            'border-start-0 ps-0 shadow-none': inputGroupText,
            'is-invalid': showError,
          })}
          options={maskOptions || {}}
          min={min}
          max={max}
          disabled={isDisabled}
        />
      </InputGroup>

      {showError && <FieldError inputId={id}>{error}</FieldError>}
    </div>
  )
}

export default MaskedInput
