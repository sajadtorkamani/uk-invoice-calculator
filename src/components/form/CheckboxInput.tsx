import classNames from 'classnames'
import { useField, useFormikContext } from 'formik'
import React from 'react'
import { Form } from 'react-bootstrap'

import FieldError from './FieldError'
import FieldLabel, { TooltipHint } from './FieldLabel'

interface Props {
  name: string
  label?: string | React.ReactNode
  labelWrapperClassName?: string
  labelClassName?: string
  tooltipHint?: TooltipHint
  hideError?: boolean
  isDisabled?: boolean
  onChange?: (value: boolean) => void
}

const CheckboxInput: React.FC<Props> = ({
  name,
  label,
  labelWrapperClassName,
  labelClassName,
  tooltipHint,
  hideError = false,
  isDisabled,
  onChange,
}) => {
  const { submitCount } = useFormikContext()
  const [field, { error }] = useField(name)
  const id = `field_${name}`
  const showError = !hideError && !!(submitCount > 0 && error)

  return (
    <>
      <div className="d-flex align-items-start">
        <Form.Check
          id={id}
          {...field}
          checked={field.value}
          isInvalid={showError}
          className="d-inline-block"
          style={{ marginRight: '6px' }}
          disabled={isDisabled}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            field.onChange(event)

            if (onChange) {
              onChange(event.target.checked)
            }
          }}
        />

        {label && (
          <FieldLabel
            htmlFor={id}
            tooltipHint={tooltipHint}
            className={classNames('mb-0', labelClassName)}
            wrapperClassName={labelWrapperClassName}
          >
            {label}
          </FieldLabel>
        )}
      </div>

      {showError && <FieldError inputId={id}>{error}</FieldError>}
    </>
  )
}

export default CheckboxInput
