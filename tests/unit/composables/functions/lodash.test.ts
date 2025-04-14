import { _get, _set } from "./../../../../composables/functions/lodash";

const obj = { a: { b: { c: "d" } } };

test('Testing _set()', () => {
    // testing if _set() sets the value correctly
    const emptyObj = {};
    
    // testing if _set() sets the value correctly on empty object
    expect(_set(emptyObj, "a.b.c", "e").a).toEqual({b: { c: "e" }});
    expect(_set(emptyObj, "a.b.c", "e").a.b).toEqual({ c: "e" });
    expect(_set(emptyObj, "a.b.c", "e").a.b.c).toEqual("e");

    // testing if _set() sets the value correctly on existing object
    expect(_set(obj, "a.b.c", "d").a.b.c).toEqual("d");
});

test('Testing _get()', () => {
    // testing if _get() gets the value correctly
    expect(_get(obj, "a.b")).toEqual({ c: "d" });
    expect(_get(obj, "a.b.c")).toEqual("d");
    expect(_get(obj, "a.b.c.d")).toEqual("-");
});

