import type { HomePageContent } from "@/domain/entities/site";

export interface ContentRepository {
  getHomePage(): Promise<HomePageContent>;
}
