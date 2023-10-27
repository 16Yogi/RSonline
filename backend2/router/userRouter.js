import express from 'express'
const router = express.Router();
import UserController from '../usercontroller/userController.js';
import userFetchdata from '../usercontroller/userFetch.js';
import userUpdate from '../usercontroller/userUpdate.js';
import userDelete from '../usercontroller/userDelete.js';

//data send
router.post('/contact',UserController.contact)
router.post('/electronicitem',UserController.electronic)
router.post('/accessories',UserController.accessories)
router.post('/employee',UserController.addemployee)
router.post('/addreailer',UserController.addRetailer)
router.post('/invoice',UserController.Invoice)
router.post('/expesesitem',UserController.expensesdata)
router.post('/addempsalary',UserController.addsalary)

//data fetch
router.get('/electronicfetch',userFetchdata.electroniItem)
router.get('/accessoriesfetch',userFetchdata.accessorieItem)
router.get('/allemployeedetaile',userFetchdata.allemployee)
router.get('/allretailerdeailer',userFetchdata.allretailer)
router.get('/allinvoic',userFetchdata.allinvoice)
router.get('/empsalarydata',userFetchdata.addEmpSlry)

//update
router.put("/elecupdate",userUpdate.updateelecItem)
router.put("/accessitemupdate",userUpdate.updateAcceItem)
router.put("/employeeupdate",userUpdate.updateEmployeData)

//delete
router.get("/elecitemdelete",userDelete.delElectricItem)


export default router 