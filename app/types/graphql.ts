export type URL = string;
export enum CropRegion {
  Center = "CENTER",
  Top = "TOP",
  Bottom = "BOTTOM",
  Left = "LEFT",
  Right = "RIGHT",
}
export enum ImageContentType {
  Png = "PNG",
  Jpg = "JPG",
  Webp = "WEBP",
}
export type DateTime = string;
export type HTML = string;
export enum ProductCollectionSortKeys {
  Manual = "MANUAL",
  BestSelling = "BEST_SELLING",
  Title = "TITLE",
  Price = "PRICE",
  Created = "CREATED",
  CollectionDefault = "COLLECTION_DEFAULT",
  Id = "ID",
  Relevance = "RELEVANCE",
}
export enum MetafieldValueType {
  String = "STRING",
  Integer = "INTEGER",
}
export enum CollectionSortKeys {
  Title = "TITLE",
  UpdatedAt = "UPDATED_AT",
  Id = "ID",
  Relevance = "RELEVANCE",
}
export enum ProductImageSortKeys {
  CreatedAt = "CREATED_AT",
  Position = "POSITION",
  Id = "ID",
  Relevance = "RELEVANCE",
}
export type Decimal = string;
export enum CurrencyCode {
  Usd = "USD",
  Eur = "EUR",
  Gbp = "GBP",
  Cad = "CAD",
  Afn = "AFN",
  All = "ALL",
  Dzd = "DZD",
  Aoa = "AOA",
  Ars = "ARS",
  Amd = "AMD",
  Awg = "AWG",
  Aud = "AUD",
  Bbd = "BBD",
  Azn = "AZN",
  Bdt = "BDT",
  Bsd = "BSD",
  Bhd = "BHD",
  Bif = "BIF",
  Byr = "BYR",
  Bzd = "BZD",
  Btn = "BTN",
  Bam = "BAM",
  Brl = "BRL",
  Bob = "BOB",
  Bwp = "BWP",
  Bnd = "BND",
  Bgn = "BGN",
  Mmk = "MMK",
  Khr = "KHR",
  Cve = "CVE",
  Kyd = "KYD",
  Xaf = "XAF",
  Clp = "CLP",
  Cny = "CNY",
  Cop = "COP",
  Kmf = "KMF",
  Cdf = "CDF",
  Crc = "CRC",
  Hrk = "HRK",
  Czk = "CZK",
  Dkk = "DKK",
  Dop = "DOP",
  Xcd = "XCD",
  Egp = "EGP",
  Etb = "ETB",
  Xpf = "XPF",
  Fjd = "FJD",
  Gmd = "GMD",
  Ghs = "GHS",
  Gtq = "GTQ",
  Gyd = "GYD",
  Gel = "GEL",
  Htg = "HTG",
  Hnl = "HNL",
  Hkd = "HKD",
  Huf = "HUF",
  Isk = "ISK",
  Inr = "INR",
  Idr = "IDR",
  Ils = "ILS",
  Iqd = "IQD",
  Jmd = "JMD",
  Jpy = "JPY",
  Jep = "JEP",
  Jod = "JOD",
  Kzt = "KZT",
  Kes = "KES",
  Kwd = "KWD",
  Kgs = "KGS",
  Lak = "LAK",
  Lvl = "LVL",
  Lbp = "LBP",
  Lsl = "LSL",
  Lrd = "LRD",
  Ltl = "LTL",
  Mga = "MGA",
  Mkd = "MKD",
  Mop = "MOP",
  Mwk = "MWK",
  Mvr = "MVR",
  Mxn = "MXN",
  Myr = "MYR",
  Mur = "MUR",
  Mdl = "MDL",
  Mad = "MAD",
  Mnt = "MNT",
  Mzn = "MZN",
  Nad = "NAD",
  Npr = "NPR",
  Ang = "ANG",
  Nzd = "NZD",
  Nio = "NIO",
  Ngn = "NGN",
  Nok = "NOK",
  Omr = "OMR",
  Pkr = "PKR",
  Pgk = "PGK",
  Pyg = "PYG",
  Pen = "PEN",
  Php = "PHP",
  Pln = "PLN",
  Qar = "QAR",
  Ron = "RON",
  Rub = "RUB",
  Rwf = "RWF",
  Wst = "WST",
  Sar = "SAR",
  Std = "STD",
  Rsd = "RSD",
  Scr = "SCR",
  Sgd = "SGD",
  Sdg = "SDG",
  Syp = "SYP",
  Zar = "ZAR",
  Krw = "KRW",
  Ssp = "SSP",
  Sbd = "SBD",
  Lkr = "LKR",
  Srd = "SRD",
  Szl = "SZL",
  Sek = "SEK",
  Chf = "CHF",
  Twd = "TWD",
  Thb = "THB",
  Tzs = "TZS",
  Ttd = "TTD",
  Tnd = "TND",
  Try = "TRY",
  Tmt = "TMT",
  Ugx = "UGX",
  Uah = "UAH",
  Aed = "AED",
  Uyu = "UYU",
  Uzs = "UZS",
  Vuv = "VUV",
  Vef = "VEF",
  Vnd = "VND",
  Xof = "XOF",
  Yer = "YER",
  Zmw = "ZMW",
}
export type StorefrontID = string;
export enum ProductVariantSortKeys {
  Title = "TITLE",
  Name = "NAME",
  Sku = "SKU",
  InventoryQuantity = "INVENTORY_QUANTITY",
  InventoryManagement = "INVENTORY_MANAGEMENT",
  InventoryPolicy = "INVENTORY_POLICY",
  FullTitle = "FULL_TITLE",
  Popular = "POPULAR",
  Position = "POSITION",
  Id = "ID",
  Relevance = "RELEVANCE",
}
export type Money = string;
export enum FulfillmentServiceType {
  GiftCard = "GIFT_CARD",
  Manual = "MANUAL",
  ThirdParty = "THIRD_PARTY",
}
export enum ProductVariantInventoryManagement {
  Shopify = "SHOPIFY",
  NotManaged = "NOT_MANAGED",
  FulfillmentService = "FULFILLMENT_SERVICE",
}
export enum ProductVariantInventoryPolicy {
  Deny = "DENY",
  Continue = "CONTINUE",
}
export enum WeightUnit {
  Kilograms = "KILOGRAMS",
  Grams = "GRAMS",
  Pounds = "POUNDS",
  Ounces = "OUNCES",
}
export enum CollectionRuleColumn {
  Tag = "TAG",
  Title = "TITLE",
  Type = "TYPE",
  Vendor = "VENDOR",
  VariantPrice = "VARIANT_PRICE",
  VariantCompareAtPrice = "VARIANT_COMPARE_AT_PRICE",
  VariantWeight = "VARIANT_WEIGHT",
  VariantInventory = "VARIANT_INVENTORY",
  VariantTitle = "VARIANT_TITLE",
}
export enum CollectionRuleRelation {
  Equals = "EQUALS",
  NotEquals = "NOT_EQUALS",
  GreaterThan = "GREATER_THAN",
  LessThan = "LESS_THAN",
  StartsWith = "STARTS_WITH",
  EndsWith = "ENDS_WITH",
  Contains = "CONTAINS",
  NotContains = "NOT_CONTAINS",
}
export enum CollectionSortOrder {
  Manual = "MANUAL",
  BestSelling = "BEST_SELLING",
  AlphaAsc = "ALPHA_ASC",
  AlphaDesc = "ALPHA_DESC",
  PriceDesc = "PRICE_DESC",
  PriceAsc = "PRICE_ASC",
  CreatedDesc = "CREATED_DESC",
  Created = "CREATED",
}
export enum AppInstallationSortKeys {
  InstalledAt = "INSTALLED_AT",
  AppTitle = "APP_TITLE",
  Id = "ID",
  Relevance = "RELEVANCE",
}
export enum AppInstallationCategory {
  Channel = "CHANNEL",
  PosEmbedded = "POS_EMBEDDED",
}
export enum AppInstallationPrivacy {
  Public = "PUBLIC",
  Private = "PRIVATE",
}
export enum SearchResultType {
  Order = "ORDER",
  Customer = "CUSTOMER",
  Product = "PRODUCT",
  OnlineStorePage = "ONLINE_STORE_PAGE",
  OnlineStoreBlog = "ONLINE_STORE_BLOG",
  OnlineStoreArticle = "ONLINE_STORE_ARTICLE",
  Collection = "COLLECTION",
  DraftOrder = "DRAFT_ORDER",
  PriceRule = "PRICE_RULE",
}
export enum CountryCode {
  Af = "AF",
  Ax = "AX",
  Al = "AL",
  Dz = "DZ",
  Ad = "AD",
  Ao = "AO",
  Ai = "AI",
  Ag = "AG",
  Ar = "AR",
  Am = "AM",
  Aw = "AW",
  Au = "AU",
  At = "AT",
  Az = "AZ",
  Bs = "BS",
  Bh = "BH",
  Bd = "BD",
  Bb = "BB",
  By = "BY",
  Be = "BE",
  Bz = "BZ",
  Bj = "BJ",
  Bm = "BM",
  Bt = "BT",
  Bo = "BO",
  Bq = "BQ",
  Ba = "BA",
  Bw = "BW",
  Bv = "BV",
  Br = "BR",
  Io = "IO",
  Bn = "BN",
  Bg = "BG",
  Bf = "BF",
  Bi = "BI",
  Kh = "KH",
  Ca = "CA",
  Cv = "CV",
  Ky = "KY",
  Cf = "CF",
  Td = "TD",
  Cl = "CL",
  Cn = "CN",
  Cx = "CX",
  Cc = "CC",
  Co = "CO",
  Km = "KM",
  Cg = "CG",
  Cd = "CD",
  Ck = "CK",
  Cr = "CR",
  Hr = "HR",
  Cu = "CU",
  Cw = "CW",
  Cy = "CY",
  Cz = "CZ",
  Ci = "CI",
  Dk = "DK",
  Dj = "DJ",
  Dm = "DM",
  Do = "DO",
  Ec = "EC",
  Eg = "EG",
  Sv = "SV",
  Gq = "GQ",
  Er = "ER",
  Ee = "EE",
  Et = "ET",
  Fk = "FK",
  Fo = "FO",
  Fj = "FJ",
  Fi = "FI",
  Fr = "FR",
  Gf = "GF",
  Pf = "PF",
  Tf = "TF",
  Ga = "GA",
  Gm = "GM",
  Ge = "GE",
  De = "DE",
  Gh = "GH",
  Gi = "GI",
  Gr = "GR",
  Gl = "GL",
  Gd = "GD",
  Gp = "GP",
  Gt = "GT",
  Gg = "GG",
  Gn = "GN",
  Gw = "GW",
  Gy = "GY",
  Ht = "HT",
  Hm = "HM",
  Va = "VA",
  Hn = "HN",
  Hk = "HK",
  Hu = "HU",
  Is = "IS",
  In = "IN",
  Id = "ID",
  Ir = "IR",
  Iq = "IQ",
  Ie = "IE",
  Im = "IM",
  Il = "IL",
  It = "IT",
  Jm = "JM",
  Jp = "JP",
  Je = "JE",
  Jo = "JO",
  Kz = "KZ",
  Ke = "KE",
  Ki = "KI",
  Kp = "KP",
  Xk = "XK",
  Kw = "KW",
  Kg = "KG",
  La = "LA",
  Lv = "LV",
  Lb = "LB",
  Ls = "LS",
  Lr = "LR",
  Ly = "LY",
  Li = "LI",
  Lt = "LT",
  Lu = "LU",
  Mo = "MO",
  Mk = "MK",
  Mg = "MG",
  Mw = "MW",
  My = "MY",
  Mv = "MV",
  Ml = "ML",
  Mt = "MT",
  Mq = "MQ",
  Mr = "MR",
  Mu = "MU",
  Yt = "YT",
  Mx = "MX",
  Md = "MD",
  Mc = "MC",
  Mn = "MN",
  Me = "ME",
  Ms = "MS",
  Ma = "MA",
  Mz = "MZ",
  Mm = "MM",
  Na = "NA",
  Nr = "NR",
  Np = "NP",
  Nl = "NL",
  An = "AN",
  Nc = "NC",
  Nz = "NZ",
  Ni = "NI",
  Ne = "NE",
  Ng = "NG",
  Nu = "NU",
  Nf = "NF",
  No = "NO",
  Om = "OM",
  Pk = "PK",
  Ps = "PS",
  Pa = "PA",
  Pg = "PG",
  Py = "PY",
  Pe = "PE",
  Ph = "PH",
  Pn = "PN",
  Pl = "PL",
  Pt = "PT",
  Qa = "QA",
  Cm = "CM",
  Re = "RE",
  Ro = "RO",
  Ru = "RU",
  Rw = "RW",
  Bl = "BL",
  Sh = "SH",
  Kn = "KN",
  Lc = "LC",
  Mf = "MF",
  Pm = "PM",
  Ws = "WS",
  Sm = "SM",
  St = "ST",
  Sa = "SA",
  Sn = "SN",
  Rs = "RS",
  Sc = "SC",
  Sl = "SL",
  Sg = "SG",
  Sx = "SX",
  Sk = "SK",
  Si = "SI",
  Sb = "SB",
  So = "SO",
  Za = "ZA",
  Gs = "GS",
  Kr = "KR",
  Ss = "SS",
  Es = "ES",
  Lk = "LK",
  Vc = "VC",
  Sd = "SD",
  Sr = "SR",
  Sj = "SJ",
  Sz = "SZ",
  Se = "SE",
  Ch = "CH",
  Sy = "SY",
  Tw = "TW",
  Tj = "TJ",
  Tz = "TZ",
  Th = "TH",
  Tl = "TL",
  Tg = "TG",
  Tk = "TK",
  To = "TO",
  Tt = "TT",
  Tn = "TN",
  Tr = "TR",
  Tm = "TM",
  Tc = "TC",
  Tv = "TV",
  Ug = "UG",
  Ua = "UA",
  Ae = "AE",
  Gb = "GB",
  Us = "US",
  Um = "UM",
  Uy = "UY",
  Uz = "UZ",
  Vu = "VU",
  Ve = "VE",
  Vn = "VN",
  Vg = "VG",
  Wf = "WF",
  Eh = "EH",
  Ye = "YE",
  Zm = "ZM",
  Zw = "ZW",
}
export enum EventSortKeys {
  CreatedAt = "CREATED_AT",
  Id = "ID",
  Relevance = "RELEVANCE",
}
export type FormattedString = string;
export enum ResourceAlertIcon {
  CheckmarkCircle = "CHECKMARK_CIRCLE",
  InformationCircle = "INFORMATION_CIRCLE",
}
export enum ResourceAlertSeverity {
  Default = "DEFAULT",
  Info = "INFO",
  Warning = "WARNING",
  Success = "SUCCESS",
  Critical = "CRITICAL",
  Error = "ERROR",
}
export enum OrderCancelReason {
  Customer = "CUSTOMER",
  Fraud = "FRAUD",
  Inventory = "INVENTORY",
  Declined = "DECLINED",
  Other = "OTHER",
}
export enum MarketingChannel {
  Search = "SEARCH",
  Display = "DISPLAY",
  Social = "SOCIAL",
  Email = "EMAIL",
  Referral = "REFERRAL",
}
export enum MarketingTactic {
  AbandonedCart = "ABANDONED_CART",
  Ad = "AD",
  Affiliate = "AFFILIATE",
  Link = "LINK",
  Loyalty = "LOYALTY",
  Message = "MESSAGE",
  Newsletter = "NEWSLETTER",
  Notification = "NOTIFICATION",
  Post = "POST",
  Retargeting = "RETARGETING",
  Transactional = "TRANSACTIONAL",
  Seo = "SEO",
  Direct = "DIRECT",
  Display = "DISPLAY",
  Search = "SEARCH",
  FollowUp = "FOLLOW_UP",
  Receipt = "RECEIPT",
}
export enum DiscountApplicationAllocationMethod {
  Across = "ACROSS",
  Each = "EACH",
  One = "ONE",
}
export enum DiscountApplicationTargetSelection {
  All = "ALL",
  Entitled = "ENTITLED",
  Explicit = "EXPLICIT",
}
export enum DiscountApplicationTargetType {
  LineItem = "LINE_ITEM",
  ShippingLine = "SHIPPING_LINE",
}
export enum OrderDisplayFinancialStatus {
  Pending = "PENDING",
  Authorized = "AUTHORIZED",
  PartiallyPaid = "PARTIALLY_PAID",
  PartiallyRefunded = "PARTIALLY_REFUNDED",
  Voided = "VOIDED",
  Paid = "PAID",
  Refunded = "REFUNDED",
}
export enum OrderDisplayFulfillmentStatus {
  Unfulfilled = "UNFULFILLED",
  PartiallyFulfilled = "PARTIALLY_FULFILLED",
  Fulfilled = "FULFILLED",
  Restocked = "RESTOCKED",
  PendingFulfillment = "PENDING_FULFILLMENT",
  Open = "OPEN",
}
export enum DisputeType {
  Chargeback = "CHARGEBACK",
  Inquiry = "INQUIRY",
}
export enum DisputeStatus {
  NeedsResponse = "NEEDS_RESPONSE",
  UnderReview = "UNDER_REVIEW",
  Won = "WON",
  Lost = "LOST",
  Accepted = "ACCEPTED",
  ChargeRefunded = "CHARGE_REFUNDED",
}
export enum FulfillmentDisplayStatus {
  AttemptedDelivery = "ATTEMPTED_DELIVERY",
  Canceled = "CANCELED",
  Confirmed = "CONFIRMED",
  Delivered = "DELIVERED",
  Failure = "FAILURE",
  Fulfilled = "FULFILLED",
  InTransit = "IN_TRANSIT",
  LabelPrinted = "LABEL_PRINTED",
  LabelPurchased = "LABEL_PURCHASED",
  LabelVoided = "LABEL_VOIDED",
  MarkedAsFulfilled = "MARKED_AS_FULFILLED",
  NotDelivered = "NOT_DELIVERED",
  OutForDelivery = "OUT_FOR_DELIVERY",
  ReadyForPickup = "READY_FOR_PICKUP",
  Submitted = "SUBMITTED",
}
export enum FulfillmentEventSortKeys {
  HappenedAt = "HAPPENED_AT",
  Id = "ID",
  Relevance = "RELEVANCE",
}
export enum FulfillmentEventStatus {
  LabelPurchased = "LABEL_PURCHASED",
  LabelPrinted = "LABEL_PRINTED",
  ReadyForPickup = "READY_FOR_PICKUP",
  Confirmed = "CONFIRMED",
  InTransit = "IN_TRANSIT",
  OutForDelivery = "OUT_FOR_DELIVERY",
  AttemptedDelivery = "ATTEMPTED_DELIVERY",
  Delivered = "DELIVERED",
  Failure = "FAILURE",
}
export enum FulfillmentStatus {
  Pending = "PENDING",
  Open = "OPEN",
  Success = "SUCCESS",
  Cancelled = "CANCELLED",
  Error = "ERROR",
  Failure = "FAILURE",
}
export enum RefundLineItemRefundType {
  Return = "RETURN",
  Cancel = "CANCEL",
  LegacyRestock = "LEGACY_RESTOCK",
  NoRestock = "NO_RESTOCK",
}
export enum RefundLineItemRestockType {
  Return = "RETURN",
  Cancel = "CANCEL",
  LegacyRestock = "LEGACY_RESTOCK",
  NoRestock = "NO_RESTOCK",
}
export enum OrderTransactionErrorCode {
  IncorrectNumber = "INCORRECT_NUMBER",
  InvalidNumber = "INVALID_NUMBER",
  InvalidExpiryDate = "INVALID_EXPIRY_DATE",
  InvalidCvc = "INVALID_CVC",
  ExpiredCard = "EXPIRED_CARD",
  IncorrectCvc = "INCORRECT_CVC",
  IncorrectZip = "INCORRECT_ZIP",
  IncorrectAddress = "INCORRECT_ADDRESS",
  IncorrectPin = "INCORRECT_PIN",
  CardDeclined = "CARD_DECLINED",
  ProcessingError = "PROCESSING_ERROR",
  CallIssuer = "CALL_ISSUER",
  PickUpCard = "PICK_UP_CARD",
  ConfigError = "CONFIG_ERROR",
  TestModeLiveCard = "TEST_MODE_LIVE_CARD",
  UnsupportedFeature = "UNSUPPORTED_FEATURE",
  AmazonPaymentsInvalidPaymentMethod = "AMAZON_PAYMENTS_INVALID_PAYMENT_METHOD",
  AmazonPaymentsMaxAmountCharged = "AMAZON_PAYMENTS_MAX_AMOUNT_CHARGED",
  AmazonPaymentsMaxAmountRefunded = "AMAZON_PAYMENTS_MAX_AMOUNT_REFUNDED",
  AmazonPaymentsMaxAuthorizationsCaptured = "AMAZON_PAYMENTS_MAX_AUTHORIZATIONS_CAPTURED",
  AmazonPaymentsMaxRefundsProcessed = "AMAZON_PAYMENTS_MAX_REFUNDS_PROCESSED",
  AmazonPaymentsOrderReferenceCanceled = "AMAZON_PAYMENTS_ORDER_REFERENCE_CANCELED",
  AmazonPaymentsStale = "AMAZON_PAYMENTS_STALE",
}
export enum OrderTransactionKind {
  Sale = "SALE",
  Capture = "CAPTURE",
  Authorization = "AUTHORIZATION",
  Void = "VOID",
  Refund = "REFUND",
  Change = "CHANGE",
  EmvAuthorization = "EMV_AUTHORIZATION",
  SuggestedRefund = "SUGGESTED_REFUND",
}
export enum PaymentMethods {
  Visa = "VISA",
  Mastercard = "MASTERCARD",
  Discover = "DISCOVER",
  AmericanExpress = "AMERICAN_EXPRESS",
  DinersClub = "DINERS_CLUB",
  Jcb = "JCB",
  Dankort = "DANKORT",
  Maestro = "MAESTRO",
  Forbrugsforeningen = "FORBRUGSFORENINGEN",
  Paypal = "PAYPAL",
  Bogus = "BOGUS",
  Bitcoin = "BITCOIN",
  Litecoin = "LITECOIN",
  Dogecoin = "DOGECOIN",
}
export enum OrderTransactionStatus {
  Success = "SUCCESS",
  Failure = "FAILURE",
  Pending = "PENDING",
  Error = "ERROR",
  AwaitingResponse = "AWAITING_RESPONSE",
}
export enum OrderRiskLevel {
  Low = "LOW",
  Medium = "MEDIUM",
  High = "HIGH",
}
export interface RefundLineItemInput {
  lineItemId: string;
  quantity: number;
  restockType?: RefundLineItemRestockType | null;
  locationId?: string | null;
}
export enum SuggestedOrderTransactionKind {
  SuggestedRefund = "SUGGESTED_REFUND",
}
export type UnsignedInt64 = string;
export enum OrderSortKeys {
  OrderNumber = "ORDER_NUMBER",
  CreatedAt = "CREATED_AT",
  UpdatedAt = "UPDATED_AT",
  FinancialStatus = "FINANCIAL_STATUS",
  FulfillmentStatus = "FULFILLMENT_STATUS",
  TotalPrice = "TOTAL_PRICE",
  CustomerName = "CUSTOMER_NAME",
  ProcessedAt = "PROCESSED_AT",
  Id = "ID",
  Relevance = "RELEVANCE",
}
export enum CustomerState {
  Invited = "INVITED",
  Disabled = "DISABLED",
  Declined = "DECLINED",
  Enabled = "ENABLED",
}
export enum CustomerSavedSearchSortKeys {
  Name = "NAME",
  Id = "ID",
  Relevance = "RELEVANCE",
}
export enum CustomerSortKeys {
  Name = "NAME",
  Location = "LOCATION",
  OrdersCount = "ORDERS_COUNT",
  LastOrderDate = "LAST_ORDER_DATE",
  TotalSpent = "TOTAL_SPENT",
  UpdatedAt = "UPDATED_AT",
  Id = "ID",
  Relevance = "RELEVANCE",
}
export enum DeletionEventSortKeys {
  CreatedAt = "CREATED_AT",
  Id = "ID",
  Relevance = "RELEVANCE",
}
export enum DeletionEventSubjectType {
  Collection = "COLLECTION",
  Product = "PRODUCT",
}
export enum DraftOrderAppliedDiscountType {
  FixedAmount = "FIXED_AMOUNT",
  Percentage = "PERCENTAGE",
}
export enum DraftOrderStatus {
  Completed = "COMPLETED",
  InvoiceSent = "INVOICE_SENT",
  Open = "OPEN",
}
export enum DraftOrderSortKeys {
  Number = "NUMBER",
  UpdatedAt = "UPDATED_AT",
  Status = "STATUS",
  TotalPrice = "TOTAL_PRICE",
  CustomerName = "CUSTOMER_NAME",
  Id = "ID",
  Relevance = "RELEVANCE",
}
export enum LocationSortKeys {
  Name = "NAME",
  Id = "ID",
  Relevance = "RELEVANCE",
}
export enum MarketingActivitySortKeys {
  CreatedAt = "CREATED_AT",
  Id = "ID",
  Relevance = "RELEVANCE",
}
export enum MarketingBudgetBudgetType {
  Daily = "DAILY",
  Lifetime = "LIFETIME",
}
export enum MarketingActivityStatus {
  Active = "ACTIVE",
  Inactive = "INACTIVE",
  Paused = "PAUSED",
  Pending = "PENDING",
  Failed = "FAILED",
}
export enum PriceRuleAllocationMethod {
  Each = "EACH",
  Across = "ACROSS",
}
export enum DiscountCodeSortKeys {
  Code = "CODE",
  CreatedAt = "CREATED_AT",
  Id = "ID",
  Relevance = "RELEVANCE",
}
export enum PriceRuleFeature {
  BuyOneGetOne = "BUY_ONE_GET_ONE",
  BuyOneGetOneWithAllocationLimit = "BUY_ONE_GET_ONE_WITH_ALLOCATION_LIMIT",
  Bulk = "BULK",
  SpecificCustomers = "SPECIFIC_CUSTOMERS",
  QuantityDiscounts = "QUANTITY_DISCOUNTS",
}
export enum PriceRuleShareableUrlTargetType {
  Home = "HOME",
  Product = "PRODUCT",
  Collection = "COLLECTION",
}
export enum PriceRuleStatus {
  Active = "ACTIVE",
  Expired = "EXPIRED",
  Scheduled = "SCHEDULED",
}
export enum PriceRuleTarget {
  LineItem = "LINE_ITEM",
  ShippingLine = "SHIPPING_LINE",
}
export enum PriceRuleTrait {
  BuyOneGetOne = "BUY_ONE_GET_ONE",
  BuyOneGetOneWithAllocationLimit = "BUY_ONE_GET_ONE_WITH_ALLOCATION_LIMIT",
  Bulk = "BULK",
  SpecificCustomers = "SPECIFIC_CUSTOMERS",
  QuantityDiscounts = "QUANTITY_DISCOUNTS",
}
export enum PriceRuleSortKeys {
  StartsAt = "STARTS_AT",
  EndsAt = "ENDS_AT",
  Title = "TITLE",
  CreatedAt = "CREATED_AT",
  UpdatedAt = "UPDATED_AT",
  Id = "ID",
  Relevance = "RELEVANCE",
}
export enum ProductSortKeys {
  Title = "TITLE",
  ProductType = "PRODUCT_TYPE",
  Vendor = "VENDOR",
  InventoryTotal = "INVENTORY_TOTAL",
  UpdatedAt = "UPDATED_AT",
  CreatedAt = "CREATED_AT",
  PublishedAt = "PUBLISHED_AT",
  Id = "ID",
  Relevance = "RELEVANCE",
}
export enum ScriptTagDisplayScope {
  All = "ALL",
  OrderStatus = "ORDER_STATUS",
  OnlineStore = "ONLINE_STORE",
}
export enum ResourceType {
  Orders = "ORDERS",
  DraftOrders = "DRAFT_ORDERS",
  Products = "PRODUCTS",
  Variants = "VARIANTS",
  Collections = "COLLECTIONS",
  Pages = "PAGES",
  Blogs = "BLOGS",
  Articles = "ARTICLES",
  Customers = "CUSTOMERS",
  Checkouts = "CHECKOUTS",
  Discounts = "DISCOUNTS",
  Marketing = "MARKETING",
  PriceRules = "PRICE_RULES",
}
export enum ResourceLocation {
  Index = "INDEX",
  Action = "ACTION",
  Show = "SHOW",
}
export enum ShopCustomerAccountsSetting {
  Required = "REQUIRED",
  Optional = "OPTIONAL",
  Disabled = "DISABLED",
}
export enum ShopBranding {
  ShopifyGold = "SHOPIFY_GOLD",
  ShopifyPlus = "SHOPIFY_PLUS",
  Rogers = "ROGERS",
  Shopify = "SHOPIFY",
}
export enum AppsSortKeys {
  Title = "TITLE",
  Id = "ID",
  Relevance = "RELEVANCE",
}
export enum MarketingEventSortKeys {
  StartedAt = "STARTED_AT",
  Id = "ID",
  Relevance = "RELEVANCE",
}
export enum DigitalWallet {
  ApplePay = "APPLE_PAY",
  AndroidPay = "ANDROID_PAY",
  GooglePay = "GOOGLE_PAY",
  ShopifyPay = "SHOPIFY_PAY",
}
export enum PosLinkResourceType {
  Carts = "CARTS",
  Orders = "ORDERS",
}
export enum PosLinkResourceLocation {
  Edit = "EDIT",
  Complete = "COMPLETE",
}
export enum PosLinkLayout {
  Modal = "MODAL",
  Fullscreen = "FULLSCREEN",
}
export enum ShopifyPaymentsPayoutStatus {
  Scheduled = "SCHEDULED",
  InTransit = "IN_TRANSIT",
  Paid = "PAID",
  Failed = "FAILED",
  Canceled = "CANCELED",
}
export enum ShopImageSortKeys {
  CreatedAt = "CREATED_AT",
  Id = "ID",
  Relevance = "RELEVANCE",
}
export enum WebhookSubscriptionFormat {
  Json = "JSON",
  Xml = "XML",
}
export enum WebhookSubscriptionTopic {
  AppUninstalled = "APP_UNINSTALLED",
  CartsCreate = "CARTS_CREATE",
  CartsUpdate = "CARTS_UPDATE",
  ChannelsDelete = "CHANNELS_DELETE",
  CheckoutsCreate = "CHECKOUTS_CREATE",
  CheckoutsDelete = "CHECKOUTS_DELETE",
  CheckoutsUpdate = "CHECKOUTS_UPDATE",
  CollectionListingsAdd = "COLLECTION_LISTINGS_ADD",
  CollectionListingsRemove = "COLLECTION_LISTINGS_REMOVE",
  CollectionListingsUpdate = "COLLECTION_LISTINGS_UPDATE",
  CollectionPublicationsCreate = "COLLECTION_PUBLICATIONS_CREATE",
  CollectionPublicationsDelete = "COLLECTION_PUBLICATIONS_DELETE",
  CollectionPublicationsUpdate = "COLLECTION_PUBLICATIONS_UPDATE",
  CollectionsCreate = "COLLECTIONS_CREATE",
  CollectionsDelete = "COLLECTIONS_DELETE",
  CollectionsUpdate = "COLLECTIONS_UPDATE",
  CustomerGroupsCreate = "CUSTOMER_GROUPS_CREATE",
  CustomerGroupsDelete = "CUSTOMER_GROUPS_DELETE",
  CustomerGroupsUpdate = "CUSTOMER_GROUPS_UPDATE",
  CustomersCreate = "CUSTOMERS_CREATE",
  CustomersDelete = "CUSTOMERS_DELETE",
  CustomersDisable = "CUSTOMERS_DISABLE",
  CustomersEnable = "CUSTOMERS_ENABLE",
  CustomersUpdate = "CUSTOMERS_UPDATE",
  DisputesCreate = "DISPUTES_CREATE",
  DisputesUpdate = "DISPUTES_UPDATE",
  DraftOrdersCreate = "DRAFT_ORDERS_CREATE",
  DraftOrdersDelete = "DRAFT_ORDERS_DELETE",
  DraftOrdersUpdate = "DRAFT_ORDERS_UPDATE",
  FulfillmentEventsCreate = "FULFILLMENT_EVENTS_CREATE",
  FulfillmentEventsDelete = "FULFILLMENT_EVENTS_DELETE",
  FulfillmentsCreate = "FULFILLMENTS_CREATE",
  FulfillmentsUpdate = "FULFILLMENTS_UPDATE",
  AttributedSessionsFirst = "ATTRIBUTED_SESSIONS_FIRST",
  AttributedSessionsLast = "ATTRIBUTED_SESSIONS_LAST",
  OrderTransactionsCreate = "ORDER_TRANSACTIONS_CREATE",
  OrdersCancelled = "ORDERS_CANCELLED",
  OrdersCreate = "ORDERS_CREATE",
  OrdersDelete = "ORDERS_DELETE",
  OrdersFulfilled = "ORDERS_FULFILLED",
  OrdersPaid = "ORDERS_PAID",
  OrdersPartiallyFulfilled = "ORDERS_PARTIALLY_FULFILLED",
  OrdersUpdated = "ORDERS_UPDATED",
  ProductListingsAdd = "PRODUCT_LISTINGS_ADD",
  ProductListingsRemove = "PRODUCT_LISTINGS_REMOVE",
  ProductListingsUpdate = "PRODUCT_LISTINGS_UPDATE",
  ProductPublicationsCreate = "PRODUCT_PUBLICATIONS_CREATE",
  ProductPublicationsDelete = "PRODUCT_PUBLICATIONS_DELETE",
  ProductPublicationsUpdate = "PRODUCT_PUBLICATIONS_UPDATE",
  ProductsCreate = "PRODUCTS_CREATE",
  ProductsDelete = "PRODUCTS_DELETE",
  ProductsUpdate = "PRODUCTS_UPDATE",
  RefundsCreate = "REFUNDS_CREATE",
  ShippingAddressesCreate = "SHIPPING_ADDRESSES_CREATE",
  ShippingAddressesUpdate = "SHIPPING_ADDRESSES_UPDATE",
  ShopUpdate = "SHOP_UPDATE",
  TaxServicesCreate = "TAX_SERVICES_CREATE",
  TaxServicesUpdate = "TAX_SERVICES_UPDATE",
  ThemesCreate = "THEMES_CREATE",
  ThemesDelete = "THEMES_DELETE",
  ThemesPublish = "THEMES_PUBLISH",
  ThemesUpdate = "THEMES_UPDATE",
  VariantsInStock = "VARIANTS_IN_STOCK",
  VariantsOutOfStock = "VARIANTS_OUT_OF_STOCK",
  InventoryLevelsConnect = "INVENTORY_LEVELS_CONNECT",
  InventoryLevelsUpdate = "INVENTORY_LEVELS_UPDATE",
  InventoryLevelsDisconnect = "INVENTORY_LEVELS_DISCONNECT",
  AttributionRisk = "ATTRIBUTION_RISK",
  InventoryItemsCreate = "INVENTORY_ITEMS_CREATE",
  InventoryItemsUpdate = "INVENTORY_ITEMS_UPDATE",
  InventoryItemsDelete = "INVENTORY_ITEMS_DELETE",
  LocationsCreate = "LOCATIONS_CREATE",
  LocationsUpdate = "LOCATIONS_UPDATE",
  LocationsDelete = "LOCATIONS_DELETE",
}
export enum WebhookSubscriptionSortKeys {
  CreatedAt = "CREATED_AT",
  Id = "ID",
  Relevance = "RELEVANCE",
}
export interface AppInstallInput {
  id: string;
}
export interface AppUninstallInput {
  id: string;
  feedback?: string | null;
}
export interface CollectionInput {
  descriptionHtml?: string | null;
  handle?: string | null;
  id?: string | null;
  image?: ImageInput | null;
  products?: string[] | null;
  publications?: CollectionPublicationInput[] | null;
  ruleSet?: CollectionRuleSetInput | null;
  sortOrder?: CollectionSortOrder | null;
  title?: string | null;
  seo?: SEOInput | null;
  redirectNewHandle?: boolean | null;
}
export interface ImageInput {
  id?: string | null;
  altText?: string | null;
  src?: string | null;
}
export interface CollectionPublicationInput {
  channelId?: string | null;
  channelHandle?: string | null;
}
export interface CollectionRuleSetInput {
  appliedDisjunctively: boolean;
  rules?: CollectionRuleInput[] | null;
}
export interface CollectionRuleInput {
  column: CollectionRuleColumn;
  relation: CollectionRuleRelation;
  condition: string;
}
export interface SEOInput {
  title?: string | null;
  description?: string | null;
}
export interface CollectionDeleteInput {
  id: string;
}
export interface CollectionPublishInput {
  id: string;
  collectionPublications: CollectionPublicationInput[];
}
export interface MoveInput {
  id: string;
  newPosition: UnsignedInt64;
}
export interface CollectionUnpublishInput {
  id: string;
  collectionPublications: CollectionPublicationInput[];
}
export interface CustomerInput {
  acceptsMarketing?: boolean | null;
  addresses?: MailingAddressInput[] | null;
  email?: string | null;
  firstName?: string | null;
  id?: string | null;
  lastName?: string | null;
  metafields?: MetafieldInput[] | null;
  note?: string | null;
  phone?: string | null;
  tags?: string[] | null;
  taxExempt?: boolean | null;
}
export interface MailingAddressInput {
  address1?: string | null;
  address2?: string | null;
  city?: string | null;
  company?: string | null;
  country?: string | null;
  firstName?: string | null;
  id?: string | null;
  lastName?: string | null;
  phone?: string | null;
  province?: string | null;
  zip?: string | null;
}
export interface MetafieldInput {
  description?: string | null;
  id?: string | null;
  key?: string | null;
  namespace?: string | null;
  value?: string | null;
  valueType?: MetafieldValueType | null;
}
export interface CustomerDeleteInput {
  id: string;
}
export interface DraftOrderInput {
  appliedDiscount?: DraftOrderAppliedDiscountInput | null;
  billingAddress?: MailingAddressInput | null;
  customerId?: string | null;
  customAttributes?: AttributeInput[] | null;
  email?: string | null;
  lineItems?: DraftOrderLineItemInput[] | null;
  metafields?: MetafieldInput[] | null;
  note?: string | null;
  shippingAddress?: MailingAddressInput | null;
  shippingLine?: ShippingLineInput | null;
  tags?: string[] | null;
  taxExempt?: boolean | null;
  useCustomerDefaultAddress?: boolean | null;
}
export interface DraftOrderAppliedDiscountInput {
  amount: Money;
  description?: string | null;
  title?: string | null;
  value: number;
  valueType: DraftOrderAppliedDiscountType;
}
export interface AttributeInput {
  key: string;
  value: string;
}
export interface DraftOrderLineItemInput {
  appliedDiscount?: DraftOrderAppliedDiscountInput | null;
  customAttributes?: AttributeInput[] | null;
  grams?: number | null;
  originalUnitPrice?: Money | null;
  quantity: number;
  requiresShipping?: boolean | null;
  sku?: string | null;
  taxable?: boolean | null;
  title?: string | null;
  variantId?: string | null;
  weight?: WeightInput | null;
}
export interface WeightInput {
  value: number;
  unit: WeightUnit;
}
export interface ShippingLineInput {
  price?: Money | null;
  shippingRateHandle?: string | null;
  title?: string | null;
}
export interface DraftOrderDeleteInput {
  id: string;
}
export interface EmailInput {
  subject?: string | null;
  to?: string | null;
  from?: string | null;
  body?: string | null;
  bcc?: string[] | null;
  customMessage?: string | null;
}
export interface FulfillmentInput {
  orderId: string;
  lineItems?: FulfillmentLineItemInput[] | null;
  trackingNumbers?: string[] | null;
  trackingUrls?: string[] | null;
  trackingCompany?: string | null;
  notifyCustomer?: boolean | null;
  shippingMethod?: string | null;
  locationId?: string | null;
}
export interface FulfillmentLineItemInput {
  id: string;
  quantity?: number | null;
}
export interface TrackingInfoUpdateInput {
  trackingDetails?: TrackingInfoInput[] | null;
  trackingCompany?: string | null;
  notifyCustomer?: boolean | null;
}
export interface TrackingInfoInput {
  number?: string | null;
  url?: string | null;
}
export interface HomeCardClickInput {
  id: string;
  buttonId?: string | null;
}
export interface HomeCardFeedbackInput {
  id: string;
  feedback?: string | null;
  comment?: string | null;
}
export interface HomeCardInteractionInput {
  id: string;
  action: MutationsHomeCardInteractionAction;
  buttonId?: string | null;
}
export enum MutationsHomeCardInteractionAction {
  Dismiss = "DISMISS",
  UndoDismiss = "UNDO_DISMISS",
  Click = "CLICK",
  Upvote = "UPVOTE",
  Downvote = "DOWNVOTE",
}
export interface HomeCardViewInput {
  id: string;
  position: number;
}
export interface HomeIndustryFeedbackInput {
  accepted: string[];
  rejected: string[];
  other?: string | null;
}
export interface HomeIndustryInteractionInput {
  action: HomeIndustryInteractionAction;
  industry: string;
}
export enum HomeIndustryInteractionAction {
  Dismiss = "DISMISS",
  UndoDismiss = "UNDO_DISMISS",
}
export interface HomeQuestionCardAnswerInput {
  id: string;
  answer: string;
  comments?: string | null;
}
export enum MutationsHomeTagInteractionAction {
  Dismiss = "DISMISS",
  UndoDismiss = "UNDO_DISMISS",
}
export interface InventoryAdjustQuantityInput {
  inventoryLevelId: string;
  availableDelta: number;
}
export interface MutationsMarketingActivityCreateInput {
  budget?: MarketingActivityBudgetInput | null;
  adSpend?: MoneyInput | null;
  status: MarketingActivityStatus;
  context: string;
}
export interface MarketingActivityBudgetInput {
  budgetType?: MarketingBudgetBudgetType | null;
  total?: MoneyInput | null;
}
export interface MoneyInput {
  amount: Decimal;
  currencyCode: CurrencyCode;
}
export interface MarketingActivityUpdateInput {
  id: string;
  budget?: MarketingActivityBudgetInput | null;
  adSpend?: MoneyInput | null;
  status?: MarketingActivityStatus | null;
  context?: string | null;
}
export interface MarketingEngagementInput {
  occurredOn: Date;
  impressionsCount?: number | null;
  viewsCount?: number | null;
  clicksCount?: number | null;
  sharesCount?: number | null;
  favoritesCount?: number | null;
  commentsCount?: number | null;
  adSpend?: MoneyInput | null;
  isCumulative?: boolean | null;
  utcOffset?: UtcOffset | null;
  fetchedAt?: DateTime | null;
}
export type Date = string;
export type UtcOffset = string;
export interface MetafieldDeleteInput {
  id: string;
}
export interface OrderCaptureInput {
  id: string;
  parentTransactionId: string;
  amount: Money;
}
export interface OrderCloseInput {
  id: string;
}
export interface OrderMarkAsPaidInput {
  id: string;
}
export interface OrderOpenInput {
  id: string;
}
export interface OrderInput {
  email?: string | null;
  id: string;
  note?: string | null;
  tags?: string[] | null;
  shippingAddress?: MailingAddressInput | null;
}
export enum PriceRuleErrorCode {
  PriceRuleExceededMaxDiscountCode = "PRICE_RULE_EXCEEDED_MAX_DISCOUNT_CODE",
  PriceRuleAllocationLimitOnNonBogo = "PRICE_RULE_ALLOCATION_LIMIT_ON_NON_BOGO",
  PriceRuleAllocationLimitIsZero = "PRICE_RULE_ALLOCATION_LIMIT_IS_ZERO",
  ShopExceededMaxPriceRules = "SHOP_EXCEEDED_MAX_PRICE_RULES",
  EndDateBeforeStartDate = "END_DATE_BEFORE_START_DATE",
  PriceRulePercentageValueOutsideRange = "PRICE_RULE_PERCENTAGE_VALUE_OUTSIDE_RANGE",
  PrerequisiteSubtotalAndQuantityRangeBothPresent = "PREREQUISITE_SUBTOTAL_AND_QUANTITY_RANGE_BOTH_PRESENT",
  CannotEntitleCollectionsWithProductsOrVariants = "CANNOT_ENTITLE_COLLECTIONS_WITH_PRODUCTS_OR_VARIANTS",
  ItemEntitlementsDuplicateCollection = "ITEM_ENTITLEMENTS_DUPLICATE_COLLECTION",
  ItemEntitlementsDuplicateProduct = "ITEM_ENTITLEMENTS_DUPLICATE_PRODUCT",
  ItemEntitlementsDuplicateVariant = "ITEM_ENTITLEMENTS_DUPLICATE_VARIANT",
  ItemEntitlementsExceededMaxCollection = "ITEM_ENTITLEMENTS_EXCEEDED_MAX_COLLECTION",
  ItemEntitlementsExceededMaxProduct = "ITEM_ENTITLEMENTS_EXCEEDED_MAX_PRODUCT",
  ItemEntitlementsExceededMaxVariant = "ITEM_ENTITLEMENTS_EXCEEDED_MAX_VARIANT",
  ItemEntitlementInvalidType = "ITEM_ENTITLEMENT_INVALID_TYPE",
  ItemEntitlementsInvalidCollection = "ITEM_ENTITLEMENTS_INVALID_COLLECTION",
  ItemEntitlementsInvalidProduct = "ITEM_ENTITLEMENTS_INVALID_PRODUCT",
  ItemEntitlementsInvalidVariant = "ITEM_ENTITLEMENTS_INVALID_VARIANT",
  ItemEntitlementsInvalidTargetTypeOrSelection = "ITEM_ENTITLEMENTS_INVALID_TARGET_TYPE_OR_SELECTION",
  ItemEntitlementsMissing = "ITEM_ENTITLEMENTS_MISSING",
  VariantAlreadyEntitledThroughProduct = "VARIANT_ALREADY_ENTITLED_THROUGH_PRODUCT",
  CannotPrerequisiteCollectionWithProductOrVariants = "CANNOT_PREREQUISITE_COLLECTION_WITH_PRODUCT_OR_VARIANTS",
  ItemPrerequisitesDuplicateCollection = "ITEM_PREREQUISITES_DUPLICATE_COLLECTION",
  ItemPrerequisitesDuplicateProduct = "ITEM_PREREQUISITES_DUPLICATE_PRODUCT",
  ItemPrerequisitesDuplicateVariant = "ITEM_PREREQUISITES_DUPLICATE_VARIANT",
  ItemPrerequisitesExceededMax = "ITEM_PREREQUISITES_EXCEEDED_MAX",
  ItemPrerequisitesInvalidCollection = "ITEM_PREREQUISITES_INVALID_COLLECTION",
  ItemPrerequisitesInvalidType = "ITEM_PREREQUISITES_INVALID_TYPE",
  ItemPrerequisitesInvalidProduct = "ITEM_PREREQUISITES_INVALID_PRODUCT",
  ItemPrerequisitesInvalidVariant = "ITEM_PREREQUISITES_INVALID_VARIANT",
  ItemPrerequisitesMustBeEmpty = "ITEM_PREREQUISITES_MUST_BE_EMPTY",
  ItemPrerequisitesMissing = "ITEM_PREREQUISITES_MISSING",
  ShippingEntitlementsDuplicateCountry = "SHIPPING_ENTITLEMENTS_DUPLICATE_COUNTRY",
  ShippingEntitlementsExceededMax = "SHIPPING_ENTITLEMENTS_EXCEEDED_MAX",
  ShippingEntitlementsInvalidCountry = "SHIPPING_ENTITLEMENTS_INVALID_COUNTRY",
  ShippingEntitlementsInvalidTargetTypeOrSelection = "SHIPPING_ENTITLEMENTS_INVALID_TARGET_TYPE_OR_SELECTION",
  ShippingEntitlementsMissing = "SHIPPING_ENTITLEMENTS_MISSING",
  ShippingEntitlementsUnsupportedDestinationType = "SHIPPING_ENTITLEMENTS_UNSUPPORTED_DESTINATION_TYPE",
  InvalidTargetTypePrerequisiteShippingPriceRange = "INVALID_TARGET_TYPE_PREREQUISITE_SHIPPING_PRICE_RANGE",
  BothCustomerAndSavedSearchPrerequisitesSelected = "BOTH_CUSTOMER_AND_SAVED_SEARCH_PREREQUISITES_SELECTED",
  CustomerSavedSearchDuplicate = "CUSTOMER_SAVED_SEARCH_DUPLICATE",
  CustomerSavedSearchExceededMax = "CUSTOMER_SAVED_SEARCH_EXCEEDED_MAX",
  CustomerSavedSearchInvalid = "CUSTOMER_SAVED_SEARCH_INVALID",
  CustomerPrerequisitesExceededMax = "CUSTOMER_PREREQUISITES_EXCEEDED_MAX",
  CustomerPrerequisitesInvalidSelection = "CUSTOMER_PREREQUISITES_INVALID_SELECTION",
  CustomerPrerequisitesMissing = "CUSTOMER_PREREQUISITES_MISSING",
  BogoInvalidTargetSelection = "BOGO_INVALID_TARGET_SELECTION",
  BogoInvalidTargetType = "BOGO_INVALID_TARGET_TYPE",
  BogoInvalidValueType = "BOGO_INVALID_VALUE_TYPE",
  DiscountCodeDuplicate = "DISCOUNT_CODE_DUPLICATE",
}
export interface PriceRuleInput {
  validityPeriod?: PriceRuleValidityPeriodInput | null;
  oncePerCustomer?: boolean | null;
  customerSelection?: PriceRuleCustomerSelectionInput | null;
  usageLimit?: number | null;
  title?: string | null;
  allocationLimit?: number | null;
  allocationMethod?: PriceRuleAllocationMethod | null;
  value?: PriceRuleValueInput | null;
  target?: PriceRuleTarget | null;
  prerequisiteSubtotalRange?: PriceRuleMoneyRangeInput | null;
  prerequisiteQuantityRange?: PriceRuleQuantityRangeInput | null;
  prerequisiteShippingPriceRange?: PriceRuleMoneyRangeInput | null;
  itemEntitlements?: PriceRuleItemEntitlementsInput | null;
  itemPrerequisites?: PriceRuleItemPrerequisitesInput | null;
  shippingEntitlements?: PriceRuleShippingEntitlementsInput | null;
  entitlementToPrerequisiteQuantityRatio?: PriceRuleEntitlementToPrerequisiteQuantityRatioInput | null;
  prerequisiteToEntitlementQuantityRatio?: PriceRulePrerequisiteToEntitlementQuantityRatioInput | null;
}
export interface PriceRuleValidityPeriodInput {
  start: DateTime;
  end?: DateTime | null;
}
export interface PriceRuleCustomerSelectionInput {
  forAllCustomers?: boolean | null;
  savedSearchIds?: string[] | null;
  customerIdsToAdd?: string[] | null;
  customerIdsToRemove?: string[] | null;
}
export interface PriceRuleValueInput {
  percentageValue?: number | null;
  fixedAmountValue?: Money | null;
}
export interface PriceRuleMoneyRangeInput {
  lessThan?: Money | null;
  lessThanOrEqualTo?: Money | null;
  greaterThan?: Money | null;
  greaterThanOrEqualTo?: Money | null;
}
export interface PriceRuleQuantityRangeInput {
  lessThan?: number | null;
  lessThanOrEqualTo?: number | null;
  greaterThan?: number | null;
  greaterThanOrEqualTo?: number | null;
}
export interface PriceRuleItemEntitlementsInput {
  targetAllLineItems?: boolean | null;
  productIds?: string[] | null;
  productVariantIds?: string[] | null;
  collectionIds?: string[] | null;
}
export interface PriceRuleItemPrerequisitesInput {
  productIds?: string[] | null;
  productVariantIds?: string[] | null;
  collectionIds?: string[] | null;
}
export interface PriceRuleShippingEntitlementsInput {
  targetAllShippingLines?: boolean | null;
  countryCodes?: CountryCode[] | null;
  includeRestOfWorld?: boolean | null;
}
export interface PriceRuleEntitlementToPrerequisiteQuantityRatioInput {
  entitlementQuantity?: number | null;
  prerequisiteQuantity?: number | null;
}
export interface PriceRulePrerequisiteToEntitlementQuantityRatioInput {
  entitlementQuantity?: number | null;
  prerequisiteQuantity?: number | null;
}
export interface PriceRuleDiscountCodeInput {
  code?: string | null;
}
export interface ProductAppendImagesInput {
  id: string;
  images: ImageInput[];
}
export interface ProductInput {
  bodyHtml?: string | null;
  collectionsToJoin?: string[] | null;
  collectionsToLeave?: string[] | null;
  descriptionHtml?: string | null;
  handle?: string | null;
  redirectNewHandle?: boolean | null;
  id?: string | null;
  images?: ImageInput[] | null;
  metafields?: MetafieldInput[] | null;
  seo?: SEOInput | null;
  options?: string[] | null;
  productType?: string | null;
  productPublications?: ProductPublicationInput[] | null;
  publications?: ProductPublicationInput[] | null;
  publishDate?: DateTime | null;
  publishOn?: DateTime | null;
  published?: boolean | null;
  publishedAt?: DateTime | null;
  tags?: string[] | null;
  templateSuffix?: string | null;
  giftCardTemplateSuffix?: string | null;
  title?: string | null;
  variants?: ProductVariantInput[] | null;
  vendor?: string | null;
}
export interface ProductPublicationInput {
  channelId?: string | null;
  channelHandle?: string | null;
  publishDate?: DateTime | null;
}
export interface ProductVariantInput {
  barcode?: string | null;
  compareAtPrice?: Money | null;
  fulfillmentServiceId?: string | null;
  harmonizedSystemCode?: string | null;
  id?: string | null;
  imageId?: string | null;
  inventoryManagement?: ProductVariantInventoryManagement | null;
  inventoryPolicy?: ProductVariantInventoryPolicy | null;
  inventoryQuantity?: number | null;
  inventoryQuantityAdjustment?: number | null;
  inventoryQuantities?: InventoryLevelInput[] | null;
  metafields?: MetafieldInput[] | null;
  options?: string[] | null;
  position?: number | null;
  price?: Money | null;
  productId?: string | null;
  requiresShipping?: boolean | null;
  sku?: string | null;
  taxable?: boolean | null;
  title?: string | null;
  taxCode?: string | null;
  weight?: number | null;
  weightUnit?: WeightUnit | null;
}
export interface InventoryLevelInput {
  availableQuantity: number;
  locationId: string;
}
export interface ProductDeleteInput {
  id: string;
}
export interface ProductPublishInput {
  id: string;
  productPublications: ProductPublicationInput[];
}
export interface ProductUnpublishInput {
  id: string;
  productPublications: ProductPublicationInput[];
}
export interface PublicationInput {
  channelId?: string | null;
  publishDate?: DateTime | null;
}
export interface RefundInput {
  orderId: string;
  restock?: boolean | null;
  note?: string | null;
  notify?: boolean | null;
  shipping?: ShippingRefundInput | null;
  refundLineItems?: RefundLineItemInput[] | null;
  transactions?: OrderTransactionInput[] | null;
}
export interface ShippingRefundInput {
  amount?: Money | null;
  fullRefund?: boolean | null;
}
export interface OrderTransactionInput {
  amount: Money;
  gateway: string;
  kind: OrderTransactionKind;
  orderId: string;
  parentId?: string | null;
}
export interface SavedSearchCreateInput {
  resourceType: SearchResultType;
  name: string;
  query: string;
}
export interface SavedSearchDeleteInput {
  id: string;
}
export interface SavedSearchUpdateInput {
  id: string;
  name?: string | null;
  query?: string | null;
}
export interface ScriptTagInput {
  src?: URL | null;
  displayScope?: ScriptTagDisplayScope | null;
}
export interface StagedUploadTargetGenerateInput {
  resource: StagedUploadTargetGenerateUploadResource;
  filename: string;
  mimeType: string;
}
export enum StagedUploadTargetGenerateUploadResource {
  Timeline = "TIMELINE",
  ProductImage = "PRODUCT_IMAGE",
  CollectionImage = "COLLECTION_IMAGE",
  ShopImage = "SHOP_IMAGE",
}
export interface StageImageInput {
  resource: StagedUploadTargetGenerateUploadResource;
  filename: string;
  mimeType: string;
}
export interface StorefrontAccessTokenInput {
  title: string;
}
export interface StorefrontAccessTokenDeleteInput {
  id: string;
}
export interface WebhookSubscriptionInput {
  callbackUrl?: URL | null;
  format?: WebhookSubscriptionFormat | null;
  includeFields?: string[] | null;
  metafieldNamespaces?: string[] | null;
}
export enum PageSize {
  Page_8X_11 = "PAGE_8_X_11",
  Page_4X_6 = "PAGE_4_X_6",
}
export enum ContentDisposition {
  Inline = "INLINE",
  Attachment = "ATTACHMENT",
}
export enum NavigationItemV2Type {
  SalesChannel = "SALES_CHANNEL",
  PrimaryNavigation = "PRIMARY_NAVIGATION",
}
export enum ExchangeType {
  LikeForLike = "LIKE_FOR_LIKE",
  BalanceOwedToMerchant = "BALANCE_OWED_TO_MERCHANT",
  BalanceOwedToCustomer = "BALANCE_OWED_TO_CUSTOMER",
}
export enum StaffMemberDefaultImage {
  Default = "DEFAULT",
  Transparent = "TRANSPARENT",
  NotFound = "NOT_FOUND",
}
export enum HomeBadge {
  Bfcm = "BFCM",
  Holidays = "HOLIDAYS",
}
export enum HomeCardFeedbackIntent {
  Positive = "POSITIVE",
  Negative = "NEGATIVE",
  Neutral = "NEUTRAL",
}
export enum HomeContentType {
  Svg = "SVG",
  Png = "PNG",
}
export enum HomeImageType {
  Default = "DEFAULT",
  Product = "PRODUCT",
  Customer = "CUSTOMER",
}
export enum HomeCardLayout {
  Simple = "SIMPLE",
  Announcement = "ANNOUNCEMENT",
  Achievement = "ACHIEVEMENT",
  Content = "CONTENT",
  LineGraph = "LINE_GRAPH",
  Table = "TABLE",
  StackableTable = "STACKABLE_TABLE",
  QuestionScale = "QUESTION_SCALE",
  QuestionDropdown = "QUESTION_DROPDOWN",
  Countdown = "COUNTDOWN",
  Video = "VIDEO",
  ActionList = "ACTION_LIST",
  FeaturedAnnouncement = "FEATURED_ANNOUNCEMENT",
  Comparison = "COMPARISON",
  BookmarkCard = "BOOKMARK_CARD",
  Blog = "BLOG",
  Progress = "PROGRESS",
}
export enum HomeCardAction {
  Visit = "VISIT",
  Post = "POST",
  Patch = "PATCH",
  OpenSupportChat = "OPEN_SUPPORT_CHAT",
  Email = "EMAIL",
  Telephone = "TELEPHONE",
  Dismiss = "DISMISS",
  SubmitFeedback = "SUBMIT_FEEDBACK",
  Share = "SHARE",
}
export enum HomeNotificationSeverity {
  Trial = "TRIAL",
  Alert = "ALERT",
  Warning = "WARNING",
  Positive = "POSITIVE",
  Info = "INFO",
}
export enum HomeTaskBadgeStatus {
  Info = "INFO",
  Warning = "WARNING",
  Success = "SUCCESS",
  Attention = "ATTENTION",
}
export enum StaffMemberPermission {
  Applications = "APPLICATIONS",
  Channels = "CHANNELS",
  Customers = "CUSTOMERS",
  Dashboard = "DASHBOARD",
  Domains = "DOMAINS",
  DraftOrders = "DRAFT_ORDERS",
  Full = "FULL",
  GiftCards = "GIFT_CARDS",
  Links = "LINKS",
  Locations = "LOCATIONS",
  Marketing = "MARKETING",
  Orders = "ORDERS",
  Overviews = "OVERVIEWS",
  Pages = "PAGES",
  Preferences = "PREFERENCES",
  Products = "PRODUCTS",
  Reports = "REPORTS",
  Themes = "THEMES",
}
export enum ActivityTopic {
  Products = "PRODUCTS",
  Payments = "PAYMENTS",
  OnlineStore = "ONLINE_STORE",
  Collections = "COLLECTIONS",
  Blogs = "BLOGS",
  Apps = "APPS",
  Merchant = "MERCHANT",
  Domains = "DOMAINS",
  Script = "SCRIPT",
  Pages = "PAGES",
  Default = "DEFAULT",
}
export enum ExchangeErrorCode {
  CheckoutLineItemInvalidSpecification = "CHECKOUT_LINE_ITEM_INVALID_SPECIFICATION",
  Refund = "REFUND",
  ExchangeCreditGreaterThanCheckoutPrice = "EXCHANGE_CREDIT_GREATER_THAN_CHECKOUT_PRICE",
  ExchangeNotFound = "EXCHANGE_NOT_FOUND",
  ExchangeNotReadyToComplete = "EXCHANGE_NOT_READY_TO_COMPLETE",
  ExchangeAlreadyCompleted = "EXCHANGE_ALREADY_COMPLETED",
  Checkout = "CHECKOUT",
  CheckoutDiscount = "CHECKOUT_DISCOUNT",
  CheckoutLineItem = "CHECKOUT_LINE_ITEM",
  CheckoutOrderContainsDiscountCodeAndManualDiscount = "CHECKOUT_ORDER_CONTAINS_DISCOUNT_CODE_AND_MANUAL_DISCOUNT",
  RefundTransaction = "REFUND_TRANSACTION",
  RefundTransactionsNil = "REFUND_TRANSACTIONS_NIL",
  RefundLineItem = "REFUND_LINE_ITEM",
  RefundLineItemNotFulfilled = "REFUND_LINE_ITEM_NOT_FULFILLED",
  RefundMissingTransactions = "REFUND_MISSING_TRANSACTIONS",
  RefundTransactionsRequired = "REFUND_TRANSACTIONS_REQUIRED",
  PaymentUniqueTokenNotSpecified = "PAYMENT_UNIQUE_TOKEN_NOT_SPECIFIED",
  PaymentExchangeCreditApplication = "PAYMENT_EXCHANGE_CREDIT_APPLICATION",
  PaymentExchangeCredit = "PAYMENT_EXCHANGE_CREDIT",
  ReceiptRequiresEmailOrPhone = "RECEIPT_REQUIRES_EMAIL_OR_PHONE",
  ReceiptRecipientUnreachable = "RECEIPT_RECIPIENT_UNREACHABLE",
}
export enum ShippingPackageType {
  Box = "BOX",
  FlatRate = "FLAT_RATE",
  Envelope = "ENVELOPE",
  SoftPack = "SOFT_PACK",
  Tube = "TUBE",
}
export enum LengthUnit {
  Millimeters = "MILLIMETERS",
  Centimeters = "CENTIMETERS",
  Meters = "METERS",
  Inches = "INCHES",
  Feet = "FEET",
  Yards = "YARDS",
}
export enum OrderRiskRecommendationResult {
  Cancel = "CANCEL",
  Investigate = "INVESTIGATE",
  Accept = "ACCEPT",
  None = "NONE",
}
export enum FactSortKeys {
  Result = "RESULT",
  Default = "DEFAULT",
}
export enum RiskFactSentiment {
  Positive = "POSITIVE",
  Neutral = "NEUTRAL",
  Negative = "NEGATIVE",
}
export enum RiskAssessmentResult {
  High = "HIGH",
  Medium = "MEDIUM",
  Low = "LOW",
  None = "NONE",
  Pending = "PENDING",
}
export enum FraudProtectionLevel {
  FullyProtected = "FULLY_PROTECTED",
  PartiallyProtected = "PARTIALLY_PROTECTED",
  NotProtected = "NOT_PROTECTED",
  Pending = "PENDING",
  NotEligible = "NOT_ELIGIBLE",
  NotAvailable = "NOT_AVAILABLE",
}
export enum FulfillmentAction {
  CreateFulfillment = "CREATE_FULFILLMENT",
  PurchaseLabel = "PURCHASE_LABEL",
}
export enum MarketingCampaignSortKeys {
  CreatedAt = "CREATED_AT",
  Id = "ID",
  Relevance = "RELEVANCE",
}
export enum MarketingPlatform {
  Facebook = "FACEBOOK",
  Instagram = "INSTAGRAM",
  Google = "GOOGLE",
  Pinterest = "PINTEREST",
  Bing = "BING",
  Email = "EMAIL",
}
export enum MarketingActivityPreviewMimeType {
  TextHtml = "TEXT_HTML",
  ImageJpeg = "IMAGE_JPEG",
  ImagePng = "IMAGE_PNG",
}
export enum MarketingActivityPreviewType {
  Desktop = "DESKTOP",
  Mobile = "MOBILE",
}
export enum OnlineStoreTemplateResourceType {
  Article = "ARTICLE",
  Blog = "BLOG",
  GiftCard = "GIFT_CARD",
  Page = "PAGE",
  Product = "PRODUCT",
}
export enum ThemeRole {
  Main = "MAIN",
  Mobile = "MOBILE",
  Unpublished = "UNPUBLISHED",
  Demo = "DEMO",
}
export enum OnlineStoreThemeFeature {
  Internationalization = "INTERNATIONALIZATION",
  Sections = "SECTIONS",
}
export enum OnlineStoreCommentPolicy {
  AutoPublished = "AUTO_PUBLISHED",
  Closed = "CLOSED",
  Moderated = "MODERATED",
}
export enum OnlineStoreCommentStatus {
  Spam = "SPAM",
  Removed = "REMOVED",
  Published = "PUBLISHED",
  Unapproved = "UNAPPROVED",
  Pending = "PENDING",
}
export enum OnlineStoreCommentSortKeys {
  CreatedAt = "CREATED_AT",
  Id = "ID",
  Relevance = "RELEVANCE",
}
export enum OnlineStoreArticleSortKeys {
  Title = "TITLE",
  BlogTitle = "BLOG_TITLE",
  Author = "AUTHOR",
  UpdatedAt = "UPDATED_AT",
  PublishedAt = "PUBLISHED_AT",
  Id = "ID",
  Relevance = "RELEVANCE",
}
export enum OnlineStoreBlogSortKeys {
  Handle = "HANDLE",
  Title = "TITLE",
  Id = "ID",
  Relevance = "RELEVANCE",
}
export enum OnlineStorePageSortKeys {
  Title = "TITLE",
  UpdatedAt = "UPDATED_AT",
  PublishedAt = "PUBLISHED_AT",
  Id = "ID",
  Relevance = "RELEVANCE",
}
export enum ShopTemplateResource {
  Product = "PRODUCT",
  GiftCard = "GIFT_CARD",
}
export enum ChatEventOriginTag {
  OriginPlus = "ORIGIN_PLUS",
  OriginPlusSegmented = "ORIGIN_PLUS_SEGMENTED",
}
export enum ExportFormat {
  ExcelCsv = "EXCEL_CSV",
  PlainCsv = "PLAIN_CSV",
}
export enum ResourceExportableType {
  Products = "PRODUCTS",
  PriceRules = "PRICE_RULES",
}
export interface MutationsDeviceAttributesReportInput {
  canvasFingerprint: string;
  hasCookies: boolean;
  fonts: string[];
  lang?: string | null;
  hasLocalStorage: boolean;
  plugins: string[];
  screen?: string | null;
  hasSessionStorage: boolean;
  tzOffset?: number | null;
  userAgent?: string | null;
}
export interface ExchangeReceiptSendRecipientInput {
  email?: string | null;
  phone?: string | null;
}
export interface MobileDeviceRegisterInput {
  id?: string | null;
  token: string;
  name: string;
  snsPlatformApplication?: string | null;
  badgeEnabled?: boolean | null;
  identifier?: string | null;
}
export interface MobileDeviceUnregisterInput {
  id: string;
}
export interface MobileTokenDeleteInput {
  tokenFingerprint: string;
}
export interface NotificationSubscriptionInput {
  enabled: boolean;
  id: string;
}
export enum ShippingLabelCancellationReason {
  WrongMailService = "WRONG_MAIL_SERVICE",
  WrongPackageSize = "WRONG_PACKAGE_SIZE",
  WrongWeight = "WRONG_WEIGHT",
  WrongShipDate = "WRONG_SHIP_DATE",
  ErrorDownloadingLabel = "ERROR_DOWNLOADING_LABEL",
  ErrorPrintingLabel = "ERROR_PRINTING_LABEL",
  WrongLabelFormat = "WRONG_LABEL_FORMAT",
  LabelTooExpensive = "LABEL_TOO_EXPENSIVE",
  Other = "OTHER",
}
export interface StaffMemberInviteInput {
  email: string;
  firstName?: string | null;
  lastName?: string | null;
  permissions?: StaffMemberPermission[] | null;
}
export interface StaffMemberInput {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  permissions?: StaffMemberPermission[] | null;
}
export interface AttachmentInput {
  id?: string | null;
  url?: string | null;
}
export enum HomeMetricType {
  Primary = "PRIMARY",
  Secondary = "SECONDARY",
  Positive = "POSITIVE",
  Negative = "NEGATIVE",
}