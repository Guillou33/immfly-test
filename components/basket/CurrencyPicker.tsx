import { Currency } from '@/lib/conversion';
import { AppDispatch, RootState } from '@/Store/configStore';
import { Picker } from '@react-native-picker/picker';
import { View } from 'react-native';
import { connect } from 'react-redux';

interface CurrencyPickerProps {
  // Define any props if needed
  total?: number;
  selectedCurrency: Currency;
  setSelectedCurrency: (currency: Currency) => void;

}

const _CurrencyPicker = (props: CurrencyPickerProps) => {
  const {total, selectedCurrency, setSelectedCurrency } = props;

  return(
    <View>
      <Picker
        selectedValue={selectedCurrency}
        onValueChange={(itemValue) =>
          setSelectedCurrency(itemValue)
        }>
        <Picker.Item label="€" value={Currency.EUR} />
        <Picker.Item label="$" value={Currency.USD} />
        <Picker.Item label="£" value={Currency.GBP} />
      </Picker>
    </View>
  );
};

const mapStateToProps = (state: RootState) => ({
  basket: state.basket,
});

const mapActionsToProps = (dispatch: AppDispatch) => ({
});


const CurrencyPicker = connect(mapStateToProps, mapActionsToProps)(_CurrencyPicker);

export default CurrencyPicker;
