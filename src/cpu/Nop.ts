import { registers } from "./Registers";

export function do_NOP(tick: number)
{
    if(tick === 8)
        registers.MAR = registers.PC;
}