// Import the function that returns a copy of the fish array

import { getLocations } from "../database.js"

export const LocationsList = () => {
    // Invoke the function that you imported from the database module
    const locations = getLocations()

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="locations">'

    // Create HTNL representations of each fish here
    for (const location of locations) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="location">
            <div><img  class="location__image" src="${location.image}" /></div>
            <div class="location__name">${location.name}</div>
            <div class="location__fish-harvested">${location.fishHarvested}</div>
        </section>
`
    }
    htmlString += `</article>`

    return htmlString
}

const target = document.querySelector(".dynamicLocations")                      

target.innerHTML = LocationsList();