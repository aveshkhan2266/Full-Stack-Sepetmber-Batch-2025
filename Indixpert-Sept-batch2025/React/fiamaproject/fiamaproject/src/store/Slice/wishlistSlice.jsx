import { createSlice } from "@reduxjs/toolkit";

const WISHLIST_STORAGE_KEY = "fiamaproject_wishlist";

const getSavedWishlist = () => {
    try {
        const savedItems = JSON.parse(
            localStorage.getItem(WISHLIST_STORAGE_KEY) || "[]"
        );
        return Array.isArray(savedItems) ? savedItems : [];
    } catch {
        return [];
    }
};

const saveWishlist = (items) => {
    localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(items));
};

export const wishlistSlice = createSlice({
    name: "wishlist",

    initialState: {
        UserID: 1,
        wishlistItems: getSavedWishlist()
    },
    reducers: {

        addToWishlist: (state, action) => {
            let newItem = {
                id: action.payload.id,
                title: action.payload.title,
                price: action.payload.price,
                thumbnail: action.payload.thumbnail,
                availabilityStatus: action.payload.availabilityStatus,
            };
            state.wishlistItems = [...state.wishlistItems, newItem];
            saveWishlist(state.wishlistItems);
        }
        , removeFromWishlist: (state, action) => {
            state.wishlistItems = state.wishlistItems.filter((product) => product.id !== action.payload);
            saveWishlist(state.wishlistItems);
        },
    },
});
export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;