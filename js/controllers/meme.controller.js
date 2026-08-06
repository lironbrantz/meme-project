'use strict'

var gElCanvas
var gCtx

function renderMeme() {

    const meme = getMeme()
    const line = meme.lines[meme.selectedLineIdx]
    const currImg = gImgs.find(img => img.id === meme.selectedImgId)
    const img = new Image()
    img.onload = function () {
        gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height)
        gCtx.drawImage(
            img,
            0,
            0,
            gElCanvas.width,
            gElCanvas.height
        )

        gCtx.font = `${line.size}px Impact`
        gCtx.textAlign = 'center'
        gCtx.fillStyle = line.color
        gCtx.strokeStyle = line.strokeColor 
        gCtx.lineWidth = 2
        gCtx.strokeText(line.txt, line.x, line.y)
        gCtx.fillText(line.txt, line.x, line.y)


    }


    img.src = currImg.url
}

function onSetLineText(txt) {
    setLineTxt(txt)
    renderMeme()
}

function onDownloadMeme() {
    const elLink = document.createElement('a')
    elLink.download = 'meme.jpg'
    elLink.href = gElCanvas.toDataURL()
    elLink.click()
}

function onFontSizeUp() {
    changeFontSize(5)
    renderMeme()
}

function onFontSizeDown() {
    changeFontSize(-5)
    renderMeme()
}

function onSetStrokeColor(color) {
    setStrokeColor(color)
    renderMeme()
}

function onSetFontColor(color) {
   setLineColor(color)
   renderMeme()
}