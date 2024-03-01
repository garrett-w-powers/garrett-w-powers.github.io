function createSquares(dims) {
    for (let i = 0; 1 < dims * dims; i++) {
        const pix = document.createElement('div');
        sketchpad.appendChild(pix)
    }
}

const sketchpad = document.querySelector('.sketchpad');

createSquares(16);