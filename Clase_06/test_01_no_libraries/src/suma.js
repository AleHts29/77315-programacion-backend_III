// export default (num1, num2) => {

import { log } from "console";

//     if (!num1 || !num2) return 0

//     if (typeof num1 != "number" || typeof num2 != "number") return null

//     return num1 + num2
// }

export default (...numbers) => {

    //Test 2: La funcion debe devolver 0 si no se pasa ningún parámetro:
    if (numbers.length === 0) return 0


    //Test 1: La función debe devolver null si algun parametro no es numérico
    for (let i = 0; i < numbers.length; i++) {
        if (typeof numbers[i] != "number") {
            return null;
        }
    }

    //Test 3-4: La función debe poder realizar la suma correctamente.
    let result = 0
    for (let i = 0; i < numbers.length; i++) {
        result += numbers[i]
    }

    return result
}