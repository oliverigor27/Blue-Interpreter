import { processTick } from "./CPU";

let clock_pulse = 1;

export function EmulateCycle()
{
    while(clock_pulse < 9)
    {
        processTick(clock_pulse);
        clock_pulse++;
    }
    clock_pulse = 1;
}
