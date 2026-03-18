import { Router } from "express";
import calculator from "lib-calculator";




const router = Router();


router.post('/add', (req, res) => {
    const { num1, num2 } = req.body;
    const result = calculator.sum(num1, num2);
    res.send({ status: "success", "result": result });
})


router.post('/subtract', (req, res) => {
    const { num1, num2 } = req.body;
    const result = calculator.subtract(num1, num2);
    res.send({ status: "success", "result": result });
})

router.post('/multiply', (req, res) => {
    const { num1, num2 } = req.body;
    const result = calculator.multiply(num1, num2);
    res.send({ status: "success", "result": result });
})


router.post('/divide', (req, res) => {
    try {
        const { num1, num2 } = req.body;
        const result = calculator.divide(num1, num2);
        res.send({ status: "success", "result": result });
    } catch (error) {
        console.log("error", error.message);
        res.send({ status: "error", message: error.message });
    }
})

export default router