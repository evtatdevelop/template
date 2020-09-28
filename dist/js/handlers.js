const ESC_KEYCODE = 27

let $apps = document.querySelector('#applications')
let $form = document.querySelector('#appForm')
let closer = $form.querySelector('.closer')
let formHandler = $form.querySelector('.mover')

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

formHandler.onmousedown = evt => {

    $form.classList.add('drug')

    var coords = getCoords($form)
    var shiftX = evt.pageX - coords.left
    var shiftY = evt.pageY - coords.top

    function moveAt(evt) {
        $form.style.left = evt.pageX - shiftX + 'px'
        $form.style.top = evt.pageY - shiftY + 'px'
    }
  
    document.onmousemove = evt => moveAt(evt)
  
    $form.onmouseup = () => {
      document.onmousemove = null
      $form.onmouseup = null
      $form.classList.remove('drug')
    }
  
  }
  
function getCoords(elem) { 
    let box = elem.getBoundingClientRect();
    return {
        // TODO: !!! move align to js from css
        // form.scss !!! 350 , 150 - margin-top, margin-left from 50% position #appForm !!! 
        top: box.top + pageYOffset + 350,
        left: box.left + pageXOffset + 150
    }
}


// Event for the closing of the form
closer.addEventListener('click', closeForm)
closer.addEventListener('keydown', evt => {
    if (evt.keyCode === ESC_KEYCODE) {
        closeForm()
    }
})