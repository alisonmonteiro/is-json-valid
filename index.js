const isString = value => (
  typeof value === 'string' || Object.prototype.toString.call(value) === '[object String]'
)

const isPlainObject = value => (
  Object.prototype.toString.call(value) === '[object Object]'
)

export default function validate(string, options = {}) {
  if (isPlainObject(string) && options.allowObjects === true) {
    return true
  }

  // eslint-disable-next-line unicorn/prefer-number-properties
  if (!isString(string) || !isNaN(string)) {
    return false
  }

  try {
    JSON.parse(string)
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error(error)
    }

    return false
  }

  return true
}
