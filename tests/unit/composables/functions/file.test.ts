import fs from "fs";
import { 
    formatSize,
    getMimeType,
    isImage 
} from "./../../../../composables/functions/file";

const file = new File([fs.readFileSync("assets/images/test.png")], "test.png", { type: "image/png" });

test('Testing formatSize()', () => {
    // testing if 0 is formatted to 0 B
    expect(formatSize(0)).toBe("0 B");

    // testing if 1024 is formatted to 1 KB
    expect(formatSize(1024)).toBe("1 KB");

    // testing if 1048576 is formatted to 1 MB 
    expect(formatSize(1048576)).toBe("1 MB");

    // testing if 1073741824 is formatted to 1 GB
    expect(formatSize(1073741824)).toBe("1.1 GB");

    // testing if 1099511627776 is formatted to 1 TB
    expect(formatSize(1099511627776)).toBe("1.1 TB");
});

test('Testing getMimeType()', async() => {
    // testing if test.png is an image/png
    const buffer = await file.arrayBuffer();
    expect(getMimeType(buffer)).toBe("image/png");
});


test('Testing isImage()', () => {
    // testing if test.png is an image
    expect(isImage(file)).toBe(true);
});

