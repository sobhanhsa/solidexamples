var factory = /** @class */ (function () {
    function factory(method) {
        this.method = method;
    }
    factory.prototype.buildLagan = function () {
        this.method.build();
    };
    return factory;
}());
var iranKhodro = /** @class */ (function () {
    function iranKhodro(model) {
        this.model = model;
        this.model = model;
    }
    iranKhodro.prototype.build = function () {
        this.model.buildIranKhodroProducts();
    };
    return iranKhodro;
}());
var saipa = /** @class */ (function () {
    function saipa(model) {
        this.model = model;
        this.model = model;
    }
    saipa.prototype.build = function () {
        this.model.buildSaipaProducts();
    };
    return saipa;
}());
var shahin = /** @class */ (function () {
    function shahin() {
    }
    shahin.prototype.buildSaipaProducts = function () {
        console.log("saipa is building Shahin...");
    };
    return shahin;
}());
var pars = /** @class */ (function () {
    function pars() {
    }
    pars.prototype.buildIranKhodroProducts = function () {
        console.log("irankhodro is building Pars...");
    };
    return pars;
}());
var atlass = {
    buildSaipaProducts: function () {
        console.log("saipa is building Atlass...");
    }
};
// var saipaInstance = new saipa(new shahin)
var saipaInstance = new saipa(atlass);
var iranKhodroInstance = new iranKhodro(new pars);
var factoryInstanceS = new factory(saipaInstance);
var factoryInstanceI = new factory(iranKhodroInstance);
factoryInstanceS.buildLagan();
factoryInstanceI.buildLagan();
// console.log(saipaFac.build())
