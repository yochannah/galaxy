var app = require("ProtVista");
var theDiv = document.getElementById("protvista-galaxy-div");
new app(
    {
        el: theDiv, text: 'protvista',
        //TODO POINT TO GALAXY FILE
        uniprotacc : 'P05067',
        customDataSource: {
          //TODO POINT TO GALAXY FILE
            url: './data/externalFeatures_',
            // ?? what is this? Maybe 'galaxy'?
            source: 'myLab',
            useExtension: true
        },
        //TODO POINT TO GALAXY FILE
        customConfig: './data/externalConfig.json'
    }
);
