import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addItem, removeItem } from '../../reduxconfig/CartSlice';
import { addSingleItem } from '../../reduxconfig/SingleProductSlice';
import { addWishItem, removeWishItem } from '../../reduxconfig/WishSlice';
export default function Featureproduct() {
    const dispatch = useDispatch()
    var { products } = useSelector(state => state.master.value)
    var wishes = useSelector(state => state.wishes.value)
    var carts = useSelector(state => state.carts.value)


    var handleWish = (pid) => {
        const wishesOb = wishes.find(wh => wh == pid)
        if (wishesOb == undefined)
            dispatch(addWishItem(pid))
        else
            dispatch(removeWishItem(pid))
    }

    var handleCart = (pid) => {
        const cartOb = carts.find(crt => crt.pid == pid)
        if (cartOb == undefined)
            dispatch(addItem(pid))
        else
            dispatch(removeItem(pid))
    }
// console.log(products)
    return (
        <>
           <div className="container-fluid pt-5">
        <div className="text-center mb-4">
            <h2 className="section-title px-5"><span className="px-2">Trandy Products</span></h2>
        </div>
        <div className="row px-xl-5 pb-3">
            {products.map(ob=>{
               // console.log(wishes)
                const wishesOb = wishes.find(wh=>wh==ob.id)
                const cartOb = carts.find(wh=>wh.pid==ob.id)
                return (
                    
                    <div className="col-lg-3 col-md-6 col-sm-12 pb-1" >
                <div className="card product-item border-0 mb-4">
                <Link to="/details">
                    <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0" >
                        <img className="w-100" src={ob.thumbnail} height={200} width={220} onClick={()=>{dispatch(addSingleItem(ob))}} style={{background:"rgb(230,230,230)"}}/>                       
                    </div>
                </Link>
                    <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                        <h6 className="text-truncate mb-3">{ob.title}</h6>
                        <div className="d-flex justify-content-center">
                            <h6>Rs. {ob.price}</h6>
                        </div>
                    </div>
                    <div className="card-footer d-flex justify-content-between bg-light border">

                       {wishesOb==undefined?<b onClick={()=>handleWish(ob.id)} className="btn btn-md"><i className="fas fa-heart text-danger mr-1"></i>&nbsp;Wish</b>:<b onClick={()=>handleWish(ob.id)} className="btn btn-md"><i className="fas fa-heart-broken text-danger mr-1"></i>&nbsp;UnWish</b>}
                      
                       {cartOb==undefined?<b onClick={()=>handleCart(ob.id)} className="btn btn-md"><i className="fas fa-shopping-cart text-danger mr-1"></i>&nbsp;Cart</b>:<b onClick={()=>handleCart(ob.id)} className="btn btn-md"><i className="fas fa-cart-arrow-down  text-danger mr-1"></i>&nbsp;UnCart</b>}

                    </div>
                </div>
            </div>
                )
                })}
        </div>
    </div>
        </>
    )
}
