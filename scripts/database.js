const database = {
    fish : [
        {
            name: "Jeff",
            image: "img/catfish.jpg",
            species: "Catfish",
            length: "2.5ft",
            location: "Back Alley",
            diet: "Tuna"
        },
        {
            name: "Steve",
            image: "img/dogfish.jpg",
            species: "Dogfish",
            length: "4ft",
            location: "Junkyard",
            diet: "Kibble"
        },
        {
            name: "Chelsea",
            image: "img/bearfish.jpg",
            species: "Bearfish",
            length: "7ft",
            location: "North Pole",
            diet: "Seal(The Artist)"
        },
        {
            name: "Willy",
            image: "img/pigfish.jpg",
            species: "Pigfish",
            length: "3ft",
            location: "Barn",
            diet: "Anything"
        },
        {
            name: "Susan",
            image: "/img/elephantfish.jpeg",
            species: "Elephantfish",
            length: "20ft",
            location: "Congo River Basin",
            diet: "Peanuts"
        },
        {
            name: "Bradford",
            image: "img/tigerfish.png",
            species: "Tigerfish",
            length: "6ft",
            location: "Jungle",
            diet: "Whatever He Wants"
        },
    ]
}

export const getFishes = () => {
    return [...database.fish]
}