// pages/ProductsPage.jsx
import React from "react";
import ShopifyProduct from "./ShopifyProduct.jsx";

export default function ProductsPage() {
  return (

    <section style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap" }}>
      <ShopifyProduct
        productId="9862421578026"
        title="September Nature Calendar"
        description="US Letter, 8.5x11 | Sunday Start | Download"
        included_1="- 2025 September Printable Calendar PDF"
        included_2='- README.txt (includes link to the Canva template)'
        license="For personal use only."
        refund="Due to the nature of digital products, all sales are final."

      />
      <ShopifyProduct
        productId="9859002073386"
        title="September Orange Calendar"
        description="US Letter, 8.5x11 | Sunday Start | Download"
        included_1="- 2025 September Printable Calendar PDF"
        included_2='- README.txt (includes link to the Canva template)'
        license="For personal use only."
        refund="Due to the nature of digital products, all sales are final."
      />

    </section>
  );
}
