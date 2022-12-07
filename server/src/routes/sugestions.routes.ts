import { Router } from "express";

import * as sugestionsCtrl from '../controller/sugestions.ctrl'

import productValid from '../middleware/validation/productValid'
import auth from '../middleware/auth/auth';

import { upload } from "../images/multer";

const router = Router()

router.get('/sugestions', sugestionsCtrl.sugestions)
router.get('/sugestions/:id', sugestionsCtrl.sugestion)
router.get('/sugestionscategory/:category', sugestionsCtrl.sugestionsCategory)

router.post('/createsugestions', auth, upload.single("file"), productValid, sugestionsCtrl.createSugestion)

router.delete('/removesugestions/:id', auth, sugestionsCtrl.removeSugestion)

router.put('/updatesugestions/:id', auth, upload.single("file"), sugestionsCtrl.updateSugestion)

export default router