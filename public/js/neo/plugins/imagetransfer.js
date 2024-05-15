Neo.Component({ctl:!0,tag:"neo-imagetransfer",tpl:'return function($CONTEXT$,$HELPER$,$EACH$,$SIZE$,$ESCAPE$,$ERROR$){var $TXT$=[],$JSX$=[],$INDEX$=0,$LINE$=0,$COL$=0;function $ADDTXT$($LINE$){if(!$TXT$[$INDEX$]){$TXT$[$INDEX$]=\'\'}$TXT$[$INDEX$]=($TXT$[$INDEX$]+$LINE$).replace(/\\n(:?\\s*\\n)+/g,\'\\n\')}function $ADDJSX$($LINE$){$JSX$[$INDEX$]=$LINE$,$INDEX$++}with($CONTEXT$||{}){try{$LINE$=1;$COL$=1;$ADDTXT$("<input type=\\"file\\" ref=\\"field\\" part=\\"field\\"\\naccept=\\"");$LINE$=2;$COL$=9;$ADDJSX$($HELPER$["rules"]["accept"]());$LINE$=2;$COL$=30;$ADDTXT$("\\"\\n@change=\\"");$LINE$=3;$COL$=10;$ADDJSX$($HELPER$["rules"]["change"]);$LINE$=3;$COL$=29;$ADDTXT$("\\"\\n");$LINE$=4;$COL$=1;if($HELPER$["props"]["multiple"]){$LINE$=4;$COL$=25;$ADDTXT$(" multiple=\\"");$LINE$=4;$COL$=36;$ADDJSX$($HELPER$["props"]["multiple"]);$LINE$=4;$COL$=57;$ADDTXT$("\\" ");$LINE$=4;$COL$=59;}$LINE$=4;$COL$=70;$ADDTXT$("\\n");$LINE$=5;$COL$=1;if($HELPER$["props"]["disable"]){$LINE$=5;$COL$=24;$ADDTXT$(" disabled=\\"");$LINE$=5;$COL$=35;$ADDJSX$($HELPER$["props"]["disable"]);$LINE$=5;$COL$=55;$ADDTXT$("\\" ");$LINE$=5;$COL$=57;}$LINE$=5;$COL$=68;$ADDTXT$("\\n/>\\n");$LINE$=7;$COL$=1;if($HELPER$["props"]["multiple"] || ($HELPER$["falsy"]($HELPER$["props"]["value"]) && $HELPER$["falsy"]($HELPER$["props"]["default"]))){$LINE$=7;$COL$=77;$ADDTXT$("\\n<button aria-label=\\"upload_trigger\\" ref=\\"upload\\" part=\\"upload\\"\\n@click=\\"");$LINE$=9;$COL$=9;$ADDJSX$(() => $HELPER$["rules"]["click"]());$LINE$=9;$COL$=35;$ADDTXT$("\\"\\n");$LINE$=10;$COL$=1;if($HELPER$["props"]["disable"]){$LINE$=10;$COL$=24;$ADDTXT$(" disabled=\\"");$LINE$=10;$COL$=35;$ADDJSX$($HELPER$["props"]["disable"]);$LINE$=10;$COL$=55;$ADDTXT$("\\" ");$LINE$=10;$COL$=57;}$LINE$=10;$COL$=68;$ADDTXT$("\\n>\\n<svg ref=\\"icon\\" part=\\"icon\\" fill=\\"currentColor\\" viewBox=\\"0 0 48 48\\">\\n<path d=\\"M9.6 43.75C8.31377 43.75 7.22553 43.2898 6.3353 42.3694C5.4451 41.449 5 40.3925 5 39.2V10.15C5 8.89707 5.4451 7.81717 6.3353 6.9103C7.22553 6.00343 8.31377 5.55 9.6 5.55H28.45V15.65H33.1V20.3H43.2V39.2C43.2 40.3925 42.7427 41.449 41.8281 42.3694C40.9135 43.2898 39.8542 43.75 38.65 43.75H9.6ZM12.25 34.45H36.05L28.9 25L22.6 33.3L17.9 27.1L12.25 34.45ZM35.775 17.65V13.05H31.15V9.625H35.75V5H39.175V9.575H43.8V13.025H39.2V17.65H35.775Z\\" />\\n</svg>\\n</button>\\n");$LINE$=16;$COL$=1;}$LINE$=16;$COL$=12;$ADDTXT$("\\n");$LINE$=17;$COL$=1;if($HELPER$["truty"]($HELPER$["props"]["value"])){$LINE$=17;$COL$=30;$ADDTXT$("\\n");$LINE$=18;$COL$=1;$EACH$($HELPER$["state"]["files"]["slice"]()["reverse"](),function(_,file,$LOOP$){$LINE$=18;$COL$=52;$ADDTXT$("\\n<button aria-label=\\"item\\" ref=\\"item\\" part=\\"item\\"\\n@click=\\"");$LINE$=20;$COL$=9;$ADDJSX$(() => $HELPER$["rules"]["remove"]($LOOP$["round"]));$LINE$=20;$COL$=47;$ADDTXT$("\\"\\n");$LINE$=21;$COL$=1;if($HELPER$["props"]["disable"]){$LINE$=21;$COL$=24;$ADDTXT$(" disabled=\\"");$LINE$=21;$COL$=35;$ADDJSX$($HELPER$["props"]["disable"]);$LINE$=21;$COL$=55;$ADDTXT$("\\" ");$LINE$=21;$COL$=57;}$LINE$=21;$COL$=68;$ADDTXT$("\\n>\\n<img ref=\\"image\\" part=\\"image\\" src=\\"");$LINE$=23;$COL$=36;$ADDJSX$(file[$HELPER$["props"]["source"]]);$LINE$=23;$COL$=61;$ADDTXT$("\\" />\\n<svg ref=\\"icon\\" part=\\"icon\\" fill=\\"currentColor\\" viewBox=\\"0 0 48 48\\">\\n<path d=\\"M12.5 43.05C11.2937 43.05 10.2255 42.6015 9.2953 41.7044C8.3651 40.8073 7.9 39.7392 7.9 38.5V10.9H5V6.35H16.4V4H31.25V6.35H42.65V10.9H39.75V38.5C39.75 39.7392 39.2966 40.8073 38.3897 41.7044C37.4828 42.6015 36.4029 43.05 35.15 43.05H12.5ZM17.7 34.6H21.4V14.7H17.7V34.6ZM26.35 34.6H30.1V14.7H26.35V34.6Z\\" />\\n</svg>\\n</button>\\n");$LINE$=28;$COL$=1;});$LINE$=28;$COL$=14;$ADDTXT$("\\n");$LINE$=29;$COL$=1;}$LINE$=29;$COL$=12;$ADDTXT$("\\n");$LINE$=30;$COL$=1;if($HELPER$["truty"]($HELPER$["props"]["default"])){$LINE$=30;$COL$=32;$ADDTXT$("\\n");$LINE$=31;$COL$=1;$EACH$($HELPER$["props"]["default"]["slice"]()["reverse"](),function(_,file,$LOOP$){$LINE$=31;$COL$=54;$ADDTXT$("\\n<button aria-label=\\"item\\" ref=\\"item\\" part=\\"item\\"\\n@click=\\"");$LINE$=33;$COL$=9;$ADDJSX$(() => $HELPER$["rules"]["remove"]($LOOP$["round"], true));$LINE$=33;$COL$=53;$ADDTXT$("\\"\\n");$LINE$=34;$COL$=1;if($HELPER$["props"]["disable"]){$LINE$=34;$COL$=24;$ADDTXT$(" disabled=\\"");$LINE$=34;$COL$=35;$ADDJSX$($HELPER$["props"]["disable"]);$LINE$=34;$COL$=55;$ADDTXT$("\\" ");$LINE$=34;$COL$=57;}$LINE$=34;$COL$=68;$ADDTXT$("\\n>\\n<img ref=\\"image\\" part=\\"image\\" src=\\"");$LINE$=36;$COL$=36;$ADDJSX$(file[$HELPER$["props"]["source"]]);$LINE$=36;$COL$=61;$ADDTXT$("\\" />\\n<svg ref=\\"icon\\" part=\\"icon\\" fill=\\"currentColor\\" viewBox=\\"0 0 48 48\\">\\n<path d=\\"M12.5 43.05C11.2937 43.05 10.2255 42.6015 9.2953 41.7044C8.3651 40.8073 7.9 39.7392 7.9 38.5V10.9H5V6.35H16.4V4H31.25V6.35H42.65V10.9H39.75V38.5C39.75 39.7392 39.2966 40.8073 38.3897 41.7044C37.4828 42.6015 36.4029 43.05 35.15 43.05H12.5ZM17.7 34.6H21.4V14.7H17.7V34.6ZM26.35 34.6H30.1V14.7H26.35V34.6Z\\" />\\n</svg>\\n</button>\\n");$LINE$=41;$COL$=1;});$LINE$=41;$COL$=14;$ADDTXT$("\\n");$LINE$=42;$COL$=1;}}catch(e){throw new $ERROR$([e.message,\'\\n\\tat\',\'Line:\',\'"\'+$LINE$+\'"\',\'Col:\',\'"\'+$COL$+\'"\'].join(\' \'))}}return [$TXT$,...$JSX$]}',css:'return function($CONTEXT$,$HELPER$,$EACH$,$SIZE$,$ESCAPE$,$ERROR$){var $TXT$=[],$JSX$=[],$INDEX$=0,$LINE$=0,$COL$=0;function $ADDTXT$($LINE$){if(!$TXT$[$INDEX$]){$TXT$[$INDEX$]=\'\'}$TXT$[$INDEX$]=($TXT$[$INDEX$]+$LINE$).replace(/\\n(:?\\s*\\n)+/g,\'\\n\')}function $ADDJSX$($LINE$){$JSX$[$INDEX$]=$LINE$,$INDEX$++}with($CONTEXT$||{}){try{$LINE$=1;$COL$=1;$ADDTXT$("<style>* {\\nbox-sizing: border-box;\\nfont-family: inherit;\\n}\\n\\n:host {\\nwidth: 100%;\\noverflow: hidden;\\nborder-width: 1px;\\nborder-style: solid;\\nborder-radius: .25rem;\\n");$LINE$=12;$COL$=1;if($HELPER$["props"]["multiple"]){$LINE$=12;$COL$=25;$ADDTXT$("\\ngap: .5rem;\\ndisplay: grid;\\npadding: .75rem;\\ngrid-template-rows: 1fr;\\ngrid-template-columns: repeat(2, 1fr);\\n");$LINE$=18;$COL$=1;}else{$LINE$=18;$COL$=11;$ADDTXT$("\\ndisplay: flex;\\nposition: relative;\\n");$LINE$=21;$COL$=1;}$LINE$=21;$COL$=12;$ADDTXT$("\\n");$LINE$=22;$COL$=1;if($HELPER$["props"]["outline"]){$LINE$=22;$COL$=24;$ADDTXT$("\\nborder-color: ");$LINE$=23;$COL$=15;$ADDJSX$($HELPER$["Theme"]["colors"]("BLACK"));$LINE$=23;$COL$=43;$ADDTXT$(";\\n");$LINE$=24;$COL$=1;}else{$LINE$=24;$COL$=11;$ADDTXT$("\\nbackground: ");$LINE$=25;$COL$=13;$ADDJSX$($HELPER$["Theme"]["colors"]("LIGHT"));$LINE$=25;$COL$=41;$ADDTXT$(";\\nborder-color: ");$LINE$=26;$COL$=15;$ADDJSX$($HELPER$["Theme"]["colors"]("SHADE"));$LINE$=26;$COL$=43;$ADDTXT$(";\\n");$LINE$=27;$COL$=1;}$LINE$=27;$COL$=12;$ADDTXT$("\\n}\\n\\n");$LINE$=30;$COL$=1;if(!$HELPER$["props"]["disable"]){$LINE$=30;$COL$=25;$ADDTXT$("\\n:host(:focus),\\n:host(:focus-within) {\\noutline-width: 2px;\\noutline-offset: -2px;\\noutline-style: solid;\\noutline-color: ");$LINE$=36;$COL$=16;$ADDJSX$($HELPER$["Theme"]["colors"]("PRIME", 400));$LINE$=36;$COL$=49;$ADDTXT$(";\\n}\\n");$LINE$=38;$COL$=1;}$LINE$=38;$COL$=12;$ADDTXT$("\\n\\n[part=\\"field\\"] {\\ndisplay: none;\\n}\\n\\n[part=\\"item\\"],\\n[part=\\"upload\\"] {\\nwidth: 100%;\\nborder: unset;\\ndisplay: flex;\\noutline: none;\\npadding: .5rem;\\ncursor: pointer;\\noverflow: hidden;\\naspect-ratio: 1/1;\\nalign-items: center;\\nborder-radius: .25rem;\\njustify-content: center;\\n");$LINE$=57;$COL$=1;if($HELPER$["props"]["multiple"]){$LINE$=57;$COL$=25;$ADDTXT$("\\nbackground: ");$LINE$=58;$COL$=13;$ADDJSX$($HELPER$["Theme"]["colors"]("SHADE", $HELPER$["props"]["outline"] ? 10 : 30));$LINE$=58;$COL$=67;$ADDTXT$(";\\n");$LINE$=59;$COL$=1;}else{$LINE$=59;$COL$=11;$ADDTXT$("\\nbackground: transparent;\\n");$LINE$=61;$COL$=1;}$LINE$=61;$COL$=12;$ADDTXT$("\\n}\\n\\n[part=\\"item\\"] {\\npadding: 0;\\nposition: relative;\\n}\\n\\n[part=\\"item\\"]::before {\\ninset: 0;\\nz-index: 1;\\ncontent: \\"\\";\\nposition: absolute;\\npointer-events: none;\\n");$LINE$=75;$COL$=1;$EACH$($HELPER$["Theme"]["MEDIA"],function(_,_media,$LOOP$){$LINE$=75;$COL$=36;$ADDTXT$("\\n");$LINE$=76;$COL$=1;$ADDJSX$(_media);$LINE$=76;$COL$=13;$ADDTXT$("transition: background 200ms ease-in-out;\\n");$LINE$=77;$COL$=1;});$LINE$=77;$COL$=14;$ADDTXT$("\\n}\\n\\n");$LINE$=80;$COL$=1;if(!$HELPER$["props"]["disable"]){$LINE$=80;$COL$=25;$ADDTXT$("\\n[part=\\"item\\"]:hover,\\n[part=\\"item\\"]:focus,\\n[part=\\"upload\\"]:hover,\\n[part=\\"upload\\"]:focus,\\n[part=\\"item\\"]:focus-within,\\n[part=\\"upload\\"]:focus-within {\\nbackground: ");$LINE$=87;$COL$=13;$ADDJSX$($HELPER$["Theme"]["colors"]("SHADE", $HELPER$["props"]["outline"] ? $HELPER$["props"]["multiple"] ? 30 : 20 : 60));$LINE$=87;$COL$=90;$ADDTXT$(";\\n}\\n\\n[part=\\"upload\\"]:hover > [part=\\"icon\\"],\\n[part=\\"upload\\"]:focus > [part=\\"icon\\"],\\n[part=\\"upload\\"]:focus-within > [part=\\"icon\\"] {\\ncolor: ");$LINE$=93;$COL$=8;$ADDJSX$($HELPER$["Theme"]["colors"]("PRIME"));$LINE$=93;$COL$=36;$ADDTXT$(";\\n}\\n\\n[part=\\"item\\"]:hover::before,\\n[part=\\"item\\"]:focus::before,\\n[part=\\"item\\"]:focus-within::before {\\nbackdrop-filter: blur(5px);\\nbackground: ");$LINE$=100;$COL$=13;$ADDJSX$($HELPER$["Theme"]["colors"]("BLACK", 60));$LINE$=100;$COL$=45;$ADDTXT$(";\\n}\\n\\n[part=\\"item\\"]:hover > [part=\\"icon\\"],\\n[part=\\"item\\"]:focus > [part=\\"icon\\"],\\n[part=\\"item\\"]:focus-within > [part=\\"icon\\"] {\\nopacity: 1;\\n}\\n\\n[part=\\"item\\"]:hover > [part=\\"image\\"],\\n[part=\\"item\\"]:focus > [part=\\"image\\"],\\n[part=\\"item\\"]:focus-within > [part=\\"image\\"] {\\n");$LINE$=112;$COL$=1;$EACH$($HELPER$["Theme"]["MEDIA"],function(_,_media,$LOOP$){$LINE$=112;$COL$=36;$ADDTXT$("\\n");$LINE$=113;$COL$=1;$ADDJSX$(_media);$LINE$=113;$COL$=13;$ADDTXT$("transform: scale(1.5);\\n");$LINE$=114;$COL$=1;});$LINE$=114;$COL$=14;$ADDTXT$("\\n}\\n");$LINE$=116;$COL$=1;}$LINE$=116;$COL$=12;$ADDTXT$("\\n\\n[part=\\"icon\\"] {\\nwidth: 40%;\\nheight: 40%;\\ndisplay: block;\\nmax-width: 6rem;\\npointer-events: none;\\ncolor: ");$LINE$=124;$COL$=8;$ADDJSX$($HELPER$["Theme"]["colors"]("BLACK"));$LINE$=124;$COL$=36;$ADDTXT$(";\\n}\\n\\n[part=\\"item\\"] > [part=\\"icon\\"] {\\ntop: 50%;\\nleft: 50%;\\nz-index: 2;\\nopacity: 0;\\nposition: absolute;\\n");$LINE$=133;$COL$=1;$EACH$($HELPER$["Theme"]["MEDIA"],function(_,_media,$LOOP$){$LINE$=133;$COL$=36;$ADDTXT$("\\n");$LINE$=134;$COL$=1;$ADDJSX$(_media);$LINE$=134;$COL$=13;$ADDTXT$("transform: translate(-50%, -50%);\\n");$LINE$=135;$COL$=1;$ADDJSX$(_media);$LINE$=135;$COL$=13;$ADDTXT$("transition: opacity 200ms ease-in-out;\\n");$LINE$=136;$COL$=1;});$LINE$=136;$COL$=14;$ADDTXT$("\\ncolor: ");$LINE$=137;$COL$=8;$ADDJSX$($HELPER$["Theme"]["colors"]("WHITE"));$LINE$=137;$COL$=36;$ADDTXT$(";\\n}\\n\\n[part=\\"image\\"] {\\nwidth: 100%;\\nheight: 100%;\\ndisplay: block;\\nobject-fit: contain;\\npointer-events: none;\\nobject-position: center;\\n");$LINE$=147;$COL$=1;$EACH$($HELPER$["Theme"]["MEDIA"],function(_,_media,$LOOP$){$LINE$=147;$COL$=36;$ADDTXT$("\\n");$LINE$=148;$COL$=1;$ADDJSX$(_media);$LINE$=148;$COL$=13;$ADDTXT$("transition: transform 200ms ease-in-out;\\n");$LINE$=149;$COL$=1;});$LINE$=149;$COL$=14;$ADDTXT$("\\n}\\n\\n");$LINE$=152;$COL$=1;if($HELPER$["props"]["multiple"]){$LINE$=152;$COL$=25;$ADDTXT$("\\n@media (min-width: 1024px) {\\n:host {\\ngrid-template-columns: repeat(5, 1fr);\\n}\\n}\\n");$LINE$=158;$COL$=1;}$LINE$=158;$COL$=12;$ADDTXT$("</style>");}catch(e){throw new $ERROR$([e.message,\'\\n\\tat\',\'Line:\',\'"\'+$LINE$+\'"\',\'Col:\',\'"\'+$COL$+\'"\'].join(\' \'))}}return [$TXT$,...$JSX$]}'})({attrs:["accept","source","multiple","disable","outline"],props:{value:"",accept:"*",source:"src",default:[],disable:!1,outline:!1,multiple:!1},state:{data:null,files:[]},rules:{change($){this.props.disable||((this.props.multiple?[...$.target.files]:(this.rules.clear(),[$.target.files[0]])).forEach($=>{this.state.files.push({[this.props.source]:URL.createObjectURL($)}),this.state.data.items.add($)}),this.refs.field.value="",this.props.value=this.props.multiple?(this.paint(),this.state.data.files.length?this.state.data.files:""):this.state.data.files[0])},remove($,e){if(!this.props.multiple)return this.rules.click();var t,$=(e?(t=this.props.default.length-+$,this.props.default):(t=this.state.files.length-+$,this.state.data.files))[t];this.emit("delete",{data:$},()=>{e?this.props.default.splice(t,1):(this.state.files.splice(t,1),this.state.data.items.remove(t),this.state.data.files.length?this.props.value=this.state.data.files:this.props.value=""),this.paint()})},click(){this.props.disable||this.refs.field.click()},accept(){return this.props.accept.split(",").map($=>$.trim()).filter(Boolean).map($=>"image/"+$).join(", ")},clear(){this.props.value="",this.state.files=[],this.state.data.clearData()}},cycle:{created(){this.reset=function(){this.ctl.setFormValue(null),this.rules.clear(),this.emit("reset")},this.state.data=new DataTransfer,this.focus=function(){this.refs.field.focus()},this.blur=function(){this.refs.field.blur()}},mounted(){this.ctl.form&&this.ctl.form.addEventListener("reset",this.reset.bind(this))},removed(){this.ctl.form&&this.ctl.form.addEventListener("reset",this.reset.bind(this))},updated($,e,t,n){Neo.Helper.option({attrs:{"accept,source":()=>{this.props[$]=t},"multiple,outline,disable":()=>{this.props[$]=Neo.Helper.truty(t)||this.hasAttribute($)&&!["false","null","undefined"].includes(this.getAttribute($))}},props:{"accept,source,outline,disable":()=>{this.emit("change:"+$,{data:t})},multiple:()=>{this.rules.clear(),this.emit("change:"+$,{data:t})},value:()=>{if(Neo.Helper.falsy(t))this.ctl.setFormValue(null);else{const e=new FormData;[...this.props.multiple?t:[t]].forEach($=>{e.append(this.name,$)}),this.ctl.setFormValue(e)}this.emit("change",{data:t})}}}[n],$)}}}).define();