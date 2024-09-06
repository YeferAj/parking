import { Router } from 'express';
import { getOwners, postOwner, putOwner } from '../controllers/ownerController.js';

const router = Router();

router.get('/', getOwners);
router.post('/', postOwner);
router.put('/:id', putOwner);

export default router;
