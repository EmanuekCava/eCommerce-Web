import { Router } from "express";

import * as userCtrl from '../controller/user.ctrl'

import userValid from '../middleware/validation/userValid'

const router = Router();

router.get('/users', userCtrl.users)

router.post('/createuser', userValid, userCtrl.createuser)
router.post('/login', userCtrl.login)

router.delete('/users/:id', userCtrl.removeUser)

export default router