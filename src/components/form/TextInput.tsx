import { useField } from 'formik'
import React from 'react'

interface Props {
  name: string
  label?: string
  type?: string
}

const TextInput: React.FC<Props> = ({ name, label, ...props }) => {
  const [field, { touched, error }] = useField(name)
  const id = `field_${name}`

  return (
    <>
      {label && (
        <label htmlFor={id} className="block mb-1">
          {label}
        </label>
      )}

      <input
        {...field}
        {...props}
        id={id}
        className="border w-full py-1 px-2 form-control"
      />

      {touched && error && (
        <div className="text-red-600 text-sm mt-0.5">{error}</div>
      )}
    </>
  )
}

TextInput.defaultProps = {
  type: 'text',
}

export default TextInput
