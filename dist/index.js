
const colection = document.querySelector('.colection')
const appTemplate = document.querySelector('#app-template')
    .content
    .querySelector('.item')

const renderApp = app => {
    let appElement = appTemplate.cloneNode(true)
    appElement.classList.add(app.color)
    appElement.querySelector('h2').textContent = app.name
    let lis = document.createDocumentFragment();
    for (var i = 0; i < app.advantages.length; i++) {
        let li = document.createElement('li')
        li.textContent = app.advantages[i]
        lis.appendChild(li)
    }
    appElement.querySelector('ul').appendChild(lis)
    appElement.querySelector('button').setAttribute('id', app.buttonId)
    return appElement
}

let fragment = document.createDocumentFragment();
for (var i = 0; i < applications.length; i++) {
    fragment.appendChild(renderApp(applications[i]))
}
colection.appendChild(fragment);
