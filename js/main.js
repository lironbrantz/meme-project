'use strict';

function onInit() {
    gElCanvas = document.querySelector('.meme-canvas')
    gCtx = gElCanvas.getContext('2d')


    renderGallery()
    renderMeme()
}

function onNavTo(page) {
    document.querySelectorAll('main > section').forEach(sec => sec.classList.add('hidden'))
    document.getElementById(page).classList.remove('hidden')
}