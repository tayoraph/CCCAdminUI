"use strict";(self.webpackChunkCCCAdminUI=self.webpackChunkCCCAdminUI||[]).push([[735],{6735:(Se,j,d)=>{d.r(j),d.d(j,{UicomponentsModule:()=>Te});var It=d(2480),Z=d(4755),b=d(9401),Rt=d(4583),X=d(792),Et=d(5664),t=d(2223),_=d(6012),U=d(1728),Ut=d(5308),O=d(430);let Ot=(()=>{class o{constructor(){this.hidden=!1}ngOnInit(){}toggleBadgeVisibility(){this.hidden=!this.hidden}static#t=this.\u0275fac=function(s){return new(s||o)};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-badge"]],decls:33,vars:1,consts:[[1,"cardWithShadow","theme-card"],[1,"m-b-0"],[1,"b-t-1"],[1,"b-1","shadow-none"],["matBadge","4","matBadgeOverlap","false",1,"f-w-500","text-muted"],["matBadge","4","matBadgeOverlap","false","matBadgeSize","large",1,"f-w-500","text-muted"],[1,"f-w-500","text-muted"],["mat-flat-button","","color","primary","matBadge","8","matBadgePosition","before","matBadgeColor","accent"],["matBadge","15","matBadgeColor","warn"],["mat-flat-button","","color","primary","matBadge","7",3,"matBadgeHidden","click"]],template:function(s,n){1&s&&(t.TgZ(0,"mat-card",0)(1,"mat-card-header")(2,"mat-card-title",1),t._uU(3,"Badges"),t.qZA()(),t.TgZ(4,"mat-card-content",2)(5,"mat-card",3)(6,"mat-card-content")(7,"p")(8,"span",4),t._uU(9,"Text with a badge"),t.qZA()()()(),t.TgZ(10,"mat-card",3)(11,"mat-card-content")(12,"p")(13,"span",5),t._uU(14,"Text with large badge"),t.qZA()()()(),t.TgZ(15,"mat-card",3)(16,"mat-card-content")(17,"p",6),t._uU(18," Button with a badge on the left "),t.TgZ(19,"button",7),t._uU(20," Action "),t.qZA()()()(),t.TgZ(21,"mat-card",3)(22,"mat-card-content")(23,"p",6),t._uU(24," Icon with a badge "),t.TgZ(25,"mat-icon",8),t._uU(26,"home"),t.qZA()()()(),t.TgZ(27,"mat-card",3)(28,"mat-card-content")(29,"p"),t._uU(30," Button toggles badge visibility "),t.TgZ(31,"button",9),t.NdJ("click",function(){return n.toggleBadgeVisibility()}),t._uU(32," Hide "),t.qZA()()()()()()),2&s&&(t.xp6(31),t.Q6J("matBadgeHidden",n.hidden))},dependencies:[_.a8,_.dn,_.dk,_.n5,U.lW,Ut.k,O.Hw],encapsulation:2})}return o})();var tt=d(2840);function R(o,i){return Math.max(0,Math.min(i,o))}d(6076),d(2966),d(1692),d(706),d(7579),d(727),d(4986),d(5963),d(6406),d(9751),d(6451),d(2722),d(8675),d(4004),d(5698),d(8505),d(3900),d(8930);var E=d(9114),T=d(6996);function ne(o,i){if(1&o&&(t.TgZ(0,"mat-chip",26),t._uU(1),t.qZA()),2&o){const e=i.$implicit;t.xp6(1),t.hij(" ",e.name," ")}}function oe(o,i){if(1&o&&(t.TgZ(0,"mat-chip-option",27),t._uU(1),t.qZA()),2&o){const e=i.$implicit;t.Q6J("color",e.color),t.xp6(1),t.hij(" ",e.name," ")}}function re(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"mat-chip-row",28),t.NdJ("removed",function(){const r=t.CHM(e).$implicit,a=t.oxw();return t.KtG(a.remove(r))})("edited",function(n){const a=t.CHM(e).$implicit,l=t.oxw();return t.KtG(l.edit(a,n))}),t._uU(1),t.TgZ(2,"button",29)(3,"mat-icon"),t._uU(4,"cancel"),t.qZA()()()}if(2&o){const e=i.$implicit;t.Q6J("editable",!0)("aria-description","press enter to edit "+e.name),t.xp6(1),t.hij(" ",e.name," "),t.xp6(1),t.uIk("aria-label","remove "+e.name)}}let ae=(()=>{class o{constructor(){this.vegetables=[{name:"apple"},{name:"banana"},{name:"strawberry"},{name:"orange"},{name:"kiwi"},{name:"cherry"}],this.availableColors=[{name:"Primary",color:"primary"},{name:"Accent",color:"accent"},{name:"Warn",color:"warn"}],this.addOnBlur=!0,this.separatorKeysCodes=[tt.K5,tt.OC],this.fruits=[{name:"Lemon"},{name:"Lime"},{name:"Apple"}]}drop(e){(function le(o){return"previousIndex"in o})(e)&&function vt(o,i,e){const s=R(i,o.length-1),n=R(e,o.length-1);if(s===n)return;const r=o[s],a=n<s?-1:1;for(let l=s;l!==n;l+=a)o[l]=o[l+a];o[n]=r}(this.vegetables,e.previousIndex,e.currentIndex)}add(e){const s=(e.value||"").trim();s&&this.fruits.push({name:s}),e.chipInput.clear()}remove(e){const s=this.fruits.indexOf(e);s>=0&&this.fruits.splice(s,1)}edit(e,s){const n=s.value.trim();if(!n)return void this.remove(e);const r=this.fruits.indexOf(e);r>=0&&(this.fruits[r].name=n)}static#t=this.\u0275fac=function(s){return new(s||o)};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-chips"]],decls:66,vars:6,consts:[[1,"cardWithShadow","theme-card"],[1,"m-b-0"],[1,"b-t-1"],[1,"row"],[1,"col-lg-6"],[1,"b-1","shadow-none"],["aria-label","Fish selection"],["color","primary",1,"f-s-14"],[1,"f-s-14"],["color","accent","selected","",1,"f-s-14"],["color","warn",1,"f-s-14"],["aria-label","Dog selection"],["matChipAvatar","","src","/assets/images/profile/user-1.jpg","alt","Photo of a Shiba Inu"],["matChipAvatar","","src","/assets/images/profile/user-2.jpg","alt","Photo of a Shiba Inu"],["color","accent",1,"f-s-14"],["matChipAvatar","","src","/assets/images/profile/user-3.jpg","alt","Photo of a Shiba Inu"],["cdkDropList","","cdkDropListOrientation","horizontal",1,"example-chip",3,"cdkDropListDropped"],["class","example-box f-s-14","cdkDrag","",4,"ngFor","ngForOf"],["aria-label","Color selection",1,"mat-mdc-chip-set-stacked"],["selected","",3,"color",4,"ngFor","ngForOf"],[1,"col-12"],["appearance","outline",1,"w-100"],["aria-label","Enter fruits"],["chipGrid",""],["class","f-s-14",3,"editable","aria-description","removed","edited",4,"ngFor","ngForOf"],["placeholder","New fruit...",3,"matChipInputFor","matChipInputSeparatorKeyCodes","matChipInputAddOnBlur","matChipInputTokenEnd"],["cdkDrag","",1,"example-box","f-s-14"],["selected","",3,"color"],[1,"f-s-14",3,"editable","aria-description","removed","edited"],["matChipRemove",""]],template:function(s,n){if(1&s&&(t.TgZ(0,"mat-card",0)(1,"mat-card-header")(2,"mat-card-title",1),t._uU(3,"Chips"),t.qZA()(),t.TgZ(4,"mat-card-content",2)(5,"div",3)(6,"div",4)(7,"mat-card",5)(8,"mat-card-header")(9,"mat-card-title"),t._uU(10,"Basic"),t.qZA()(),t.TgZ(11,"mat-card-content",2)(12,"mat-chip-listbox",6)(13,"mat-chip-option",7),t._uU(14,"One fish"),t.qZA(),t.TgZ(15,"mat-chip-option",8),t._uU(16,"Two fish"),t.qZA(),t.TgZ(17,"mat-chip-option",9),t._uU(18,"Accent fish"),t.qZA(),t.TgZ(19,"mat-chip-option",10),t._uU(20,"Warn fish"),t.qZA()()()()(),t.TgZ(21,"div",4)(22,"mat-card",5)(23,"mat-card-header")(24,"mat-card-title"),t._uU(25,"Avatar"),t.qZA()(),t.TgZ(26,"mat-card-content",2)(27,"mat-chip-listbox",11)(28,"mat-chip",8),t._UZ(29,"img",12),t._uU(30," Anderson "),t.qZA(),t.TgZ(31,"mat-chip",7),t._UZ(32,"img",13),t._uU(33," Monty "),t.qZA(),t.TgZ(34,"mat-chip",14),t._UZ(35,"img",15),t._uU(36," Mathew "),t.qZA()()()()(),t.TgZ(37,"div",4)(38,"mat-card",5)(39,"mat-card-header")(40,"mat-card-title"),t._uU(41,"Drag n Drop"),t.qZA()(),t.TgZ(42,"mat-card-content",2)(43,"mat-chip-set",16),t.NdJ("cdkDropListDropped",function(a){return n.drop(a)}),t.YNc(44,ne,2,1,"mat-chip",17),t.qZA()()()(),t.TgZ(45,"div",4)(46,"mat-card",5)(47,"mat-card-header")(48,"mat-card-title"),t._uU(49,"Stacked "),t.qZA()(),t.TgZ(50,"mat-card-content",2)(51,"mat-chip-listbox",18),t.YNc(52,oe,2,2,"mat-chip-option",19),t.qZA()()()(),t.TgZ(53,"div",20)(54,"mat-card",5)(55,"mat-card-header")(56,"mat-card-title"),t._uU(57,"Input"),t.qZA()(),t.TgZ(58,"mat-card-content",2)(59,"mat-form-field",21)(60,"mat-label"),t._uU(61,"Favorite Fruits"),t.qZA(),t.TgZ(62,"mat-chip-grid",22,23),t.YNc(64,re,5,4,"mat-chip-row",24),t.TgZ(65,"input",25),t.NdJ("matChipInputTokenEnd",function(a){return n.add(a)}),t.qZA()()()()()()()()()),2&s){const r=t.MAs(63);t.xp6(44),t.Q6J("ngForOf",n.vegetables),t.xp6(8),t.Q6J("ngForOf",n.availableColors),t.xp6(12),t.Q6J("ngForOf",n.fruits),t.xp6(1),t.Q6J("matChipInputFor",r)("matChipInputSeparatorKeyCodes",n.separatorKeysCodes)("matChipInputAddOnBlur",n.addOnBlur)}},dependencies:[Z.sg,E.KE,E.hX,_.a8,_.dn,_.dk,_.n5,T.HS,T.EC,T.RA,T.oH,T.z2,T.iO,T.qH,T.z3,T.J4,O.Hw],styles:[".example-box.cdk-drag-animating[_ngcontent-%COMP%], .example-chip[_ngcontent-%COMP%]   .cdk-drop-list-dragging[_ngcontent-%COMP%]{transition:transform .25s cubic-bezier(0,0,.2,1)}"]})}return o})();var ce=d(3630),y=d(1330);function he(o,i){if(1&o&&(t.TgZ(0,"mat-list-option"),t._uU(1),t.qZA()),2&o){const e=i.$implicit;t.xp6(1),t.hij(" ",e," ")}}function de(o,i){if(1&o&&(t.TgZ(0,"mat-list-option",23),t._uU(1),t.qZA()),2&o){const e=i.$implicit;t.Q6J("value",e),t.xp6(1),t.hij(" ",e," ")}}function pe(o,i){if(1&o&&(t.TgZ(0,"mat-list-item")(1,"mat-icon",24),t._uU(2,"folder"),t.qZA(),t.TgZ(3,"div",25),t._uU(4),t.qZA(),t.TgZ(5,"div",26),t._uU(6),t.ALo(7,"date"),t.qZA()()),2&o){const e=i.$implicit;t.xp6(4),t.Oqu(e.name),t.xp6(2),t.Oqu(t.lcZ(7,2,e.updated))}}function me(o,i){if(1&o&&(t.TgZ(0,"mat-list-item")(1,"mat-icon",24),t._uU(2,"note"),t.qZA(),t.TgZ(3,"div",25),t._uU(4),t.qZA(),t.TgZ(5,"div",26),t._uU(6),t.ALo(7,"date"),t.qZA()()),2&o){const e=i.$implicit;t.xp6(4),t.Oqu(e.name),t.xp6(2),t.Oqu(t.lcZ(7,2,e.updated))}}let ue=(()=>{class o{constructor(){this.typesOfShoes=["Loafers","Sneakers"],this.folders=[{name:"Photos",updated:new Date("1/1/16")},{name:"Recipes",updated:new Date("1/17/16")},{name:"Work",updated:new Date("1/28/16")}],this.notes=[{name:"Vacation Itinerary",updated:new Date("2/20/16")},{name:"Kitchen Remodel",updated:new Date("1/18/16")}]}static#t=this.\u0275fac=function(s){return new(s||o)};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-lists"]],decls:110,vars:7,consts:[[1,"cardWithShadow","theme-card"],[1,"m-b-0"],[1,"b-t-1"],[1,"row"],[1,"col-lg-6"],[1,"b-1","shadow-none"],["role","list"],["role","listitem"],["matListItemTitle","",1,"f-s-16","f-w-600"],["matListItemLine","",1,"mat-body-1"],[1,"mat-body-1"],[2,"max-width","500px"],["lines","3"],["lines","3",1,"mat-body-1"],["shoes",""],[4,"ngFor","ngForOf"],[1,"mat-subtitle-2","f-w-600","p-16","bg-light-primary","rounded"],[3,"multiple"],["shoes2",""],[3,"value",4,"ngFor","ngForOf"],[1,"col-12"],["mat-subheader","",1,"mat-body-2","m-b-16","f-w-600"],["mat-subheader","",1,"mat-body-2","m-y-16","f-w-600"],[3,"value"],["matListItemIcon",""],["matListItemTitle","",1,"mat-body-2","f-w-600"],["matListItemLine","",1,"f-s-14","mat-body-1"]],template:function(s,n){if(1&s&&(t.TgZ(0,"mat-card",0)(1,"mat-card-header")(2,"mat-card-title",1),t._uU(3,"Lists"),t.qZA()(),t.TgZ(4,"mat-card-content",2)(5,"div",3)(6,"div",4)(7,"mat-card",5)(8,"mat-card-header")(9,"mat-card-title"),t._uU(10,"Basic"),t.qZA()(),t.TgZ(11,"mat-card-content",2)(12,"mat-list",6)(13,"mat-list-item",7),t._uU(14,"Item 1"),t.qZA(),t.TgZ(15,"mat-list-item",7),t._uU(16,"Item 2"),t.qZA(),t.TgZ(17,"mat-list-item",7),t._uU(18,"Item 3"),t.qZA()()()()(),t.TgZ(19,"div",4)(20,"mat-card",5)(21,"mat-card-header")(22,"mat-card-title"),t._uU(23,"Two Line"),t.qZA()(),t.TgZ(24,"mat-card-content",2)(25,"mat-list")(26,"mat-list-item")(27,"span",8),t._uU(28,"Title"),t.qZA(),t.TgZ(29,"span",9),t._uU(30,"Second line"),t.qZA()(),t.TgZ(31,"mat-list-item")(32,"span",8),t._uU(33,"Title"),t.qZA(),t.TgZ(34,"span",9),t._uU(35,"Second line"),t.qZA()()()()()(),t.TgZ(36,"div",4)(37,"mat-card",5)(38,"mat-card-header")(39,"mat-card-title"),t._uU(40,"Three Line"),t.qZA()(),t.TgZ(41,"mat-card-content",2)(42,"mat-list")(43,"mat-list-item")(44,"span",8),t._uU(45,"Title"),t.qZA(),t.TgZ(46,"span",9),t._uU(47,"Second line"),t.qZA(),t.TgZ(48,"span",9),t._uU(49,"Third line"),t.qZA()(),t.TgZ(50,"mat-list-item")(51,"span",8),t._uU(52,"Title"),t.qZA(),t.TgZ(53,"span",9),t._uU(54,"Second line. This line will truncate."),t.qZA(),t.TgZ(55,"span",10),t._uU(56,"Third line"),t.qZA()()()()()(),t.TgZ(57,"div",4)(58,"mat-card",5)(59,"mat-card-header")(60,"mat-card-title"),t._uU(61,"Three Line with Text wrapping"),t.qZA()(),t.TgZ(62,"mat-card-content",2)(63,"mat-list",11)(64,"mat-list-item",12)(65,"span",8),t._uU(66,"Title"),t.qZA(),t.TgZ(67,"span",10),t._uU(68,"Secondary line that will wrap because the list lines is explicitly set to 3 lines. Text inside of a `matListItemTitle` or `matListItemLine` will never wrap. "),t.qZA()(),t.TgZ(69,"mat-list-item",13)(70,"span",8),t._uU(71,"Title"),t.qZA(),t.TgZ(72,"span",10),t._uU(73,"Secondary line that will wrap because the list lines is explicitly set to 3 lines. Text inside of a `matListItemTitle` or `matListItemLine` will never wrap. "),t.qZA()()()()()(),t.TgZ(74,"div",4)(75,"mat-card",5)(76,"mat-card-header")(77,"mat-card-title"),t._uU(78,"List with Selection"),t.qZA()(),t.TgZ(79,"mat-card-content",2)(80,"mat-selection-list",null,14),t.YNc(82,he,2,1,"mat-list-option",15),t.qZA(),t.TgZ(83,"p",16),t._uU(84),t.qZA()()()(),t.TgZ(85,"div",4)(86,"mat-card",5)(87,"mat-card-header")(88,"mat-card-title"),t._uU(89,"List with single Selection"),t.qZA()(),t.TgZ(90,"mat-card-content",2)(91,"mat-selection-list",17,18),t.YNc(93,de,2,2,"mat-list-option",19),t.qZA(),t.TgZ(94,"p",16),t._uU(95),t.qZA()()()(),t.TgZ(96,"div",20)(97,"mat-card",5)(98,"mat-card-header")(99,"mat-card-title"),t._uU(100,"List with sections"),t.qZA()(),t.TgZ(101,"mat-card-content",2)(102,"mat-list")(103,"div",21),t._uU(104,"Folders"),t.qZA(),t.YNc(105,pe,8,4,"mat-list-item",15),t._UZ(106,"mat-divider"),t.TgZ(107,"div",22),t._uU(108,"Notes"),t.qZA(),t.YNc(109,me,8,4,"mat-list-item",15),t.qZA()()()()()()()),2&s){const r=t.MAs(81),a=t.MAs(92);t.xp6(82),t.Q6J("ngForOf",n.typesOfShoes),t.xp6(2),t.hij(" Options selected: ",r.selectedOptions.selected.length," "),t.xp6(7),t.Q6J("multiple",!1),t.xp6(2),t.Q6J("ngForOf",n.typesOfShoes),t.xp6(2),t.hij(" Option selected: ",a.selectedOptions.hasValue()?a.selectedOptions.selected[0].value:"None"," "),t.xp6(10),t.Q6J("ngForOf",n.folders),t.xp6(4),t.Q6J("ngForOf",n.notes)}},dependencies:[Z.sg,_.a8,_.dn,_.dk,_.n5,ce.d,y.i$,y.Ub,y.Tg,y.vS,y.Yt,y.gs,y.WW,y.sL,O.Hw,Z.uU],encapsulation:2})}return o})();var K=d(7406);let ge=(()=>{class o{constructor(){}static#t=this.\u0275fac=function(s){return new(s||o)};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-menu"]],decls:165,vars:12,consts:[[1,"cardWithShadow","theme-card"],[1,"m-b-0"],[1,"b-t-1"],[1,"row"],[1,"col-sm-6","col-lg-4"],[1,"b-1","shadow-none"],["mat-flat-button","","color","primary",1,"m-t-8",3,"matMenuTriggerFor"],[1,"cardWithShadow"],["menu","matMenu"],["mat-menu-item",""],["mat-icon-button","","aria-label","Example icon-button with a menu",3,"matMenuTriggerFor"],["name","dots",1,"icon-20"],["mat-menu-item","","disabled",""],["animals","matMenu"],["mat-menu-item","",3,"matMenuTriggerFor"],["vertebrates","matMenu"],["invertebrates","matMenu"],["fish","matMenu"],["amphibians","matMenu"],["reptiles","matMenu"],[1,"col-12"],[1,"col-sm-3"],["mat-flat-button","","color","primary",1,"w-100","m-b-4",3,"matMenuTriggerFor"],["yPosition","above",1,"cardWithShadow"],["aboveMenu","matMenu"],["mat-flat-button","","color","accent",1,"w-100","m-b-4",3,"matMenuTriggerFor"],["yPosition","below",1,"cardWithShadow"],["belowMenu","matMenu"],["mat-flat-button","","color","warn",1,"w-100","m-b-4",3,"matMenuTriggerFor"],["xPosition","before",1,"cardWithShadow"],["beforeMenu","matMenu"],["xPosition","after",1,"cardWithShadow"],["afterMenu","matMenu"]],template:function(s,n){if(1&s&&(t.TgZ(0,"mat-card",0)(1,"mat-card-header")(2,"mat-card-title",1),t._uU(3,"Menu"),t.qZA()(),t.TgZ(4,"mat-card-content",2)(5,"div",3)(6,"div",4)(7,"mat-card",5)(8,"mat-card-header")(9,"mat-card-title"),t._uU(10,"Basic"),t.qZA()(),t.TgZ(11,"mat-card-content",2)(12,"button",6),t._uU(13," Menu "),t.qZA(),t.TgZ(14,"mat-menu",7,8)(16,"button",9),t._uU(17,"Item 1"),t.qZA(),t.TgZ(18,"button",9),t._uU(19,"Item 2"),t.qZA()()()()(),t.TgZ(20,"div",4)(21,"mat-card",5)(22,"mat-card-header")(23,"mat-card-title"),t._uU(24,"with Icons"),t.qZA()(),t.TgZ(25,"mat-card-content",2)(26,"button",10)(27,"mat-icon"),t._UZ(28,"i-tabler",11),t.qZA()(),t.TgZ(29,"mat-menu",7,8)(31,"button",9)(32,"mat-icon"),t._uU(33,"dialpad"),t.qZA(),t.TgZ(34,"span"),t._uU(35,"Redial"),t.qZA()(),t.TgZ(36,"button",12)(37,"mat-icon"),t._uU(38,"voicemail"),t.qZA(),t.TgZ(39,"span"),t._uU(40,"Check voice mail"),t.qZA()(),t.TgZ(41,"button",9)(42,"mat-icon"),t._uU(43,"notifications_off"),t.qZA(),t.TgZ(44,"span"),t._uU(45,"Disable alerts"),t.qZA()()()()()(),t.TgZ(46,"div",4)(47,"mat-card",5)(48,"mat-card-header")(49,"mat-card-title"),t._uU(50,"Nested Menu"),t.qZA()(),t.TgZ(51,"mat-card-content",2)(52,"button",6),t._uU(53," Animal index "),t.qZA(),t.TgZ(54,"mat-menu",7,13)(56,"button",14),t._uU(57," Vertebrates "),t.qZA(),t.TgZ(58,"button",14),t._uU(59," Invertebrates "),t.qZA()(),t.TgZ(60,"mat-menu",7,15)(62,"button",14),t._uU(63,"Fishes"),t.qZA(),t.TgZ(64,"button",14),t._uU(65," Amphibians "),t.qZA(),t.TgZ(66,"button",14),t._uU(67," Reptiles "),t.qZA(),t.TgZ(68,"button",9),t._uU(69,"Birds"),t.qZA(),t.TgZ(70,"button",9),t._uU(71,"Mammals"),t.qZA()(),t.TgZ(72,"mat-menu",7,16)(74,"button",9),t._uU(75,"Insects"),t.qZA(),t.TgZ(76,"button",9),t._uU(77,"Molluscs"),t.qZA(),t.TgZ(78,"button",9),t._uU(79,"Crustaceans"),t.qZA(),t.TgZ(80,"button",9),t._uU(81,"Corals"),t.qZA(),t.TgZ(82,"button",9),t._uU(83,"Arachnids"),t.qZA(),t.TgZ(84,"button",9),t._uU(85,"Velvet worms"),t.qZA(),t.TgZ(86,"button",9),t._uU(87,"Horseshoe crabs"),t.qZA()(),t.TgZ(88,"mat-menu",7,17)(90,"button",9),t._uU(91,"Baikal oilfish"),t.qZA(),t.TgZ(92,"button",9),t._uU(93,"Bala shark"),t.qZA(),t.TgZ(94,"button",9),t._uU(95,"Ballan wrasse"),t.qZA(),t.TgZ(96,"button",9),t._uU(97,"Bamboo shark"),t.qZA(),t.TgZ(98,"button",9),t._uU(99,"Banded killifish"),t.qZA()(),t.TgZ(100,"mat-menu",7,18)(102,"button",9),t._uU(103,"Sonoran desert toad"),t.qZA(),t.TgZ(104,"button",9),t._uU(105,"Western toad"),t.qZA(),t.TgZ(106,"button",9),t._uU(107,"Arroyo toad"),t.qZA(),t.TgZ(108,"button",9),t._uU(109,"Yosemite toad"),t.qZA()(),t.TgZ(110,"mat-menu",7,19)(112,"button",9),t._uU(113,"Banded Day Gecko"),t.qZA(),t.TgZ(114,"button",9),t._uU(115,"Banded Gila Monster"),t.qZA(),t.TgZ(116,"button",9),t._uU(117,"Black Tree Monitor"),t.qZA(),t.TgZ(118,"button",9),t._uU(119,"Blue Spiny Lizard"),t.qZA(),t.TgZ(120,"button",12),t._uU(121,"Velociraptor"),t.qZA()()()()(),t.TgZ(122,"div",20)(123,"mat-card",5)(124,"mat-card-header")(125,"mat-card-title"),t._uU(126,"Positions"),t.qZA()(),t.TgZ(127,"mat-card-content",2)(128,"div",3)(129,"div",21)(130,"button",22),t._uU(131," Above "),t.qZA(),t.TgZ(132,"mat-menu",23,24)(134,"button",9),t._uU(135,"Item 1"),t.qZA(),t.TgZ(136,"button",9),t._uU(137,"Item 2"),t.qZA()()(),t.TgZ(138,"div",21)(139,"button",25),t._uU(140," Below "),t.qZA(),t.TgZ(141,"mat-menu",26,27)(143,"button",9),t._uU(144,"Item 1"),t.qZA(),t.TgZ(145,"button",9),t._uU(146,"Item 2"),t.qZA()()(),t.TgZ(147,"div",21)(148,"button",28),t._uU(149," Before "),t.qZA(),t.TgZ(150,"mat-menu",29,30)(152,"button",9),t._uU(153,"Item 1"),t.qZA(),t.TgZ(154,"button",9),t._uU(155,"Item 2"),t.qZA()()(),t.TgZ(156,"div",21)(157,"button",22),t._uU(158," After "),t.qZA(),t.TgZ(159,"mat-menu",31,32)(161,"button",9),t._uU(162,"Item 1"),t.qZA(),t.TgZ(163,"button",9),t._uU(164,"Item 2"),t.qZA()()()()()()()()()()),2&s){const r=t.MAs(15),a=t.MAs(55),l=t.MAs(61),c=t.MAs(73),h=t.MAs(89),p=t.MAs(101),u=t.MAs(111),f=t.MAs(133),w=t.MAs(142),S=t.MAs(151),P=t.MAs(160);t.xp6(12),t.Q6J("matMenuTriggerFor",r),t.xp6(14),t.Q6J("matMenuTriggerFor",r),t.xp6(26),t.Q6J("matMenuTriggerFor",a),t.xp6(4),t.Q6J("matMenuTriggerFor",l),t.xp6(2),t.Q6J("matMenuTriggerFor",c),t.xp6(4),t.Q6J("matMenuTriggerFor",h),t.xp6(2),t.Q6J("matMenuTriggerFor",p),t.xp6(2),t.Q6J("matMenuTriggerFor",u),t.xp6(64),t.Q6J("matMenuTriggerFor",f),t.xp6(9),t.Q6J("matMenuTriggerFor",w),t.xp6(9),t.Q6J("matMenuTriggerFor",S),t.xp6(9),t.Q6J("matMenuTriggerFor",P)}},dependencies:[K.VK,K.OP,K.p6,_.a8,_.dn,_.dk,_.n5,U.lW,U.RK,O.Hw,X.b],encapsulation:2})}return o})();var _e=d(1292),fe=d(8097),ve=d(3649);const be=[{path:"",children:[{path:"badge",component:Ot},{path:"chips",component:ae},{path:"lists",component:ue},{path:"menu",component:ge},{path:"tooltips",component:(()=>{class o{constructor(){this.disabled=new b.NI(!1),this.showDelay=new b.NI(1e3),this.hideDelay=new b.NI(2e3),this.message=new b.NI("Info about the action")}static#t=this.\u0275fac=function(s){return new(s||o)};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-tooltips"]],decls:86,vars:8,consts:[[1,"cardWithShadow","theme-card"],[1,"m-b-0"],[1,"b-t-1"],[1,"row"],[1,"col-lg-4","col-sm-6"],[1,"b-1","shadow-none"],["mat-flat-button","","color","primary","matTooltip","Info about the action"],["mat-flat-button","","color","primary","matTooltip","Info about the action","matTooltipClass","text-uppercase"],["mat-flat-button","","color","primary","matTooltip","Info about the action",1,"m-r-8",3,"matTooltipDisabled"],[1,"example-disabled-checkbox",3,"formControl"],[1,"col-lg-6"],["mat-flat-button","","color","primary","matTooltip","Info about the action","matTooltipPosition","below","matTooltipHideDelay","100000"],["tooltip","matTooltip"],["mat-flat-button","","color","accent","matTooltip","Info about the action","matTooltipPosition","above","matTooltipHideDelay","100000",1,"m-l-8"],["mat-flat-button","","color","warn","matTooltip","Info about the action","matTooltipPosition","left","matTooltipHideDelay","100000",1,"m-l-8"],["mat-flat-button","","color","primary","matTooltip","Info about the action","matTooltipPosition","right","matTooltipHideDelay","100000",1,"m-l-8"],[1,"col-sm-4"],["appearance","outline",1,"w-100"],["matInput","","type","number",3,"formControl"],["mat-flat-button","","color","primary","matTooltip","Info about the action",3,"matTooltipShowDelay","matTooltipHideDelay"],["matInput","",3,"formControl"],["mat-flat-button","","color","primary","aria-label","Button that displays a tooltip with a custom message",3,"matTooltip"]],template:function(s,n){1&s&&(t.TgZ(0,"mat-card",0)(1,"mat-card-header")(2,"mat-card-title",1),t._uU(3,"Tooltips"),t.qZA()(),t.TgZ(4,"mat-card-content",2)(5,"div",3)(6,"div",4)(7,"mat-card",5)(8,"mat-card-header")(9,"mat-card-title"),t._uU(10,"Basic"),t.qZA()(),t.TgZ(11,"mat-card-content",2)(12,"button",6),t._uU(13," Button "),t.qZA()()()(),t.TgZ(14,"div",4)(15,"mat-card",5)(16,"mat-card-header")(17,"mat-card-title"),t._uU(18,"Uppercase"),t.qZA()(),t.TgZ(19,"mat-card-content",2)(20,"button",7),t._uU(21," Button "),t.qZA()()()(),t.TgZ(22,"div",4)(23,"mat-card",5)(24,"mat-card-header")(25,"mat-card-title"),t._uU(26,"Disabled on click"),t.qZA()(),t.TgZ(27,"mat-card-content",2)(28,"button",8),t._uU(29," Action "),t.qZA(),t.TgZ(30,"mat-checkbox",9),t._uU(31," Tooltip disabled "),t.qZA()()()(),t.TgZ(32,"div",10)(33,"mat-card",5)(34,"mat-card-header")(35,"mat-card-title"),t._uU(36,"Position"),t.qZA()(),t.TgZ(37,"mat-card-content",2)(38,"button",11,12),t._uU(40," Below "),t.qZA(),t.TgZ(41,"button",13,12),t._uU(43," Above "),t.qZA(),t.TgZ(44,"button",14,12),t._uU(46," Left "),t.qZA(),t.TgZ(47,"button",15,12),t._uU(49," Right "),t.qZA()()()(),t.TgZ(50,"div",10)(51,"mat-card",5)(52,"mat-card-header")(53,"mat-card-title"),t._uU(54,"Show and Hide"),t.qZA()(),t.TgZ(55,"mat-card-content",2)(56,"div",3)(57,"div",16)(58,"mat-form-field",17)(59,"mat-label"),t._uU(60,"Show delay"),t.qZA(),t._UZ(61,"input",18),t.TgZ(62,"mat-hint"),t._uU(63,"milliseconds"),t.qZA()()(),t.TgZ(64,"div",16)(65,"mat-form-field",17)(66,"mat-label"),t._uU(67,"Hide delay"),t.qZA(),t._UZ(68,"input",18),t.TgZ(69,"mat-hint"),t._uU(70,"milliseconds"),t.qZA()()(),t.TgZ(71,"div",16)(72,"button",19),t._uU(73," Action "),t.qZA()()()()()(),t.TgZ(74,"div",4)(75,"mat-card",5)(76,"mat-card-header")(77,"mat-card-title"),t._uU(78,"Change Message"),t.qZA()(),t.TgZ(79,"mat-card-content",2)(80,"mat-form-field",17)(81,"mat-label"),t._uU(82,"Tooltip message"),t.qZA(),t._UZ(83,"input",20),t.qZA(),t.TgZ(84,"button",21),t._uU(85," Action "),t.qZA()()()()()()()),2&s&&(t.xp6(28),t.Q6J("matTooltipDisabled",n.disabled.value),t.xp6(2),t.Q6J("formControl",n.disabled),t.xp6(31),t.Q6J("formControl",n.showDelay),t.xp6(7),t.Q6J("formControl",n.hideDelay),t.xp6(4),t.Q6J("matTooltipShowDelay",n.showDelay.value)("matTooltipHideDelay",n.hideDelay.value),t.xp6(11),t.Q6J("formControl",n.message),t.xp6(1),t.Q6J("matTooltip",n.message.value||""))},dependencies:[_e.oG,E.KE,E.hX,E.bx,fe.Nt,_.a8,_.dn,_.dk,_.n5,U.lW,ve.gM,b.Fj,b.wV,b.JJ,b.oH],encapsulation:2})}return o})()}]}];var De=d(1217);let Te=(()=>{class o{static#t=this.\u0275fac=function(s){return new(s||o)};static#e=this.\u0275mod=t.oAB({type:o});static#i=this.\u0275inj=t.cJS({imports:[Z.ez,It.Bz.forChild(be),Rt.q,b.u5,b.UX,X.e.pick(Et),De.XK]})}return o})()}}]);