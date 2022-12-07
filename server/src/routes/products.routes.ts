import { Router } from "express";

import * as productsCtrl from '../controller/products.ctrl'

import productValid from '../middleware/validation/productValid'
import auth from '../middleware/auth/auth';

import { upload } from "../images/multer";

const router = Router()

router.get('/products', productsCtrl.products)
router.get('/productsindex', productsCtrl.productsIndex)
router.get('/footwearindex', productsCtrl.footwearIndex)
router.get('/products/:id', productsCtrl.product)
router.get('/productscategory/:category', productsCtrl.productsCategory)
router.get('/productsgender/:gender', productsCtrl.productsGender)

router.post('/createproducts', auth, upload.single("file"), productValid, productsCtrl.createProduct)

router.delete('/removeproducts/:id', auth, productsCtrl.removeProduct)

router.put('/updateproducts/:id', auth, upload.single("file"), productsCtrl.updateProduct)

export default router