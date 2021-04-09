
// This is where all the information for every fish will be imported and filled out by javascript
const fishDatabase = {
    fish : [
        {
            name: "Jeff",
            image: "img/catfish.jpg",
            species: "Catfish",
            length: "2.5ft",
            location: "Back Alley",
            food: "Tuna"
        },
        {
            name: "Steve",
            image: "img/dogfish.jpg",
            species: "Dogfish",
            length: "4ft",
            location: "Junkyard",
            food: "Kibble"
        },
        {
            name: "Chelsea",
            image: "img/bearfish.jpg",
            species: "Bearfish",
            length: "7ft",
            location: "North Pole",
            food: "Seal(The Artist)"
        },
        {
            name: "Willy",
            image: "img/pigfish.jpg",
            species: "Pigfish",
            length: "3ft",
            location: "Barn",
            food: "Anything"
        },
        {
            name: "Susan",
            image: "img/elephantfish.jpeg",
            species: "Elephantfish",
            length: "20ft",
            location: "Congo River Basin",
            food: "Peanuts"
        },
        {
            name: "Bradford",
            image: "img/tigerfish.png",
            species: "Tigerfish",
            length: "6ft",
            location: "Jungle",
            food: "Whatever He Wants"
        },
    ]
}

// exports the database as a function which is then used in FishList.js
// the "..." is a javascript feature that automatically parses through the database array of fish
export const getFishes = () => {
    return [...fishDatabase.fish]
}

// This is where all the information for every location will be imported and filled out by javascript
const locationsDatabase = {
    location: [
        {
            image: "img/northpole.jpg",
            name: "North Pole",
            fishHarvested: "Bearfish"
        },
        {
            image: "img/jungle.jpg",
            name: "Jungle",
            fishHarvested: "Tigerfish"
        },
        {
            image: "img/congoriverbasin.jpg",
            name: "Congo River Basin",
            fishHarvested: "Elephantfish"
        },
    ]
}

// exports the database as a function which is then used in LocationsList.js
// the "..." is a javascript feature that automatically parses through the database array of locations
export const getLocations = () => {
    return [...locationsDatabase.location]
}

// exports the database as a function which is then used in QuoteList.js
// the "..." is a javascript feature that automatically parses through the database array of quotes
const quotesDatabase = {
    quote: [
        {
            text: "Lorem ipsum dolor sit amet consectetur adipisicing eliterit totam ad earum ipsum voluptatum dolorum, aperiam ex exercitationem fuga quod corporis consequatur nesciunt doloremque repellendus cumque soluta nostrum quis sint."
        },
        {
            text: "Lorem ipsum dolor sit amet consectetur adipisicing eliterit totam ad earum ipsum voluptatum dolorum, aperiam ex exercitationem fuga quod corporis consequatur nesciunt doloremque repellendus cumque soluta nostrum quis sint."
        },
        {
            text: "Lorem ipsum dolor sit amet consectetur adipisicing eliterit totam ad earum ipsum voluptatum dolorum, aperiam ex exercitationem fuga quod corporis consequatur nesciunt doloremque repellendus cumque soluta nostrum quis sint."
        },
        {
            text: "Lorem ipsum dolor sit amet consectetur adipisicing eliterit totam ad earum ipsum voluptatum dolorum, aperiam ex exercitationem fuga quod corporis consequatur nesciunt doloremque repellendus cumque soluta nostrum quis sint."
        },
    ]
}

export const getQuotes = () => {
    return [...quotesDatabase.quote]
}

const tipsDatabase = {

    tip: [
        {
            text: "Here is a sample tip for a placeholder."
        },
        {
            text: "Here is a sample tip for a placeholder."
        },
        {
            text: "Here is a sample tip for a placeholder."
        },
        {
            text: "Here is a sample tip for a placeholder."
        },
        {
            text: "Here is a sample tip for a placeholder."
        },
        {
            text: "Here is a sample tip for a placeholder."
        },
        {
            text: "Here is a sample tip for a placeholder."
        },
        {
            text: "Here is a sample tip for a placeholder."
        },
        {
            text: "Here is a sample tip for a placeholder."
        },
        {
            text: "Here is a sample tip for a placeholder."
        },
        {
            text: "Here is a sample tip for a placeholder."
        },
        {
            text: "Here is a sample tip for a placeholder."
        },  
        {
            text: "Here is a sample tip for a placeholder."
        },
        {
            text: "Here is a sample tip for a placeholder."
        },
        {
            text: "Here is a sample tip for a placeholder."
        },
        {
            text: "Here is a sample tip for a placeholder."
        },
        {
            text: "Here is a sample tip for a placeholder."
        },
        {
            text: "Here is a sample tip for a placeholder."
        },
        {
            text: "Here is a sample tip for a placeholder."
        },
        {
            text: "Here is a sample tip for a placeholder."
        },
        {
            text: "Here is a sample tip for a placeholder."
        },    
    ]
}

export const getTips = () => {
    return [...tipsDatabase.tip]
}