import express from 'express';
import config from './config/config.js';
//Clase de test:
import suma from './suma.js';
//import Routers
import usersRouter from './routers/users.router.js'
import { log } from 'console';

const app = express();

//JSON settings:
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Declare routers:
app.use("/api/users", usersRouter);

const SERVER_PORT = config.port;
app.listen(SERVER_PORT, () => {
    console.log("Servidor escuchando por el puerto: " + SERVER_PORT);
    const executeTest = config.runTests;


    let testPasados = 0;
    let testEjecutado = 0
    const testTotales = 4;

    // Test_01
    let result = escenario_01(testPasados, testEjecutado)
    testPasados = result.testPasados
    testEjecutado = result.testEjecutado

    // Test_02
    result = escenario_02(testPasados, testEjecutado)
    testPasados = result.testPasados
    testEjecutado = result.testEjecutado

    // Test_03
    result = escenario_03(testPasados, testEjecutado)
    testPasados = result.testPasados
    testEjecutado = result.testEjecutado


    // Test_04
    result = escenario_04(testPasados, testEjecutado)
    testPasados = result.testPasados
    testEjecutado = result.testEjecutado


    console.log(`Test ejecutados: ${testEjecutado}\nTest pasados: ${testPasados}\ntotalTest:${testTotales} `);

});


// ESCENARIOS
const escenario_01 = (testPasados, testEjecutado) => {
    console.log("Test 1: La función debe devolver null si algun parametro no es numérico.");

    // Given
    const num1 = 2
    const num2 = "2"


    // Then
    let result = suma(num1, num2)


    // Assert
    if (result === null) {
        console.log("Test 01: success!");
        testPasados++
    } else {
        console.log(`Test 01: fallido, se recibio ${typeof result}, valor esperado null`);
    }


    testEjecutado++

    const res = {
        testPasados,
        testEjecutado
    }

    return res;
}


const escenario_02 = (testPasados, testEjecutado) => {
    console.log("Test 2: La funcion debe devolver 0 si no se pasa ningún parámetro:");

    // Given


    // Then
    let result = suma()


    // Assert
    if (result === 0) {
        console.log("Test 02: success!");
        testPasados++
    } else {
        console.log(`Test 02: fallido, se recibio ${result}, valor esperado 0`);
    }


    testEjecutado++

    const res = {
        testPasados,
        testEjecutado
    }

    return res;
}


const escenario_03 = (testPasados, testEjecutado) => {
    console.log("Test 3: La función debe poder realizar la suma correctamente.");

    // Given
    const num1 = 3;
    const num2 = 2;

    // Then
    let result = suma(num1, num2)


    // Assert
    let resultEsperado = num1 + num2
    if (result === resultEsperado) {
        console.log("Test 03: success!");
        testPasados++
    } else {
        console.log(`Test 03: fallido, se recibio ${result}, valor esperado ${resultEsperado}`);
    }


    testEjecutado++

    const res = {
        testPasados,
        testEjecutado
    }

    return res;
}

const escenario_04 = (testPasados, testEjecutado) => {
    console.log("Test 4: La función debe poder realizar la suma con cualquier cantidad de numeros");

    // Given
    const numerosEntrada = [1, 2, 3, 4, 5];

    // Then
    let result = suma(...numerosEntrada)


    // Assert
    let resultEsperado = 15
    if (result === resultEsperado) {
        console.log("Test 04: success!");
        testPasados++
    } else {
        console.log(`Test 04: fallido, se recibio ${result}, valor esperado ${resultEsperado}`);
    }


    testEjecutado++

    const res = {
        testPasados,
        testEjecutado
    }

    return res;
}