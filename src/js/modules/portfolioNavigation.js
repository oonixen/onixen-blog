const linkClass = 'Portfolio__link'
const linkClassActive = 'Portfolio__link--active'
const portfolioSectionClass = 'Portfolio__project'
const linkArray = document.getElementsByClassName(linkClass);
const portfolioSectionArray = Array.from(document.getElementsByClassName(portfolioSectionClass)).map(v => {

    const elemRect = v.getBoundingClientRect()

    return {
        top: elemRect.top + window.pageYOffset,
        bottom: elemRect.bottom + window.pageYOffset
    }
})

for (let item of linkArray) item.addEventListener('click', clickOnLink)

function clickOnLink (e) {

    const innerText = e.target.innerText
    let index = 0

    for (let i = 0; i < linkArray.length; i++) {
        if (linkArray[i].innerText === innerText) {
            index = i
            break
        }
    }

    addActiveClass(index)
}

export function showActiveLink () {

    const windowTopHeight = window.pageYOffset + 160

    for (let i = 0; i < portfolioSectionArray.length; i++) {

        const elemY1 = portfolioSectionArray[i]
        const elemY2 = portfolioSectionArray[i+1]

        if (elemY2 === undefined) {
            if (windowTopHeight >= elemY1.top && windowTopHeight <= elemY1.bottom) {
                addActiveClass(i)
                break
            } else {
                break
            }
        }
        else if (windowTopHeight >= elemY1.top && windowTopHeight <= elemY2.top) {
            addActiveClass(i)
            break
        } else {
            clearActiveClass()
        }
    }
}

function addActiveClass (i) {

    const classList = linkArray[i].classList

    if (!classList.contains(linkClassActive)) {
        clearActiveClass()
        classList.add(linkClassActive)
    }
}

function clearActiveClass() {
    for (let item of linkArray) {
        if (item.classList.contains(linkClassActive)) {
            item.classList.remove(linkClassActive)
            break
        }
    }
}