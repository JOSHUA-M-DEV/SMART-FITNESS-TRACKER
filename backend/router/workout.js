const express=require('express');
const router=express.Router();
const {createworkout,getallworkout,getworkout,deleteworkout,updateworkout}=require('../control/workoutcontrol');

router.get('/',getallworkout)
router.get('/:id',getworkout)
router.post('/',createworkout)
router.patch('/:id',updateworkout)
router.delete('/:id',deleteworkout)
module.exports=router;