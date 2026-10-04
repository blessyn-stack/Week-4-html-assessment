function deepEqual(objA,objB){
    // if they are exactly the same value
     if(objA===objB){return true;
     }

     // If either one is not an object
    
    if (
        objA===null ||
        objB===null ||
        typeof objA !== "object" ||
        typeof objB !== "object"
    ) {return false;
     }
    
     // Get the keys from both objects
     const keysA = Object.keys(objA);
    const keysB = Object.keys(objB);

    // If they don't have the same number of keys
    if (keysA.length !==
        keysB.length) {return false;
        }

        // Check that evey key in objA exists in objB
    for (const key of keysA) 
        {if (!Object.hasOwn(objB,key)) {
        return false;
    }
//Compare the values
        if (!deepEqual(objA[key],
            objB[key])) {
                return false;
            }
    }
    // Everything matched
    return true;
}
// Test the function
console.log(
    deepEqual(
        {a: 1, b: {c: 2}},
        {a: 1, b: {c: 2}}
    )
);