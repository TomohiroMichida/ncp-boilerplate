import { Router } from 'express';
import { ExampleController } from '../controller/example-controller';

const router = Router();
const controller = new ExampleController();

router.get('/hello', async (req, res, next) => {
  try {
    const result = await controller.getHelloMessage();
    res.json(result);
  } catch (err) {
    next(err);
  }
});

export default router;
