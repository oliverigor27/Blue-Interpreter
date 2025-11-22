export type BlueRegister = number;
export const RAM = new Uint16Array(4096);

export const registers = {
    A: 0 as BlueRegister,
    DIL: 0 as BlueRegister,
    DOL: 0 as BlueRegister,
    DSL: 0 as BlueRegister,
    IR: 0 as BlueRegister,
    MAR: 0 as BlueRegister,
    MBR: 0 as BlueRegister,
    PC: 0 as BlueRegister,
    SR: 0 as BlueRegister,
    Z: 0 as BlueRegister
}