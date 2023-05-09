import * as CategoryQuery from "@/queries/CategoryQuery";
import { ApiService } from "@/services/ApiService";

export class CategoryService {
  private api;

  constructor(apiService = new ApiService()) {
    this.api = apiService.getInstance();
  }

  async getAll() {
    return this.api.query(CategoryQuery.getAll);
  }
}
