import express from 'express';
import { createPost } from '../controllers/post.controller.js';
import { protectRoute } from '../middleware/protect-route.js';

const router = express.Router();

router.post('/create', protectRoute, createPost);

export default router;
