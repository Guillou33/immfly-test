import { IBasket } from "@/constants/Store/Basket";
import { IProduct, Product } from "@/constants/Store/Product";
import { updateBasket } from "@/Store/Action/BasketAction";
import { handleStock } from "@/Store/Action/ProductAction";
import { RootState } from "@/Store/configStore";
import { ScrollView, StyleSheet, View } from "react-native";
import { connect } from "react-redux";
import ProductItem from "./ProductItem";

interface ProductsListProps {
  products: Product;
  basket: IBasket,
  updateBasket: (product: IProduct, quantity: number) => void;
  handleStock: (product: IProduct, quantity: number) => void;
}

const _ProductsList = (props: ProductsListProps) => {
  const {products, updateBasket, handleStock} = props;
  console.log("Rendering Products List with sodas");

  return (
    <ScrollView style={styles.list}>
      <View style={styles.container}>
        {Object.values(products).map((product: IProduct) => (
          <View key={product.id} style={styles.card}>
            <ProductItem
              product={product}
              onUpdateBasket={updateBasket}
              onHandleStock={handleStock}
            />
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const mapStateToProps = (state: RootState) => ({
  products: state.product.products,
  basket: state.basket.basket,
});
const mapActionsToProps = (dispatch: any) => ({
  updateBasket: (product: IProduct, quantity: number) => dispatch(updateBasket({product, quantity})),
  handleStock: (product: IProduct, quantity: number) => dispatch(handleStock(product, quantity)),
});

const ProductsList = connect(mapStateToProps, mapActionsToProps)(_ProductsList);

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#f5f5f5',
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    width: '100%',
    gap: 10,
  },
  card: {
    backgroundColor: '#add8e6',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  button: {
    marginBottom: 20,
    color: '#841584',
  },
  list: {
    flex: 1,
    width: '100%',
  },
});

export default ProductsList;
