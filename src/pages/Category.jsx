import { useParams, Link, useSearchParams } from "react-router-dom";
import { products } from "../data/data";

function Category() {
    const { categoryId } = useParams();
    const [searchParams, setSearchParams] = useSearchParams();

    const maxPrice = searchParams.get("maxPrice")
        ? Number(searchParams.get("maxPrice"))
        : Infinity;

    const currrentCategoryArray = products.filter(
        (product) =>
            product.categoryId === categoryId && product.price <= maxPrice
    );

    function handleChange(e) {
        const value = e.target.value;
        setSearchParams(value ? { maxPrice: value } : {});
    }

    return (
        <div>
            <h1>Category {categoryId}</h1>
            <div>
                <label htmlFor="maxPrice"></label>
                <input
                    type="number"
                    placeholder="Enter maxPrice"
                    id="maxPrice"
                    value={searchParams.get("maxPrice") || ""}
                    onChange={handleChange}
                />
            </div>
            <ul style={{ display: "flex" }}>
                {currrentCategoryArray.map((product) => (
                    <li key={product.name}>
                        <Link to={`/product/${product.id}`}>
                            {product.name} {product.price}$
                            <img
                                src={product.img}
                                alt={product.name}
                                style={{ width: "150px" }}
                            />
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Category;
