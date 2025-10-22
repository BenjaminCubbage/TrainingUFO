import { FontaineTransform } from 'fontaine';
import fs from 'fs';

const css = fs.readFileSync('./src/assets/font-faces.css').toString();
const options = {
  fallbacks: ['BlinkMacSystemFont', 'Segoe UI', 'Helvetica Neue', 'Arial', 'Noto Sans'],
  resolvePath: id => `B:/NECWireSizer/nec_wire_sizer/public/fonts/${id}`
};

(async function() {
  const s = await FontaineTransform.raw(options).transform(css, "");
  fs.writeFileSync('./font-faces-fallbacks.css', s.code);
})();