import {getTips} from "../database.js";

export const tipsList = () => {

    const tips = getTips();

    let htmlString = '<aside class="tips"> <h2 class="tipsHeader">Tips</h2>'

    for (const tip of tips) {
        htmlString += `
        <li class="tip">${tip.text}</li>
        `
    }

    htmlString += `</aside>`;

    return htmlString;
}

const target = document.querySelector(".dynamicTips")

target.innerHTML = tipsList();