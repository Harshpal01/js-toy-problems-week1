function checkSpeed(speed) {
    const speedLimit = 70;
    const demeritPointStep = 5;
    
    if (speed < speedLimit) {
        return "Ok";
    } else {
        let points = Math.floor((speed - speedLimit) / demeritPointStep);
        return points > 12 ? "License suspended" : `Points: ${points}`;
    }
}

// Example usage:
let speed = prompt("Enter car speed:");
alert(checkSpeed(parseInt(speed)));
