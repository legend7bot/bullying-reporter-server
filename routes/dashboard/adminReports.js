import { Router } from 'express';
import { Report, validate } from '../../models/reportModel.js';

const router = Router();

router.get('/all', async (req, res) => {
  try {
    const reports = await Report.find({});
    res.send(reports);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: 'Internal Server Error' });
  }
});

router.get('/report/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const report = await Report.findById(id);
    if (!report) return res.status(404).send({ message: 'Report not found' });
    res.send(report);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: 'Internal Server Error' });
  }
});

router.put('/update/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const goal = await Report.findById(id);
    if (!goal) return res.status(404).send({ message: 'Report not found' });
    const updatedGoal = await Report.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(updatedGoal);
  } catch (error) {
    res.status(500).send({ message: 'Internal Server Error' });
  }
});

export default router;
