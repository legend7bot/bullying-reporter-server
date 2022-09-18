import { Router } from 'express';
import { Report, validate } from '../models/reportModel.js';

const router = Router();

router.post('/', async (req, res) => {
  try {
    const { error } = validate(req.body);
    if (error) return res.status(400).send({ message: error.details[0].message });
    await new Report(req.body).save();
    res.status(201).send({ message: 'Report created successfully' });
  } catch (error) {
    res.status(500).send({ message: 'Internal Server Error' });
  }
});

export default router;