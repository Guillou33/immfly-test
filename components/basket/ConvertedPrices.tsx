import { conversions, Currency } from "@/constants/Util";
import { Text } from "react-native-paper";

interface ConvertedPricesProps {
  amount: number;
  selectedCurrency: Currency;
}

const ConvertedPrices = ({amount, selectedCurrency}: ConvertedPricesProps) => {
  let convertedPrices = '';
  for(const curr in Object.keys(conversions)){
    if(curr !== "symbol" && curr !== selectedCurrency){
      let conversionRate = amount * conversions[selectedCurrency as Currency].rates[curr as Currency];
      convertedPrices += `${conversionRate.toString()} ${conversions[curr as Currency].symbol} `;
    }
  }

  return (
    <Text>
      {convertedPrices}
    </Text>
  );
};

export default ConvertedPrices;
