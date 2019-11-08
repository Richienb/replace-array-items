import test from "ava"
import replaceArrayItems from "."

test("main", (t) => {
    t.deepEqual(replaceArrayItems(new Array(3), "Hello"), ["Hello", "Hello", "Hello"])
})
