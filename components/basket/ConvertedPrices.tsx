import { conversions, Currency } from "@/constants/Util";
import { Text } from "react-native-paper";

interface ConvertedPricesProps {
  amount: number;
  selectedCurrency: Currency;
}

const ConvertedPrices = ({amount, selectedCurrency}: ConvertedPricesProps) => {
  let convertedPrices = '';
  for(const curr in conversions){
    if(curr !== "symbol" && curr !== selectedCurrency){
      console.log("Converting", amount, "from", selectedCurrency, "to", curr);

      let conversionRate = amount * conversions[selectedCurrency as Currency].rates[curr as Currency];
      convertedPrices += `${conversionRate.toFixed(2).toString()} ${conversions[curr].symbol} `;
    }
  }

  return (
    <Text>
      {convertedPrices}
    </Text>
  );
};

export default ConvertedPrices;
