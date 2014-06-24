logicGates
==========

A logic gate library and simulator.

The goal a logic gate simulator that can be used for things like games.

## How to use

    //
    // RS latch with NAND gates
    //
    // create a table of gates
    var table = [
      [nand, 's,j', 'q']
      , [nand, 'r,q', 'j']
    ];
    
    // set the starting state
    var state = {
      s: 0
      , r: 1
    };

    // runTable will run until the state stabalizes (or it gives up.)
    var result = engine.runTable(table, state);
    
    assert(result.q, 1);
    // check out /test for more examples

Each row is made up of three parts:

    [gateFunction, inputs, outputs]
    
The inputs/outputs are variables inside the simulator. When you call runTable you pass in the intial state. 

Inputs is a comma based list of properties on the state object.

    var state = {s: 0, r: 1};

    var inputs = 's';   // === state['s']
    var inputs = 's,r'; // === [state['s'], state['r']]
    // refrencing a property before it's defines will set it to 0
    var inputs = 'j';   // === 0

Outputs is a comma based list of state properties to set to the result of the gate.

    state['j'] = gateFunction.apply(null, inputs); // outputs === 'j'
    state['j'] = state['q'] = gateFunction.apply(null, inputs); // outputs === 'j,q'
