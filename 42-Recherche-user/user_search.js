// Crée une constante "result" qui référence un élément HTML avec l'ID "result"
const result = $('#result')

// Crée une constante "filter" qui référence un élément HTML avec l'ID "filter"
const filter = $('#filter')

// Crée un tableau vide appelé "listItems"
const listItems = []

getData()

filter.on('input', () => filterData(filter.val()))

async function getData() {
  const res = await fetch('https://randomuser.me/api?results=100')

  const { results } = await res.json()

  result.empty()

  results.forEach(user => {
    const li = $('<li></li>')

    listItems.push(li)

    li.html(`
      <img src="${user.picture.large}" alt="${user.name.first}">
      <div class="user-info">
        <h4>${user.name.first} ${user.name.last}</h4>
        <p>${user.location.city}, ${user.location.country}</p>
      </div>
    `)

    result.append(li)
  })
}

function filterData(searchTerm) {
  listItems.forEach(item => {
    if(item.text().toLowerCase().includes(searchTerm.toLowerCase())) {
      item.removeClass('hide')
    } else {
      item.addClass('hide')
    }
  })
}
