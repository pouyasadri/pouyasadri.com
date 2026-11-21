import type { ContentRepository } from "@/application/ports/content-repository";
import type { HomePageContent } from "@/domain/entities/site";
import { siteContent } from "@/infrastructure/content/site-content";

export class StaticSiteContentRepository implements ContentRepository {
  async getHomePage(): Promise<HomePageContent> {
    return siteContent;
  }
}
