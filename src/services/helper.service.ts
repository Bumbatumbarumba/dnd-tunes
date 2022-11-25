/**
 * if thing is exactly null or exactly undefined or exactly an empty string
 * or an empty object or an empty array, the function returns true; else it
 * returns false
 */
export const isNullOrEmpty = (thing: any) => {
    return (
        thing === null ||
        thing === undefined ||
        thing === "" ||
        (Object.keys(thing).length === 0 && thing.constructor === Object) ||
        thing.length === 0
    );
};
