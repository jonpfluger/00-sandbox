const modeBtnEl = document.querySelector('#toggle')

const readMode = function () {
    const mode = localStorage.getItem('mode') || 'dark'
    return mode
}

const saveMode = function (mode) {
    localStorage.setItem('mode', mode)
}

const applyMode = function (mode) {
    let icon, bgColor

    if (mode === 'light') {
        icon = '☀️'
        bgColor = '#ffffff'
    } else {
        icon = '🌒'
        bgColor = '#505050'
    }

    modeBtnEl.textContent = icon

    document.body.classList = mode
    document.body.style.backgroundColor = bgColor
}

const handleModeToggle = function () {
    const mode = readMode()
    console.log('mode', mode)

    let nextMode

    if (mode === 'light') {
      nextMode = 'dark'
    } else {
      nextMode = 'light'
    }

    applyMode(nextMode)

    saveMode(nextMode)
}

applyMode(readMode())

modeBtnEl.addEventListener('click', handleModeToggle)