import classNames from 'classnames'
import React from 'react'

type Props = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode
}

const HelpText: React.FC<Props> = ({ className, style, children }) => (
  <div
    className={classNames('text-sm text-muted', className)}
    style={{ marginTop: '2px', ...style }}
  >
    {children}
  </div>
)

export default HelpText
