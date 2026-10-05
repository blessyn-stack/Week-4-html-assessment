function diffObjects(oldObj, newObj) {
    const result={
        added: {},
        removed: {},
        changed: {}
};
// Check for added and changed keys
for (const key of Object.keys(newObj)) {
    //Key exists in new object not old object
    if (!(key in oldObj)) {result.added[key] = newObj[key];
}

//Key exists in both but the values are different
else if (oldObj[key] !== newObj[key]) {
    result.changed[key]
    ={
        from:
        oldObj[key],
        to: newObj[key]
    };
    }
} 

// Check for removed keys
for (const key of Object.keys(oldObj)) {
    
    //Key exists in old object but not new object
    if (!(key in newObj)) {
        result.removed[key] = oldObj[key];
    }
}
return result;
}

//Test the function
console.log(
    diffObjects(
        {
            name: "Setemi",
            role: "Engineer",
            country: "Jamaica"
         },
         {
            name: "Setemi",
            role: "Senior Engineer",
            city: "Kingston"
        }
    )
);