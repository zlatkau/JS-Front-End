function solve(num, act1, act2, act3, act4, act5) {
    function action(value, command) {
        let result;
        switch (command) {
            case 'chop': result = value / 2; break;
            case 'dice': result = Math.sqrt(value); break;
            case 'spice': result = value + 1; break;
            case 'bake': result = value * 3; break;
            case 'fillet': result = value - 0.2 * value; break;
        }
    
        return result
    }

    num = action(num, act1);
    console.log(num);
    num = action(num, act2);
    console.log(num);
    num = action(num, act3);
    console.log(num);
    num = action(num, act4);
    console.log(num);
    num = action(num, act5);
    console.log(num);
   
}

solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet')