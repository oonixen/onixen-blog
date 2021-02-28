const effectClassName = 'AppearanceEffect'
const effectBeginningClassName = 'AppearanceEffect__BeginningState'

const elementsArray = Array.from(document.getElementsByClassName(effectBeginningClassName))

export function appearBlock () {

    elementsArray.forEach((v, i) => {

        if (checkVisible(v)) {
            v.classList.remove(effectBeginningClassName)
            v.classList.add(effectClassName)
            elementsArray.splice(i, 1)
        }
    })
}

function checkVisible(elm) {
    const rect = elm.getBoundingClientRect();
    const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}