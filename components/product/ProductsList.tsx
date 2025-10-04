import { IProduct } from "@/constants/Store/Product";
import { RootState } from "@/Store/configStore";
import { useRouter } from "expo-router";
import { ScrollView, StyleSheet, View } from "react-native";
import { connect } from "react-redux";
import ProductItem from "./ProductItem";

interface ProductsListProps {
  products: Array<IProduct>;
}

const _ProductsList = (props: ProductsListProps) => {
  const router = useRouter();
  const products = props.products;
  console.log("Rendering Products List with sodas");
  // console.log("Rendering Products List with sodas:",Object.values(props.products));

  const onPressLearnMore = () => {
    router.navigate("/payment");
  }

  return (
    <ScrollView style={styles.list}>
      <View style={styles.container}>
        {Object.values(props.products).map((product: IProduct) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </View>
    </ScrollView>
  );
};

const mapStateToProps = (state: RootState) => ({
  products: state.product.products,
});

const ProductsList = connect(mapStateToProps, null)(_ProductsList);

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
