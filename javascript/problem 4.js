function createCounter() {

    let count = 0;
    // Return an object containing the counter methods
    return {
        // Increase the count by 1
        increment: function () {count++;

        },
        
        //Decrease the count by 1
        decrement: function () {count--;

        },
        // Getter that returns the current value of count
        get value () {
            return count;
        }
    
    };
}

//Test the function
const counter = createCounter();

counter.increment();
counter.increment();
counter.decrement();

console.log(counter.value); // 1

console.log(counter.count); // undefined - count is private
