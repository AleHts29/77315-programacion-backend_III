import EErrors from "../errors-enum.js";


export default (error, req, res, next) => {
    console.log("Error detectado, entrando en errorHandler");
    console.log(error.cause);


    switch (error.code) {
        case EErrors.INVALID_TYPES_ERROR:
            res.status(400).send({ status: "error", error: error.code, message: error.message });
            break;
        default:
            res.status(500).send({ status: "error", error: EErrors.UNKNOWN_ERROR, message: "An unexpected error occurred." });
    }
}
