# Everything in javascript happens inside an "Execution Context"
Kind of box/container in which whole javascript is execute

## Execution Context:-
2 components
1. Memory component/variable environment:- variables and functions are stored
2. code component/thread of execution:- whole code is excuted line by line

###### JS is "synchronous" "single-threaded" language
one command at a time, in specific order.

Execution conetxt created in 2 phases:-
1. Creation Phase/Memory creation phase
2. Code Execution Phase

index.js:-
when we start execution, it will scan and assign memory to variable and function in the Creation Phase
n:undefined
square:{....} complete code
square2:undefined
square4:undefined

Code Execution Phase:- start scanning and allocate values
n:2
line number 2-5 nothing to do
line number 6:- name with () means start execution of the function
when we invoke a function a brand new Execution Context is created then again 2 phases--- in memory creation the parameters, variables and function will get memory

square(n):-
num:undefined
and:undefined

Code execution phase of the function:-
n pass to num i.e. argument to parameter
num:2
num*num
ans:4 replace the undefined
line number 4:- return the value and control of the program to the excution context from where the function is invoked

square2: find the value of ans which is stored in local memory
square2 will updated to 4 (execution context of the function will be deleted)

then same for square(4) and update the square4:16 replace undefined
Once execution done: complete execution context will be deleted

Everything from Execution context till excution will be managed by JS engine using "Callstack"
At the bottom of the stack is GLOBAL EXECUTION CONTEXT then whole Execution Context will be pushed to stack

After execution the call stack will get empty

## Call stack maintains the order of execution of execution contexts
call stack/execution context stack/program stack/control stack/runtime stack/machine stack

## Video 4
## HOISTING in JS

HOISTING:- we can access variables and functions even before initializing it
incase of variable it gives undefined and incase of functions it give the function

Even before execution the momory is allocated to variables and functions

## If any function is arrow function or = function(){} it behaves like variable
video4.js:- Part 6/7:-  it allocats undefined to getName because of arrow function


Video 8:- lexical environment is the local memory along with the reference of lexical environment of the parent.
lexical means in hierarchy or sequence
function c is lexically sitting inside function a
function a(){
    var b = 10;
    function c(){
        console.log(b);
    }
}

In case of global execution context the lexical environment of parent pointing to null.
if variable is not present in local memory, it finds the variable in lexical environment of parent if not in the parent then parent of parent and soo on.....

Line 77 is called "SCOPE CHAIN".

Temporal Dead Zone:- let and const are hoisted but differently then var and they are in temporal dead zone.

let is under SCRIPT:- with undefined and if we access before initialization we get ReferenceError: cannot access a before initialization.

Temporal Dead Zone:- is the time between let is hoisted and it's initialization.

If we try to access any variable which is not in our code we get ReferenceError: x in not defined.

let and const are not present in global object.

if two let variable, we try to redeclare we get SyntxError: Identifier 'a' has already been declared.

Redeclaration is not possible in case of let within same scope.

CONST without initialization SyntaxError: Missing initializer in const declaration.

If we reassign to CONST TypeError: Assignment to const variable.

{}:- it is a block also called compound statement and used to combine multiple JS statement into 1 group.

Group of statements where JS expects as single statement. ex:- if(true) true; using block if(true){anything that we want to do}

{
    var a = 10;
    let b = 20; // will in Block scope under glabal execution context
    const c = 30; // will in Block scope under glabal execution context
}

SHADOWING IN JS:- 
var a = 100;
{
    var a = 10;
    let b = 20; 
    const c = 30; 
    console.log(a); //10
}
console.log(a);//10 because a got shadowed and updated to 10 in the global memory itself.


CLOSURE:- it is a function which along with it's lexical environment
If function is returned then it is returned with it's lexical scope.

