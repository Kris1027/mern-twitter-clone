import express from 'express';
import {
    commentOnPost,
    createPost,
    deletePost,
    likeUnlikePost,
} from '../controllers/post.controller.js';
import { protectRoute } from '../middleware/protect-route.js';

const router = express.Router();

router.post('/create', protectRoute, createPost);
router.post('/like/:id', protectRoute, likeUnlikePost);
router.post('/comment/:id', protectRoute, commentOnPost);
router.delete('/:id', protectRoute, deletePost);

export default router;
