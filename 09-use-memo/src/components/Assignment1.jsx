import { useState, useMemo } from "react";

export function Assignment1() {
    const [input, setInput] = useState(0);

    
    const calculateFactorial = (num) => {
        if (num === 0 || num === 1) {
            return 1;
        } else {
            let factorial = 1;
            for (let i = 2; i <= num; i++) {
                factorial *= i;
            }
            return factorial;
        }
    };
    
    const expensiveValue = useMemo(() => {
        return calculateFactorial(input);
    }, [input]);
    
    return (
        <div>
            <input
                type="number"
                value={input}
                onChange={(e) => setInput(Number(e.target.value))}
            />
            <p>Calculated Value: {expensiveValue}</p>
        </div>
    );
}
