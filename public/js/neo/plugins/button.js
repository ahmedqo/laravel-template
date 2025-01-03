Neo.Component({ctl:!0,tag:"neo-button",tpl:"return function($CONTEXT$,$HELPER$,$EACH$,$SIZE$,$ESCAPE$,$ERROR$){var $TXT$=[],$JSX$=[],$INDEX$=0,$LINE$=0,$COL$=0;function $ADDTXT$($LINE$){if(!$TXT$[$INDEX$]){$TXT$[$INDEX$]=''}$TXT$[$INDEX$]=($TXT$[$INDEX$]+$LINE$).replace(/\\n(:?\\s*\\n)+/g,'\\n')}function $ADDJSX$($LINE$){$JSX$[$INDEX$]=$LINE$,$INDEX$++}with($CONTEXT$||{}){try{$LINE$=1;$COL$=1;$ADDTXT$(\"<slot name=\\\"start\\\"></slot>\\n<slot></slot>\\n<slot name=\\\"end\\\"></slot>\");}catch(e){throw new $ERROR$([e.message,'\\n\\tat','Line:','\"'+$LINE$+'\"','Col:','\"'+$COL$+'\"'].join(' '))}}return [$TXT$,...$JSX$]}",css:'return function($CONTEXT$,$HELPER$,$EACH$,$SIZE$,$ESCAPE$,$ERROR$){var $TXT$=[],$JSX$=[],$INDEX$=0,$LINE$=0,$COL$=0;function $ADDTXT$($LINE$){if(!$TXT$[$INDEX$]){$TXT$[$INDEX$]=\'\'}$TXT$[$INDEX$]=($TXT$[$INDEX$]+$LINE$).replace(/\\n(:?\\s*\\n)+/g,\'\\n\')}function $ADDJSX$($LINE$){$JSX$[$INDEX$]=$LINE$,$INDEX$++}with($CONTEXT$||{}){try{$LINE$=1;$COL$=1;$ADDTXT$("<style>* {\\nbox-sizing: border-box;\\nfont-family: inherit;\\n}\\n\\n:host {\\ngap: .5rem;\\noutline: none;\\ncursor: default;\\nflex-wrap: wrap;\\nfont-weight: 600;\\nborder-width: 1px;\\nwidth: max-content;\\nalign-items: center;\\nborder-style: solid;\\ndisplay: inline-flex;\\nborder-radius: .25rem;\\njustify-content: center;\\npadding: .657rem 1.5rem;\\n");$LINE$=20;$COL$=1;if($HELPER$["props"]["vertical"]){$LINE$=20;$COL$=25;$ADDTXT$(" flex-direction: column; ");$LINE$=20;$COL$=50;}$LINE$=20;$COL$=61;$ADDTXT$("\\n");$LINE$=21;$COL$=1;if($HELPER$["props"]["outline"]){$LINE$=21;$COL$=24;$ADDTXT$(" color: ");$LINE$=21;$COL$=32;$ADDJSX$($HELPER$["Theme"]["colors"]("PRIME"));$LINE$=21;$COL$=60;$ADDTXT$(";\\n");$LINE$=22;$COL$=1;}else{$LINE$=22;$COL$=11;$ADDTXT$("\\ncolor: ");$LINE$=23;$COL$=8;$ADDJSX$($HELPER$["Theme"]["colors"]("WHITE"));$LINE$=23;$COL$=36;$ADDTXT$(";\\nbackground: ");$LINE$=24;$COL$=13;$ADDJSX$($HELPER$["Theme"]["colors"]("PRIME"));$LINE$=24;$COL$=41;$ADDTXT$(";\\n");$LINE$=25;$COL$=1;}$LINE$=25;$COL$=12;$ADDTXT$("\\nborder-color: ");$LINE$=26;$COL$=15;$ADDJSX$($HELPER$["Theme"]["colors"]("PRIME"));$LINE$=26;$COL$=43;$ADDTXT$(";\\nfont-size: ");$LINE$=27;$COL$=12;$ADDJSX$($HELPER$["Theme"]["sizes"]("MEDIUM"));$LINE$=27;$COL$=40;$ADDTXT$(";\\n");$LINE$=28;$COL$=1;$EACH$($HELPER$["Theme"]["MEDIA"],function(_,_media,$LOOP$){$LINE$=28;$COL$=36;$ADDTXT$("\\n");$LINE$=29;$COL$=1;$ADDJSX$(_media);$LINE$=29;$COL$=13;$ADDTXT$("transition: 150ms ease-in-out color, 150ms ease-in-out border-color, 150ms ease-in-out backgroun;\\n");$LINE$=30;$COL$=1;});$LINE$=30;$COL$=14;$ADDTXT$("\\n}\\n\\n");$LINE$=33;$COL$=1;if(!$HELPER$["props"]["disable"]){$LINE$=33;$COL$=25;$ADDTXT$("\\n:host(:hover),\\n:host(:focus),\\n:host(:focus-within) {\\n");$LINE$=37;$COL$=1;if($HELPER$["props"]["outline"]){$LINE$=37;$COL$=24;$ADDTXT$("\\ncolor: ");$LINE$=38;$COL$=8;$ADDJSX$($HELPER$["Theme"]["colors"]("WHITE"));$LINE$=38;$COL$=36;$ADDTXT$(";\\nborder-color: ");$LINE$=39;$COL$=15;$ADDJSX$($HELPER$["Theme"]["colors"]("PRIME"));$LINE$=39;$COL$=43;$ADDTXT$(";\\nbackground: ");$LINE$=40;$COL$=13;$ADDJSX$($HELPER$["Theme"]["colors"]("PRIME"));$LINE$=40;$COL$=41;$ADDTXT$(";\\n");$LINE$=41;$COL$=1;}else{$LINE$=41;$COL$=11;$ADDTXT$("\\ncolor: ");$LINE$=42;$COL$=8;$ADDJSX$($HELPER$["Theme"]["colors"]("BLACK"));$LINE$=42;$COL$=36;$ADDTXT$(";\\nborder-color: ");$LINE$=43;$COL$=15;$ADDJSX$($HELPER$["Theme"]["colors"]("PRIME", 40));$LINE$=43;$COL$=47;$ADDTXT$(";\\nbackground: ");$LINE$=44;$COL$=13;$ADDJSX$($HELPER$["Theme"]["colors"]("PRIME", 40));$LINE$=44;$COL$=45;$ADDTXT$(";\\n");$LINE$=45;$COL$=1;}$LINE$=45;$COL$=12;$ADDTXT$("\\n}\\n");$LINE$=47;$COL$=1;}$LINE$=47;$COL$=12;$ADDTXT$("\\n\\n::slotted(*) {\\npointer-events: none;\\n}</style>");}catch(e){throw new $ERROR$([e.message,\'\\n\\tat\',\'Line:\',\'"\'+$LINE$+\'"\',\'Col:\',\'"\'+$COL$+\'"\'].join(\' \'))}}return [$TXT$,...$JSX$]}'})({attrs:["type","disable","outline","vertical"],props:{type:"submit",disable:!1,outline:!1,vertical:!1},rules:{click($){this.props.disable||"click"!==$.type&&13!==$.keyCode||!this.ctl.form||Neo.Helper.option({submit:()=>this.ctl.form.requestSubmit(),reset:()=>this.ctl.form.reset()},this.props.type)},keydown($){13===$.keyCode&&this.click()}},cycle:{mounted(){this.tabIndex=0,this.addEventListener("click",this.rules.click),this.addEventListener("keydown",this.rules.keydown)},removed(){this.removeEventListener("click",this.rules.click),this.removeEventListener("keydown",this.rules.keydown)},updated($,e,n,t){Neo.Helper.option({attrs:{type:()=>{this.props[$]=n},"vertical,outline,disable":()=>{this.props[$]=Neo.Helper.truty(n)||this.hasAttribute($)&&!["false","null","undefined"].includes(this.getAttribute($))}},props:{"type,vertical,outline,disable":()=>{"disable"===$&&(this.tabIndex=n?-1:0),this.emit("change:"+$,{data:n})}}}[t],$)}}}).define();