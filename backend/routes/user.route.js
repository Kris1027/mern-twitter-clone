import express from 'express';
import { protectRoute } from '../middleware/protect-route.js';
import { getUserProfile } from '../controllers/user.controller.js';

const router = express.Router();

router.get('/profile/:username', protectRoute, getUserProfile);

export default router;
