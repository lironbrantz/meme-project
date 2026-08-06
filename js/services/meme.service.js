'use strict';

var gImgs = [
    { id: 1, url: `img/1.jpg`, keywords: ['politics', 'funny'] },
    { id: 2, url: `img/2.jpg`, keywords: ['dogs', 'cute'] },
    { id: 3, url: `img/3.jpg`, keywords: ['baby', 'cute'] },
    { id: 4, url: `img/4.jpg`, keywords: ['cat', 'cute'] },
    { id: 5, url: `img/5.jpg`, keywords: ['baby', 'funny'] },
    { id: 6, url: `img/6.jpg`, keywords: ['tv', 'funny'] },
    { id: 7, url: `img/7.jpg`, keywords: ['baby', 'funny'] },
    { id: 8, url: `img/8.jpg`, keywords: ['movies', 'funny'] },
    { id: 9, url: `img/9.jpg`, keywords: ['baby', 'funny'] },
    { id: 10, url: `img/10.jpg`, keywords: ['politics', 'funny'] },
    { id: 11, url: `img/11.jpg`, keywords: ['sports', 'funny'] },
    { id: 12, url: `img/12.jpg`, keywords: ['tv', 'funny'] },
    { id: 13, url: `img/13.jpg`, keywords: ['movies', 'funny'] },
    { id: 14, url: `img/14.jpg`, keywords: ['movies', 'action'] },
    { id: 15, url: `img/15.jpg`, keywords: ['movies', 'action'] },
    { id: 16, url: `img/16.jpg`, keywords: ['movies', 'funny'] },
    { id: 17, url: `img/17.jpg`, keywords: ['politics', 'funny'] },
    { id: 18, url: `img/18.jpg`, keywords: ['movies', 'cartoon'] },
];

var gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'HI!',
            size: 20,
            color: 'red',
            strokeColor: 'black',
            x: 250,
            y: 60
        },
        {
            txt: 'I\'M A MEME!',
            size: 20,
            color: 'red',
            strokeColor: 'black',
            x: 250,
            y: 400

        }
    ]
}
var gKeywordSearchCountMap = { 'funny': 11, 'dogs': 2, 'baby': 3, 'cat': 1, 'tv': 2, 'movies': 6, 'politics': 3, 'sports': 1, 'cartoon': 1, 'cute': 3, 'action': 2 }

function getMeme() {
    return gMeme
}

function getImgs() {
    return gImgs
}

function setLineTxt(txt) {
    const line = gMeme.lines[gMeme.selectedLineIdx]
    line.txt = txt
}

function setImg(imgId) {
    gMeme.selectedImgId = imgId
}

function changeFontSize(diff) {
    const line = gMeme.lines[gMeme.selectedLineIdx]
    line.size += diff
}

function setLineColor(color) {
    const line = gMeme.lines[gMeme.selectedLineIdx]
    line.color = color
}
function setStrokeColor(color) {
    const line = gMeme.lines[gMeme.selectedLineIdx]
    line.strokeColor = color
}

function selectedLineIdx() {
    return gMeme.selectedLineIdx
}

function switchLine() {
    gMeme.selectedLineIdx++
    if (gMeme.selectedLineIdx === gMeme.lines.length) gMeme.selectedLineIdx = 0
}

