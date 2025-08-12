import React, { useEffect } from 'react';

export default function ShopifyProduct() {
  useEffect(() => {
    const scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';

    function ShopifyBuyInit() {
      if (!window.ShopifyBuy) return;

      const client = window.ShopifyBuy.buildClient({
        domain: 'hxy03w-hs.myshopify.com',
        storefrontAccessToken: 'ac7fe13cbb0758b428fe09778bf8ed37',
      });

      window.ShopifyBuy.UI.onReady(client).then((ui) => {
        
        ui.createComponent('product', {
          id: '9859002073386',
          node: document.getElementById('product-component-1754940836707'),
          moneyFormat: '%24%7B%7Bamount%7D%7D',
          options: {
            /* your options here */
          },
        });
      });
    }

    function loadScript() {
      const script = document.createElement('script');
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
  }, []);

  return (
    <>
      <section className="product-section">
        <div className="product-wrapper">
          <h2 className="product-heading">Seasonal Product</h2>
          <div id="product-component-1754940836707"></div>
        </div>
      </section>

      <style jsx>{`
        .product-section {
          display: flex;
          justify-content: center;
          padding: 3rem 1rem;
          background: red;
        }
        .product-wrapper {
          background: white;
          border-radius: 20px;
          padding: 2rem;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
          max-width: 420px;
          text-align: center;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .product-wrapper:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.12);
        }
        .product-heading {
          font-size: 1.75rem;
          font-weight: 700;
          color: black;
          margin-bottom: 1.5rem;
        }
      `}</style>
    </>
  );
}
