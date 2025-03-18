function solve() {
  let textElement = document.getElementById('text').value;
  let instructionElement = document.getElementById('naming-convention').value;
  let result = ''

  function pascalCase (text) {
      return text.split(' ')
      .map(element => element.toLowerCase())
      .map(element => element.charAt(0).toUpperCase() + element.slice(1))
      .join('')
  }

  function camelCase (text) {
    return text.split(' ')
    .map(element => element.toLowerCase())
    .map((element, index) => index != 0 ? element.charAt(0).toUpperCase() + element.slice(1) : element)
    .join('')
  }

  if (instructionElement === "Camel Case") {
    result = camelCase(textElement)
  } else if (instructionElement === "Pascal Case") {
    result = pascalCase(textElement)
  } else {
    result = 'Error!'
  }

  document.getElementById('result').innerHTML = result

}