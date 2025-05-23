const modeBtnEl = document.querySelector('#toggle')

const readMode = function () {
    const mode = localStorage.getItem('mode') || 'dark'
    return mode
}

const saveMode = function (mode) {
    localStorage.setItem('mode', mode)
}

const handleModeToggle = function () {
    const mode = readMode()
    console.log('mode', mode);

    let nextMode;

    if (mode === 'light') {
      nextMode = 'dark';
    } else {
      nextMode = 'light';
    }

    saveMode(nextMode);
}

modeBtnEl.addEventListener('click', handleModeToggle);