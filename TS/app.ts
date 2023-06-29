interface buildMethod {
    build():void
}

interface saipaProducts {
    buildSaipaProducts():void
}

interface iranKhodroProducts {
    buildIranKhodroProducts():void
}

class factory {

    constructor(private method: buildMethod) {
    }
    

    buildLagan():void {
        this.method.build();
    }

}


class iranKhodro {
    constructor(public model:iranKhodroProducts) {
        this.model = model
    }

    build():void {
        this.model.buildIranKhodroProducts()
    }
}

class saipa {

    constructor (public model : saipaProducts) {
        this.model = model
    }

    build():void {
        this.model.buildSaipaProducts()
    }
}


class shahin {
    buildSaipaProducts():void {
        console.log("saipa is building Shahin...")
    }
}

class pars {
    buildIranKhodroProducts():void {
        console.log("irankhodro is building Pars...")
    }
}

let atlass = {
    buildSaipaProducts():void {
        console.log("saipa is building Atlass...")
    }
}

// var saipaInstance = new saipa(new shahin)
var saipaInstance = new saipa(atlass)
var iranKhodroInstance = new iranKhodro(new pars)

var factoryInstanceS = new factory(saipaInstance)
var factoryInstanceI = new factory(iranKhodroInstance)

factoryInstanceS.buildLagan()
factoryInstanceI.buildLagan()



// console.log(saipaFac.build())
