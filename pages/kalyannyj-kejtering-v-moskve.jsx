"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var head_1 = require("next/head");
var Footer_1 = require("src/components/common/Footer");
var Page = function () { return (<div className='container'>
    <head_1.default>
      <title>Кальянный кейтеринг в Москве</title>
    </head_1.default>

    <Footer_1.Footer />

    <style jsx>{
/* language=CSS */ "\n        .container {\n          min-height: 100vh;\n          display: flex;\n          flex-direction: column;\n          justify-content: center;\n          align-items: center;\n          color: white;\n        }\n      "}</style>
  </div>); };
exports.default = Page;
