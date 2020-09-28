const ESC_KEYCODE = 27

let $apps = document.querySelector('#applications')
let $form = document.querySelector('#appForm')
let closer = $form.querySelector('.closer')

// Event of the opening of form
$apps.addEventListener('click', evt => {
    if(evt.target.classList.contains('get')) {
        const appColor = evt.target.dataset.color
        $form.className = appColor
    }
})

const closeForm = () => {
    $form.className = 'hide'
    $form.querySelectorAll('input').forEach(element => {
        clearInput(element)
    })
}

// Event for the closing of the form
closer.addEventListener('click', closeForm)
closer.addEventListener('keydown', evt => {
    if (evt.keyCode === ESC_KEYCODE) {
        closeForm()
    }
})

