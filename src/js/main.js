import {showActiveLink} from "./modules/portfolioNavigation";
import {appearBlock} from './modules/appearanceEffect'

document.addEventListener('scroll', () => {
    showActiveLink()
    appearBlock()
})
window.addEventListener('load', () => {
    showActiveLink()
    appearBlock()
})