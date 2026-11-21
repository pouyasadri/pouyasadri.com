import type { ContentRepository } from "@/application/ports/content-repository";
import type { HomePageContent } from "@/domain/entities/site";

export function createGetHomePage(contentRepository: ContentRepository) {
  return async function getHomePage(): Promise<HomePageContent> {
    return contentRepository.getHomePage();
  };
}
