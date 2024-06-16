"use strict";(self.webpackChunkrojo_space=self.webpackChunkrojo_space||[]).push([[9070],{5504:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var i=s(5893),t=s(1151);const l={sidebar_position:5},r="Sync Details",o={id:"sync-details",title:"Sync Details",description:"This page aims to describe how Rojo turns files on the filesystem into Roblox objects.",source:"@site/versioned_docs/version-v0.5/sync-details.md",sourceDirName:".",slug:"/sync-details",permalink:"/docs/v0.5/sync-details",draft:!1,unlisted:!1,editUrl:"https://github.com/rojo-rbx/rojo.space/edit/master/versioned_docs/version-v0.5/sync-details.md",tags:[],version:"v0.5",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Porting an Existing Game",permalink:"/docs/v0.5/getting-started/existing-game"},next:{title:"Recomended Workflows",permalink:"/docs/v0.5/workflows"}},d={},c=[{value:"Overview",id:"overview",level:2},{value:"Limitations",id:"limitations",level:2},{value:"Folders",id:"folders",level:2},{value:"Scripts",id:"scripts",level:2},{value:"Models",id:"models",level:2},{value:"Localization Tables",id:"localization-tables",level:2},{value:"Plain Text",id:"plain-text",level:2},{value:"JSON Modules",id:"json-modules",level:2},{value:"JSON Models",id:"json-models",level:2},{value:"Projects",id:"projects",level:2},{value:"Meta Files",id:"meta-files",level:2},{value:"Meta Files to set Rojo metadata",id:"meta-files-to-set-rojo-metadata",level:3},{value:"Meta Files for Disabled Scripts",id:"meta-files-for-disabled-scripts",level:3},{value:"Meta Files for Tools",id:"meta-files-for-tools",level:3}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",mermaid:"mermaid",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"sync-details",children:"Sync Details"}),"\n",(0,i.jsx)(n.p,{children:"This page aims to describe how Rojo turns files on the filesystem into Roblox objects."}),"\n",(0,i.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Concept"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"File Name"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.a,{href:"#folders",children:"Folders"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"any directory"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{style:{textAlign:"left"},children:["Server ",(0,i.jsx)(n.a,{href:"#scripts",children:"Scripts"})]}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"*.server.lua"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{style:{textAlign:"left"},children:["Client ",(0,i.jsx)(n.a,{href:"#scripts",children:"Scripts"})]}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"*.client.lua"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{style:{textAlign:"left"},children:["Module ",(0,i.jsx)(n.a,{href:"#scripts",children:"Scripts"})]}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"*.lua"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{style:{textAlign:"left"},children:["XML ",(0,i.jsx)(n.a,{href:"#models",children:"Models"})]}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"*.rbxmx"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{style:{textAlign:"left"},children:["Binary ",(0,i.jsx)(n.a,{href:"#models",children:"Models"})]}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"*.rbxm"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.a,{href:"#localization-tables",children:"Localization Tables"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"*.csv"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.a,{href:"#plain-text",children:"Plain Text"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"*.txt"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.a,{href:"#json-modules",children:"JSON Modules"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"*.json"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.a,{href:"#json-models",children:"JSON Models"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"*.model.json"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.a,{href:"#projects",children:"Projects"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"*.project.json"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.a,{href:"#meta-files",children:"Meta Files"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"*.meta.json"})})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"limitations",children:"Limitations"}),"\n",(0,i.jsx)(n.p,{children:"Not all property types can be synced by Rojo in real-time due to limitations of the Roblox Studio plugin API. In these cases, you can usually generate a place file and open it when you start working on a project."}),"\n",(0,i.jsx)(n.p,{children:"Some common cases you might hit are:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Binary data (Terrain, CSG parts)"}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"MeshPart.MeshId"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"HttpService.HttpEnabled"})}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["For a list of all property types that Rojo can reason about, both when live-syncing and when building place files, look at ",(0,i.jsx)(n.a,{href:"https://github.com/Roblox/rbx-dom#property-type-coverage",children:"rbx-dom's type coverage chart"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["This limitation may be solved by ",(0,i.jsx)(n.a,{href:"https://github.com/rojo-rbx/rojo/issues/205",children:"issue #205"})," in the future."]}),"\n",(0,i.jsx)(n.h2,{id:"folders",children:"Folders"}),"\n",(0,i.jsxs)(n.p,{children:["Any directory on the filesystem will turn into a ",(0,i.jsx)(n.code,{children:"Folder"})," instance with the same name."]}),"\n",(0,i.jsx)(n.p,{children:"It is possible for a directory to contain certain files that change what the directory turns into:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["An ",(0,i.jsx)(n.code,{children:"init.lua"}),", ",(0,i.jsx)(n.code,{children:"init.server.lua"}),", or ",(0,i.jsx)(n.code,{children:"init.client.lua"})," file, described in ",(0,i.jsx)(n.a,{href:"#scripts",children:"Scripts"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["An ",(0,i.jsx)(n.code,{children:"init.meta.json"})," file that defines ",(0,i.jsx)(n.code,{children:"className"}),", described in ",(0,i.jsx)(n.a,{href:"#meta-files",children:"Meta Files"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["A ",(0,i.jsx)(n.code,{children:"default.project.json"})," file, described in ",(0,i.jsx)(n.a,{href:"#projects",children:"Projects"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"scripts",children:"Scripts"}),"\n",(0,i.jsxs)(n.p,{children:["Rojo transforms any files with the ",(0,i.jsx)(n.code,{children:"lua"})," extension into the various script instances that Roblox has."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Any file ending in ",(0,i.jsx)(n.code,{children:".server.lua"})," will turn into a ",(0,i.jsx)(n.code,{children:"Script"})," instance."]}),"\n",(0,i.jsxs)(n.li,{children:["Any file ending in ",(0,i.jsx)(n.code,{children:".client.lua"})," will turn into a ",(0,i.jsx)(n.code,{children:"LocalScript"})," instance."]}),"\n",(0,i.jsxs)(n.li,{children:["Any other ",(0,i.jsx)(n.code,{children:".lua"})," file will turn into a ",(0,i.jsx)(n.code,{children:"ModuleScript"})," instance."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Rojo reserves three special script names. These scripts change their parent directory into a script instead of a folder:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"init.server.lua"})," will change its parent directory into a ",(0,i.jsx)(n.code,{children:"Script"})," instance."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"init.client.lua"})," will change its parent directory into a ",(0,i.jsx)(n.code,{children:"LocalScript"})," instance."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"init.lua"})," will change its parent directory into a ",(0,i.jsx)(n.code,{children:"ModuleScript"})," instance."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"For example, these files:"}),"\n",(0,i.jsx)(n.mermaid,{value:"graph TD;\n  my_model(My Model/)\n  init(init.server.lua)\n  foo(foo.lua)\n\n  my_model --\x3e init\n  my_model --\x3e foo"}),"\n",(0,i.jsx)(n.p,{children:"Will turn into these instances in Roblox:"}),"\n",(0,i.jsx)(n.mermaid,{value:'graph TD;\n  my_model("My Model (Script)")\n  foo("Foo (Script)")\n\n  my_model --\x3e foo'}),"\n",(0,i.jsx)(n.p,{children:'Only one "init script" can be present in the same folder.'}),"\n",(0,i.jsx)(n.h2,{id:"models",children:"Models"}),"\n",(0,i.jsxs)(n.p,{children:["Rojo supports both binary (",(0,i.jsx)(n.code,{children:".rbxm"}),") and XML (",(0,i.jsx)(n.code,{children:".rbxmx"}),") models generated by Roblox Studio or another tool."]}),"\n",(0,i.jsxs)(n.p,{children:["Support for ",(0,i.jsx)(n.code,{children:"rbxmx"})," is very good, while support for ",(0,i.jsx)(n.code,{children:"rbxm"})," is still very early, buggy, and lacking features."]}),"\n",(0,i.jsxs)(n.p,{children:["For a rundown of supported types, check out ",(0,i.jsx)(n.a,{href:"https://github.com/rojo-rbx/rbx-dom#property-type-coverage",children:"rbx-dom's type coverage chart"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"localization-tables",children:"Localization Tables"}),"\n",(0,i.jsxs)(n.p,{children:["Any file with the ",(0,i.jsx)(n.code,{children:"csv"})," extension is transformed into a ",(0,i.jsx)(n.code,{children:"LocalizationTable"})," instance. Rojo expects these files to follow the same format that Roblox does when importing and exporting localization information."]}),"\n",(0,i.jsx)(n.p,{children:"An example CSV localization table is:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csv",children:"Key,Source,Context,Example,es\nAck,Ack!,,An exclamation of despair,\xa1Ay!\n"})}),"\n",(0,i.jsx)(n.h2,{id:"plain-text",children:"Plain Text"}),"\n",(0,i.jsxs)(n.p,{children:["Any file with the ",(0,i.jsx)(n.code,{children:"txt"})," extension is transformed into a ",(0,i.jsx)(n.code,{children:"StringValue"})," instance. This is useful for bringing in text data that can be read by scripts at runtime."]}),"\n",(0,i.jsx)(n.h2,{id:"json-modules",children:"JSON Modules"}),"\n",(0,i.jsxs)(n.p,{children:["Any file with the ",(0,i.jsx)(n.code,{children:"json"})," extension that is not a ",(0,i.jsx)(n.a,{href:"#json-models",children:"JSON Model"})," or a ",(0,i.jsx)(n.a,{href:"#project-file",children:"Project File"})]}),"\n",(0,i.jsx)(n.h2,{id:"json-models",children:"JSON Models"}),"\n",(0,i.jsxs)(n.p,{children:["Files ending in ",(0,i.jsx)(n.code,{children:".model.json"})," can be used to describe simple models. They're designed to be hand-written and are useful for instances like ",(0,i.jsx)(n.code,{children:"RemoteEvent"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["A JSON model describing a folder containing a ",(0,i.jsx)(n.code,{children:"Part"})," and a ",(0,i.jsx)(n.code,{children:"RemoteEvent"})," could be written as a file named ",(0,i.jsx)(n.code,{children:"My Cool Model.model.json"})," with:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "ClassName": "Folder",\n  "Children": [\n    {\n      "Name": "RootPart",\n      "ClassName": "Part",\n      "Properties": {\n        "Size": {\n          "Type": "Vector3",\n          "Value": [4, 4, 4]\n        }\n      }\n    },\n    {\n      "Name": "SendMoney",\n      "ClassName": "RemoteEvent"\n    }\n  ]\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"It would turn into these instances:"}),"\n",(0,i.jsx)(n.mermaid,{value:'graph TD;\n  parent("My Cool Model (Folder)")\n  part("RootPart (Part)")\n  remote("SendMoney (RemoteEvent)")\n\n  parent --\x3e part\n  parent --\x3e remote'}),"\n",(0,i.jsx)(n.h2,{id:"projects",children:"Projects"}),"\n",(0,i.jsx)(n.p,{children:"Starting in Rojo 6.0, project files can be included in other project files. This can be useful for reusing pieces between multiple project files."}),"\n",(0,i.jsx)(n.p,{children:"Projects that are intended to be included inside other projects should describe models, not places."}),"\n",(0,i.jsxs)(n.p,{children:["If a directory contains a file named ",(0,i.jsx)(n.code,{children:"default.project.json"}),", Rojo will use the contents of the project file instead of anything else in the directory."]}),"\n",(0,i.jsx)(n.h2,{id:"meta-files",children:"Meta Files"}),"\n",(0,i.jsxs)(n.p,{children:["New in Rojo 0.5 are meta files, named ",(0,i.jsx)(n.code,{children:".meta.json"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Meta files allow attaching extra Rojo data to models defined in other formats, like Roblox's ",(0,i.jsx)(n.code,{children:"rbxm"})," and ",(0,i.jsx)(n.code,{children:"rbxmx"})," model formats, or even Lua scripts."]}),"\n",(0,i.jsxs)(n.p,{children:["This can be used to set Rojo-specific settings like ",(0,i.jsx)(n.code,{children:"ignoreUnknownInstances"}),", or can be used to set properties like ",(0,i.jsx)(n.code,{children:"Disabled"})," on a script."]}),"\n",(0,i.jsx)(n.p,{children:"Meta files can contain:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"className"}),": Changes the ",(0,i.jsx)(n.code,{children:"className"})," of a containing ",(0,i.jsx)(n.code,{children:"Folder"})," into something else.\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Usable only in ",(0,i.jsx)(n.code,{children:"init.meta.json"})," files"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"properties"}),": A map of properties to set on the instance, just like projects\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Usable on anything except ",(0,i.jsx)(n.code,{children:".rbxmx"}),", ",(0,i.jsx)(n.code,{children:".rbxm"}),", and ",(0,i.jsx)(n.code,{children:".model.json"})," files, which already have properties"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ignoreUnknownInstances"}),": Works just like ",(0,i.jsx)(n.code,{children:"$ignoreUnknownInstances"})," in project files"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"meta-files-to-set-rojo-metadata",children:"Meta Files to set Rojo metadata"}),"\n",(0,i.jsxs)(n.p,{children:["Sometimes it's useful to apply properties like ",(0,i.jsx)(n.code,{children:"ignoreUnknownInstances"})," on instances that are defined on the filesystem instead of within the project itself."]}),"\n",(0,i.jsxs)(n.p,{children:["If your project has ",(0,i.jsx)(n.code,{children:"hello.txt"})," and there are instances underneath it that you want Rojo to ignore when live-syncing, you could create ",(0,i.jsx)(n.code,{children:"hello.meta.json"})," with:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "ignoreUnknownInstances": true\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"meta-files-for-disabled-scripts",children:"Meta Files for Disabled Scripts"}),"\n",(0,i.jsxs)(n.p,{children:["Meta files can be used to set properties on ",(0,i.jsx)(n.code,{children:"Script"})," instances, like ",(0,i.jsx)(n.code,{children:"Disabled"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["If your project has ",(0,i.jsx)(n.code,{children:"foo.server.lua"})," and you want to make sure it would be disabled, you could create a ",(0,i.jsx)(n.code,{children:"foo.meta.json"})," next to it with:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "properties": {\n    "Disabled": true\n  }\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"meta-files-for-tools",children:"Meta Files for Tools"}),"\n",(0,i.jsxs)(n.p,{children:["If you wanted to represent a tool containing a script and a model for its handle, create a directory with an ",(0,i.jsx)(n.code,{children:"init.meta.json"})," file in it:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "className": "Tool",\n  "properties": {\n    "Grip": [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1]\n  }\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Instead of a ",(0,i.jsx)(n.code,{children:"Folder"})," instance, you'll end up with a ",(0,i.jsx)(n.code,{children:"Tool"})," instance with the ",(0,i.jsx)(n.code,{children:"Grip"})," property set."]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>o,a:()=>r});var i=s(7294);const t={},l=i.createContext(t);function r(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);