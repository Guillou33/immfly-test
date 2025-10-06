import { IBasket } from "@/constants/Store/Basket";
import { PriceType } from "@/constants/Store/Product";
import { conversions, Currency } from "@/constants/Util";
import { getTotal } from "@/lib/conversion";
import { Text } from "react-native-paper";

interface ConvertedPricesProps {
  basket: IBasket;
  selectedCurrency: Currency;
  selectedPriceType: PriceType;
}

const ConvertedPrices = ({basket, selectedCurrency, selectedPriceType}: ConvertedPricesProps) => {
  let convertedPrices = '';
  for(const curr in conversions){
    if(curr !== "symbol" && curr !== selectedCurrency){

      // let conversionRate = amount * conversions[selectedCurrency as Currency].rates[curr as Currency];
      // convertedPrices += `${conversionRate.toFixed(2).toString()} ${conversions[curr].symbol} `;
      let convertedPrice = getTotal(basket.totalPrices, curr as Currency, selectedPriceType) ?? 0;
      convertedPrices += `${convertedPrice.toString()} ${conversions[curr].symbol} `;
      console.log("Converting from", selectedCurrency, "to", curr, ":", convertedPrice);
    }
  }

  return (
    <Text>
      {convertedPrices}
    </Text>
  );
};

export default ConvertedPrices;
