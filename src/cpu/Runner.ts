import { processTick } from "./CPU";
import { EmulateCycle } from "./Cycle";
import { DumpRegister } from "./Dump";
import { RAM, registers } from "./Registers";


export function RunProgram(program: Uint16Array)
{
    console.log("Copyng program to RAM");
    RAM.fill(0);
    for(let i = 0; i < program.length; i++)
        RAM[i] = program[i];
    registers.PC = 0;
    registers.MAR = 0;
    while (true)
    {
        for (let tick = 1; tick <= 8; tick++)
        {
            processTick(tick);
        }
        registers.MAR = registers.PC;
        DumpRegister();
    }
}
