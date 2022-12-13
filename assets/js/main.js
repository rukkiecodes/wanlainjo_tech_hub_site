let links = document.querySelectorAll('.take_me_to_form')

links.forEach(element => {
    element.style.cursor = 'pointer';
    element.addEventListener('click', () => {
        window.open('https://wanlainjoregistrationform.netlify.app')
    })
})