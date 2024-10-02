addresses = [
    ["45 avenue des tulipes", "92130 Issy-les-Moulineaux"],
    ["95 avenue parmentier", "75011 Paris"],
    ["24 Rue Pasteur", "92400 Courbevoie"],
    ["Champ de Mars, 5 Av. Anatole France", "75007 Paris"],
    ["Pl. Louis-Armand", "75571 Paris"]
];
function findAddresses(toFind) {
    addresses.forEach(address => {
        const x = address.join(', '); 
        if (x.toLowerCase().includes(toFind.toLowerCase())) {
            console.log(x);
        }
    });
}
findAddresses(" Paris ");
