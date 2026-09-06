B.O.T.D. HOCKEY PRODUCT WEBSITE
================================

Purpose
-------
This GitHub Pages package presents B.O.T.D. Hockey Coaching Aid as the product
sold through botdhockey.com. FENRIR LLC appears as the product owner/operator
in the footer and legal pages rather than as the primary website brand.

Included routes
---------------
/                    Product homepage
/subscribe/          Coach Pro plan and Stripe checkout bridge
/terms/              Terms of Service
/privacy/            Privacy Policy
/refunds/            Refund and Cancellation Policy

Current checkout configuration
------------------------------
The included Stripe URL is a SANDBOX/TEST link:
https://buy.stripe.com/test_fZu6oH2Tt8KcaOz6mx00000

The site clearly labels test mode and cannot accept a real payment through that
URL. Before public launch, edit assets/config.js:

  checkoutUrl: "YOUR_LIVE_STRIPE_PAYMENT_LINK",
  checkoutMode: "live",

This is the only file that needs to change to replace the checkout URL and hide
the sandbox notices. Confirm that the live link has automatic tax, customer-name
collection, promotion codes, annual renewal disclosure, and the correct product.

The application URL is also centralized in assets/config.js:

  appUrl: "https://edw00rd.github.io/hockey-coaching-aid/",

Deployment to GitHub Pages
--------------------------
1. Extract this ZIP.
2. Upload the CONTENTS of the extracted folder to the root of edw00rd/FENRIR.
3. Preserve the assets, subscribe, terms, privacy, and refunds folders.
4. Commit the files to the main branch.
5. In Settings > Pages, deploy from main / (root).
6. Keep the CNAME file as botdhockey.com.
7. Confirm HTTPS remains enforced.

Expected root files
-------------------
.nojekyll
404.html
CNAME
Preview.png
README.txt
index.html
robots.txt
site.webmanifest
sitemap.xml
assets/
privacy/
refunds/
subscribe/
terms/

Support address
---------------
support@botdhockey.com

Legal review
------------
The included legal pages are tailored working drafts, not legal advice. Before
broad commercial release, have them reviewed by counsel familiar with Washington
subscription services, privacy, automatic renewal, and youth-related data.
