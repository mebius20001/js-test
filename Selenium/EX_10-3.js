// Licensed to the Software Freedom Conservancy (SFC) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The SFC licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.

const webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until,
    test = require('selenium-webdriver/testing')

test.describe('Google Search', () => {
    let driver

    test.before(() => {
        driver = new webdriver.Builder().forBrowser('chrome').build()
    })


    test.it('should append querry to title', async () => {
        let result, res //

        driver.get('http://localhost/litecart/')
//***********************************************************************

         result = await driver.findElements(By.css("div#box-campaigns.box div.name"))
         res = await result.map(xname => xname.getAttribute(["textContent"]))
         let xname = await Promise.all(res)
         //console.log("имя на 1 странице="+xname)

        result = await driver.findElements(By.css("div#box-campaigns.box s.regular-price"))
        res = await result.map(x => x.getAttribute(["innerText"]))
        let x = await Promise.all(res)
        //console.log("цена1 на 1 странице="+x)


        result = await driver.findElements(By.css("div#box-campaigns.box s.regular-price"))
        res = await result.map(xs => xs.getCssValue(["font-size"]))
        let xs = await Promise.all(res)
       // console.log("размер щрифта обычной цены 1="+parseFloat(xs))


        result = await driver.findElements(By.css("div#box-campaigns.box strong.campaign-price"))
        res = await result.map(y => y.getAttribute(["innerText"]))
        let y = await Promise.all(res)
        //console.log("цена2 на 1 странице="+y)


        result = await driver.findElements(By.css("div#box-campaigns.box strong.campaign-price"))
        res = await result.map(ys => ys.getCssValue(["font-size"]))
        let ys = await Promise.all(res)
        //console.log("размер шрифта акционной цены 1="+parseFloat(ys))




        result = await driver.findElements(By.css("div#box-campaigns.box s.regular-price"))
        res = await result.map(z => z.getCssValue(["color"]))
        let z = await Promise.all(res)
        z= await  z[0]
        let zz = await z.slice([5],[z.length-1])
        let arrzz = zz.split(", ")

        //console.log("arrzz="+arrzz)



        result = await driver.findElements(By.css("div#box-campaigns.box strong.campaign-price"))
        res = await result.map(z1 => z1.getCssValue(["color"]))
        let z1 = await Promise.all(res)
        z1= await z1[0]
        let  zz1 =await z1.slice([5],[z1.length-1])
        let arrz1 = zz1.split(", ")

        //console.log("arrz1="+arrz1)

//***************************************************
        result = await driver.findElements(By.css("div#box-campaigns.box s.regular-price"))
        res = await result.map(z3 => z3.getCssValue(["text-decoration-line"]))
        let z3 = await Promise.all(res)


        result = await driver.findElements(By.css("div#box-campaigns.box s.regular-price"))
        res = await result.map(z4 => z4.getCssValue(["font-weight"]))
        let z4 = await Promise.all(res)

        //console.log("z4==="+z4)

        result = await driver.findElements(By.css("div#box-campaigns.box strong.campaign-price"))
        res = await result.map(z7 => z7.getTagName())
        let z7 = await Promise.all(res)

        //console.log("z7==="+z7)

        driver.get('http://localhost/litecart/en/rubber-ducks-c-1/subcategory-c-2/yellow-duck-p-1')
        //******* перешли на страницу товара******


        result = await driver.findElements(By.css("div#box-product.box h1.title"))
        res = await result.map(xnamen => xnamen.getAttribute(["textContent"]))
        let xnamen = await Promise.all(res)
       // console.log("имя на 2 странице="+xnamen)


        result = await driver.findElements(By.css("div.information s.regular-price"))
        res = await result.map(xn => xn.getAttribute(["innerText"]))
        let xn = await Promise.all(res)
       // console.log("цена на 2 странице="+xn)


        result = await driver.findElements(By.css("div.information s.regular-price"))
        res = await result.map(xns => xns.getCssValue(["font-size"]))
        let xns = await Promise.all(res)
        //console.log("размер щрифта обычной цены 2="+parseFloat(xns))


        result = await driver.findElements(By.css("div.information strong.campaign-price"))
        res = await result.map(yn => yn.getAttribute(["innerText"]))
        let yn = await Promise.all(res)
        //console.log("цена на 2 странице="+yn)


        result = await driver.findElements(By.css("div.information strong.campaign-price"))
        res = await result.map(yns => yns.getCssValue(["font-size"]))
        let yns = await Promise.all(res)

        //console.log("размер щрифта акционной цены 2="+parseFloat(yns))

        result = await driver.findElements(By.css("div.information s.regular-price"))
        res = await result.map(zn => zn.getCssValue(["color"]))
        let zn = await Promise.all(res)
        zn= await zn[0]
        let  zzn =await zn.slice([5],[zn.length-1])
        let arrzzn = zzn.split(", ")

        //console.log(arrzzn)


        result = await driver.findElements(By.css("div.information strong.campaign-price"))
        res = await result.map(z1n => z1n.getCssValue(["color"]))
        let z1n = await Promise.all(res)
        z1n= await z1n[0]
        let  zz1n =await z1n.slice([5],[z1n.length-1])
        let arrz1n = zz1n.split(", ")
        //console.log(arrz1n)


        result = await driver.findElements(By.css("div.information strong.campaign-price"))
        res = await result.map(z5 => z5.getCssValue(["font-weight"]))
        let z5 = await Promise.all(res)

        //console.log("z5==="+z5)


        result = await driver.findElements(By.css("div.information strong.campaign-price"))
        res = await result.map(z6 => z6.getTagName())
        let z6 = await Promise.all(res)

        //console.log("z6==="+z6)

        driver.navigate().back();
        //******************* вернулись назад   names compare ************************
        if(xname[0] !== xnamen[0]){console.log("имена не совпадают!!!")}
        if(x[0] !== xn[0]){console.log("цены не совпадают!!!")}
        if(y[0] !== yn[0]){console.log("цены не совпадают!!!")}
        if (arrzz[0] !== arrzz[1] || arrzz[1] !== arrzz[2] ){console.log("цвет не серый!!!"+arrzz[0],arrzz[1],arrzz[2])}
        if (z3[0] !== "line-through"){console.log("зачеркнутость!="+z3[0])}
        if (arrz1[1] != "0" || arrz1[2] != "0"){console.log("цвет не красный!"+arrz1[1],arrz1[2])}
        if (arrz1n[1] != "0" || arrz1n[2] != "0"){console.log("цвет не красный!"+arrz1n[1],arrz1n[2])}
        if (parseFloat(xs) < parseFloat(ys) || parseFloat(xns) < parseFloat(yns) ){}
        else {console.log("размер шрифта цены!")}
        if (z6 != "strong" || z7 != "strong" ){console.log("шрифт не жирный!")}

    });

     test.after(function() {
     driver.quit()
     } );

});
