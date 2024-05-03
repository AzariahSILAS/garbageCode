const azsCars = [
    ["dodge","ford","chevy"],
    ["350z","bmw","auty","chalenger"],
    ["4runner","taho","rav 4", "suburben"]
];

azsCars[2][2] = "Rav 4"
azsCars[1][2] = "Dodge Charger"
const azsSUV = azsCars[2][2];
console.log(azsSUV + " and " + azsCars[1][2])