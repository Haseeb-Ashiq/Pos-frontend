import React,{useState} from 'react'
import {useDispatch,useSelector} from 'react-redux';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import { Button, 
    Grid, 
     TextField } from '@mui/material';
import { saveProduct } from '../../../Redux/Actions/Product.Action';
function ProductSave() {
    const dispatch=useDispatch();
    const catagories=useSelector(state=>state.Catagory);

    // const [fname,setFName]=useState('');
    // const [price,setPrice]=useState('')
const [name,setName]=useState('');
const [price,setPrice]=useState('');
const [qty,setQty]=useState('');
const [catagory,setCatagory]=useState('');
const [description,setDescription]=useState('');
const [file,setFile]=useState([]);
const [imgUpload,setImgUpload]=useState([]);

const submitProductFormData=(event)=>{
    event.preventDefault();
    // setOpenForm(false);
    const form=new FormData();
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
    dispatch(saveProduct(form));
}
const uploadFile=(e)=>{
    setImgUpload(Array.from(e.target.files).map((f,_index)=> (URL.createObjectURL(f))))
    setFile([...e.target.files])
}

  return (
   <>
     <form onSubmit={submitProductFormData} encType="multipart/form-data">
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
             Save
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

export default ProductSave