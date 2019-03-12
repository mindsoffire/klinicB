import { Injectable } from "@angular/core";

import { Item } from "../data/item.model";
import { Category } from "../data/category.model";

@Injectable()
export class DataService {
    getItems(): Array<Item> {
        return [{
            id: 1,
            name: "Skin Issues, Treatment, Structural Surgery",
            cover: "~/assets/images/beauty/face/faceCover.jpg",
            images: [
                "~/assets/images/beauty/face/face1.JPG",
                "~/assets/images/beauty/face/face2.JPG",
                "~/assets/images/beauty/face/face3.JPG",
                "~/assets/images/beauty/face/face4.JPG",
                "~/assets/images/beauty/face/face5.jpg",
                "~/assets/images/beauty/face/face6.JPG",
                "~/assets/images/beauty/face/face7.jpg",
                "~/assets/images/beauty/face/face8.jpg",
                "~/assets/images/beauty/face/face9.JPG",
                "~/assets/images/beauty/face/face10.JPG",
            ],
            category: "Face",
            categoryTag: "#2D9CDB",
            price: "300.00",
            likes: 987,
            isLike: false,
            isFavorite: true,
            comments: 13,
            rating: "4.5",
            description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione maiores, veritatis nesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi! Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
				\nRatione maiores, veritatis nesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi! Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
				\nNesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi!
				\nRatione maiores, veritatis nesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi! Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
				\nNesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi!`
        },
        {
            id: 2,
            name: "Skin Issues, Cartilage Repair",
            cover: "~/assets/images/beauty/body/bodyCover.jpg",
            images: [
                "~/assets/images/beauty/body/body1.png",
                "~/assets/images/beauty/body/body2.jpg",
                "~/assets/images/beauty/body/body3.JPG",
                "~/assets/images/beauty/body/Laser-Vein.jpg",
                "~/assets/images/beauty/body/body5.jpg",
                "~/assets/images/beauty/body/body6.JPG",
            ],
            category: "Body",
            categoryTag: "#e4ce0d",
            price: "230.00",
            likes: 891,
            isLike: true,
            isFavorite: false,
            comments: 7,
            rating: "4.0",
            description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione maiores, veritatis nesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi! Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
				\nRatione maiores, veritatis nesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi! Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
				\nNesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi!
				\nRatione maiores, veritatis nesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi! Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
				\nNesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi!`
        },
       /*  {
            id: 3,
            name: "Binondo Black Forest Cake",
            cover: "~/assets/images/food/cake640.jpg",
            images: [
                "~/assets/images/food/cake/cake1.jpg",
                "~/assets/images/food/cake/cake2.jpg",
                "~/assets/images/food/cake/cake3.jpg",
                "~/assets/images/food/cake/cake4.jpg"
            ],
            category: "Cake",
            categoryTag: "#27AE60",
            price: "300.00",
            likes: 730,
            isLike: true,
            isFavorite: true,
            comments: 11,
            rating: "4.0",
            description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione maiores, veritatis nesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi! Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
				\nRatione maiores, veritatis nesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi! Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
				\nNesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi!
				\nRatione maiores, veritatis nesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi! Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
				\nNesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi!`
        } */];
    }

    getCategories(): Array<Category> {
        return [
            {
                cover: "~/assets/images/beauty/face/faceCover.jpg",
                category: "Face",
                count: "13",
            },
            {
                cover: "~/assets/images/beauty/body/bodyCover.jpg",
                category: "Body",
                count: "5",
            }
        ];
    }
}