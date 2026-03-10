export default class CustomError {
    static createError({ name = "Error", message = "Something went wrong", cause, code = 1 }) {
        const error = new Error(message);
        error.name = name;
        error.cause = cause;
        error.code = code;

        throw error;
    }
}



// // const test = new CustomError();
// // test.saludo();

// CustomError.Hola(); // <-- Metodo estatico, se puede llamar sin instanciar la clase.

// CustomError.saludo(); // <-- Esto no se puede hacer, porque saludo no es un metodo estatico.


