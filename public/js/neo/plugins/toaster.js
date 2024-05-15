Neo.Component({ctl:!0,tag:"neo-toaster",tpl:"return function($CONTEXT$,$HELPER$,$EACH$,$SIZE$,$ESCAPE$,$ERROR$){var $TXT$=[],$JSX$=[],$INDEX$=0,$LINE$=0,$COL$=0;function $ADDTXT$($LINE$){if(!$TXT$[$INDEX$]){$TXT$[$INDEX$]=''}$TXT$[$INDEX$]=($TXT$[$INDEX$]+$LINE$).replace(/\\n(:?\\s*\\n)+/g,'\\n')}function $ADDJSX$($LINE$){$JSX$[$INDEX$]=$LINE$,$INDEX$++}with($CONTEXT$||{}){try{$LINE$=1;$COL$=1;$ADDTXT$(\"<div ref=\\\"wrapper\\\" part=\\\"wrapper\\\">\\n<slot></slot>\\n</div>\");}catch(e){throw new $ERROR$([e.message,'\\n\\tat','Line:','\"'+$LINE$+'\"','Col:','\"'+$COL$+'\"'].join(' '))}}return [$TXT$,...$JSX$]}",css:'return function($CONTEXT$,$HELPER$,$EACH$,$SIZE$,$ESCAPE$,$ERROR$){var $TXT$=[],$JSX$=[],$INDEX$=0,$LINE$=0,$COL$=0;function $ADDTXT$($LINE$){if(!$TXT$[$INDEX$]){$TXT$[$INDEX$]=\'\'}$TXT$[$INDEX$]=($TXT$[$INDEX$]+$LINE$).replace(/\\n(:?\\s*\\n)+/g,\'\\n\')}function $ADDJSX$($LINE$){$JSX$[$INDEX$]=$LINE$,$INDEX$++}with($CONTEXT$||{}){try{$LINE$=1;$COL$=1;$ADDTXT$("<style>* {\\nbox-sizing: border-box;\\nfont-family: inherit;\\n}\\n\\n:host {\\ninset: 0;\\nwidth: 100%;\\nheight: 100dvh;\\nposition: fixed;\\npointer-events: none;\\nz-index: ");$LINE$=12;$COL$=10;$ADDJSX$($HELPER$["state"]["layer"]);$LINE$=12;$COL$=28;$ADDTXT$(";\\n}\\n\\n[part=\\"wrapper\\"] {\\ngap: .5rem;\\nwidth: 100%;\\nheight: 100%;\\nmargin: auto;\\npadding: 1rem;\\ndisplay: flex;\\noverflow: hidden;\\nalign-items: ");$LINE$=23;$COL$=14;$ADDJSX$($HELPER$["props"]["horisontal"]);$LINE$=23;$COL$=37;$ADDTXT$(";\\njustify-content: ");$LINE$=24;$COL$=18;$ADDJSX$($HELPER$["props"]["vertical"]);$LINE$=24;$COL$=39;$ADDTXT$(";\\n");$LINE$=25;$COL$=1;if($HELPER$["props"]["vertical"] === "start"){$LINE$=25;$COL$=37;$ADDTXT$("\\nflex-direction: column-reverse;\\n");$LINE$=27;$COL$=1;}else{$LINE$=27;$COL$=11;$ADDTXT$("\\nflex-direction: column;\\n");$LINE$=29;$COL$=1;}$LINE$=29;$COL$=12;$ADDTXT$("\\n}\\n\\n@media (min-width: 640px) {\\n[part=\\"wrapper\\"] {\\nmax-width: 640px;\\n}\\n}\\n\\n@media (min-width: 768px) {\\n[part=\\"wrapper\\"] {\\nmax-width: 768px;\\n}\\n}\\n\\n@media (min-width: 1024px) {\\n[part=\\"wrapper\\"] {\\nmax-width: 1024px;\\n}\\n}\\n\\n@media (min-width: 1280px) {\\n[part=\\"wrapper\\"] {\\nmax-width: 1280px;\\n}\\n}\\n\\n@media (min-width: 1536px) {\\n[part=\\"wrapper\\"] {\\nmax-width: 1536px;\\n}\\n}</style>");}catch(e){throw new $ERROR$([e.message,\'\\n\\tat\',\'Line:\',\'"\'+$LINE$+\'"\',\'Col:\',\'"\'+$COL$+\'"\'].join(\' \'))}}return [$TXT$,...$JSX$]}'})({attrs:["horisontal","vertical"],props:{horisontal:"center",vertical:"end"},state:{layer:Neo.Helper.Theme.layer()},rules:{layer(){var $=Neo.Helper.Theme.layer();this.state.layer!==$-1&&(this.state.layer=$)}},cycle:{created(){(Neo.Toaster=this).toast=($,e,n)=>{var t=document.createElement("neo-toast");t.setProps({timer:n||5e3,theme:e}),t.innerHTML=$,this.appendChild(t)}},mounted(){this.state.observer=new MutationObserver(($,e)=>{for(const n of $)"childList"===n.type&&this.rules.layer()}),this.state.observer.observe(document.body,{childList:!0,subtree:!0})},removed(){this.state.observer.disconnect()},updated($,e,n,t){Neo.Helper.option({attrs:{"vertical,horisontal":()=>{this.props[$]=n}},props:{"vertical,horisontal":()=>{this.emit("change:"+$,{data:n})}}}[t],$)}}}).define();