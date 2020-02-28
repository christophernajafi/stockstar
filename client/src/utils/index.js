export const formatDollar = amount => {
  const dollar = Number(amount).toLocaleString("us", "currency");
  // decimals
  const arrAmount = dollar.split(".");
  if (arrAmount.length == 2) {
    var decimal = arrAmount[1];
    if (decimal.length == 1) {
      arrAmount[1] += "0";
    }
  }
  if (arrAmount.length == 1) {
    arrAmount.push("00");
  }

  return "$" + arrAmount.join(".");
};
