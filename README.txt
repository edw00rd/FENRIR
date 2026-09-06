B.O.T.D. HOCKEY PLAYBOOK STUDIO WEBSITE
========================================

Purpose
-------
This GitHub Pages site presents B.O.T.D. Hockey Playbook Studio as the product
sold through botdhockey.com. The core positioning covers animated plays, drills,
reusable local playbooks, and export or sharing workflows. FENRIR LLC appears as
the product owner and operator rather than as the primary product brand.

Included routes
---------------
/                    Product homepage
/subscribe/          Coach Pro monthly and annual checkout options
/terms/              Terms of Service
/privacy/            Privacy Policy
/refunds/             Refund and Cancellation Policy

Site configuration
------------------
Checkout, application, and support settings are centralized in assets/config.js:

  checkoutUrl: "ANNUAL_STRIPE_PAYMENT_LINK",  (legacy annual fallback)
  checkoutUrls: {
    annual: "ANNUAL_STRIPE_PAYMENT_LINK",
    monthly: "MONTHLY_STRIPE_PAYMENT_LINK"
  },
  checkoutMode: "sandbox" or "live",
  appUrl: "YOUR_APPLICATION_URL",
  supportEmail: "YOUR_SUPPORT_EMAIL",

Confirm both payment links before launch. A sandbox checkout cannot accept a
real payment. Each live Stripe Payment Link should show the correct product,
price, billing interval, tax treatment, and renewal terms.

Deployment to GitHub Pages
--------------------------
1. Keep index.html at the repository root.
2. Preserve the assets, subscribe, terms, privacy, and refunds folders.
3. Commit and push changes to the main branch.
4. In Settings > Pages, deploy from main / (root).
5. Keep CNAME configured for botdhockey.com.
6. Confirm HTTPS remains enforced.

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
