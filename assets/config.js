/*
  B.O.T.D. Hockey Playbook Studio sales website
  Copyright © 2026 FENRIR LLC. All rights reserved.
  Proprietary materials. See LICENSE.txt and https://botdhockey.com/terms/.
*/
/*
  B.O.T.D. site configuration.
  Coach Pro uses one feature set with monthly and annual billing options.
*/
window.BOTD_SITE_CONFIG = Object.freeze({
  checkoutUrl: "https://buy.stripe.com/00w7sEdVwgRf50ldnx0x201",
  checkoutUrls: Object.freeze({
    annual: "https://buy.stripe.com/00w7sEdVwgRf50ldnx0x201",
    monthly: "https://buy.stripe.com/4gMeV618KbwVcsNgzJ0x202"
  }),
  checkoutMode: "live",
  appUrl: "https://app.botdhockey.com/",
  supportEmail: "support@botdhockey.com"
});
