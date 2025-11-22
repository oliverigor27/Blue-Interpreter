import { registers, RAM } from "./Registers";

export enum State {
    EXECUTE,
    FETCH
}

export let STATE = State.FETCH;

export function processTick(tick: number)
{
    switch(tick)
    {
        case 1:
            break;
        case 2:
            if(STATE == State.FETCH)
                registers.PC += 1;
            break;
        case 3:
            if(STATE == State.FETCH)
                registers.MBR = 0;
            break;
        case 4:
            if(STATE == State.FETCH) {
                registers.IR = 0;
                registers.MBR = RAM[registers.MAR];
            }
            break;
        case 5:
            if(STATE == State.FETCH) {
                registers.IR = registers.MBR;
            }
            break;
        case 6:
        case 7:
        case 8:
            break;
    }
}