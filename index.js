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

  if (!isString(string) || !Number.isNaN(string)) {
    return false
  }

  try {
    JSON.parse(string)
  } catch (error) {
    console.error(error)
    return false
  }

  return true
}
