let softwareHouses = ["NetSol", "Systems Limited", "Techlogix", "10Pearls"];

console.log("Original Array:", softwareHouses);
softwareHouses.splice(1, 1, "Arbisoft");  
console.log("After replacing middle:", softwareHouses);

softwareHouses.push("Mindstorm Studios");

console.log("After adding at the end:", softwareHouses);
