const isString = value => (
  typeof value === 'string' || Object.prototype.toString.call(value) === '[object String]'
)

const isPlainObject = value => (
  Object.prototype.toString.call(value) === '[object Object]'
)

const validate = (string, options = {}) => {
  if (isPlainObject(string) && options.allowObjects === true) {
    return true
  }

  if (!isString(string)) {
    return false
  }

  // eslint-disable-next-line unicorn/prefer-number-properties
  if (!isNaN(string)) {
    return false
  }

  try {
    JSON.parse(string)
  } catch (error) {
    throw new Error(error)
  }

  return true
}

export default validate
