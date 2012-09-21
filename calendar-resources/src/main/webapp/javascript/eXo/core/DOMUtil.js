/**
 * Copyright (C) 2009 eXo Platform SAS.
 * 
 * This is free software; you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as
 * published by the Free Software Foundation; either version 2.1 of
 * the License, or (at your option) any later version.
 * 
 * This software is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details.
 * 
 * You should have received a copy of the GNU Lesser General Public
 * License along with this software; if not, write to the Free
 * Software Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA
 * 02110-1301 USA, or see the FSF site: http://www.fsf.org.
 */

/**
* Array convenience method to check for membership.
*
* @param object element
* @returns boolean
*/
Array.prototype.contains = function (element) {
  for (var i = 0; i < this.length; i++) {
    if (this[i] == element) {
      return true ;
    }
  }
  return false ;
} ;

/**
* Array convenience method to clear membership.
* @param object element
* @returns void
*/
Array.prototype.clear = function () {
  this.length = 0 ;
} ;


/**
 * Some utility functions to use the DOM
 */
function DOMUtil() {
	this.hideElementList = new Array() ;
} ;
/**
 * Returns true if root has obj as a ancestor
 */
DOMUtil.prototype.hasAncestor= function(root, obj) {
  var prtEle = root.parentNode ;
  while (prtEle) {
  	if(prtEle == obj) return true;
  	prtEle = prtEle.parentNode;
  }
  return false ;
} ;
/**
 * Generates an id based on the current time and random number
 */
DOMUtil.prototype.generateId = function(objectId) {
	return (objectId + "-" + new Date().getTime() + Math.random().toString().substring(2)) ;
} ;

/* TODO: review this function: document.onclick */
/*
 * user for method eXo.webui.UIPopupSelectCategory.show();
 * reference file : UIPopupSelectCategory.js
 */
 /**
  * Hides the elements in the hideElementList array
  * This function is called when a click appear on the page,
  * and that all opened popup menu should be hidden
  */
DOMUtil.prototype.hideElements = function() {
	document.onclick = _module.DOMUtil.cleanUpHiddenElements;
};

DOMUtil.prototype.cleanUpHiddenElements = function() {
	var ln = _module.DOMUtil.hideElementList.length ;
	if (ln > 0) {
		for (var i = 0; i < ln; i++) {
			_module.DOMUtil.hideElementList[i].style.display = "none" ;
		}
		_module.DOMUtil.hideElementList.clear() ;
	}
};

/**
 * Adds an element to the hideElementList array
 * Should only contain elements from a popup menu
 */
DOMUtil.prototype.listHideElements = function(object) {
	if (!_module.DOMUtil.hideElementList.contains(object)) {
		_module.DOMUtil.hideElementList.push(object) ;
	}
} ;

DOMUtil.prototype.disableOnClick = function(el) {
	el.onclick = new Function("return false;");
}

/****************************************************************************/
//eXo.core.DOMUtil = new DOMUtil() ;
_module.DOMUtil = new DOMUtil() ;