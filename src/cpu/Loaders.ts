import { RAM } from "./Registers";

export function loadProgram(program: Uint16Array) {
    RAM.set(program);
}