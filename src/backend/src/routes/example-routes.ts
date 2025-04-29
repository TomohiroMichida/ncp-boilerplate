import { Router } from 'express';
import { ExampleController } from '../controller/example-controller';

const router = Router();
const exampleController = new ExampleController();

router.get('/hello', async (req, res, next) => {
  try {
    const result = await exampleController.getHelloMessage();
    res.json(result);
  } catch (err) {
    next(err);
  }
});

export default router;
