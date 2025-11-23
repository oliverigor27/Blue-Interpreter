import { registers } from "./Registers";

export function DumpRegister() {
    console.log(
        `PC: ${hex(registers.PC)} | ` +
        `A: ${hex(registers.A)} | ` +
        `IR: ${hex(registers.IR)} | ` +
        `Z: ${hex(registers.Z)} | ` +
        `MAR: ${hex(registers.MAR)} | ` +
        `MBR: ${hexSafe(registers.MBR)} | ` +
        `DSL: ${byteSafe(registers.DSL)} | ` +
        `DIL: ${byteSafe(registers.DIL)} | ` +
        `DOL: ${byteSafe(registers.DOL)}`
    );
}

function hexSafe(value?: number) {
    if (typeof value !== "number") return "0000";
    return value.toString(16).padStart(4, "0");
}

function byteSafe(value?: number) {
    if (typeof value !== "number") return "00";
    return (value & 0xFF).toString(16).padStart(2, "0");
}

function hex(value: number) {
    return hexSafe(value);
}

function byte(value: number) {
    return byteSafe(value);
}
