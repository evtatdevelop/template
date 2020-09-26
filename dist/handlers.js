let $apps = document.querySelector('#applications')

$apps.addEventListener('click', function(e) {
    if(e.target.classList.contains('get')) {
        const appName = e.target.dataset.name
        alert('I am ' + appName)
    }
})