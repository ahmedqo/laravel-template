Neo.Component({ctl:!0,tag:"neo-select-group",tpl:'return function($CONTEXT$,$HELPER$,$EACH$,$SIZE$,$ESCAPE$,$ERROR$){var $TXT$=[],$JSX$=[],$INDEX$=0,$LINE$=0,$COL$=0;function $ADDTXT$($LINE$){if(!$TXT$[$INDEX$]){$TXT$[$INDEX$]=\'\'}$TXT$[$INDEX$]=($TXT$[$INDEX$]+$LINE$).replace(/\\n(:?\\s*\\n)+/g,\'\\n\')}function $ADDJSX$($LINE$){$JSX$[$INDEX$]=$LINE$,$INDEX$++}with($CONTEXT$||{}){try{$LINE$=1;$COL$=1;if($HELPER$["truty"]($HELPER$["props"]["label"])){$LINE$=1;$COL$=30;$ADDTXT$("\\n<label ref=\\"label\\" part=\\"label\\">");$LINE$=2;$COL$=33;$ADDJSX$($HELPER$["props"]["label"]);$LINE$=2;$COL$=51;$ADDTXT$("</label>\\n");$LINE$=3;$COL$=1;}$LINE$=3;$COL$=12;$ADDTXT$("\\n<slot></slot>");}catch(e){throw new $ERROR$([e.message,\'\\n\\tat\',\'Line:\',\'"\'+$LINE$+\'"\',\'Col:\',\'"\'+$COL$+\'"\'].join(\' \'))}}return [$TXT$,...$JSX$]}',css:'return function($CONTEXT$,$HELPER$,$EACH$,$SIZE$,$ESCAPE$,$ERROR$){var $TXT$=[],$JSX$=[],$INDEX$=0,$LINE$=0,$COL$=0;function $ADDTXT$($LINE$){if(!$TXT$[$INDEX$]){$TXT$[$INDEX$]=\'\'}$TXT$[$INDEX$]=($TXT$[$INDEX$]+$LINE$).replace(/\\n(:?\\s*\\n)+/g,\'\\n\')}function $ADDJSX$($LINE$){$JSX$[$INDEX$]=$LINE$,$INDEX$++}with($CONTEXT$||{}){try{$LINE$=1;$COL$=1;$ADDTXT$("<style>* {\\nbox-sizing: border-box;\\nfont-family: inherit;\\n}\\n\\n::slotted(*) {\\npadding-inline-start: 1rem;\\n}\\n\\n:host {\\nborder-bottom: 1px solid ");$LINE$=11;$COL$=26;$ADDJSX$($HELPER$["Theme"]["colors"]("BLACK", 20));$LINE$=11;$COL$=58;$ADDTXT$(";\\n}\\n\\n");$LINE$=14;$COL$=1;if($HELPER$["truty"]($HELPER$["props"]["label"])){$LINE$=14;$COL$=30;$ADDTXT$("\\n[part=\\"label\\"] {\\ntop: 0;\\nwidth: 100%;\\ndisplay: block;\\nposition: sticky;\\nfont-weight: 700;\\npadding: .25rem .5rem;\\ncolor: ");$LINE$=22;$COL$=8;$ADDJSX$($HELPER$["Theme"]["colors"]("BLACK"));$LINE$=22;$COL$=36;$ADDTXT$(";\\nfont-size: ");$LINE$=23;$COL$=12;$ADDJSX$($HELPER$["Theme"]["sizes"]("BASE"));$LINE$=23;$COL$=39;$ADDTXT$(";\\nline-height: ");$LINE$=24;$COL$=14;$ADDJSX$($HELPER$["Theme"]["lines"]("BASE"));$LINE$=24;$COL$=41;$ADDTXT$(";\\nbackground: ");$LINE$=25;$COL$=13;$ADDJSX$($HELPER$["Theme"]["colors"]("WHITE"));$LINE$=25;$COL$=41;$ADDTXT$(";\\nborder-bottom: 1px solid ");$LINE$=26;$COL$=26;$ADDJSX$($HELPER$["Theme"]["colors"]("BLACK", 20));$LINE$=26;$COL$=58;$ADDTXT$(";\\n}\\n");$LINE$=28;$COL$=1;}$LINE$=28;$COL$=12;$ADDTXT$("</style>");}catch(e){throw new $ERROR$([e.message,\'\\n\\tat\',\'Line:\',\'"\'+$LINE$+\'"\',\'Col:\',\'"\'+$COL$+\'"\'].join(\' \'))}}return [$TXT$,...$JSX$]}'})({attrs:["label"],props:{label:""},cycle:{mounted(){this.state.observer=new MutationObserver(($,e)=>{for(const E of $)"childList"===E.type&&[...this.querySelectorAll(":scope>:not(neo-select-item)")].map($=>$.remove())}),this.state.observer.observe(this,{childList:!0,subtree:!0})},removed(){this.state.observer.disconnect()},updated($,e,E,t){Neo.Helper.option({attrs:{label:()=>{this.props[$]=E}},props:{label:()=>{this.emit("change:"+$,{data:E})}}}[t],$)}}}).define();