import React from 'react'

import MaskedInput, { MaskedInputProps } from './MaskedInput'

const MoneyInput: React.FC<MaskedInputProps> = (props) => (
  <MaskedInput {...props} />
)

MoneyInput.defaultProps = {
  placeholder: 'Add amount',
  inputGroupText: '£',
  maskOptions: {
    numeral: true,
    numeralThousandsGroupStyle: 'thousand',
  },
  transformRawValue: (rawValue: string) => {
    const isValidNumber =
      rawValue.length > 0 && rawValue !== '-' && rawValue !== '.'
    return isValidNumber ? Number(rawValue) : undefined
  },
}

export default MoneyInput
