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
This is the complete GitHub Pages deployment package for botdhockey.com. The
site presents B.O.T.D. Hockey Playbook Studio, describes animated plays, drills,
reusable local playbooks, export and sharing workflows, and offers Coach Pro
with monthly and annual recurring billing.

The sales site uses an account-first purchase flow. It does not link directly
to Stripe Payment Links. Customers first create or sign into a B.O.T.D. account
at app.botdhockey.com; the protected production service then creates the Stripe
Checkout Session and associates the subscription with that account.

Included routes
---------------
/                    Product homepage
/subscribe/          Coach Pro monthly and annual plan details
/terms/              Terms of Service
/privacy/            Privacy Policy
/refunds/             Refund and Cancellation Policy

Production routing
------------------
Configuration is centralized in assets/config.js.

Annual Coach Pro:
  $79 USD per year
  https://app.botdhockey.com/?action=signup&plan=annual

Monthly Coach Pro:
  $9.99 USD per month
  https://app.botdhockey.com/?action=signup&plan=monthly

Existing customer sign-in:
  https://app.botdhockey.com/?action=signin

Checkout flow:
  account-first live Stripe Checkout

Support address:
  support@botdhockey.com

Before deploying
----------------
1. Confirm https://app.botdhockey.com/ is serving the authenticated production
   Worker and its health endpoint reports ok=true.
2. Confirm the annual and monthly deep links open the correct plan in the app.
3. Confirm the sign-in link opens the Sign in tab.
4. Keep CNAME exactly as botdhockey.com.
5. Do not place any Stripe secret key, webhook secret, Supabase secret key, SMTP
   credential, or other private credential in this repository.

Deployment to GitHub Pages
--------------------------
1. Upload the ZIP itself to the root of the FENRIR Codespace and extract it with
   unzip so the directories remain intact.
2. Replace the existing sales-site files with the complete contents of this
   package. index.html must remain at the repository root.
3. Commit and push all replacements to the main branch in one commit.
4. In Settings > Pages, deploy from main / (root).
5. Keep the custom domain set to botdhockey.com and HTTPS enforced.

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

Verification
------------
This command should return no results:

  grep -RIn 'buy\.stripe\.com' . --exclude-dir=.git

These account-first destinations should appear:

  grep -RIn 'app\.botdhockey\.com' assets/config.js index.html subscribe/index.html

Operational note
----------------
The app server, not the sales site, creates Stripe Checkout Sessions. Monthly
and annual billing grant the same coach_pro entitlement. Customer-entered
Promotion Codes, tax calculation, receipts, recurring billing, cancellation,
and payment-method management are handled through Stripe.

Legal review
------------
The included legal pages are tailored working drafts, not legal advice. Before
broad commercial release, have them reviewed by counsel familiar with
subscription services, privacy, automatic renewal, tax, and youth-related data.
