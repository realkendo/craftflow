function currencyConverter(amount: number, currency: string): number {
  const eur: number = 2000;
  const usd: number = 1400;

  if (currency === "usd") return amount * usd;
  else if (currency === "eur") return amount * eur;
  else return amount * 2000;
}

currencyConverter(500, "usd");

export default function Button(props: { backgroundColor: string }) {
  const backgroundColor = props.backgroundColor;
  return (
    <>
      <button className="bg-brandGray text-brandOrange px-1">click me</button>
    </>
  );
}
