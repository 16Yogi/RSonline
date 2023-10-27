import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { addItem } from '../reduxconfig/CartSlice'
import { removeWishItem } from '../reduxconfig/WishSlice'
export default function Wish()
{
    const dispatch = useDispatch()
    var {products} = useSelector(state=>state.master.value)
    var wishes = useSelector(state=>state.wishes.value)
   if (wishes==0) {
    return (
        <>
        <div>
                <h1>Your wishes is empty....</h1>
                <div className="emptycard">
                <img src="./images/emptyshop.jpg" width={300} height={250}/>
                <h5>click here to go back <br/><br/><Link to="/" className="btn btn-success">home</Link></h5>
                </div>
                <br/><br/><br/><br/>
            </div>
        </>
    )
   }
   else{
    return <>
    <h1 className="alert-danger">User Wish List</h1>
    <hr/>
    <div class="container-fluid pt-5">
    <div class="row px-xl-5">
        <div class="col-lg-12 table-responsive mb-5">
    <table class="table table-bordered text-center mb-0">
            <thead class="bg-secondary text-dark">                
            <tr>
                <th>S. No.</th>
                <th>Product Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Operation</th>
            </tr>
        </thead>
        <tbody>
            {wishes.map((wh,index)=>{
                const pd = products.find(ob=>ob.id==wh)    
                return <tr>
                    <td>{index+1}</td>
                    <td><img src={pd.thumbnail} height={200} width={220}/></td>
                    <td>{pd.title}</td>
                    <td>{pd.price}</td>
                    <td>
                    <button onClick={()=>dispatch(removeWishItem(pd.id))} class="btn btn-sm btn-primary"><i class="fa fa-times"></i></button>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <b onClick={()=>dispatch(addItem(pd.id))} className="btn btn-md"><i className="fas fa-shopping-cart text-danger mr-1"></i>&nbsp;Cart</b>
                    </td>
                </tr>
            })}
        </tbody>
    </table>
    </div></div>
    </div>
</>
   }
}
// Operation : Remove Item , Add To Cart