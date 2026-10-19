# X-T3 interactive camera guide

Open `index.html` in a browser. Local assets are bundled; no build step is needed.

- `index.html`: the only page entry; navigation and section markup.
- `style.css`: layout and visual presentation.
- `script.js`: Three.js initialization, chapter navigation and camera poses.
- `intro.js`, `tape-audio.js`: unboxing and seal interaction.
- `explorer.js`, `tool-physics.js`: camera tools, physical controls and tool motion.
- `shutter-lab.js`: moving target, night sky, exposure simulation and album.
- `web-audio.js`: interface, shutter, dial and rail audio.
- `models/model-data.js`: browser-loadable compressed camera data.
- `models/quad-wire-data.js`: loaded only when wireframe is first enabled.
- `models/hdri-data.js`, `models/worn-metal-data.js`: environment and material data.
- `models/xt3_01-textured.glb`: editable/export source retained for future model work; not downloaded by the page.
- `images/`, `libs/`: referenced local assets and bundled vendor library.

Chapter changes use navigation links. Completing the unboxing also opens chapter 02. Photos are stored only for the current page session.
