function Something(){

    this.name = "tom";

}

Something.prototype.sum = function (a,b) {
    console.log(a+b)
}

Something.prototype.job = function () {

    console.log(this.name+"在工作")
}

module.exports = Something;