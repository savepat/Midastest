
function getClockAngle(time: string): number {
    const timeRegex: RegExp = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
    if (!timeRegex.test(time)) {
        throw new Error("input");
    }
 
    const [hour, minute] = time.split(":").map(Number);
 
    const hourAngle: number = (hour % 12) * 30 + (minute / 60) * 30;
    const minuteAngle: number = (minute / 60) * 360;
 
    let angle: number = Math.abs(hourAngle - minuteAngle);
 
    if (angle > 180) {
        angle = 360 - angle;
    }
 
    return angle;
}
  
const time: string = "09:00";  
try {
    const angle: number = getClockAngle(time);
    console.log(`The shorter angle between the hour and minute hands at ${time} is: ${angle}`);
} catch (error) {
    console.error(`[ERROR] ${error}`);
}
 
