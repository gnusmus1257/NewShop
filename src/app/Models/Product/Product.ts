import { ImageSlider } from './ImageSlider';
import { Category } from './Category';
import { Specification } from './Specification';
import { Review } from './Review';
import { Comment } from './Comment';

export class Product {
  id: number;
  title: string;
  category: Category;
  price: number;
  description: string;
  shortDescription: string;
  specifications: Specification[];
  reviewers: Review[];
  comments: Comment[];
  imageUrl: string;
  imagesLinks: ImageSlider[];

  constructor() {
    this.category = new Category();
    this.specifications = [];
    this.reviewers = [];
    this.comments = [];
    this.imagesLinks = [];
  }
}
