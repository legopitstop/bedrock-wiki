import{_ as u,c as d,a as s,w as n,b as e,e as o,d as t,r as i,o as m}from"./404.md.99ad78a2.js";var h="/assets/images/guide/custom_item/ectoplasm_view.png";const ne='{"title":"Create a custom Item","description":"","frontmatter":{"title":"Create a custom Item","category":"Guide","nav_order":5,"prefix":"5. "},"headers":[{"level":2,"title":"Item Behavior","slug":"item-behavior"},{"level":3,"title":"Components","slug":"components"},{"level":3,"title":"Identifier","slug":"identifier"},{"level":3,"title":"Item File","slug":"item-file"},{"level":2,"title":"Item Visuals","slug":"item-visuals"},{"level":3,"title":"Texture","slug":"texture"},{"level":3,"title":"Shortname","slug":"shortname"},{"level":3,"title":"Icon","slug":"icon"},{"level":3,"title":"Item Name","slug":"item-name"},{"level":2,"title":"Overview","slug":"overview"},{"level":2,"title":"Your progress so far","slug":"your-progress-so-far"}],"relativePath":"guide/custom-item.md"}',_={},k=o("",15),b=t("components/"),f=e("div",{class:"language-json line-numbers-mode"},[e("pre",null,[e("code",null,[e("span",{class:"token property"},'"minecraft:food"'),e("span",{class:"token operator"},":"),t(` 
`),e("span",{class:"token property"},'"minecraft:foil"'),e("span",{class:"token operator"},":"),t(),e("span",{class:"token boolean"},"true"),e("span",{class:"token punctuation"},","),t(`
`),e("span",{class:"token property"},'"minecraft:max_stack_size"'),e("span",{class:"token operator"},":"),t(),e("span",{class:"token number"},"16"),t(`
`)])]),e("div",{class:"line-numbers-wrapper"},[e("span",{class:"line-number"},"1"),e("br"),e("span",{class:"line-number"},"2"),e("br"),e("span",{class:"line-number"},"3"),e("br")])],-1),w=o("",12),g=t("BP/items/ectoplasm.json"),v=o("",4),y=t("ectoplasm.json/minecraft:item/"),T=o("",3),x=t("ectoplasm.json/minecraft:item/"),q=o("",2),I=t("BP/items/ectoplasm.json"),P=o("",9),S=t("Download texture here"),A=o("",1),C=t("Your folder layout should look like this: "),j=e("h3",{id:"shortname",tabindex:"-1"},[t("Shortname "),e("a",{class:"header-anchor",href:"#shortname","aria-hidden":"true"},"#")],-1),V=e("p",null,"A shortname is essentially a name that is assigned to the folder path of the texture, so whenever we want to use a texture somewhere, we will use its shortname instead of its folder path.",-1),N=e("p",null,[t("All item shortnames are stored in one file called "),e("code",null,"item_texture.json"),t(" which is in "),e("code",null,"RP/textures"),t(". This contains a list of shortnames and its assigned textures.")],-1),R=t("RP/textures/item_texture.json"),B=o("",3),E=t("RP/textures/item_texture.json/texture_data"),F=o("",5),D=t("ectoplasm.json/minecraft:item/"),W=o("",6),H=t("RP/texts/en_US.lang"),z=o("",5),M=t("BP/items/ectoplasm.json"),G=e("div",{class:"language-json line-numbers-mode"},[e("pre",null,[e("code",null,[e("span",{class:"token punctuation"},"{"),t(`
	`),e("span",{class:"token property"},'"format_version"'),e("span",{class:"token operator"},":"),t(),e("span",{class:"token string"},'"1.16.100"'),e("span",{class:"token punctuation"},","),t(`
	`),e("span",{class:"token property"},'"minecraft:item"'),e("span",{class:"token operator"},":"),t(),e("span",{class:"token punctuation"},"{"),t(`
		`),e("span",{class:"token property"},'"description"'),e("span",{class:"token operator"},":"),t(),e("span",{class:"token punctuation"},"{"),t(`
			`),e("span",{class:"token property"},'"identifier"'),e("span",{class:"token operator"},":"),t(),e("span",{class:"token string"},'"wiki:ectoplasm"'),e("span",{class:"token punctuation"},","),t(`
			`),e("span",{class:"token property"},'"category"'),e("span",{class:"token operator"},":"),t(),e("span",{class:"token string"},'"Items"'),t(`
		`),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},","),t(`
		`),e("span",{class:"token property"},'"components"'),e("span",{class:"token operator"},":"),t(),e("span",{class:"token punctuation"},"{"),t(`
			`),e("span",{class:"token property"},'"minecraft:max_stack_size"'),e("span",{class:"token operator"},":"),t(),e("span",{class:"token number"},"16"),e("span",{class:"token punctuation"},","),t(`
			`),e("span",{class:"token property"},'"minecraft:icon"'),e("span",{class:"token operator"},":"),t(),e("span",{class:"token punctuation"},"{"),t(`
				`),e("span",{class:"token property"},'"texture"'),e("span",{class:"token operator"},":"),t(),e("span",{class:"token string"},'"wiki.ectoplasm"'),t(`
			`),e("span",{class:"token punctuation"},"}"),t(`
		`),e("span",{class:"token punctuation"},"}"),t(`
	`),e("span",{class:"token punctuation"},"}"),t(`
`),e("span",{class:"token punctuation"},"}"),t(`
`)])]),e("div",{class:"line-numbers-wrapper"},[e("span",{class:"line-number"},"1"),e("br"),e("span",{class:"line-number"},"2"),e("br"),e("span",{class:"line-number"},"3"),e("br"),e("span",{class:"line-number"},"4"),e("br"),e("span",{class:"line-number"},"5"),e("br"),e("span",{class:"line-number"},"6"),e("br"),e("span",{class:"line-number"},"7"),e("br"),e("span",{class:"line-number"},"8"),e("br"),e("span",{class:"line-number"},"9"),e("br"),e("span",{class:"line-number"},"10"),e("br"),e("span",{class:"line-number"},"11"),e("br"),e("span",{class:"line-number"},"12"),e("br"),e("span",{class:"line-number"},"13"),e("br"),e("span",{class:"line-number"},"14"),e("br"),e("span",{class:"line-number"},"15"),e("br")])],-1),Y=t("RP/textures/item_texture.json"),O=e("div",{class:"language-json line-numbers-mode"},[e("pre",null,[e("code",null,[e("span",{class:"token punctuation"},"{"),t(`
	`),e("span",{class:"token property"},'"resource_pack_name"'),e("span",{class:"token operator"},":"),t(),e("span",{class:"token string"},'"Ghostly Guide"'),e("span",{class:"token punctuation"},","),t(`
	`),e("span",{class:"token property"},'"texture_name"'),e("span",{class:"token operator"},":"),t(),e("span",{class:"token string"},'"atlas.items"'),e("span",{class:"token punctuation"},","),t(`
	`),e("span",{class:"token property"},'"texture_data"'),e("span",{class:"token operator"},":"),t(),e("span",{class:"token punctuation"},"{"),t(`
		`),e("span",{class:"token property"},'"wiki.ectoplasm"'),e("span",{class:"token operator"},":"),t(),e("span",{class:"token punctuation"},"{"),t(`
			`),e("span",{class:"token property"},'"textures"'),e("span",{class:"token operator"},":"),t(),e("span",{class:"token string"},'"textures/items/ectoplasm"'),t(`
		`),e("span",{class:"token punctuation"},"}"),t(`
	`),e("span",{class:"token punctuation"},"}"),t(`
`),e("span",{class:"token punctuation"},"}"),t(`
`)])]),e("div",{class:"line-numbers-wrapper"},[e("span",{class:"line-number"},"1"),e("br"),e("span",{class:"line-number"},"2"),e("br"),e("span",{class:"line-number"},"3"),e("br"),e("span",{class:"line-number"},"4"),e("br"),e("span",{class:"line-number"},"5"),e("br"),e("span",{class:"line-number"},"6"),e("br"),e("span",{class:"line-number"},"7"),e("br"),e("span",{class:"line-number"},"8"),e("br"),e("span",{class:"line-number"},"9"),e("br")])],-1),U=e("p",null,[t("If you're having some trouble, check the "),e("a",{href:"/items/troubleshooting-items.html"},"Troubleshooting page"),t(". If that doesn't help, compare your results with the "),e("a",{href:"https://github.com/Bedrock-OSS/wiki-addon/tree/main/guide",target:"_blank",rel:"noopener noreferrer"},"example files"),t(".")],-1),$=e("h2",{id:"your-progress-so-far",tabindex:"-1"},[t("Your progress so far "),e("a",{class:"header-anchor",href:"#your-progress-so-far","aria-hidden":"true"},"#")],-1),L=e("ul",null,[e("li",null,"[x] Setup your pack"),e("li",null,"[x] Create a custom item"),e("li",null,"[x] How to format the behavior and resource files for an item"),e("li",null,"[x] What components are and how to use them"),e("li",null,"[x] How to set an items texture"),e("li",null,"[ ] Create a custom entity"),e("li",null,"[ ] Create the entity's loot, spawn rules, and a custom recipe")],-1);function J(K,Q,X,Z,ee,te){const a=i("CodeHeader"),r=i("Spoiler"),l=i("BButton"),p=i("FolderView"),c=i("Checklist");return m(),d("div",null,[k,s(r,{title:"Example Components"},{default:n(()=>[s(a,null,{default:n(()=>[b]),_:1}),f]),_:1}),w,s(a,null,{default:n(()=>[g]),_:1}),v,s(a,null,{default:n(()=>[y]),_:1}),T,s(a,null,{default:n(()=>[x]),_:1}),q,s(a,null,{default:n(()=>[I]),_:1}),P,s(l,{link:"https://raw.githubusercontent.com/Bedrock-OSS/wiki-addon/86b0380310d3d5748a43a4be1f93d4c59668e4bf/guide/guide_RP/textures/items/ectoplasm.png"},{default:n(()=>[S]),_:1}),A,e("p",null,[C,s(p,{paths:["RP/textures/items/ectoplasm.png"]},null,8,["paths"])]),j,V,N,s(a,null,{default:n(()=>[R]),_:1}),B,s(a,null,{default:n(()=>[E]),_:1}),F,s(a,null,{default:n(()=>[D]),_:1}),W,s(a,null,{default:n(()=>[H]),_:1}),z,s(p,{paths:["RP/textures/item_texture.json","RP/textures/items/ectoplasm.png","RP/texts/en_US.lang","RP/texts/languages.json","RP/manifest.json","RP/pack_icon.png","BP/items/ectoplasm.json","BP/texts/en_US.lang","BP/texts/languages.json","BP/manifest.json","BP/pack_icon.png"]},null,8,["paths"]),s(r,{title:"Full ectoplasm.json"},{default:n(()=>[s(a,null,{default:n(()=>[M]),_:1}),G]),_:1}),s(r,{title:"Full item_texture.json"},{default:n(()=>[s(a,null,{default:n(()=>[Y]),_:1}),O]),_:1}),U,$,s(c,null,{default:n(()=>[L]),_:1})])}var ae=u(_,[["render",J]]);export{ne as __pageData,ae as default};