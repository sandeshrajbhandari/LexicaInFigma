- https://github.com/rsms/figma-plugins/blob/master/fetch-image/plugin.js
- https://www.figma.com/plugin-docs/api/properties/nodes-fills
- https://www.figma.com/plugin-docs/working-with-images // wasn't that helpful

## First MVP summary

- using 5 rectangles Figma plugin boiler plate, created a working MVP
- images must be turned into blob using arraybuffer and then pass to code.ts (main thread of figma)
- fetch images, and turn into binary file in ui.html(browserAPI) and then pass to code.ts
- Figma doesn't have images, but have rectangle nodes with type Image with ImageHash to display images
- struggled with fetchAPI as coding habit has gotten rusty lately.
- dirty code, requires lots of cleanup
- url is baked into the code with query for https://lexica.art/programmer.jpg
- worked on ui.html code on a separate codepen for easier working.[Lexica API demo](https://codepen.io/sandeshrajbhandari/pen/mdKdqzZ)
