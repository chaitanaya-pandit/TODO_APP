
import {controllerproduct} from "./src/controllers/controllerproduct.js";
import { cartcontroller } from "./src/controllers/cartcontroller.js";
import { cartservices } from "./src/services/cartservices.js";
import { cartproductview } from "./src/views/cartproductview.js";

const cartService = new cartservices();
const cartView = new cartproductview(cartService);

const app = new controllerproduct(cartService, cartView);
const cart = new cartcontroller(cartService, cartView);

app.getallproducts();
