# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

Take care of following things while refactoring the code to make it more readable:

1. There were too many nested if/else statements in the function reduced those nested if/else so that the reader does not get confused. In order to acheive the same have returned the value of partition keys in all the if statements so that there is no need of writing else

2. The candidate intialization was only required if there is an input and the input comprised of partition key so I have initialized it if and only if those conditions are met and I have renamed it to partitionKey instead of candidate just to ensure that code reader understands the function's purpose.

3. Used conditional(ternary) operator to check whether the partitionKey provided in input is of type string or not in order to reduce lines of code, increase readability and avoid if else
