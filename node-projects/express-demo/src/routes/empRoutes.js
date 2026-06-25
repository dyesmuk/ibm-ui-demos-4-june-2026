// empRoutes.js
import express from "express";

const router = express.Router();

router.get('/', (req, res) => {
    console.log('employees');
    res.send('all employees');
});

router.get('/:id', (req, res) => {
    console.log(`employee ${req.params.id}`);
    res.send(`employee ${req.params.id}`);
});

// router.post();
// router.put();
// router.delete();

export default router;
