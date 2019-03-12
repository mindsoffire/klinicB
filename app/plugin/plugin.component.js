"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var auth_service_1 = require("../services/auth.service");
var PluginComponent = /** @class */ (function () {
    function PluginComponent(router, tokenSvc) {
        this.router = router;
        this.tokenSvc = tokenSvc;
        this.hide = true;
        this.signUpOrLogInOrRstPW = '';
        this.emailPHolder = 'Enter your email';
        this.pwPHolder = 'Enter your password';
        this.pwtries = 0;
        this.pwreset = this.tokenSvc.pwReset ? true : false;
        this.rstPW = null;
    }
    PluginComponent.prototype.ngOnInit = function () {
        // if (localStorage.getItem('nexToken') && localStorage.getItem('kyc')) this.router.navigate(['/agent-kyc']);
        if (this.tokenSvc.loggedIn) {
            this.router.navigate(['/home']);
        }
        else {
            this.tokenSvc.status = '..hello there.';
        }
    };
    PluginComponent.prototype.plugin = function (signUpOrLogInOrRstPW, emailID, pw) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.tokenSvc.pwReset = signUpOrLogInOrRstPW === 'resetPW' ? false : this.tokenSvc.pwReset;
                        return [4 /*yield*/, this.tokenSvc.auth({
                                encEmailID: this.tokenSvc.f_rotajF(emailID),
                                hshPW: pw === undefined ? pw : this.tokenSvc.sha256_digest(pw),
                                rstPW: signUpOrLogInOrRstPW === 'resetPW' ? this.tokenSvc.sha256_digest(pw) : null
                            })
                                .then(function (authObj) {
                                if (!authObj.nexToken && _this.tokenSvc.status == '..please log in with the right password.' && !_this.tokenSvc.pwReset) {
                                    _this.pwtries++;
                                    _this.pwPHolder = "..tried password " + (_this.pwtries == 1 ? 'once' : _this.pwtries + ' times') + ".";
                                    if (_this.pwtries > 3) {
                                        _this.pwreset = true;
                                        _this.pwPHolder = "Enter your NEW password to RESET it, or try again";
                                    }
                                }
                                console.log({ authObj: authObj, status: _this.tokenSvc.status });
                                if (authObj.clntKYCDisp.emailID && authObj.nexToken /* === JSON.parse(localStorage.getItem('nexToken')) */) {
                                    console.log(authObj.clntKYCDisp.emailID, authObj.nexToken);
                                    _this.router.navigate(['/home']);
                                }
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PluginComponent = __decorate([
        core_1.Component({
            selector: "Plugin",
            moduleId: module.id,
            templateUrl: "./plugin.component.html",
            styleUrls: ['./plugin.component.css']
        }),
        __metadata("design:paramtypes", [router_1.Router, auth_service_1.AuthService])
    ], PluginComponent);
    return PluginComponent;
}());
exports.PluginComponent = PluginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGx1Z2luLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBsdWdpbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFFbEQsMENBQXlEO0FBQ3pELHlEQUErRTtBQVEvRTtJQUVDLHlCQUFvQixNQUFjLEVBQVMsUUFBcUI7UUFBNUMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFTLGFBQVEsR0FBUixRQUFRLENBQWE7UUFFaEUsU0FBSSxHQUFHLElBQUksQ0FBQztRQUNaLHlCQUFvQixHQUFXLEVBQUUsQ0FBQztRQUNsQyxpQkFBWSxHQUFHLGtCQUFrQixDQUFDO1FBQUMsY0FBUyxHQUFHLHFCQUFxQixDQUFDO1FBR3JFLFlBQU8sR0FBRyxDQUFDLENBQUM7UUFBQyxZQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQUMsVUFBSyxHQUFHLElBQUksQ0FBQztJQVBOLENBQUM7SUFTckUsa0NBQVEsR0FBUjtRQUNDLDZHQUE2RztRQUM3RyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFO1lBQzNCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztTQUNoQzthQUFNO1lBQ04sSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsZ0JBQWdCLENBQUE7U0FDdkM7SUFDRixDQUFDO0lBRUssZ0NBQU0sR0FBWixVQUFhLG9CQUE0QixFQUFFLE9BQWUsRUFBRSxFQUFVOzs7Ozs7d0JBRXJFLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxHQUFHLG9CQUFvQixLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQzt3QkFFM0YscUJBQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3ZCO2dDQUNDLFVBQVUsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7Z0NBQzNDLEtBQUssRUFBRSxFQUFFLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQztnQ0FDOUQsS0FBSyxFQUFFLG9CQUFvQixLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUk7NkJBQ2xGLENBQUM7aUNBQ0QsSUFBSSxDQUFDLFVBQUEsT0FBTztnQ0FDWixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsSUFBSSxLQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sSUFBSSwwQ0FBMEMsSUFBSSxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFO29DQUN0SCxLQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7b0NBQ2YsS0FBSSxDQUFDLFNBQVMsR0FBRyx1QkFBb0IsS0FBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSSxDQUFDLE9BQU8sR0FBRyxRQUFRLE9BQUcsQ0FBQTtvQ0FDNUYsSUFBSSxLQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsRUFBRTt3Q0FDckIsS0FBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7d0NBQ3BCLEtBQUksQ0FBQyxTQUFTLEdBQUcsbURBQW1ELENBQUE7cUNBQ3BFO2lDQUNEO2dDQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxPQUFPLFNBQUEsRUFBRSxNQUFNLEVBQUUsS0FBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO2dDQUN2RCxJQUFJLE9BQU8sQ0FBQyxXQUFXLENBQUMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxRQUFRLENBQUMsc0RBQXNELEVBQUU7b0NBQzNHLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO29DQUMzRCxLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7aUNBQ2hDOzRCQUNGLENBQUMsQ0FBQyxFQUFBOzt3QkFwQkgsU0FvQkcsQ0FBQTs7Ozs7S0FDSDtJQTdDVyxlQUFlO1FBTjNCLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsUUFBUTtZQUNsQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHlCQUF5QjtZQUN0QyxTQUFTLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztTQUNyQyxDQUFDO3lDQUcyQixlQUFNLEVBQW1CLDBCQUFXO09BRnBELGVBQWUsQ0E4QzNCO0lBQUQsc0JBQUM7Q0FBQSxBQTlDRCxJQThDQztBQTlDWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBBdXRoU2VydmljZSwgSUNsbnRLWUMsIElDbG50S1lDRGlzcCB9IGZyb20gJy4uL3NlcnZpY2VzL2F1dGguc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogXCJQbHVnaW5cIixcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcblx0dGVtcGxhdGVVcmw6IFwiLi9wbHVnaW4uY29tcG9uZW50Lmh0bWxcIixcblx0c3R5bGVVcmxzOiBbJy4vcGx1Z2luLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBQbHVnaW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHB1YmxpYyB0b2tlblN2YzogQXV0aFNlcnZpY2UpIHsgfVxuXG5cdGhpZGUgPSB0cnVlO1xuXHRzaWduVXBPckxvZ0luT3JSc3RQVzogc3RyaW5nID0gJyc7XG5cdGVtYWlsUEhvbGRlciA9ICdFbnRlciB5b3VyIGVtYWlsJzsgcHdQSG9sZGVyID0gJ0VudGVyIHlvdXIgcGFzc3dvcmQnO1xuXG5cdGRhdGE6IGFueTtcblx0cHd0cmllcyA9IDA7IHB3cmVzZXQgPSB0aGlzLnRva2VuU3ZjLnB3UmVzZXQgPyB0cnVlIDogZmFsc2U7IHJzdFBXID0gbnVsbDtcblxuXHRuZ09uSW5pdCgpIHtcblx0XHQvLyBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ25leFRva2VuJykgJiYgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2t5YycpKSB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9hZ2VudC1reWMnXSk7XG5cdFx0aWYgKHRoaXMudG9rZW5TdmMubG9nZ2VkSW4pIHtcblx0XHRcdHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2hvbWUnXSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMudG9rZW5TdmMuc3RhdHVzID0gJy4uaGVsbG8gdGhlcmUuJ1xuXHRcdH1cblx0fVxuXG5cdGFzeW5jIHBsdWdpbihzaWduVXBPckxvZ0luT3JSc3RQVzogc3RyaW5nLCBlbWFpbElEOiBzdHJpbmcsIHB3OiBzdHJpbmcpIHtcblxuXHRcdHRoaXMudG9rZW5TdmMucHdSZXNldCA9IHNpZ25VcE9yTG9nSW5PclJzdFBXID09PSAncmVzZXRQVycgPyBmYWxzZSA6IHRoaXMudG9rZW5TdmMucHdSZXNldDtcblxuXHRcdGF3YWl0IHRoaXMudG9rZW5TdmMuYXV0aChcblx0XHRcdHtcblx0XHRcdFx0ZW5jRW1haWxJRDogdGhpcy50b2tlblN2Yy5mX3JvdGFqRihlbWFpbElEKSxcblx0XHRcdFx0aHNoUFc6IHB3ID09PSB1bmRlZmluZWQgPyBwdyA6IHRoaXMudG9rZW5TdmMuc2hhMjU2X2RpZ2VzdChwdyksXG5cdFx0XHRcdHJzdFBXOiBzaWduVXBPckxvZ0luT3JSc3RQVyA9PT0gJ3Jlc2V0UFcnID8gdGhpcy50b2tlblN2Yy5zaGEyNTZfZGlnZXN0KHB3KSA6IG51bGxcblx0XHRcdH0pXG5cdFx0XHQudGhlbihhdXRoT2JqID0+IHtcblx0XHRcdFx0aWYgKCFhdXRoT2JqLm5leFRva2VuICYmIHRoaXMudG9rZW5TdmMuc3RhdHVzID09ICcuLnBsZWFzZSBsb2cgaW4gd2l0aCB0aGUgcmlnaHQgcGFzc3dvcmQuJyAmJiAhdGhpcy50b2tlblN2Yy5wd1Jlc2V0KSB7XG5cdFx0XHRcdFx0dGhpcy5wd3RyaWVzKys7XG5cdFx0XHRcdFx0dGhpcy5wd1BIb2xkZXIgPSBgLi50cmllZCBwYXNzd29yZCAke3RoaXMucHd0cmllcyA9PSAxID8gJ29uY2UnIDogdGhpcy5wd3RyaWVzICsgJyB0aW1lcyd9LmBcblx0XHRcdFx0XHRpZiAodGhpcy5wd3RyaWVzID4gMykge1xuXHRcdFx0XHRcdFx0dGhpcy5wd3Jlc2V0ID0gdHJ1ZTtcblx0XHRcdFx0XHRcdHRoaXMucHdQSG9sZGVyID0gXCJFbnRlciB5b3VyIE5FVyBwYXNzd29yZCB0byBSRVNFVCBpdCwgb3IgdHJ5IGFnYWluXCJcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc29sZS5sb2coeyBhdXRoT2JqLCBzdGF0dXM6IHRoaXMudG9rZW5TdmMuc3RhdHVzIH0pO1xuXHRcdFx0XHRpZiAoYXV0aE9iai5jbG50S1lDRGlzcC5lbWFpbElEICYmIGF1dGhPYmoubmV4VG9rZW4gLyogPT09IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ25leFRva2VuJykpICovKSB7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coYXV0aE9iai5jbG50S1lDRGlzcC5lbWFpbElELCBhdXRoT2JqLm5leFRva2VuKTtcblx0XHRcdFx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9ob21lJ10pO1xuXHRcdFx0XHR9XG5cdFx0XHR9KVxuXHR9XG59Il19