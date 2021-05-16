import { useParams, useHistory } from "react-router";
import useProducts from "../../hooks/useProducts";

export default function SingleProduct() {
  const { singleProductId } = useParams();
  const products = useProducts();
  const history = useHistory();
}
