/*
** FIRST OF ALL, MAKE SURE YOU ADDED THE MODULE INTO YOUR MODULES FOLDER:
** Project/modules/commonjs/html-to-text
** THEN, ADD IT TO YOUR tiapp.xml FILE:
** <module platform="commonjs">html-to-text</module>
*/
var win = Ti.UI.createWindow({
   backgroundColor:'#f7fffa'
});

var htmlToText = require('html-to-text');
var htmlstring = '<html> <head> <meta charset="utf-8"> </head> <body> <table cellpadding="0" cellspacing="0" border="0"> <tr> <td> <h2>Paragraphs</h2> <p class="normal-space">At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. <a href="www.github.com">Github</a> </p><p class="normal-space">At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. </p></td><td></td></tr><tr> <td> <hr/> <h2>Pretty printed table</h2> <table id="invoice"> <thead> <tr> <th>Article</th> <th>Price</th> <th>Taxes</th> <th>Amount</th> <th>Total</th> </tr></thead> <tbody> <tr> <td> <p> Product 1<br/> <span style="font-size:0.8em">Contains: 1x Product 1</span> </p></td><td align="right" valign="top">6,99&euro;</td><td align="right" valign="top">7%</td><td align="right" valign="top">1</td><td align="right" valign="top">6,99€</td></tr><tr> <td>Shipment costs</td><td align="right">3,25€</td><td align="right">7%</td><td align="right">1</td><td align="right">3,25€</td></tr></tbody> <tfoot> <tr> <td>&nbsp;</td><td>&nbsp;</td><td colspan="3">to pay: 10,24€</td></tr><tr> <td></td><td></td><td colspan="3">Taxes 7%: 0,72€</td></tr></tfoot> </table> </td><td></td></tr><tr> <td> <hr/> <h2>Lists</h2> <ul> <li>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</li><li>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</li></ul> <ol> <li>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</li><li>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</li></ol> </td></tr><tr> <td> <hr/> <h2>Column Layout with tables</h2> <table class="address"> <tr> <th align="left">Invoice Address</th> <th align="left">Shipment Address</th> </tr><tr> <td align="left"> <p> Mr.<br/> John Doe<br/> Featherstone Street 49<br/> 28199 Bremen<br/> </p></td><td align="left"> <p> Mr.<br/> John Doe<br/> Featherstone Street 49<br/> 28199 Bremen<br/> </p></td></tr></table> </td><td></td></tr><tr> <td> <hr/> <h2>Mailto formating</h2> <p class="normal-space small"> Some Company<br/> Some Street 42<br/> Somewhere<br/> E-Mail: <a href="mailto:test@example.com">Click here</a> </p></td></tr></table> </body></html>';
var text = htmlToText.fromString(htmlstring, {
	wordwrap: 130
});
console.log(text);

var label = Ti.UI.createLabel({
   text:text,
   top:0,
   color:'black',
   opacity:0.8
});

var scroll = Ti.UI.createScrollView({
   top:60,
   width:'90%',
   height:'80%'
});
scroll.add(label);
win.add(scroll);
win.open();
