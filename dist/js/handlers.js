(function(){
    const ESC_KEYCODE = 27
    let $apps = document.querySelector('#applications')
    let $form = document.querySelector('#appForm')
    let closer = $form.querySelector('.closer')

    // Event of the opening of form
    $apps.addEventListener('click', evt => {
        if(evt.target.classList.contains('get')) {
            form.open(evt)    
        }
    })

    // Event for the closing of the form
    closer.addEventListener('click', form.close)
    closer.addEventListener('keydown', evt => {
        if (evt.keyCode === ESC_KEYCODE) {
            form.close()
        }
    })

    // Dragging of the form 
    const getCoords = elem => { 
        let box = elem.getBoundingClientRect();
        return {
            // TODO: !!! move align to js from css form.scss !!! 350 , 150 - margin-top, margin-left from 50% position #appForm !!! 
            top: box.top + pageYOffset + 350,
            left: box.left + pageXOffset + 150
        }
    }
    $form.querySelector('.mover').onmousedown = evt => {
        $form.classList.add('drug')
        let coords = getCoords($form)
        let shiftX = evt.pageX - coords.left
        let shiftY = evt.pageY - coords.top
        const moveAt = evt => {
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
    
})()