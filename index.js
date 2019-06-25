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

  if (!isNaN(string)) {
    return false
  }

  try {
    JSON.parse(string)
  } catch (error) {
    return false
  }

  return true
}

module.exports = validate
