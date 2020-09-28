// Cleaning of form
const clearInput = input => {
    input.classList.remove('err')
    input.classList.add('pln')
    input.value = ''
    let err = input.parentElement.querySelector('.error')
    err.classList.add('hide')
    err.textContent = ''
}

// Events for INPUTs : invalid, focus
$form.querySelectorAll('input').forEach( element => {
    element.addEventListener('invalid', evt => {
        evt.preventDefault()
        let el = evt.target
        el.classList.add('err')
        let err = el.parentElement.querySelector('.error')
        err.classList.remove('hide')
        err.textContent = 'Error'
    })

    element.addEventListener('focus', evt => {
        clearInput(evt.target)
    })
})



