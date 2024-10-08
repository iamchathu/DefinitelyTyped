import { readFileSync } from "fs";
import {
    read,
    ReadableFields,
    readBuffer,
    readBufferSync,
    readSync,
    write,
    writeAsync,
    writeBuffer,
    writeSync,
} from "pdf-fill-form";

const buffer = readFileSync("test.pdf");

async function main() {
    // Workaround because TS 3.9 resolves to ReadableFields and TS 3.6 to the object
    // $ExpectType ReadableFields || { name: string; page: number; value: string; id: number; type: string; }[]
    await read("./test.pdf");

    // $ExpectType ReadableFields || { name: string; page: number; value: string; id: number; type: string; }[]
    await readBuffer(buffer);

    // $ExpectType ReadableFields || { name: string; page: number; value: string; id: number; type: string; }[]
    readSync("./test.pdf");

    // $ExpectType ReadableFields || { name: string; page: number; value: string; id: number; type: string; }[]
    readBufferSync(buffer);

    // $ExpectType Buffer || Buffer<ArrayBufferLike>
    await write("test.pdf", { field: "test" }, { save: "pdf" });

    // $ExpectType Buffer || Buffer<ArrayBufferLike>
    writeSync("test.pdf", { field: "test" }, { save: "pdf" });

    // $ExpectType Buffer || Buffer<ArrayBufferLike>
    await writeBuffer(buffer, { otherField: "123" }, { save: "imgpdf", antialias: true });

    // $ExpectType Buffer || Buffer<ArrayBufferLike>
    await writeBuffer(buffer, { field: 123, otherField: true });

    // @ts-expect-error
    await writeBuffer(buffer, { field: ["123", "test"] });
}

main();
