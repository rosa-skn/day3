let housingList = new Map() 
function addHousing(housingList, newHouse, quantity) {
    if (housingList[newHouse]) {
        housingList.set[newHouse] += quantity;  
    } else {
        housingList.set[newHouse] = quantity;  
    }
}

addHousing ( housingList , " Flat " , 2)
addHousing ( housingList , " Log " , 3)
addHousing ( housingList , " Flat " , 3)
addHousing ( housingList , " Hutch " , 2)
displayResult (housingList);
