module.exports = {
  // Secret key for JWT signing and encryption
  secret: 'super secret passphrase',
  // Database connection information
  database: 'mongodb://db/social-group',
  // Setting port for server
  port: 3000,
  // Configuring Mailgun API for sending transactional email
  mailgun_priv_key: 'mailgun private key here',
  mailgun_domain: 'mailgun domain here',
  // Mailchimp API key
  mailchimpApiKey: 'mailchimp api key here',
  // SendGrid API key
  sendgridApiKey: 'sendgrid api key here',

  // Stripe API key
  stripeApiKey: '',
  stripePaymentAdminPercentage: 10,  //percentage amount goes to admin for each transaction
  stripePaymentCurrencyCode: 'usd',

  //tokbox or opentok api details : live
  opentok_apiKey : '',
  opentok_apiSecret : '',

  //facebook login authentication
  facebookAuthClientID : '',
  facebookAuthClientSecret : '',
  facebookAuthCallbackURL : '',

  //twitter login authentication
  twitterAuthConsumerKey : '',
  twitterAuthConsumerSecret : '',
  twitterAuthCallbackURL : '',

  //gmail credentials for sending email : nodemailer
  gmailEmail : '',
  gmailPassword : ''
};
