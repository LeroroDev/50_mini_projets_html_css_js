const search = $('.search')
const btn = $('.btn')
const input = $('.input')

btn.on('click', () => {
    search.toggleClass('active')
    input.focus()
})