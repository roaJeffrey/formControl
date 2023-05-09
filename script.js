const insert = () => {
    let type = document.querySelector('#type').value
    let label = document.querySelector('#label').value

    switch(type) {
        case 'text': appendText(label)
            break
        case 'button': appendButton(label)
            break
        case 'checkbox': appendCheckbox(label)
            break
        case 'radio': appendRadio(label)
            break
    }
}

const appendText = (label = "No Label") => {
    let element = document.createElement('input')

    element.setAttribute('type', 'text')
    element.setAttribute('class', 'form-control mt-2')
    element.setAttribute('placeholder', label)

    document.querySelector('#display').append(element)
}

const appendButton = (label = "No Label") => {
    let element = document.createElement('button')

    element.setAttribute('type', 'text')
    element.setAttribute('class', 'btn btn-primary mt-2')
    element.textContent =  label

    document.querySelector('#display').append(element)
}

const appendCheckbox = (label = label) => {
    let element = document.createElement('input')

    element.setAttribute('type', 'checkbox')
    element.setAttribute('class', 'form-check mt-2')
    element.setAttribute('placeholder', label)

    document.querySelector('#display').append(element)
}

const appendRadio = (label = "No Label") => {
    let element = document.createElement('input')

    element.setAttribute('type', 'radio')
    element.setAttribute('class', 'form-check mt-2')
    element.textContent =  label

    document.querySelector('#display').append(element)
}