import { AppDispatch, RootState } from '@/Store/configStore';
import { Picker } from '@react-native-picker/picker';
import { useState } from "react";
import { connect } from 'react-redux';

interface CurrencyPickerProps {
  // Define any props if needed

}

const _CurrencyPicker = (props: CurrencyPickerProps) => {
  const [selectedCurrency, setSelectedCurrency] = useState("java");
  return(
    <Picker
      selectedValue={selectedCurrency}
      onValueChange={(itemValue, itemIndex) =>
        setSelectedCurrency(itemValue)
      }>
      <Picker.Item label="Java" value="java" />
      <Picker.Item label="JavaScript" value="js" />
    </Picker>
  );
};

const mapStateToProps = (state: RootState) => ({
  basket: state.basket,
});

const mapActionsToProps = (dispatch: AppDispatch) => ({
});


const CurrencyPicker = connect(mapStateToProps, mapActionsToProps)(_CurrencyPicker);

export default CurrencyPicker;
