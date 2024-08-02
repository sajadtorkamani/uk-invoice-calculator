import React from 'react'

export function formatMoney(
  moneyValue: number,
  numberFormatOptions?: Intl.NumberFormatOptions,
): string {
  const formattedAmount = Intl.NumberFormat('en-GB', {
    notation: 'standard',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    ...numberFormatOptions,
  }).format(moneyValue)

  return `£${formattedAmount}`
}

export function getTooltipClassName(text: React.ReactElement | string): string {
  const length = getNodeText(text).length

  switch (true) {
    case length > 900:
      return 'tooltip-xl'
    case length > 200:
      return 'tooltip-lg'
    case length > 20:
      return 'tooltip-md'
    default:
      return ''
  }
}

// Get text content of React element
// Inspired by https://stackoverflow.com/a/60564620/2302835
export function getNodeText(
  node: React.ReactElement | string | number,
): string {
  if (!node) {
    return ''
  }

  if (typeof node === 'string' || typeof node === 'number') {
    return node.toString()
  }

  if (Array.isArray(node)) {
    return node.map(getNodeText).join('')
  }

  return getNodeText(node.props.children)
}
