// v3.0.2 - Sep 23, 2016

// Used only in localhost. Delete when in production
selectedDevice = "IP5S32SIL";

// Used to get the SKU from the rogers.com details page but the Function is commented out as the selectedDevice var exists in the global environment.
//function fn_getSKU() {
//    return selectedDevice;
//}


(function run() {

    // save the pricing from fn_getdata
    var getprice = '[deviceDollars].[deviceCents]';

    // If SKU is truthy, run fn_getdata with argument; if SKU is falsy, display message
    selectedDevice && fn_getdata(selectedDevice) || console.log ('No such SKU o_0');

    // pass a sku. loop through phones_json.js. return the pricini
    function fn_getdata(rec_var1) {
        for (var i = 0; i < data.phones.length; i++) {
            if (data.phones[i].deviceSKU == selectedDevice) {
                getprice = getprice.replace('[deviceDollars]', data.phones[i].deviceDollars)
                .replace('[deviceCents]', data.phones[i].deviceCents);
                // console.log(data.phones[i].deviceDollars);
                // console.log(data.phones[i].deviceCents);
                return getprice;
            }
        }
    };
    fn_getdata(selectedDevice);


    // pass a $,$$ value and append the html
    function fn_injhtml(rec_var2) {
        // store EN HTML & CSS code
        var htmlcode_en =
            '<div class="prem-dev--container"><p class="prem-dev--content">Learn more about $<b>' +
            getprice +
            '</b> pricing<br /> on 2-year Premium+ Tab plans</p></div><style>.prem-dev--container {position: absolute;left: 75px;top: 35px;border: 2px solid #FFBF3F;background:white;border-radius: 10px;width: 265px;text-align: center;}.prem-dev--content {line-height: 1.4; padding: 10px 0;background: #FFBF3F;} </style>';
        // inject EN HTML to the rogers.com details page:
        $('#page_id').append(htmlcode_en);
    };
    fn_injhtml(getprice);
})();