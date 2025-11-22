import { processTick } from "./ProcessTick";

let clock_pulse = 1;

function emulateCycle()
{
    while(clock_pulse < 9)
    {
        processTick(clock_pulse);
        clock_pulse++;
    }
    clock_pulse = 1;
}
