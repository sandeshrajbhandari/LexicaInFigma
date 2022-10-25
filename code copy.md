"use strict";
// This plugin will open a window to prompt the user to enter a number, and
// it will then create that many rectangles on the screen.
// This file holds the main code for the plugins. It has access to the _document_.
// You can access browser APIs in the <script> tag inside "ui.html" which has a
// full browser environment (see documentation).
// This shows the HTML page in "ui.html".
figma.showUI(**html**);
// Calls to "parent.postMessage" from within the HTML page will trigger this
// callback. The callback will be passed the "pluginMessage" property of the
// posted message.
figma.ui.onmessage = (msg) => {
// One way of distinguishing between different types of messages sent from
// your HTML page is to use an object with a "type" property like this.
if (msg.type === "create-rectangles") {
const nodes = [];
for (let i = 0; i < msg.count; i++) {
const rect = figma.createRectangle();
rect.x = i _ 150;
rect.fills = [{ type: "SOLID", color: { r: 1, g: 0.5, b: 0 } }];
figma.currentPage.appendChild(rect);
nodes.push(rect);
}
figma.currentPage.selection = nodes;
figma.viewport.scrollAndZoomIntoView(nodes);
}
if (msg.type === "opacity") {
for (const node of figma.currentPage.selection) {
if ("opacity" in node) {
node.opacity _= 0.5;
}
//change corner radius of selecting using Figma API
if ("cornerRadius" in node) {
node.cornerRadius = 20;
}
}
}
function turnFrameIntoComponent() {
const selection = figma.currentPage.selection[0];
if (!selection) {
return;
}
const component = figma.createComponent();
component.x = selection.x;
component.y = selection.y;
component.resize(selection.width, selection.height);
// Copy children into new node
for (const child of selection.children) {
component.appendChild(child);
}
selection.remove();
}
// Make sure to close the plugin when you're done. Otherwise the plugin will
// keep running, which shows the cancel button at the bottom of the screen.
figma.closePlugin();
};
