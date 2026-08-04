'use strict'

var gElCanvas
var gCtx

function renderMeme() {
    const meme = getMeme()
    const line = meme.lines[meme.selectedLineIdx]
    const img = new Image()
    img.onload = function () {
        gCtx.drawImage(
            img,
            0,
            0,
            gElCanvas.width,
            gElCanvas.height
        )

        gCtx.font = line.size + 'px Arial'
        gCtx.textAlign = 'center'
        gCtx.fillStyle = line.color
        gCtx.strokeStyle = 'black'
        gCtx.lineWidth = 2

        const x = gElCanvas.width / 2
        const y = 60

        gCtx.strokeText(line.txt, x, y)
        gCtx.fillText(line.txt, x, y)
    }

    img.src = 'img/1.jpg'
}