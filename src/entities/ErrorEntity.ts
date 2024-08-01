export enum ErrorEntity {
  SITEMAP_CHECK_404 = "sitemap/check/404",
  SITEMAP_CHECK_301 = "sitemap/check/301",
  SITEMAP_CHECK_500 = "sitemap/check/500",
  SITEMAP_NOT_VALID = "sitemap/update/not-valid",
  SITEMAP_NOT_FOUND = "sitemap/not-found",
  SITEMAP_INVALID = "sitemap/invalid",
  CREDENTIALS_NOT_FOUND = "credentials/not-found",
  WEBSITE_SEARCH_CONSOLE_DOMAIN_IS_NULL = "website/search-console-domain/is-null",
  GOOGLE_CLOUD_API_KEY_BAD_FORMED = "google/cloud/api-key/bad_formed",
  GOOGLE_CLOUD_API_KEY_PERMISSION_DENIED = "google/cloud/api-key/permission-denied",
  GOOGLE_CLOUD_API_KEY_INDEXING_API_NOT_ACTIVATED = "google/cloud/api-key/indexing-api-not-activated",
  GOOGLE_CLOUD_API_ACCOUNT_NOT_FOUND = "google/cloud/api-key/account-not-found",
  GOOGLE_CLOUD_API_NOT_UNIQUE = "google/cloud/api-key/not-unique",
  GOOGLE_UNSUFFICIENT_RIGHTS = "google/unsufficient-rights",
  GOOGLE_AUTH_CREDENTIALS_EXPIRED = "google/auth/credentials/expired",
  GOOGLE_UNKNOWN_ERROR = "google/unknown-error",
  GOOGLE_AUTH_SCOPE_NOT_FOUND = "google/auth/scope-not-found",
  GOOGLE_AUTH_REFRESH_TOKEN_ERROR = "google/auth/refresh-token-error",
  GOOGLE_INDEXATION_QUOTA_EXCEED = "google/indexation/quota-exceed",
  GOOGLE_INDEXATION_TRIAL_EXPIRED = "google/indexation/trial-expired",
  WEBSITE_NOT_FOUND = "website/not-found",
  UNKNOWN_ERROR = "global/unknown-error",
  USER_NOT_FOUND = "user/not-found",
  USER_NOT_AUTHENTICATED = "user/not-authenticated",
  BUILDER_PLANS_NOT_EXISTS = "builder/plans/not-exists",
  BUILDER_PLANS_EXPIRED = "builder/plans/expired",
  BUILDER_LICENSE_EXPIRED = "builder/license/expired",
  BUILDER_LICENSE_NOT_FOUND = "builder/license/not-found",
  BUILDER_LICENSE_BAD_DOMAIN = "builder/license/bad-domain",
  BUILDER_LICENSE_BAD_THEME = "builder/license/bad-theme",
  BUILDER_UPDATE_DOMAIN_NOT_AUTHORIZED = "builder/websites/update-domain-not-authorized",
  BUILDER_UPDATE_DOMAIN_NOT_URL = "builder/websites/update-domain/no-url",
  ANALYTICS_PREMIUM_RESERVED = "analytics/premium-reserved",
  INDEX_NOW_ERROR_BAD_REQUEST = "index-now/bad-request",
  INDEX_NOW_ERROR_FORBIDDEN = "index-now/forbidden",
  INDEX_NOW_ERROR_UNPROCESSABLE = "index-now/unprocessable",
  INDEX_NOW_ERROR_TOO_MANY_REQUESTS = "index-now/too-many-requests",
  INDEX_NOW_ERROR_NOT_FOUND = "index-now/not-found",
  INDEX_NOW_ERROR_KEY_NOT_MATCH = "index-now/key-not-match",
  INDEXATION_MANUALLY_NO_WEBSITE_ID_IN_PAGE = "indexation/manually/no-website-in-page",
  INDEXATION_MANUALLY_NOT_URL = "indexation/manually/not-url",
  BING_REFRESH_TOKEN = "error/bing/refresh-token",
  INDEXATION_WITHOUT_SEARCH_ENGINE = "error/try-to-index-without-sources",
  ANALYTICS_NEED_UPSELL = "error/ANALYTICS_NEED_UPSELL",
  ANALYTICS_MAXIMUM_WEBSITES = "error/ANALYTICS_MAXIMUM_WEBSITES",
  INDEXATION_BULK_INDEX_NOT_ALLOWED = "error/INDEXATION_BULK_INDEX_NOT_ALLOWED",
  INDEXATION_AUTO_INDEX_NOT_ALLOWED = "error/INDEXATION_AUTO_INDEX_NOT_ALLOWED",
  INDEXATION_KEYS_QUOTA_REACHED = "error/INDEXATION_KEYS_QUOTA_REACHED",
  ADD_USERS_NOT_ALLOWED = "error/ADD_USERS_NOT_ALLOWED"
}
