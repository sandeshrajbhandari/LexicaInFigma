// This plugin will open a window to prompt the user to enter a number, and
// it will then create that many rectangles on the screen.

// This file holds the main code for the plugins. It has access to the *document*.
// You can access browser APIs in the <script> tag inside "ui.html" which has a
// full browser environment (see documentation).

// This shows the HTML page in "ui.html".
figma.showUI(__html__);
figma.ui.resize(500, 500);

// Calls to "parent.postMessage" from within the HTML page will trigger this
// callback. The callback will be passed the "pluginMessage" property of the
// posted message.
figma.ui.onmessage = (msg) => {
  // One way of distinguishing between different types of messages sent from
  // your HTML page is to use an object with a "type" property like this.
  if (msg.type === "create-images") {
    const nodes: SceneNode[] = [];
    // for (let i = 0; i < msg.count; i++) {
    //   const rect = figma.createRectangle();
    //   rect.x = i * 150;
    //   rect.fills = [{ type: "SOLID", color: { r: 1, g: 0.5, b: 0 } }];
    //   figma.currentPage.appendChild(rect);
    //   nodes.push(rect);
    // figma.currentPage.selection = nodes;
    // figma.viewport.scrollAndZoomIntoView(nodes);
    // }
    // const rect = figma.createRectangle();
    // rect.x = 150;
    // addImageToCanvas(msg.imgData);
    console.log(msg.imgData);
    console.log("test");
  }
  if (msg.type === "download-mult-images") {
    // addImageToCanvas(msg.imgData);
    // console.log(msg.dataArr[0]);
    // msg.dataArr.map((image: Uint8Array) => addImageToCanvas(image));
    for (let i = 0; i < msg.dataArr.length; i++) {
      addImageToCanvas(msg.dataArr[i], i);
    }
    // console.log([msg.imgData, msg.imgData, msg.imgData]);
  }
  function addImageToCanvas(data: Uint8Array, i: number) {
    let imageHash = figma.createImage(data).hash;
    const rect = figma.createRectangle();
    // rect.resize();
    rect.x = i * 101;
    rect.fills = [{ type: "IMAGE", scaleMode: "FILL", imageHash }];
    figma.currentPage.appendChild(rect);

    // select the rectangle and focus the viewport
    figma.currentPage.selection = [rect];
    figma.viewport.scrollAndZoomIntoView([rect]);
  }
  // if (msg.type === "opacity") {
  //   for (const node of figma.currentPage.selection) {
  //     if ("opacity" in node) {
  //       node.opacity *= 0.5;
  //     }
  //     //change corner radius of selecting using Figma API
  //     if ("cornerRadius" in node) {
  //       node.cornerRadius = 20;
  //     }
  //   }
  // }
  // Make sure to close the plugin when you're done. Otherwise the plugin will
  // keep running, which shows the cancel button at the bottom of the screen.
  figma.closePlugin();
};
