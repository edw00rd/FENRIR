/*
  B.O.T.D. Hockey Playbook Studio sales website
  Copyright © 2026 FENRIR LLC. All rights reserved.
  Proprietary materials. See LICENSE.txt and https://botdhockey.com/terms/.
*/
/*
  Account-first production routing. Stripe Checkout is created only after the
  customer signs into the protected application.
*/
window.BOTD_SITE_CONFIG = Object.freeze({
  checkoutUrl: "https://app.botdhockey.com/?action=signup&plan=annual",
  checkoutUrls: Object.freeze({
    annual: "https://app.botdhockey.com/?action=signup&plan=annual",
    monthly: "https://app.botdhockey.com/?action=signup&plan=monthly"
  }),
  checkoutMode: "account",
  appUrl: "https://app.botdhockey.com/?action=signin",
  appBaseUrl: "https://app.botdhockey.com/",
  supportEmail: "support@botdhockey.com"
});
