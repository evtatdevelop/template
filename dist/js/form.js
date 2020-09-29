(function(){
    let $form = document.querySelector('#appForm')
    let shade = document.querySelector('.shade')

    // Cleaning of form
    const clearInput = input => {
        input.classList.remove('err')
        input.classList.add('pln')
        input.value = ''
        let err = input.parentElement.querySelector('.error')
        err.classList.add('hide')
        err.textContent = ''
    }

    // Error event
    const errorInput = evt => {
        evt.preventDefault()
        let el = evt.target
        el.classList.add('err')
        let err = el.parentElement.querySelector('.error')
        err.classList.remove('hide')
        err.textContent = 'Error' // TODO: detecting error
    }

    const openForm = evt => {
        const appColor = evt.target.dataset.color
        $form.className = appColor
        shade.classList.remove('hide')
    }
    
    const closeForm = () => {
        $form.className = 'hide'
        shade.classList.add('hide')
        $form.querySelectorAll('input').forEach(element => clearInput(element))
    }

    // Events for INPUTs : invalid, focus
    $form.querySelectorAll('input').forEach( element => {
        element.addEventListener('invalid', evt => errorInput(evt))
        element.addEventListener('focus', evt => clearInput(evt.target))
    })

    window.form = {
        open: openForm,
        close: closeForm
    }
    
    // Submit
    let formElement = $form.querySelector('form')
    formElement.addEventListener('submit', onSubmit.bind(this))
    function onSubmit(evt) {
        evt.preventDefault()
        const formData = {
            username: formElement.username.value,
            useremail: formElement.useremail.value,
            date: new Date().toLocaleDateString()
        }
        window.form.close()
        console.log('submit', formData.username, formData.useremail, formData.date )
    }


})()