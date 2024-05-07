import { IndexationGoogleCloudApiKeyEntity } from "./IndexationEntity";

export const USER_AGENT =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 Foudroyer";

export class WebsiteEntity {
  id: string;
  search_console_domain: string | null;
  yandex_domain: string | null;
  bing_domain: string | null;
  image: string;
  sitemap: string | null;
  already_activated: boolean;
  index_now_key: string | null;
  index_now_installed: boolean;
  is_premium: boolean;
  is_analytics_activated: boolean;
  sitemap_updated_at: Date;
  deleted_at: Date | null;
  is_public: boolean;
  indexation_auto_activated: boolean;
  indexation_auto_activated_sources: string[];
  google_api_keys: IndexationGoogleCloudApiKeyEntity[];
}
