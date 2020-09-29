(function(){
    let colection = document.querySelector('.colection')
    const appTemplate = document.querySelector('#app-template')
        .content
        .querySelector('.item')

    const renderLiColection = arr => {
        let liCollection = document.createDocumentFragment();
        for (var i = 0; i < arr.length; i++) {
            let li = document.createElement('li')
            li.textContent = arr[i]
            liCollection.appendChild(li)
        }
        return liCollection
    }

    const renderApp = app => {
        let appElement = appTemplate.cloneNode(true)
        appElement.classList.add(app.color)
        appElement.querySelector('h2').textContent = app.name
        appElement.querySelector('ul').appendChild(renderLiColection(app.advantages))
        appElement.querySelector('button').setAttribute('id', app.buttonId)
        appElement.querySelector('button').setAttribute('data-name', app.buttonId)
        appElement.querySelector('button').setAttribute('data-color', app.color)
        return appElement
    }

    let fragment = document.createDocumentFragment();
    for (var i = 0; i < applications.length; i++) {
        fragment.appendChild(renderApp(applications[i]))
    }
    colection.appendChild(fragment);
})()