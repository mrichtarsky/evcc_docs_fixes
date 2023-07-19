"use strict";(self.webpackChunkevcc_docs=self.webpackChunkevcc_docs||[]).push([[5161],{5162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294),r=a(6010);const l={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,i),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>y});var n=a(7462),r=a(7294),l=a(6010),i=a(2466),s=a(6550),u=a(1980),o=a(7392),c=a(12);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function d(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,o.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:a}=e;const n=(0,s.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,u._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=d(e),[i,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[u,o]=k({queryString:a,groupId:n}),[p,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,c.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),g=(()=>{const e=u??p;return m({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{g&&s(g)}),[g]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),o(e),h(e)}),[o,h,l]),tabValues:l}}var g=a(2389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function N(e){let{className:t,block:a,selectedValue:s,selectValue:u,tabValues:o}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),d=e=>{const t=e.currentTarget,a=c.indexOf(t),n=o[a].value;n!==s&&(p(t),u(n))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},o.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},i,{className:(0,l.Z)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":s===t})}),a??t)})))}function b(e){let{lazy:t,children:a,selectedValue:n}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function v(e){const t=h(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",f.tabList)},r.createElement(N,(0,n.Z)({},e,t)),r.createElement(b,(0,n.Z)({},e,t)))}function y(e){const t=(0,g.Z)();return r.createElement(v,(0,n.Z)({key:String(t)},e))}},9580:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>k,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var n=a(7462),r=(a(7294),a(3905)),l=(a(5657),a(4866)),i=a(5162);const s={sidebar_position:2},u="Debian, Ubuntu, Raspberry Pi",o={unversionedId:"installation/linux",id:"installation/linux",title:"Debian, Ubuntu, Raspberry Pi",description:"Raspberry Pi 1 (A, B, A+, B+, Zero, Zero W) m\xfcssen die Manuelle Installation verwenden!",source:"@site/docs/installation/linux.mdx",sourceDirName:"installation",slug:"/installation/linux",permalink:"/docs/installation/linux",draft:!1,editUrl:"https://github.com/evcc-io/docs/tree/main/docs/installation/linux.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Erste Schritte",permalink:"/docs/installation/"},next:{title:"macOS",permalink:"/docs/installation/macos"}},c={},p=[{value:"Erstinstallation",id:"erstinstallation",level:2},{value:"Aktualisierung",id:"aktualisierung",level:2},{value:"Downgrade",id:"downgrade",level:2},{value:"Systemdienst",id:"systemdienst",level:2},{value:"Testen",id:"testen",level:2}],d={toc:p},m="wrapper";function k(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"debian-ubuntu-raspberry-pi"},"Debian, Ubuntu, Raspberry Pi"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Raspberry Pi 1 (A, B, A+, B+, Zero, Zero W) m\xfcssen die ",(0,r.kt)("a",{parentName:"p",href:"manual"},"Manuelle Installation")," verwenden!")),(0,r.kt)("h2",{id:"erstinstallation"},"Erstinstallation"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},'W\xe4hrend der Installation wird ein user "evcc" angelegt, deshalb sollte der angemeldete Nutzer nicht den Namen "evcc" haben.')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\xd6ffne ein Terminal/Eingabeaufforderung")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Installiere die ben\xf6tigten Abh\xe4ngigkeiten:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo apt install -y debian-keyring debian-archive-keyring apt-transport-https curl\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"F\xfcge das evcc APT Repository hinzu:"))),(0,r.kt)(l.Z,{groupId:"release-type",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Release",label:"Release",default:!0,mdxType:"TabItem"},"Die aktuelle stabile Version",(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"curl -1sLf \\\n  'https://dl.cloudsmith.io/public/evcc/stable/setup.deb.sh' \\\n  | sudo -E bash\n"))),(0,r.kt)(i.Z,{value:"Nightly",label:"Nightly",mdxType:"TabItem"},"Bis zu t\xe4gliche Aktualisierung mit dem neuesten Programmcode",(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"curl -1sLf \\\n  'https://dl.cloudsmith.io/public/evcc/unstable/setup.deb.sh' \\\n  | sudo -E bash\n")))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"https://cloudsmith.com"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/OSS%20hosting%20by-cloudsmith-blue?logo=cloudsmith&style=flat-square",alt:"Hosted By: Cloudsmith"}))),(0,r.kt)("p",{parentName:"admonition"},"Wir bedanken uns bei ",(0,r.kt)("a",{parentName:"p",href:"https://cloudsmith.com"},"Cloudsmith")," f\xfcr das Hosting!\nCloudsmith ist ein Service, welcher die Entwicklung von Software und Dienstleistungen f\xfcr kostenlose und freie Plattformen erm\xf6glicht.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Aktualisiere die Paketliste:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo apt update\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Installiere evcc:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo apt install -y evcc\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Starte den evcc-Server:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo systemctl start evcc\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Pr\xfcfe die Installation und \xf6ffne einen Browser und gibt die folgende URL ein: ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:7070"),". Die evcc Oberfl\xe4che sollte im Demo Modus zu sehen sein.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Stoppe den evcc-Server:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo systemctl stop evcc\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Starte die Konfiguration und folge den Anweisungen im Terminal Fenster:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"evcc configure\n")),(0,r.kt)("p",{parentName:"li"},"Sofern alle Ger\xe4te korrekt konfiguriert sind, kannst du mit den n\xe4chsten Schritten fortfahren."),(0,r.kt)("admonition",{parentName:"li",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Unter Homeassist ist ",(0,r.kt)("inlineCode",{parentName:"p"},"configure")," nicht m\xf6glich. Hier bietet es sich an, evcc auf Windows/Mac zu installieren, dort ",(0,r.kt)("inlineCode",{parentName:"p"},"evcc configure")," auszuf\xfchren und die so erstellte evcc.yaml zu kopieren.")),(0,r.kt)("admonition",{parentName:"li",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Fortgeschrittene Anwender (z.B. mit evcc Erfahrung oder technischem Know-How) k\xf6nnen auch alternativ folgenden Aufruf verwenden:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"evcc configure --advanced\n")),(0,r.kt)("p",{parentName:"admonition"},"Dieser Modus bietet weitere (technisch fortgeschrittene) Einstellm\xf6glichkeiten."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Teste, ob die Konfiguration funktioniert"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"evcc -c evcc.yaml\n")),(0,r.kt)("p",{parentName:"li"},"\xd6ffne einen Browser und gibt die folgende URL ein: ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:7070"),". Die evcc Oberfl\xe4che sollte nun mit den eigenen Ger\xe4ten zu sehen sein.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Wenn alles funktioniert beende evcc durch dr\xfccken der Tastenkombination ",(0,r.kt)("inlineCode",{parentName:"p"},"CTRL-C"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Verschiebe die erstellte Konfigurationsdatei in den Zielordner:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo mv evcc.yaml /etc\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Starte evcc neu:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo systemctl start evcc\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Gehe zur\xfcck zum Browser und lade die evcc Seite neu. Die Oberfl\xe4che sollte nun mit deinen konfigurierten Ger\xe4ten zu sehen sein."))),(0,r.kt)("h2",{id:"aktualisierung"},"Aktualisierung"),(0,r.kt)("p",null,"Um auf eine neue Version von evcc zu aktualisieren, f\xfchre folgende Schritte durch:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\xd6ffne ein Terminal/Eingabeaufforderung")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Aktualisiere den Paketbestand:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo apt update\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Installiere evcc:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo apt --only-upgrade install -y evcc\n")))),(0,r.kt)("h2",{id:"downgrade"},"Downgrade"),(0,r.kt)("p",null,"Mit folgendem Befehl kann man auf eine \xe4ltere Version von evcc wechseln:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"  sudo apt install evcc=x.xxx.x # Versionsnummer\n")),(0,r.kt)("h2",{id:"systemdienst"},"Systemdienst"),(0,r.kt)("p",null,"evcc l\xe4uft als Systemdienst im Hintergrund. Mit folgenden Befehlen kann dieser Dienst in Zukunft gesteuert werden."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo systemctl status evcc # zeigt den Status\nsudo systemctl start evcc # startet den Dienst\nsudo systemctl stop evcc # stoppt den Dienst\nsudo systemctl restart evcc # startet den Dienst neu\nsudo systemctl enable evcc # aktiviert den Dienst\nsudo systemctl disable evcc # deaktiviert den Dienst\n")),(0,r.kt)("h2",{id:"testen"},"Testen"),(0,r.kt)("p",null,"Pr\xfcfe die Installation"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Zeige den laufenden evcc Service an:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo systemctl status evcc\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Pr\xfcfe die letzten Log-Ausgaben des evcc Services:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'sudo journalctl -u evcc --since "yesterday"\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Pr\xfcfe die evcc Meter-Konfiguration:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo evcc -l debug meter\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Pr\xfcfe die evcc Charger-Konfiguration:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo evcc -l debug charger\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Pr\xfcfe die evcc Vehicle-Konfiguration:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo evcc -l debug vehicle\n")))),(0,r.kt)("p",null,"\xd6ffne einen Browser und gibt die folgende URL ein: ",(0,r.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:7070"),"."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Ersetze ",(0,r.kt)("inlineCode",{parentName:"p"},"127.0.0.1")," mit der IP Adresse oder dem Hostnamen des Computers, falls der Browser nicht auf dem gleichen Computer ge\xf6ffnet wurde.")))}k.isMDXComponent=!0}}]);