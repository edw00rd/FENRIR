B.O.T.D. HOCKEY PLAYBOOK STUDIO SALES WEBSITE
================================================

Owner
-----
FENRIR LLC

License
-------
Proprietary software and website materials. All rights reserved.
See LICENSE.txt and https://botdhockey.com/terms/.

Purpose
-------
This is the complete GitHub Pages deployment package for botdhockey.com. It
presents B.O.T.D. Hockey Playbook Studio, describes animated plays, drills,
reusable local playbooks, export and sharing workflows, and offers Coach Pro
with monthly and annual recurring billing.

Included routes
---------------
/                    Product homepage
/subscribe/          Coach Pro monthly and annual checkout options
/terms/              Terms of Service
/privacy/            Privacy Policy
/refunds/             Refund and Cancellation Policy

Live configuration
------------------
Configuration is centralized in assets/config.js.

Annual Coach Pro:
  $79 USD per year
  https://buy.stripe.com/00w7sEdVwgRf50ldnx0x201

Monthly Coach Pro:
  $9.99 USD per month
  https://buy.stripe.com/4gMeV618KbwVcsNgzJ0x202

Checkout mode:
  live

Application URL:
  https://app.botdhockey.com/

Support address:
  support@botdhockey.com

Before deploying
----------------
1. Confirm both Stripe Payment Links remain active and display the intended
   product, recurring interval, price, automatic-tax treatment, and renewal
   disclosure.
2. Confirm https://app.botdhockey.com/ is reachable over HTTPS.
3. Keep CNAME exactly as botdhockey.com.
4. Do not place any Stripe secret key, webhook secret, database administrator
   key, or other private credential in this repository.

Deployment to GitHub Pages
--------------------------
1. Upload or extract the CONTENTS of this package at the root of the FENRIR
   repository. index.html must remain at the repository root.
2. Commit and push all replacements to the main branch in one commit.
3. In Settings > Pages, deploy from main / (root).
4. Keep the custom domain set to botdhockey.com.
5. Keep HTTPS enforced after GitHub validates the domain.

Expected root files and folders
-------------------------------
.nojekyll
404.html
CNAME
LICENSE.txt
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

Operational note
----------------
The site uses direct Stripe Payment Links. Payment processing can work without a
backend, but automated account provisioning and subscription entitlement checks
require a server-side integration. Never treat a browser-only redirect or local
storage value as proof of payment.

Legal review
------------
The included legal pages are tailored working drafts, not legal advice. Before
broad commercial release, have them reviewed by counsel familiar with
subscription services, privacy, automatic renewal, tax, and youth-related data.
