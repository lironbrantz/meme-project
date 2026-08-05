'use strict'  

function renderGallery() {
    const imgs = getImgs()
    const strHTMLs = imgs.map(img => {
        return `<img src="${img.url}" onclick="onImgSelect(${img.id})" alt="">`
    })
    document.querySelector('.gallery-grid').innerHTML = strHTMLs.join('')
}   

function onImgSelect(imgId) {
    setImg(imgId)
    document.querySelector('.meme-gallery').classList.add('hidden')
    document.querySelector('.meme-editor').classList.remove('hidden')
    renderMeme()
}