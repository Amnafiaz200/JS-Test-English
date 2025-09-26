//how the code is executed, how call stack(memory) is executed,how function will go into the memory and how they executed

// add js files in browser, how to visualize it
//js execution context = ec
//js run files in two phases,
// code files when given to js, form first (global ec (1)) put in (this variable)
// all this executed in thread, js is single threaded
// function ec(2)
// eval ec(3) in mongo documentation
// code is exected in 2 phases (1) memory creation phase(there is allocation of space for variable or whatever is declared)
// (2) execution phase
// steps how code is executed:
// 1, first the code is run through global execution(global environment), and then locate in (this), always occur
// 2, memory phase(all varibles are put together,take them space)
// in memory phase.(variables are assigned undefined, function=> defination, variables to call function= undefined)
// 3, exection phase(variavles are assigned their vlaues, function create new execution context (sign box)which cantains new variable environment and execution context)
//  for every function, the 2 steps will do again for that sign box
// thread is one on which all execution is happening.
// call stack:
// when method is to call, put in global ec, when its called, put out.
// 

