import axios from './axios-customize'
const FetchAll =()=>
{
   return  axios.get("/total_data/all");
}

const PostCreate =(price_value,product_value,men_price,women_price,men_product,women_product,label)=>
{
   return  axios.post("/total_data/add",{price_value,product_value,men_price,women_price,men_product,women_product,label});
}
const PutUpdate =(id,price_value,product_value,men_price,women_price,men_product,women_product,label)=>
{
   return axios.put(`/total_data/update/${id}`, { price_value,product_value,men_price,women_price,men_product,women_product,label});
}
const DeleteDelete =(id)=>
{
   return axios.delete(`/total_data/delete/${id}`, { });
}

export{FetchAll,PostCreate,PutUpdate,DeleteDelete};