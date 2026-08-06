'use strict'  

function renderGallery() {
    const imgs = getImgs()
    const strHTMLs = imgs.map(img => {
        return `<img src="${img.url}" onclick="onImgSelect(${img.id})" alt="${img.keywords[0]} meme">`
    })
    document.querySelector('.gallery-grid').innerHTML = strHTMLs.join('')
}   

function onImgSelect(imgId) {
    setImg(imgId)
    onNavTo('editor')
    renderMeme()
}