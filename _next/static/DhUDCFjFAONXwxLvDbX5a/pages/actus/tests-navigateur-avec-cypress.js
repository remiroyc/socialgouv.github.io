(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{OrIB:function(e,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/actus/tests-navigateur-avec-cypress",function(){var e=n("Phl6");return{page:e.default||e}}])},Phl6:function(e,a,n){"use strict";n.r(a),n.d(a,"meta",function(){return d}),n.d(a,"default",function(){return g});var t=n("qNsG"),s=n("0iUn"),o=n("sLSF"),r=n("MI3g"),m=n("a7VT"),p=n("Tit0"),c=n("q1tI"),l=n.n(c),i=n("6qfE"),u=n("tKWW"),d={title:"Tests de navigateur automatisés avec cypress.io",hero:{background:"/static/images/actus/cypress.io/tim-foster-242021-unsplash.jpg",alt:"Photo by Tim Foster"}},g=function(e){function a(e){var n;return Object(s.default)(this,a),(n=Object(r.default)(this,Object(m.default)(a).call(this,e))).layout=null,n}return Object(p.default)(a,e),Object(o.default)(a,[{key:"render",value:function(){var e=this.props,a=e.components;Object(t.a)(e,["components"]);return l.a.createElement(i.MDXTag,{name:"wrapper",components:a},l.a.createElement(u.l,{meta:d},l.a.createElement(i.MDXTag,{name:"h1",components:a},'Automatisation des tests navigateurs ("e2e")'),l.a.createElement(i.MDXTag,{name:"p",components:a},"Que ce soit pour ",l.a.createElement(i.MDXTag,{name:"strong",components:a,parentName:"p"},"empêcher les régressions")," fonctionnelles, tester de nouvelles implémentations ou ",l.a.createElement(i.MDXTag,{name:"strong",components:a,parentName:"p"},"gagner du temps en recette"),", les tests automatisés sont un outil précieux pour fiabiliser les applications web."),l.a.createElement(i.MDXTag,{name:"p",components:a},"Ce type de test, ",l.a.createElement(i.MDXTag,{name:"strong",components:a,parentName:"p"},"en complément des code reviews et des tests unitaires"),", permet de detecter les bugs le plus tôt possible, avant qu'ils n'atteignent la production, ce qui offre potentiellement un meilleur service aux usagers tout en permettant des économies sur les coûts des correctifs."),l.a.createElement(i.MDXTag,{name:"p",components:a},"En effet, le coût de correction d'un bug augmente de manière exponentielle avec le temps."),l.a.createElement("br",null),l.a.createElement(i.MDXTag,{name:"p",components:a},l.a.createElement(i.MDXTag,{name:"img",components:a,parentName:"p",props:{src:"/static/images/actus/cypress.io/defect-costs.jpg",alt:"le coût des bugs"}})),l.a.createElement("br",null),l.a.createElement(i.MDXTag,{name:"p",components:a},"En plus de fiabiliser une application, ce type de test offre d'autres vertues : augmenter la confiance technique, et ainsi permettre aux développeurs(ses) de pouvoir refactorer le code ",l.a.createElement(i.MDXTag,{name:"strong",components:a,parentName:"p"},"sans avoir peur de casser quelque chose"),"."),l.a.createElement(i.MDXTag,{name:"blockquote",components:a},l.a.createElement(i.MDXTag,{name:"p",components:a,parentName:"blockquote"},"La maintenance n'est pas un problème mais une solution  ",l.a.createElement(i.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"http://twitter.com/f_leguedois",title:"@f_leguedois"}},"©"))),l.a.createElement(i.MDXTag,{name:"p",components:a},"Cette maintenance préventive, toujours nécessaire mais trop souvent mise de côté, permet d'allonger la durée de vie des applications en maintenant un niveau de qualité élevé, ce qui permettra de mieux absorber les changements inévitables de tout projet numérique."),l.a.createElement(i.MDXTag,{name:"h2",components:a},"cypress.io"),l.a.createElement(i.MDXTag,{name:"p",components:a},"Dans cet article, nous vous présentons ",l.a.createElement(i.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"http://cypress.io"}},"cypress.io"),", un outil open-source qui permet de piloter les navigateurs web Chrome/Canary/Chromium, d'executer des scénarios complexes, de faire des mesures, et de remonter les anomalies."),l.a.createElement(i.MDXTag,{name:"p",components:a},"L'outil peut-être utilisé en local, pendant le développement ou la recette, ou sur une infrastructure dédiée, dans le cadre de l'intégration continue : chaque changement sur le code redéclenche alors touts les tests avant un éventuel déploiement."),l.a.createElement(i.MDXTag,{name:"blockquote",components:a},l.a.createElement(i.MDXTag,{name:"p",components:a,parentName:"blockquote"},"⚠️ Contrairement à d'autres solutions comme ",l.a.createElement(i.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://www.seleniumhq.org/"}},"Selenium")," ou ",l.a.createElement(i.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://saucelabs.com"}},"SauceLabs"),", Cypress ne fonctionne qu'avec des navigateurs à base de Chromium.")),l.a.createElement(i.MDXTag,{name:"h3",components:a},"Donc pourquoi utiliser cypress.io ?"),l.a.createElement(i.MDXTag,{name:"p",components:a},"Cypress permet de coder vos scénarios en JavaScript, un language accessible à tous et est ",l.a.createElement(i.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://github.com/cypress-io/cypress/"}},"disponible sur GitHub")," avec une grande communauté et une ",l.a.createElement(i.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://docs.cypress.io/"}},"très bonne documentation"),"."),l.a.createElement(i.MDXTag,{name:"p",components:a},"Cypress donne également accès à la couche réseau du navigateur et permet de faire des captures d'écran ou vidéo des séquences de test."),l.a.createElement(i.MDXTag,{name:"p",components:a},"L'experience utilisateur lors de la création des tests est bluffante, l'",l.a.createElement(i.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://docs.cypress.io/api/introduction/api.html"}},"API très complète")," et de nombreux détails ont été pensés pour permettre d'écrire et d'executer les tests très rapidement. ",l.a.createElement(i.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://twitter.com/search?q=%23LittleBigDetails"}},"#LittleBigDetails")),l.a.createElement(i.MDXTag,{name:"p",components:a},"Démo en 2 minutes :"),l.a.createElement("iframe",{src:"https://player.vimeo.com/video/237527670?title=0&byline=0&portrait=0",width:"640",height:"360",frameBorder:"0",webkitAllowFullscreen:!0,mozAllowFullscreen:!0,allowFullScreen:!0}),l.a.createElement(i.MDXTag,{name:"h2",components:a},"Mise en oeuvre"),l.a.createElement(i.MDXTag,{name:"p",components:a},"Pour démarrer, le plus simple est d'utiliser l'installeur officiel sur ",l.a.createElement(i.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://www.cypress.io/"}},"cypress.io"),"."),l.a.createElement(i.MDXTag,{name:"p",components:a},"Vous devez installer NodeJS et npm sur votre poste et ",l.a.createElement(i.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://docs.cypress.io/guides/getting-started/installing-cypress.html"}},"suivre le quickstart"),"."),l.a.createElement(i.MDXTag,{name:"p",components:a},"Dans votre projet, créez un fichier dans ",l.a.createElement(i.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"./cypress/integration/test1.spec.js"),"."),l.a.createElement(i.MDXTag,{name:"p",components:a},"Coller le code suivant, c'est un exemple de base pour démarrer."),l.a.createElement(i.MDXTag,{name:"pre",components:a},l.a.createElement(i.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"hljs language-js"}},l.a.createElement(i.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-comment"}},"// exemple simpliste de test navigateur"),"\ndescribe(",l.a.createElement(i.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},'"L\'utilisateur peut accéder à une convention collective"'),", () => {\n  it.only(",l.a.createElement(i.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},'"Recherche de la CCN #843"'),", () => {\n    ",l.a.createElement(i.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-comment"}},"// va sur la page de recherche legifrance"),"\n    cy.visit(",l.a.createElement(i.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},'"http://www.legifrance.gouv.fr/initRechConvColl.do"'),");\n\n    ",l.a.createElement(i.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-comment"}},'//remplis le champ "IDCC" avec "843"'),"\n    cy.get(",l.a.createElement(i.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},'"#champ3"'),").type(",l.a.createElement(i.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},'"843"'),");\n\n    ",l.a.createElement(i.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-comment"}},"// lances la recherche"),"\n    cy.get(",l.a.createElement(i.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},"'input[value=\"Rechercher\"]'"),").click();\n\n    ",l.a.createElement(i.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-comment"}},"// vérifies qu'on a bien un résultat"),"\n    cy.get(",l.a.createElement(i.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},'"li.resultat1"'),").should(",l.a.createElement(i.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},'"have.length"'),", ",l.a.createElement(i.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-number"}},"1"),");\n\n    ",l.a.createElement(i.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-comment"}},"// visite l'url du lien trouvé"),"\n    cy\n      .get(",l.a.createElement(i.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},'"li.resultat1 a"'),")\n      .then(",l.a.createElement(i.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-function"}},l.a.createElement(i.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"hljs-params"}},"node")," =>")," cy.visit(node[",l.a.createElement(i.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-number"}},"0"),"].href))\n      ",l.a.createElement(i.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-comment"}},"// verifies qu'on a 178 liens (annexes)"),"\n      .then(",l.a.createElement(i.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-function"}},l.a.createElement(i.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"hljs-params"}},"()")," =>")," cy.get(",l.a.createElement(i.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},'"ul.lien_texte li"'),").should(",l.a.createElement(i.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},'"have.length"'),", ",l.a.createElement(i.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-number"}},"178"),"))\n\n});")),l.a.createElement(i.MDXTag,{name:"p",components:a},"Comme vous pouvez le voir, on se base sur les ",l.a.createElement(i.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://developer.mozilla.org/fr/docs/Web/CSS/S%C3%A9lecteurs_CSS"}},"selecteurs CSS")," pour cibler précisément les éléments de la page à tester. L'",l.a.createElement(i.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://docs.cypress.io/api/introduction/api.html"}},"API de cypress")," permet ensuite de déclencher des actions comme ",l.a.createElement(i.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"visit()"),", ",l.a.createElement(i.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"type()"),", ",l.a.createElement(i.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"click()")," et de définir des assertions(",l.a.createElement(i.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"should"),") qui définissent les conditions de validité de notre test."),l.a.createElement(i.MDXTag,{name:"p",components:a},"Ensuite, depuis le repertoire de votre projet, lancez ",l.a.createElement(i.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"./node_modules/.bin/cypress open")),l.a.createElement(i.MDXTag,{name:"p",components:a},"Les tests vont alors s'executer dans une fenêtre Chrome dédiée :"),l.a.createElement(i.MDXTag,{name:"p",components:a},l.a.createElement(i.MDXTag,{name:"img",components:a,parentName:"p",props:{src:"/static/images/actus/cypress.io/screenshot-legifrance.jpg",alt:"cypress en action"}})),l.a.createElement(i.MDXTag,{name:"p",components:a},"Cette interface permet de vérifier le bon déroulement des tests et la validité des selecteurs CSS. Dès que vous modifiez un test, il se relancera automatiquement."),l.a.createElement(i.MDXTag,{name:"p",components:a},"Complétez ensuite votre suite de test pour couvrir les scénarios critiques de votre application."),l.a.createElement(i.MDXTag,{name:"h2",components:a},"Industrialisation"),l.a.createElement(i.MDXTag,{name:"p",components:a},"Une fois vos tests opérationnels, vous pouvez les intégrer dans une chaine d'intégration continue, avec CircleCI, travis, ou GitLab CI par exemple. Chaque modification sur le projet entrainera alors automatiquement l'execution des tests."),l.a.createElement(i.MDXTag,{name:"p",components:a},"Cette automatisation entraine d'autre problématiques : nos tests doivent tourner dans un environnement prédictible, et si notre application fait appel à une API et une base de données, alors nous devons être capable soit de restaurer à la demande des jeux de données de test (les ",l.a.createElement(i.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"fixtures"),"), soit de ",l.a.createElement(i.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"stubber")," (intercepter) les requêtes API pour les remplacer par des données de test."),l.a.createElement(i.MDXTag,{name:"p",components:a},"C'est au prix de cet effort d'automatisation qui rammène de la confiance que nous pourrons rendre nos applications replicables, aller vers des ",l.a.createElement(i.MDXTag,{name:"strong",components:a,parentName:"p"},"processus DevOps")," et avoir le sérénité nécessaire pour faire du déploiement continu."),l.a.createElement(i.MDXTag,{name:"h2",components:a},"Astuces"),l.a.createElement(i.MDXTag,{name:"p",components:a},"[todo]"),l.a.createElement(i.MDXTag,{name:"h2",components:a},"Conclusion"),l.a.createElement(i.MDXTag,{name:"p",components:a},"[todo]")))}}]),a}(l.a.Component)},qNsG:function(e,a,n){"use strict";var t=n("4mXO"),s=n.n(t),o=n("pLtp"),r=n.n(o);function m(e,a){if(null==e)return{};var n,t,o=function(e,a){if(null==e)return{};var n,t,s={},o=r()(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||(s[n]=e[n]);return s}(e,a);if(s.a){var m=s()(e);for(t=0;t<m.length;t++)n=m[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(a,"a",function(){return m})}},[["OrIB",1,0]]]);