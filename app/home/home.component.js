"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var data_1 = require("../data/data");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(routerExtensions, dataService) {
        this.routerExtensions = routerExtensions;
        this.dataService = dataService;
        this.lastDelY = 0;
        this.headerCollapsed = false;
        this.selectedTab = 0;
        this.selectedTabview = 0;
        //Set up to get data from shared service to help moving from mocking data to real API calls in the future
        this.items = this.dataService.getItems();
        this.categories = this.dataService.getCategories();
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.showItem = function (itemId) {
        console.log("Tapped on " + itemId);
        this.routerExtensions.navigate(["detail/" + itemId, {
                animated: true,
                transition: {
                    name: "slideTop",
                    duration: 380,
                    curve: "easeIn"
                }
            }]);
    };
    HomeComponent.prototype.toggleLike = function (item) {
        item.isLike = !item.isLike;
        if (item.isLike) {
            item.likes += 1;
        }
        else {
            item.likes -= 1;
        }
    };
    HomeComponent.prototype.toggleHeart = function (item) {
        item.isFavorite = !item.isFavorite;
    };
    HomeComponent.prototype.categoryIcon = function (itemCategory) {
        switch (itemCategory) {
            case "Burger":
                return String.fromCharCode(0xf0f5); //"fa-cutlery";
                break;
            case "Beer":
                return String.fromCharCode(0xf0fc); //"fa-beer";
                break;
            case "Pancake":
                return String.fromCharCode(0xf0f4); //"fa-coffee";
                break;
            case "Cake":
                return String.fromCharCode(0xf1fd); //"fa-birthday-cake";
                break;
            default:
                return String.fromCharCode(0xf06d); //"fa-fire";
                break;
        }
    };
    //Top nav bar tap methods
    HomeComponent.prototype.onBellTap = function () {
    };
    HomeComponent.prototype.onSearchTap = function () {
    };
    HomeComponent.prototype.onPopularTap = function () {
        this.selectedTabview = 0;
    };
    HomeComponent.prototype.onCategoryTap = function () {
        this.selectedTabview = 1;
    };
    HomeComponent.prototype.onPromosTap = function () {
        this.selectedTabview = 2;
    };
    //Bottom nav bar tap methods
    HomeComponent.prototype.onHomeTap = function () {
        this.selectedTab = 0;
    };
    HomeComponent.prototype.onCartTap = function () {
        this.selectedTab = 1;
    };
    HomeComponent.prototype.onHistoryTap = function () {
        this.selectedTab = 2;
    };
    HomeComponent.prototype.onAboutTap = function () {
        this.selectedTab = 3;
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: "Home",
            moduleId: module.id,
            templateUrl: "./home.component.html",
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions, data_1.DataService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxzREFBK0Q7QUFHL0QscUNBQTJDO0FBVzNDO0lBUUksdUJBQW9CLGdCQUFrQyxFQUFVLFdBQXdCO1FBQXBFLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQVB4RixhQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ2Isb0JBQWUsR0FBRyxLQUFLLENBQUM7UUFDeEIsZ0JBQVcsR0FBRyxDQUFDLENBQUM7UUFDaEIsb0JBQWUsR0FBRyxDQUFDLENBQUM7UUFLaEIseUdBQXlHO1FBQ3pHLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN6QyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdkQsQ0FBQztJQUVELGdDQUFRLEdBQVI7SUFDQSxDQUFDO0lBRUQsZ0NBQVEsR0FBUixVQUFTLE1BQU07UUFDWCxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWEsTUFBUSxDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsR0FBRyxNQUFNLEVBQUU7Z0JBQ2hELFFBQVEsRUFBRSxJQUFJO2dCQUNkLFVBQVUsRUFBRTtvQkFDUixJQUFJLEVBQUUsVUFBVTtvQkFDaEIsUUFBUSxFQUFFLEdBQUc7b0JBQ2IsS0FBSyxFQUFFLFFBQVE7aUJBQ2xCO2FBQ0osQ0FBQyxDQUFDLENBQUM7SUFDUixDQUFDO0lBRUQsa0NBQVUsR0FBVixVQUFXLElBQUk7UUFDWCxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUMzQixJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDYixJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQztTQUNuQjthQUFNO1lBQ0gsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUM7U0FDbkI7SUFDTCxDQUFDO0lBRUQsbUNBQVcsR0FBWCxVQUFZLElBQUk7UUFDWixJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN2QyxDQUFDO0lBRUQsb0NBQVksR0FBWixVQUFhLFlBQVk7UUFDckIsUUFBUSxZQUFZLEVBQUU7WUFDbEIsS0FBSyxRQUFRO2dCQUNULE9BQU8sTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLGVBQWU7Z0JBQ25ELE1BQU07WUFDVixLQUFLLE1BQU07Z0JBQ1AsT0FBTyxNQUFNLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsWUFBWTtnQkFDaEQsTUFBTTtZQUNWLEtBQUssU0FBUztnQkFDVixPQUFPLE1BQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxjQUFjO2dCQUNsRCxNQUFNO1lBQ1YsS0FBSyxNQUFNO2dCQUNQLE9BQU8sTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLHFCQUFxQjtnQkFDekQsTUFBTTtZQUNWO2dCQUNJLE9BQU8sTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFlBQVk7Z0JBQ2hELE1BQU07U0FDYjtJQUNMLENBQUM7SUFHRCx5QkFBeUI7SUFDekIsaUNBQVMsR0FBVDtJQUNBLENBQUM7SUFFRCxtQ0FBVyxHQUFYO0lBQ0EsQ0FBQztJQUVELG9DQUFZLEdBQVo7UUFDSSxJQUFJLENBQUMsZUFBZSxHQUFHLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQscUNBQWEsR0FBYjtRQUNJLElBQUksQ0FBQyxlQUFlLEdBQUcsQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRCxtQ0FBVyxHQUFYO1FBQ0ksSUFBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVELDRCQUE0QjtJQUM1QixpQ0FBUyxHQUFUO1FBQ0ksSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUVELGlDQUFTLEdBQVQ7UUFDSSxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBRUQsb0NBQVksR0FBWjtRQUNJLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFFRCxrQ0FBVSxHQUFWO1FBQ0ksSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7SUFDekIsQ0FBQztJQWpHUSxhQUFhO1FBUnpCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTTtZQUNoQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtTQUd2QyxDQUFDO3lDQVV3Qyx5QkFBZ0IsRUFBdUIsa0JBQVc7T0FSL0UsYUFBYSxDQW1HekI7SUFBRCxvQkFBQztDQUFBLEFBbkdELElBbUdDO0FBbkdZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IEl0ZW0gfSBmcm9tIFwiLi4vZGF0YS9pdGVtLm1vZGVsXCI7XG5pbXBvcnQgeyBDYXRlZ29yeSB9IGZyb20gXCIuLi9kYXRhL2NhdGVnb3J5Lm1vZGVsXCI7XG5pbXBvcnQgeyBEYXRhU2VydmljZSB9IGZyb20gXCIuLi9kYXRhL2RhdGFcIjtcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJIb21lXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2hvbWUuY29tcG9uZW50Lmh0bWxcIixcbiAgICAvL3N0eWxlVXJsczogWycuL2hvbWUuY29tcG9uZW50LmNzcyddXG4gICAgLy8gQWxsIHN0eWxlcyB3ZXJlIHB1dCBpbnNpZGUgb2YgYXBwLmNzcyBzbyB3ZSBkb24ndCBuZWVkIGEgaG9tZS5jb21wb25lbnQuY3NzIGZvciBub3dcbn0pXG5cbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBsYXN0RGVsWSA9IDA7XG4gICAgaGVhZGVyQ29sbGFwc2VkID0gZmFsc2U7XG4gICAgc2VsZWN0ZWRUYWIgPSAwO1xuICAgIHNlbGVjdGVkVGFidmlldyA9IDA7XG4gICAgaXRlbXM6IEFycmF5PEl0ZW0+O1xuICAgIGNhdGVnb3JpZXM6IEFycmF5PENhdGVnb3J5PjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSBkYXRhU2VydmljZTogRGF0YVNlcnZpY2UpIHtcbiAgICAgICAgLy9TZXQgdXAgdG8gZ2V0IGRhdGEgZnJvbSBzaGFyZWQgc2VydmljZSB0byBoZWxwIG1vdmluZyBmcm9tIG1vY2tpbmcgZGF0YSB0byByZWFsIEFQSSBjYWxscyBpbiB0aGUgZnV0dXJlXG4gICAgICAgIHRoaXMuaXRlbXMgPSB0aGlzLmRhdGFTZXJ2aWNlLmdldEl0ZW1zKCk7XG4gICAgICAgIHRoaXMuY2F0ZWdvcmllcyA9IHRoaXMuZGF0YVNlcnZpY2UuZ2V0Q2F0ZWdvcmllcygpO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIH1cblxuICAgIHNob3dJdGVtKGl0ZW1JZCkge1xuICAgICAgICBjb25zb2xlLmxvZyhgVGFwcGVkIG9uICR7aXRlbUlkfWApO1xuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiZGV0YWlsL1wiICsgaXRlbUlkLCB7XG4gICAgICAgICAgICBhbmltYXRlZDogdHJ1ZSxcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcInNsaWRlVG9wXCIsXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDM4MCxcbiAgICAgICAgICAgICAgICBjdXJ2ZTogXCJlYXNlSW5cIlxuICAgICAgICAgICAgfVxuICAgICAgICB9XSk7XG4gICAgfVxuXG4gICAgdG9nZ2xlTGlrZShpdGVtKSB7XG4gICAgICAgIGl0ZW0uaXNMaWtlID0gIWl0ZW0uaXNMaWtlO1xuICAgICAgICBpZiAoaXRlbS5pc0xpa2UpIHtcbiAgICAgICAgICAgIGl0ZW0ubGlrZXMgKz0gMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGl0ZW0ubGlrZXMgLT0gMTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRvZ2dsZUhlYXJ0KGl0ZW0pIHtcbiAgICAgICAgaXRlbS5pc0Zhdm9yaXRlID0gIWl0ZW0uaXNGYXZvcml0ZTtcbiAgICB9XG5cbiAgICBjYXRlZ29yeUljb24oaXRlbUNhdGVnb3J5KSB7XG4gICAgICAgIHN3aXRjaCAoaXRlbUNhdGVnb3J5KSB7XG4gICAgICAgICAgICBjYXNlIFwiQnVyZ2VyXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoMHhmMGY1KTsgLy9cImZhLWN1dGxlcnlcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJCZWVyXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoMHhmMGZjKTsgLy9cImZhLWJlZXJcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJQYW5jYWtlXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoMHhmMGY0KTsgLy9cImZhLWNvZmZlZVwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIkNha2VcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZSgweGYxZmQpOyAvL1wiZmEtYmlydGhkYXktY2FrZVwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZSgweGYwNmQpOyAvL1wiZmEtZmlyZVwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICAvL1RvcCBuYXYgYmFyIHRhcCBtZXRob2RzXG4gICAgb25CZWxsVGFwKCkge1xuICAgIH1cblxuICAgIG9uU2VhcmNoVGFwKCkge1xuICAgIH1cblxuICAgIG9uUG9wdWxhclRhcCgpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZFRhYnZpZXcgPSAwO1xuICAgIH1cblxuICAgIG9uQ2F0ZWdvcnlUYXAoKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRUYWJ2aWV3ID0gMTtcbiAgICB9XG5cbiAgICBvblByb21vc1RhcCgpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZFRhYnZpZXcgPSAyO1xuICAgIH1cblxuICAgIC8vQm90dG9tIG5hdiBiYXIgdGFwIG1ldGhvZHNcbiAgICBvbkhvbWVUYXAoKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRUYWIgPSAwO1xuICAgIH1cblxuICAgIG9uQ2FydFRhcCgpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZFRhYiA9IDE7XG4gICAgfVxuXG4gICAgb25IaXN0b3J5VGFwKCkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkVGFiID0gMjtcbiAgICB9XG5cbiAgICBvbkFib3V0VGFwKCkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkVGFiID0gMztcbiAgICB9XG5cbn1cbiJdfQ==