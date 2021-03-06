/*
 * Adding and removing class on DOM elements in a safe manner
 * incase there are mulitiple classes
 */
function hasClass(ele,cls) {
  return ele.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)'));
}
function addClass(ele,cls) {
  if (!this.hasClass(ele,cls)) ele.className += " "+cls;
}
function removeClass(ele,cls) {
  if (hasClass(ele,cls)) {
      var reg = new RegExp('(\\s|^)'+cls+'(\\s|$)','g');
      ele.className=ele.className.replace(reg,' ');
  }
}
function preappend(parentid,child){
	var parent = document.getElementById(parentid);
	if(parent.firstChild) parent.insertBefore(child, parent.firstChild);
	else parent.appendChild(child);
}