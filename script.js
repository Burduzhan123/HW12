/*function randomDelayPrint(str) {
    for (let i = 0; i < str.length; i++) {
        const letter = str[i];
        const delay = Math.random() * 1000; 

        setTimeout(() => {
            console.log(letter);
        }, delay);
    }
}

randomDelayPrint("Hello");*/


/*function debounce(callback, delay) {
    let timerId;

    return function (...args) {
        clearTimeout(timerId);

        timerId = setTimeout(() => {
            callback(...args);
        }, delay);
    };
}


const expensiveOperation = () => console.log("Виконую складну операцію..."); 


const debouncedExpensiveOperation = debounce(expensiveOperation, 1000);


debouncedExpensiveOperation();
debouncedExpensiveOperation();
debouncedExpensiveOperation();*/

function intervalRace(functions, t) {
    return new Promise((resolve) => {
        const results = [];
        let index = 0;

        function executeFunction() {
            if (index < functions.length) {
                const currentFunction = functions[index];
                const result = currentFunction();

                results.push(result);
                index++;

                setTimeout(executeFunction, t);
            } else {
                resolve(results);
            }
        }

        executeFunction();
    });
}


const functionsArray = [
    () => "Function 1 executed",
    () => "Function 2 executed",
    () => "Function 3 executed"
];

intervalRace(functionsArray, 1000).then((results) => {
    console.log(results);
});




