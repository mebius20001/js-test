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
var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until,
    test = require('selenium-webdriver/testing');

test.describe('Google Search', function() {
    var driver;

    test.before(function *() {
        driver = new webdriver.Builder().forBrowser('chrome').build();
    });



/*
    function test_h1() {
        try {
            driver.findElements(By.css("h1"))>0;
            //console.log("find h1 !") ;
        }
        catch (NoSuchElement){console.log("Can't find h1 !")}
    };
*/
//   id="box-apps-menu"



    function test_order(newarray,nOfColumn) {
        let  sorted = true;

        for (let i = 1;   i < newarray.length; i++ )
        {
            if (newarray[i - 1][nOfColumn] > newarray[i][nOfColumn]) {
                sorted = false;
                сonsole.log("UMM!"+sorted);
                break;
            }
           // else  { console.log("Sorted!!!")}
        }

        for (let i = 0;   i < newarray.length; i++ ) {
            if (newarray[i][5] > 0) {

                console.log(newarray[i][5]);

                driver.findElement(By.linkText(newarray[i][4])).click();//go to link (if > 0)

                driver.findElements(By.css("table#table-zones.dataTable tbody tr"))//поиск во вложенной таблице

                    .then(result => result.map(x => x.getAttribute(["innerText"])))
                    .then(res => Promise.all(res))
                    .then(x => {
                       let countries = x.map(value => value.split("\t")); //original code


                        for (let i = 1;   i < (countries.length-1); i++ ){
                            if (newarray[i - 1][nOfColumn] > newarray[i][nOfColumn]) {
                                sorted = false;
                                сonsole.log("UMM!"+sorted);
                                break;
                            }
                           //  else  { console.log("Sorted!!!")}
                        }

                    });

                    driver.navigate().back();



            };

        };
//****************************
        driver.findElement(By.linkText("Geo Zones")).click();
        driver.findElement(By.linkText("Canada")).click();


       driver.findElements(By.css("option[selected='selected']"))
       .then(result => result.map(x => x.getAttribute(["innerText"])))
       .then(res => Promise.all(res))
       .then(x => { let countries = x.map(value => value.split("\t"));

            for (i=0; i < countries.length; i++){
                 countries.splice([i],1);
            };

           for (let i = 1;   i < (countries.length-1); i++ ){
               if (newarray[i - 1][nOfColumn] > newarray[i][nOfColumn]) {
                   sorted = false;
                   сonsole.log("UMM!"+sorted);
                   break;
               }
               //  else  { console.log("Sorted!!!")}
           }
       });
        driver.navigate().back();


        //************************************************************
        driver.findElement(By.linkText("United States of America")).click();


        driver.findElements(By.css("option[selected='selected']"))
            .then(result => result.map(x => x.getAttribute(["innerText"])))
            .then(res => Promise.all(res))
            .then(x => { let countries = x.map(value => value.split("\t"));

                for (i=0; i < countries.length; i++){
                    countries.splice([i],1);
                };

                for (let i = 1;   i < (countries.length-1); i++ ){
                    if (newarray[i - 1][nOfColumn] > newarray[i][nOfColumn]) {
                        sorted = false;
                        сonsole.log("UMM!"+sorted);
                        break;
                    }
                    //  else  { console.log("Sorted!!!")}
                }
            });
        driver.navigate().back();


//***********************************************************
    };


    test.it('should append querry to title', function*() {
        driver.get('http://localhost/litecart/admin/');
        driver.findElement(By.name('username')).sendKeys('admin');
        driver.findElement(By.name('password')).sendKeys('admin');
        driver.findElement(By.name('login')).click();
        driver.findElement(By.linkText("Countries")).click();

        driver.findElements(By.css("table.dataTable tr.row"))

        .then(result => result.map(x => x.getAttribute(["innerText"])))
            .then(res => Promise.all(res))
            .then(x => { let countries = x.map(value => value.split("\t"));


            // console.log(countries[1][4]);
              test_order(countries,4);

              //  driver.findElement(By.linkText(countries[1][4])).click();

            });

    });

    test.after(function() {
        driver.quit()
    } );

});

