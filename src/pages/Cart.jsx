import { useNavigate } from "react-router-dom";

function Cart() {
    const navigate = useNavigate();
    return (
        <div>
            Cart
            <button onClick={() => navigate("/thanks")}>order</button>
        </div>
    );
}

export default Cart;
