var app = require("ProtVista");
new app(
    {
        el: yourDiv, text: 'biojs',
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
