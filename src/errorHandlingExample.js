// try, catch, throw, finally

try {
    let a = 15, b = 0;
    if (b === 0) {
        // throw "Trying to divide by zero...";
        throw new error("New error: Division by Zero!")
        // console.log("Does this run?");
    }
    // console.log("How about this one?");
} catch (error) {
    console.error("Cannot divide by zero!!");
    console.log(error);
} finally {
    console.log("I always run!");
}
