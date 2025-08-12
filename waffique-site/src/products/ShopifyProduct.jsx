// components/ShopifyProduct.jsx
import React, { useEffect } from "react";

export default function ShopifyProduct({ productId, title, description, included_1, included_2, license, refund }) {
  useEffect(() => {
    const scriptURL = "https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js";

    function ShopifyBuyInit() {
      if (!window.ShopifyBuy) return;

      const client = window.ShopifyBuy.buildClient({
        domain: "hxy03w-hs.myshopify.com",
        storefrontAccessToken: "ac7fe13cbb0758b428fe09778bf8ed37",
      });

      window.ShopifyBuy.UI.onReady(client).then((ui) => {
        ui.createComponent("product", {
          id: productId,
          node: document.getElementById(`product-component-${productId}`),
          moneyFormat: "%24%7B%7Bamount%7D%7D",
        });
      });
    }

    function loadScript() {
      const script = document.createElement("script");
      script.async = true;
      script.src = scriptURL;
      script.onload = ShopifyBuyInit;
      document.head.appendChild(script);
    }

    if (window.ShopifyBuy) {
      if (window.ShopifyBuy.UI) {
        ShopifyBuyInit();
      } else {
        loadScript();
      }
    } else {
      loadScript();
    }
  }, [productId]);

  return (
    <section className="product-section">
      <div className="product-wrapper">
        <h2 className="product-heading">{title}</h2>
        <div id={`product-component-${productId}`}></div>

        <div className="product-description">
          <h3>Description</h3>
          <p>{description}</p>
        </div>

        <div className="whats_included">
          <h3>Included:</h3>
          <p>{included_1}</p>
          <p>{included_2}</p>
        </div>

        <div className="license-terms">
          <h3>License</h3>
          <p>{license}</p>
        </div>

        <div className="refund-policy">
          <h3>Refund Policy</h3>
          <p>{refund}</p>
        </div>
      </div>
    </section>
  );
}