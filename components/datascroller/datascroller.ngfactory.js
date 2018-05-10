"use strict";
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = require("@angular/core");
var i1 = require("./datascroller");
var i2 = require("@angular/common");
var i3 = require("../common/shared");
var i4 = require("../dom/domhandler");
var DataScrollerModuleNgFactory = i0.ɵcmf(i1.DataScrollerModule, [], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, []], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(4608, i2.NgLocalization, i2.NgLocaleLocalization, [i0.LOCALE_ID, [2, i2.ɵa]]), i0.ɵmpd(512, i2.CommonModule, i2.CommonModule, []), i0.ɵmpd(512, i3.SharedModule, i3.SharedModule, []), i0.ɵmpd(512, i1.DataScrollerModule, i1.DataScrollerModule, [])]); });
exports.DataScrollerModuleNgFactory = DataScrollerModuleNgFactory;
var styles_DataScroller = [];
var RenderType_DataScroller = i0.ɵcrt({ encapsulation: 2, styles: styles_DataScroller, data: {} });
exports.RenderType_DataScroller = RenderType_DataScroller;
function View_DataScroller_1(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 3, "div", [["class", "ui-datascroller-header ui-widget-header ui-corner-top"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n            "])), i0.ɵncd(null, 0), (_l()(), i0.ɵted(-1, null, ["\n        "]))], null, null); }
function View_DataScroller_3(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 0, null, null, null, null, null, null, null))], null, null); }
function View_DataScroller_2(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 5, "li", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n                    "])), (_l()(), i0.ɵand(16777216, null, null, 2, null, View_DataScroller_3)), i0.ɵdid(3, 540672, null, 0, i2.NgTemplateOutlet, [i0.ViewContainerRef], { ngTemplateOutletContext: [0, "ngTemplateOutletContext"], ngTemplateOutlet: [1, "ngTemplateOutlet"] }, null), i0.ɵpod(4, { $implicit: 0, index: 1 }), (_l()(), i0.ɵted(-1, null, ["\n                "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _ck(_v, 4, 0, _v.context.$implicit, _v.context.index); var currVal_1 = _co.itemTemplate; _ck(_v, 3, 0, currVal_0, currVal_1); }, null); }
function View_DataScroller_4(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 3, "div", [["class", "ui-datascroller-footer ui-widget-header ui-corner-bottom"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n            "])), i0.ɵncd(null, 1), (_l()(), i0.ɵted(-1, null, ["\n        "]))], null, null); }
function View_DataScroller_0(_l) { return i0.ɵvid(0, [i0.ɵqud(402653184, 1, { contentViewChild: 0 }), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵeld(2, 0, null, null, 22, "div", [], null, null, null, null, null)), i0.ɵdid(3, 278528, null, 0, i2.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i0.ɵpod(4, { "ui-datascroller ui-widget": 0, "ui-datascroller-inline": 1 }), i0.ɵdid(5, 278528, null, 0, i2.NgStyle, [i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { ngStyle: [0, "ngStyle"] }, null), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_DataScroller_1)), i0.ɵdid(8, 16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵeld(10, 0, [[1, 0], ["content", 1]], null, 10, "div", [["class", "ui-datascroller-content ui-widget-content"]], null, null, null, null, null)), i0.ɵdid(11, 278528, null, 0, i2.NgStyle, [i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { ngStyle: [0, "ngStyle"] }, null), i0.ɵpod(12, { "max-height": 0 }), (_l()(), i0.ɵted(-1, null, ["\n            "])), (_l()(), i0.ɵeld(14, 0, null, null, 5, "ul", [["class", "ui-datascroller-list"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n                "])), (_l()(), i0.ɵand(16777216, null, null, 2, null, View_DataScroller_2)), i0.ɵdid(17, 802816, null, 0, i2.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, "ngForOf"], ngForTrackBy: [1, "ngForTrackBy"] }, null), i0.ɵpid(0, i2.SlicePipe, []), (_l()(), i0.ɵted(-1, null, ["\n            "])), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_DataScroller_4)), i0.ɵdid(23, 16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵted(-1, null, ["\n    "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.styleClass; var currVal_1 = _ck(_v, 4, 0, true, _co.inline); _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_2 = _co.style; _ck(_v, 5, 0, currVal_2); var currVal_3 = _co.header; _ck(_v, 8, 0, currVal_3); var currVal_4 = _ck(_v, 12, 0, _co.scrollHeight); _ck(_v, 11, 0, currVal_4); var currVal_5 = i0.ɵunv(_v, 17, 0, i0.ɵnov(_v, 18).transform(_co.value, _co.first, (_co.first + (_co.page * _co.rows)))); var currVal_6 = _co.trackBy; _ck(_v, 17, 0, currVal_5, currVal_6); var currVal_7 = _co.footer; _ck(_v, 23, 0, currVal_7); }, null); }
exports.View_DataScroller_0 = View_DataScroller_0;
function View_DataScroller_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 5, "p-dataScroller", [], null, null, null, View_DataScroller_0, RenderType_DataScroller)), i0.ɵprd(512, null, i4.DomHandler, i4.DomHandler, []), i0.ɵdid(2, 5488640, null, 3, i1.DataScroller, [i0.ElementRef, i0.Renderer2, i4.DomHandler, i0.NgZone], null, null), i0.ɵqud(335544320, 1, { header: 0 }), i0.ɵqud(335544320, 2, { footer: 0 }), i0.ɵqud(603979776, 3, { templates: 1 })], function (_ck, _v) { _ck(_v, 2, 0); }, null); }
exports.View_DataScroller_Host_0 = View_DataScroller_Host_0;
var DataScrollerNgFactory = i0.ɵccf("p-dataScroller", i1.DataScroller, View_DataScroller_Host_0, { value: "value", rows: "rows", lazy: "lazy", style: "style", styleClass: "styleClass", buffer: "buffer", inline: "inline", scrollHeight: "scrollHeight", loader: "loader", totalRecords: "totalRecords", trackBy: "trackBy" }, { onLazyLoad: "onLazyLoad" }, ["p-header", "p-footer"]);
exports.DataScrollerNgFactory = DataScrollerNgFactory;
//# sourceMappingURL=datascroller.ngfactory.js.map