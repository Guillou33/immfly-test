import { IProduct, Product } from "@/constants/Store/Product";
import { RootState } from "@/Store/configStore";
import { ScrollView, StyleSheet, View } from "react-native";
import { connect } from "react-redux";
import ProductItem from "./ProductItem";

interface ProductsListProps {
  products: Product;
}

const _ProductsList = (props: ProductsListProps) => {
  const {products} = props;
  console.log("Rendering Products List with sodas");
  // console.log("Rendering Products List with sodas:",Object.values(props.products));

  return (
    <ScrollView style={styles.list}>
      <View style={styles.container}>
        {Object.values(products).map((product: IProduct) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </View>
    </ScrollView>
  );
};

const mapStateToProps = (state: RootState) => ({
  products: state.product.products,
});
const mapActionsToProps = (dispatch: any) => ({
});

const ProductsList = connect(mapStateToProps, mapActionsToProps)(_ProductsList);

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#f5f5f5',
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
