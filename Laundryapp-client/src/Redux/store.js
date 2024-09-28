import { configureStore } from "@reduxjs/toolkit";

// Import your reducers
import userIdReducer from "./reducers/userId";
import userReducer from "./reducers/user";
import cartReducer from "./reducers/cart";


const store = configureStore({
    reducer: {
        userId: userIdReducer,
        user: userReducer,
        cart:cartReducer
 
    },
});

export default store;
























































// import bannerReducer from "./reducers/banners";
// import offerReducer from "./reducers/offers";
// import serviceReducer from "./reducers/services";
// import productReducer from "./reducers/products";
// import cartReducer from "./reducers/cart";
// import instructionReducer from "./reducers/instructions";
// import pickupReducer from "./reducers/pickups";
// import summaryReducer from "./reducers/summary";
// import orderReducer from "./reducers/orders";













       // banners: bannerReducer,
        // offers: offerReducer,
        // services: serviceReducer,
        // products: productReducer,
        // cart: cartReducer,
        // instructions: instructionReducer,
        // pickups: pickupReducer,
        // summary: summaryReducer,
        // orders: orderReducer,