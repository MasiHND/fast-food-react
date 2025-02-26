import { useDispatch } from "react-redux"
import Button from "../../ui/Button"
import { decItemQuantity, incItemQuantity } from "./cartSlice";

function UpdateItemQuantity({pizzaId, currentQuantity}) {
    const dispatch = useDispatch();
    return (
        <div className="flex gap-2 items-center">
            <Button type="roundinc" onClick={()=>dispatch(incItemQuantity(pizzaId))}>+</Button>
            <span>{currentQuantity}</span>
            <Button type="rounddec" onClick={()=>dispatch(decItemQuantity(pizzaId))}>-</Button>
        </div>
    )
}

export default UpdateItemQuantity
