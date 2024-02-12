function NEOCustoms(filename, filetype){
 if (filetype=="js"){ //if filename is a external JavaScript file
  var fileJs=document.createElement('script')
  fileJs.setAttribute("type","text/javascript")
  fileJs.setAttribute("src", filename)
 }
 else if (filetype=="css"){ //if filename is an external CSS file
  var fileref=document.createElement("link")
  fileref.setAttribute("rel", "stylesheet")
  fileref.setAttribute("type", "text/css")
  fileref.setAttribute("href", filename)
 }
 if (typeof fileref!="undefined"){
  document.getElementsByTagName("head")[0].appendChild(fileref)
 }
 else if (typeof fileJs!="undefined"){
  document.getElementsByTagName("body")[0].appendChild(fileJs)
 }
}

// external CSS
//loadjscssfilesmith("https://url.com/.../customStyleSheet.css", "css") ////dynamically load and add this .css file
NEOCustoms("https://inspe-master-meef-neo.github.io/ametice/customs/BetterCall🟣.css", "css")
NEOCustoms("https://www.univ-amu.fr/themes/custom/amu_zurb/fontawesome/css/all.min.css?s4vlzw", "css")

// external JS
// NEOCustoms("https://url.com/.../customJavaScript.js", "js") //dynamically load and add this .js file
// NEOCustoms("https://cdn.logwork.com/widget/countdown.js", "js")
NEOCustoms("https://inspe-master-meef-neo.github.io/ametice/customs/extras/globlol.js", "js")


