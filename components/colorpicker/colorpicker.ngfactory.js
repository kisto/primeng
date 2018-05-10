"use strict";
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = require("@angular/core");
var i1 = require("./colorpicker");
var i2 = require("@angular/common");
var i3 = require("@angular/forms");
var i4 = require("../dom/domhandler");
var ColorPickerModuleNgFactory = i0.ɵcmf(i1.ColorPickerModule, [], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, []], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(4608, i2.NgLocalization, i2.NgLocaleLocalization, [i0.LOCALE_ID, [2, i2.ɵa]]), i0.ɵmpd(512, i2.CommonModule, i2.CommonModule, []), i0.ɵmpd(512, i1.ColorPickerModule, i1.ColorPickerModule, [])]); });
exports.ColorPickerModuleNgFactory = ColorPickerModuleNgFactory;
var styles_ColorPicker = [];
var RenderType_ColorPicker = i0.ɵcrt({ encapsulation: 2, styles: styles_ColorPicker, data: { "animation": [{ type: 7, name: "panelState", definitions: [{ type: 0, name: "hidden", styles: { type: 6, styles: { opacity: 0 }, offset: null }, options: undefined }, { type: 0, name: "visible", styles: { type: 6, styles: { opacity: 1 }, offset: null }, options: undefined }, { type: 1, expr: "visible => hidden", animation: { type: 4, styles: null, timings: "400ms ease-in" }, options: null }, { type: 1, expr: "hidden => visible", animation: { type: 4, styles: null, timings: "400ms ease-out" }, options: null }], options: {} }] } });
exports.RenderType_ColorPicker = RenderType_ColorPicker;
function View_ColorPicker_1(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, [[6, 0], ["input", 1]], null, 2, "input", [["class", "ui-colorpicker-preview ui-inputtext ui-state-default ui-corner-all"], ["readonly", "readonly"], ["type", "text"]], [[1, "id", 0], [1, "tabindex", 0], [8, "disabled", 0], [4, "backgroundColor", null]], [[null, "focus"], [null, "click"], [null, "keydown"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("focus" === en)) {
        var pd_0 = (_co.onInputFocus() !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_co.onInputClick() !== false);
        ad = (pd_1 && ad);
    } if (("keydown" === en)) {
        var pd_2 = (_co.onInputKeydown($event) !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), i0.ɵdid(1, 278528, null, 0, i2.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i0.ɵpod(2, { "ui-state-disabled": 0 })], function (_ck, _v) { var _co = _v.component; var currVal_4 = "ui-colorpicker-preview ui-inputtext ui-state-default ui-corner-all"; var currVal_5 = _ck(_v, 2, 0, _co.disabled); _ck(_v, 1, 0, currVal_4, currVal_5); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.inputId; var currVal_1 = _co.tabindex; var currVal_2 = _co.disabled; var currVal_3 = _co.inputBgColor; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3); }); }
function View_ColorPicker_0(_l) { return i0.ɵvid(0, [i0.ɵqud(402653184, 1, { panelViewChild: 0 }), i0.ɵqud(402653184, 2, { colorSelectorViewChild: 0 }), i0.ɵqud(402653184, 3, { colorHandleViewChild: 0 }), i0.ɵqud(402653184, 4, { hueViewChild: 0 }), i0.ɵqud(402653184, 5, { hueHandleViewChild: 0 }), i0.ɵqud(671088640, 6, { inputViewChild: 0 }), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵeld(7, 0, null, null, 28, "div", [], null, null, null, null, null)), i0.ɵdid(8, 278528, null, 0, i2.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i0.ɵpod(9, { "ui-colorpicker ui-widget": 0, "ui-colorpicker-overlay": 1, "ui-colorpicker-dragging": 2 }), i0.ɵdid(10, 278528, null, 0, i2.NgStyle, [i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { ngStyle: [0, "ngStyle"] }, null), (_l()(), i0.ɵted(-1, null, ["\n            "])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_ColorPicker_1)), i0.ɵdid(13, 16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵted(-1, null, ["\n            "])), (_l()(), i0.ɵeld(15, 0, [[1, 0], ["panel", 1]], null, 19, "div", [], [[24, "@panelState", 0], [4, "display", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onPanelClick() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i0.ɵdid(16, 278528, null, 0, i2.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { ngClass: [0, "ngClass"] }, null), i0.ɵpod(17, { "ui-colorpicker-panel ui-corner-all": 0, "ui-colorpicker-overlay-panel ui-shadow": 1, "ui-state-disabled": 2 }), (_l()(), i0.ɵted(-1, null, ["\n                "])), (_l()(), i0.ɵeld(19, 0, null, null, 14, "div", [["class", "ui-colorpicker-content"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n                    "])), (_l()(), i0.ɵeld(21, 0, [[2, 0], ["colorSelector", 1]], null, 6, "div", [["class", "ui-colorpicker-color-selector"]], null, [[null, "mousedown"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("mousedown" === en)) {
        var pd_0 = (_co.onColorMousedown($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i0.ɵted(-1, null, ["\n                        "])), (_l()(), i0.ɵeld(23, 0, null, null, 3, "div", [["class", "ui-colorpicker-color"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n                            "])), (_l()(), i0.ɵeld(25, 0, [[3, 0], ["colorHandle", 1]], null, 0, "div", [["class", "ui-colorpicker-color-handle"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n                        "])), (_l()(), i0.ɵted(-1, null, ["\n                    "])), (_l()(), i0.ɵted(-1, null, ["\n                    "])), (_l()(), i0.ɵeld(29, 0, [[4, 0], ["hue", 1]], null, 3, "div", [["class", "ui-colorpicker-hue"]], null, [[null, "mousedown"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("mousedown" === en)) {
        var pd_0 = (_co.onHueMousedown($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i0.ɵted(-1, null, ["\n                        "])), (_l()(), i0.ɵeld(31, 0, [[5, 0], ["hueHandle", 1]], null, 0, "div", [["class", "ui-colorpicker-hue-handle"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n                    "])), (_l()(), i0.ɵted(-1, null, ["\n                "])), (_l()(), i0.ɵted(-1, null, ["\n            "])), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵted(-1, null, ["\n    "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.styleClass; var currVal_1 = _ck(_v, 9, 0, true, !_co.inline, (_co.colorDragging || _co.hueDragging)); _ck(_v, 8, 0, currVal_0, currVal_1); var currVal_2 = _co.style; _ck(_v, 10, 0, currVal_2); var currVal_3 = !_co.inline; _ck(_v, 13, 0, currVal_3); var currVal_6 = _ck(_v, 17, 0, true, !_co.inline, _co.disabled); _ck(_v, 16, 0, currVal_6); }, function (_ck, _v) { var _co = _v.component; var currVal_4 = (_co.inline ? "visible" : (_co.panelVisible ? "visible" : "hidden")); var currVal_5 = (_co.inline ? "block" : (_co.panelVisible ? "block" : "none")); _ck(_v, 15, 0, currVal_4, currVal_5); }); }
exports.View_ColorPicker_0 = View_ColorPicker_0;
function View_ColorPicker_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 3, "p-colorPicker", [], null, null, null, View_ColorPicker_0, RenderType_ColorPicker)), i0.ɵprd(5120, null, i3.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i1.ColorPicker]), i0.ɵprd(512, null, i4.DomHandler, i4.DomHandler, []), i0.ɵdid(3, 12763136, null, 0, i1.ColorPicker, [i0.ElementRef, i4.DomHandler, i0.Renderer2, i0.ChangeDetectorRef], null, null)], null, null); }
exports.View_ColorPicker_Host_0 = View_ColorPicker_Host_0;
var ColorPickerNgFactory = i0.ɵccf("p-colorPicker", i1.ColorPicker, View_ColorPicker_Host_0, { style: "style", styleClass: "styleClass", inline: "inline", format: "format", appendTo: "appendTo", disabled: "disabled", tabindex: "tabindex", inputId: "inputId" }, { onChange: "onChange" }, []);
exports.ColorPickerNgFactory = ColorPickerNgFactory;
//# sourceMappingURL=colorpicker.ngfactory.js.map