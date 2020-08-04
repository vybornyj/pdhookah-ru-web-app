"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var head_1 = require("next/head");
var Footer_1 = require("src/components/common/Footer");
var RentalBlock2_1 = require("src/components/RentalBlock2");
var Page = function () { return (<div className='container'>
    <head_1.default>
      <title>Аренда и доставка кальяна на дом</title>
    </head_1.default>

    <RentalBlock2_1.RentalBlock2 />

    <Footer_1.Footer />

    <style jsx>{
/* language=CSS */ "\n        .container {\n          min-height: 100vh;\n          display: flex;\n          flex-direction: column;\n          justify-content: center;\n          align-items: center;\n          color: white;\n        }\n      "}</style>
  </div>); };
exports.default = Page;
