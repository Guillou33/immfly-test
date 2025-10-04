import { Picker } from '@react-native-picker/picker';
import { useState } from "react";

interface CurrencyPickerProps {
  // Define any props if needed

}

const CurrencyPicker = (props: CurrencyPickerProps) => {
  const [selectedCurrency, setSelectedCurrency] = useState();
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

export default CurrencyPicker;
