const container = document.querySelector('.container')
const rows = 5

for(let i = 0; i < rows * 3; i++) {

    const unsplashURL = 'https://picsum.photos/200?random='+i;
    const img = document.createElement('img')
    img.src = `${unsplashURL}`
    container.appendChild(img)
}
