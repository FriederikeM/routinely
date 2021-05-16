import { useParams, useHistory } from "react-router";
import useProducts from "../../hooks/useProducts";
import getProductById from "../../utility/getProductById";

export default function SingleProduct() {
  const { singleProductId } = useParams();
  const products = useProducts();
  const history = useHistory();
    const productInfo = getProductById(Number(singleProductId), products);
    const { name, image, ingredients, time, refrigeration } = productInfo;

}
