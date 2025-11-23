# 🟦 Blue CPU Interpreter

A **TypeScript emulator** for the **Blue processor** described by Caxton C. Foster.

This project aims to faithfully reproduce the behavior of the Blue CPU from the classic book *Computer Architecture: A Constructive Approach*.

The emulator simulates clock cycles, CPU states (FETCH/EXECUTE), internal registers, and memory, allowing you to load small programs and observe their execution step-by-step.

---

## 📚 Purpose

The goal of this interpreter is to:

* Reproduce the instruction cycle of the Blue processor
* Emulate its internal registers (PC, A, IR, MAR, MBR, etc.)
* Execute programs made of 16-bit words
* Serve as a learning tool for computer architecture, compilers, and CPU design

This project also complements the study of compiler construction — showing how a processor works internally through a clean TypeScript implementation.

---

## 🧩 How it works

The CPU execution follows these steps:

1. A program is loaded into RAM (a `Uint16Array` of instructions).
2. The CPU enters the main loop.
3. Each cycle calls `EmulateCycle()`, which:

   * Advances through 8 clock ticks
   * Performs FETCH → EXECUTE
4. After each cycle, register values are printed using `DumpRegister()`.

---

## 🧱 Implemented Registers

* **PC** – Program Counter
* **A** – Accumulator
* **IR** – Instruction Register
* **Z** – Zero flag
* **MAR** – Memory Address Register
* **MBR** – Memory Buffer Register
* **DSL, DIL, DOL** – Auxiliary 8-bit registers

---

## 📦 Project Structure

```
src/
 └─ cpu/
     ├─ Cycle.ts
     ├─ Runner.ts
     ├─ Registers.ts
     ├─ Dump.ts
     ├─ Program.ts
     ├─ Nop.ts
     └─ ...
 index.ts
```

---

## ▶️ Running the project

```bash
npm install
npm run dev
```

Or run it directly using ts-node:

```bash
npx ts-node src/index.ts
```

---

## 🧪 Sample Program

The file `Program.ts` includes a simple program:

```ts
export const program0 = new Uint16Array([
    0xF000,
    0xF003,
    0xF000,
    0xF005
]);
```

You run it with:

```ts
RunProgram(program0)
```

---

## 🔍 Debug Output

During execution, the CPU dumps the register state:

```
PC:0001 | A:0000 | IR:F000 | Z:0000 | MAR:0001 | MBR:F000 | DSL:00 | DIL:00 | DOL:00
```

This allows you to visually track each step of the CPU cycle.
