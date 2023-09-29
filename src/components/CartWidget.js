import logoCart from '../assets/icons/add-cart.png'

function CartWidget(){

    return(
        <div>
            <img width={50} src={logoCart}></img>
            <span>5</span>
        </div>
    )
}
export default CartWidget