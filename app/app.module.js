"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ng2BreadcrumbModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var breadcrumb_1 = require("./components/breadcrumb");
var breadcrumbService_1 = require("./components/breadcrumbService");
__exportStar(require("./components/breadcrumb"), exports);
__exportStar(require("./components/breadcrumbService"), exports);
var Ng2BreadcrumbModule = /** @class */ (function () {
    function Ng2BreadcrumbModule() {
    }
    Ng2BreadcrumbModule_1 = Ng2BreadcrumbModule;
    Ng2BreadcrumbModule.forRoot = function () {
        return {
            ngModule: Ng2BreadcrumbModule_1,
            providers: [breadcrumbService_1.BreadcrumbService]
        };
    };
    var Ng2BreadcrumbModule_1;
    Ng2BreadcrumbModule = Ng2BreadcrumbModule_1 = __decorate([
        (0, core_1.NgModule)({
            imports: [
                common_1.CommonModule
            ],
            declarations: [
                breadcrumb_1.BreadcrumbComponent
            ],
            exports: [
                breadcrumb_1.BreadcrumbComponent
            ]
        })
    ], Ng2BreadcrumbModule);
    return Ng2BreadcrumbModule;
}());
exports.Ng2BreadcrumbModule = Ng2BreadcrumbModule;
//# sourceMappingURL=app.module.js.map