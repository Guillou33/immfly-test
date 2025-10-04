import { ApiProduct } from "@/constants/api/Product";
import { Product } from "@/constants/Store/Product";
import { Currency } from "../conversion";

export const formatProducts = (products: ApiProduct[]) => {
    return products.reduce((acc, product) => {
        acc[product.id] = {
            id: product.id,
            title: product.name,
            price: {
                [Currency.EUR]: product.price.euro,
                [Currency.USD]: product.price.dollar,
                [Currency.GBP]: product.price.pound
            },
            initialStock: product.stock,
            stock: product.stock,
            img: product.img
        };
        return acc;
    }, {} as Product);
}
