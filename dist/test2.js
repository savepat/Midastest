"use strict";
function getClockAngle(time) {
    const timeRegex = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
    if (!timeRegex.test(time)) {
        throw new Error("input");
    }
    const [hour, minute] = time.split(":").map(Number);
    const hourAngle = (hour % 12) * 30 + (minute / 60) * 30;
    const minuteAngle = (minute / 60) * 360;
    let angle = Math.abs(hourAngle - minuteAngle);
    if (angle > 180) {
        angle = 360 - angle;
    }
    return angle;
}
const time = "09:00";
try {
    const angle = getClockAngle(time);
    console.log(`The shorter angle between the hour and minute hands at ${time} is: ${angle}`);
}
catch (error) {
    console.error(`[ERROR] ${error}`);
}
//# sourceMappingURL=test2.js.map