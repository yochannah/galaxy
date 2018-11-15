<%
    app_root = h.url_for("/static/plugins/visualizations/protvista/static/")
%>
<!DOCTYPE html>
<html>
<head lang="en">
    <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1"/>
    <title>Protein Features</title>
    ${h.javascript_link( app_root +  "js/protvista.js" )}
    ${h.javascript_link( app_root +  "index.js" )}
    ${h.stylesheet_link(app_root + 'css/main.css' )}
</head>
<body>
    <div>
        <div class="protvista-galaxy-div"></div>
    </div>
</body>
</html>
