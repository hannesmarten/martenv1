"use strict";

var text = "loading...loading...loading...loading...loading...loading...loading...loading...loading...loading...loading...loading...loading...loading...loading...loading...loading...loading...loading...loading...loading...loading...";
var begin = 0;
var end = text.length;

function lauftext()
{
 document.getElementsByName("newsticker")[0].value = "" +
 text.substring(begin,end) + " " + text.substring(0,begin);
 begin ++;
 if(begin >= end)
 {
  begin = 0;
 }
 window.setTimeout("lauftext()", 80);
}
