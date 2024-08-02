import classNames from 'classnames'
import React from 'react'

interface Props {
  children: React.ReactNode
  className?: string
  inputId?: string
}

const FieldError: React.FC<Props> = ({ children, className, inputId }) => {
  return (
    <div
      className={classNames('text-danger text-sm', className)}
      data-field-error={inputId}
    >
      {children}
    </div>
  )
}

FieldError.defaultProps = {
  inputId: 'unassigned',
}

export default FieldError
