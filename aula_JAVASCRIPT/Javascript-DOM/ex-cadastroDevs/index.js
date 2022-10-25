function createLabel(text, htmlFor) {
  const label = document.createElement('label')
  label.htmlFor = htmlFor
  label.innerText = text
  return label
}

function createInput(id, value, name, type = 'text', placeholder = '') {
  const input = document.createElement('input')
  input.id = id
  input.value = value
  input.name = name
  input.type = type
  input.placeholder = placeholder
  return input
}

const addTechBtn = document.getElementById('addTechBtn')
const form = document.getElementById('devForm')
const developers = []
let inputRows = 0

addTechBtn.addEventListener('click', function (ev) {
  const stackInputs = document.getElementById('stackInputs')

  const newRow = document.createElement('li')
  const rowIndex = inputRows
  inputRows++
  newRow.id = 'inputRow-' + rowIndex
  newRow.className = 'inputRow'

  const techNameLabel = createLabel('Nome: ', 'techName-' + rowIndex)
  const techNameInput = createInput('techName-' + rowIndex, null, 'techName')

  const expLabel = createLabel('Experiência: ')
  const id1 = 'expRadio-' + rowIndex + '.1'
  const expRadio1 = createInput(id1, '0-2 anos', 'techExp-' + rowIndex, 'radio')
  const expLabel1 = createLabel('0-2 anos', id1)
  const id2 = 'expRadio-' + rowIndex + '.2'
  const expRadio2 = createInput(id2, '3-4 anos', 'techExp-' + rowIndex, 'radio')
  const expLabel2 = createLabel('3-4 anos', id2)
  const id3 = 'expRadio-' + rowIndex + '.3'
  const expRadio3 = createInput(id3, '5+ anos', 'techExp-' + rowIndex, 'radio')
  const expLabel3 = createLabel('5+ anos', id3)

  const removeRowBtn = document.createElement('button')
  removeRowBtn.type = 'button'
  removeRowBtn.innerText = 'Remover'
  removeRowBtn.addEventListener('click', function () {
    stackInputs.removeChild(newRow)
  })


  newRow.append(
    techNameLabel, techNameInput, expLabel, expRadio1, expLabel1, expRadio2, expLabel2, expRadio3, expLabel3, removeRowBtn
  )

  stackInputs.appendChild(newRow)
})

form.addEventListener('submit', function (ev) {
  ev.preventDefault()

  const fullnameInput = document.getElementById('fullname')
  const inputRows = document.querySelectorAll('.inputRow')

  let technologies = []
  inputRows.forEach(function (row) {
    // #rowId input[name="techName"]
    const techName = document.querySelector('#' + row.id + ' input[name="techName"]').value
    const techExp = document.querySelector('#' + row.id + ' input[type="radio"]:checked').value
    technologies.push({ name: techName, exp: techExp })
  })

  const newDev = { fullname: fullnameInput.value, technologies: technologies }
  developers.push(newDev)
  alert('Dev cadastrado com sucesso!')

  fullnameInput.value = ''
  inputRows.forEach(function (row) {
    row.remove()
  })

  console.log(developers)
})





































// function addDev() {
  
//   const addTec = document.querySelector('#tecnologyList')
  
//   const newLabel = document.createElement('label')
//   newLabel.forName = 'tecnology'
//   newLabel.innerText = 'Tecnologia: '  

//   const newInput = document.createElement('input')
//   newInput.type = 'text'
//   newInput.name = 'input'

//   const newTime = document.createElement('label')
//   newTime.innerText = 'Tempo de experiência: '

//   const option01 = document.createElement('input')
//   option01.type = 'radio'
//   option01.name = 'main'
//   option01.id = 'option1'
//   option01.value = '0-2 anos'

//   const option02 = document.createElement('input')
//   option02.type = 'radio'
//   option02.name = 'main'
//   option02.id = 'option2'
//   option02.value = '3-4 anos'

//   const option03 = document.createElement('input')
//   option03.type = 'radio'
//   option03.name = 'main'
//   option03.id = 'option3'
//   option03.value = '5+ anos'
  

//   newLabel.appendChild(newInput)
//   newTime.appendChild(option01, option02, option03)
//   addTec.appendChild(newTime)

// }

