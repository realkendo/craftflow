const PRODUCTS = [
  { sku: "SKU-1122", name: "Organic Flour", stock: 120, price: "$8.50" },
  { sku: "SKU-1123", name: "Wholegrain Pasta", stock: 48, price: "$3.20" },
  { sku: "SKU-1124", name: "Olive Oil 1L", stock: 0, price: "$12.00" },
  { sku: "SKU-1125", name: "Honey 500g", stock: 16, price: "$6.75" },
];

export default function ProductsList() {
  return (
    <div className="card p-4">
      <div className="text-lg font-semibold">Products</div>
      <div className="mt-3 overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>SKU</th>
              <th>Name</th>
              <th>Stock</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {PRODUCTS.map((p) => (
              <tr key={p.sku}>
                <td className="font-medium">{p.sku}</td>
                <td>{p.name}</td>
                <td>
                  {p.stock > 0 ? (
                    p.stock
                  ) : (
                    <span className="text-sm text-muted">Out</span>
                  )}
                </td>
                <td>{p.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
