import classNames from 'classnames'
import React from 'react'

type Props = React.HTMLAttributes<HTMLHeadingElement>

const PageTitle: React.FC<Props> = ({ className, ...rest }) => (
  <h1 className={classNames('my-4', className)} {...rest} />
)

export default PageTitle
