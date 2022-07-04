import React,{useState} from 'react'
import {useDispatch,useSelector} from 'react-redux';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import { Button, 
    Grid, 
     TextField } from '@mui/material';
import { saveProduct, updateProduct } from '../../../Redux/Actions/Product.Action';
import MessageBox from '../../../components/controlls/message/messagebox';


function ProductEdit({_editData,dialogueFormClose}) {

const dispatch=useDispatch();
const catagories=useSelector(state=>state.Catagory);
const [openMsg,setOpenMsg]=useState(false);
const [name,setName]=useState(_editData.name);
const [price,setPrice]=useState(_editData.price);
const [qty,setQty]=useState(_editData.qty);
const [catagory,setCatagory]=useState(_editData.catagory._id);
const [description,setDescription]=useState(_editData.description);
const [file,setFile]=useState([]);
const [imgUpload,setImgUpload]=useState([]);

const submitEditProductFormData=(event)=>{
    event.preventDefault();
    const form=new FormData();
    form.append('id',_editData._id)
    form.append('name',name);
    form.append('price',price);
    form.append('description',description);
    form.append('slug',name);
    form.append('qty',qty);
    form.append('catagory',catagory);
    for(let pic of file)
    {
        console.log(pic)
        form.append('myImage',pic);
    }
    // file.forEach(p=>console.log(p))
    console.log({name,price,qty,description,catagory})
    dispatch(updateProduct({form,id:_editData._id}));
    dialogueFormClose();
}
const uploadFile=(e)=>{
    setImgUpload(Array.from(e.target.files).map((f,_index)=> (URL.createObjectURL(f))))
    setFile([...e.target.files])
}

const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenMsg(false);
  };

  return (
   <>
<MessageBox
open={openMsg}
duration={'3000'}
message={'hello'}
type={'info'}
/>

     <form onSubmit={submitEditProductFormData} encType="multipart/form-data">
       <Grid container spacing={1}>
           <Grid item xs={6} md={6}>
              <TextField value={name} style={{width:'100%'}} onChange={(e)=>setName(e.target.value)} variant={'outlined'} label={'Product name'}/>
           </Grid>
           <Grid item xs={6} md={6}>
           <TextField type="number" style={{width:'100%'}} value={price} onChange={(e)=>setPrice(e.target.value)} variant={'outlined'} label={'Price'}/>
           </Grid>
           <Grid item xs={6} md={6}>
               <TextField type="number" style={{width:'100%'}} value={qty} onChange={(e)=>setQty(e.target.value)} variant={'outlined'} label={'Quantity'}/>
           </Grid>
          
           <Grid item xs={6} md={6}>
               <select value={catagory} style={{width:'100%',height:'100%'}} onChange={(e)=>setCatagory(e.target.value)} variant={'outlined'} label='-select catagory-'>
                   {
                
                catagories.catagory.map(cata=>(
                    <>
                    <option value={cata._id}>{cata.name}</option>
                    </>
                ))
            }
               </select>
           </Grid>
           <Grid item xs={12}>
               <TextField multiline value={description} onChange={(e)=>setDescription(e.target.value)} style={{width:'100%'}} variant='outlined' label='Description'/>
           </Grid>
           <Grid item xs={6} md={6}>
               <input type="file" multiple onChange={uploadFile}/>
           </Grid>

<Grid item xs={2} md={2}>
        <Button variant={'contained'} 
        type='submit' 
        color={'primary'}>
            <AddBoxOutlinedIcon/>
             Update
             </Button> 
</Grid>
<Grid item xs={12}>
    <div style={{display:"flex",flexWrap:"wrap"}}>
{ imgUpload.map(i=> (
          <>
          <div>
          <button style={{background:"red",color:'white'}} onClick={()=>setImgUpload(imgUpload.filter(images=> i!=images))}>X</button>
          <img src={i} style={{height:'70px',width:'70px',margin:'10px 10px'}}/>
          </div>
          </>
          )) }
          </div>
</Grid>
       </Grid>
       </form>
   </>
  )
}

export default ProductEdit