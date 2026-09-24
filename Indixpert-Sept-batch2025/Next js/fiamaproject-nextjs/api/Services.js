import axios from "axios";
// import { ProductsData } from "../data/ProductsData";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASEURL || "https://dummyjson.com"
});

const mockApi = axios.create({
    baseURL: import.meta.env.VITE_MOCKAPI_BASEURL || "https://6a9bcb4a0ad174e139e8cf21.mockapi.io"
});

const ORDERS_ENDPOINT = "/Orders";
const LOCAL_ORDERS_KEY = "fiamaproject_orders";

const getLocalOrders = () => {
    try {
        const orders = JSON.parse(localStorage.getItem(LOCAL_ORDERS_KEY) || "[]");
        return Array.isArray(orders) ? orders : [];
    } catch {
        return [];
    }
};

const saveLocalOrder = (order) => {
    const savedOrder = {
        ...order,
        id: order.id || `local-${Date.now()}`,
        createdAt: order.createdAt || new Date().toISOString(),
    };
    localStorage.setItem(
        LOCAL_ORDERS_KEY,
        JSON.stringify([...getLocalOrders(), savedOrder])
    );
    return savedOrder;
};

const normalizeProductsResponse = (data) => ({
    ...(data && !Array.isArray(data) ? data : {}),
    products: Array.isArray(data?.products)
        ? data.products
        : Array.isArray(data)
            ? data
            : [],
});

const normalizeCategoriesResponse = (data) => {
    const categories = Array.isArray(data)
        ? data
        : Array.isArray(data?.categories)
            ? data.categories
            : [];

    return categories.map((category) => (
        typeof category === "string"
            ? { slug: category, name: category }
            : category
    ));
};


export const getProductsByCategory = async (category) => {
    const response = await api.get(`/products/category/${category}`);
    return normalizeProductsResponse(response.data);
};


export const getProducts = async () => {
    try {
        const response = await api.get("/products?limit=0");
        return normalizeProductsResponse(response.data);
    } catch (error) {
        console.warn("Products API unavailable; using local product data.", error);
        return { products: ProductsData };
    }
};

export const getCategories = async () => {
    const response = await api.get("/products/categories");
    return normalizeCategoriesResponse(response.data);
};

export const createUser = async (data) => {
    const response = await mockApi.post("/users", data);
    return response;
};

export const authUser = async (data) => {
    const response = await mockApi.get("/users?email=" + data.email);
    return await response;
};

export const getUserById = async (id) => {
    const response = await mockApi.get("/users?id=" + id);
    return await response;
};


export const updateUser = async (data) => {
    const response = await mockApi.put("/users/" + data.id, data);
    return await response;
}

export const createOrder = async (data) => {
    try {
        return await mockApi.post(ORDERS_ENDPOINT, data);
    } catch (error) {
        console.warn("Orders API unavailable; saving order locally.", error);
        return { data: saveLocalOrder(data) };
    }
};

export const getOrdersByUserId = async (userId) => {
    try {
        return await mockApi.get(ORDERS_ENDPOINT + "?UserId=" + encodeURIComponent(userId));
    } catch (error) {
        console.warn("Orders API unavailable; loading local orders.", error);
        return {
            data: getLocalOrders().filter((order) => order.UserId === String(userId)),
        };
    }
};

export const getOrderById = async (id) => {
    try {
        return await mockApi.get(ORDERS_ENDPOINT + "?id=" + encodeURIComponent(id));
    } catch (error) {
        console.warn("Orders API unavailable; loading local order.", error);
        return {
            data: getLocalOrders().filter((order) => String(order.id) === String(id)),
        };
    }
};