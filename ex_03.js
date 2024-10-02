function  fillBus(peopleAtBusStops,busSeats){
let people = 0;
    for (let i=0; i < peopleAtBusStops.length; i++) {
    people += peopleAtBusStops[i];
    if (people >= busSeats){
    return i
}
}
return -1;
}
console.log(fillBus([1, 3, 10, 1], 12));
