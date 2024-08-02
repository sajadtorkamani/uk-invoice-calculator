import classNames from 'classnames'
import React from 'react'

type Props = React.HTMLAttributes<HTMLHeadingElement>

const FormGroup: React.FC<Props> = ({ className, ...rest }) => (
  <div className={classNames('mb-4', className)} {...rest} />
)

export default FormGroup
