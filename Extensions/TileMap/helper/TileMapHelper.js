!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).TileMapHelper={})}(this,(function(e){"use strict";const t=2147483648,i=1073741824,s=536870912;var l;function n(e){const t=l.isFlippedDiagonally(e),i=l.isFlippedHorizontally(e),s=l.isFlippedVertically(e);let n=0;return t?(n=10,!i&&s?n=2:i&&!s?n=6:i&&s&&(n=14)):(n=0,!i&&s?n=8:i&&!s?n=12:i&&s&&(n=4)),n}function o(e,l,n,o){let r=e;return l&&(r|=t),n&&(r|=i),o&&(r|=s),r}!function(e){e.tileIdMask=536870911,e.getTileId=function(t){return t&e.tileIdMask},e.setFlippedHorizontally=function(e,i){return e&=2147483647,i&&(e|=t),e},e.setFlippedVertically=function(e,t){return e&=-1073741825,t&&(e|=i),e},e.setFlippedDiagonally=function(e,t){return e&=-536870913,t&&(e|=s),e},e.isFlippedHorizontally=function(e){return 0!=(e&t)},e.isFlippedVertically=function(e){return 0!=(e&i)},e.isFlippedDiagonally=function(e){return 0!=(e&s)}}(l||(l={}));class r{constructor(e,t,i,s,l){this.tileWidth=e,this.tileHeight=t,this.dimX=i,this.dimY=s,this._tileSet=l,this._layers=[]}static from(e,{tileSize:t,tileSetColumnCount:i,tileSetRowCount:s}){const l=new Map;if(!Number.isInteger(i)||i<=0||!Number.isInteger(s)||s<=0)throw new Error(`Tilemap object badly configured. Tile size ${t} is not compatible with atlas image dimensions, resulting in having ${i} columns and ${s} rows.`);new Array(i*s).fill(0).forEach(((e,t)=>{l.set(t,new u(0))}));const n=new r(t||e.tileWidth,t||e.tileHeight,e.dimX||1,e.dimY||1,l);return e.layers?e.layers.forEach((e=>{n.addTileLayer(h.from(e,n,(e=>e<i*s)))})):n.addNewTileLayer(0),n}toJSObject(){return{tileWidth:this.tileWidth,tileHeight:this.tileHeight,dimX:this.dimX,dimY:this.dimY,layers:this._layers.map((e=>e.toJSObject()))}}getWidth(){return this.tileWidth*this.dimX}getHeight(){return this.tileHeight*this.dimY}getTileHeight(){return this.tileHeight}getTileWidth(){return this.tileWidth}getDimensionX(){return this.dimX}getDimensionY(){return this.dimY}setDimensionX(e){if(e===this.dimX)return;const t=e-this.dimX;for(const e of this.getLayers())e instanceof h&&(t>0?e.increaseDimensions(t,0,0,0):e.reduceDimensions(-t,0,0,0));this.dimX=e}increaseDimensions(e,t,i,s){if(!(e<0||t<0||i<0||s<0||0===e&&0===t&&0===i&&0===s)){for(const l of this.getLayers())l instanceof h&&l.increaseDimensions(e,t,i,s);this.dimX=this.dimX+e+t,this.dimY=this.dimY+i+s}}setDimensionY(e){if(e===this.dimY)return;const t=e-this.dimY;for(const e of this.getLayers())e instanceof h&&(t>0?e.increaseDimensions(0,0,t,0):e.reduceDimensions(0,0,-t,0));this.dimY=e}getTileDefinition(e){return this._tileSet.get(e)}getTileDefinitions(){return this._tileSet.values()}addNewTileLayer(e){const t=new h(this,e);return this._layers.push(t),t}addTileLayer(e){this._layers.push(e)}getTileLayer(e){const t=this._layers.find((t=>t.id===e));return t instanceof h?t:null}addObjectLayer(e){const t=new d(this,e);return this._layers.push(t),t}getBackgroundResourceName(){return this._backgroundResourceName}getLayers(){return this._layers}pointIsInsideTile(e,t,i){const s=Math.floor(e/this.tileWidth),l=Math.floor(t/this.tileHeight);for(const e of this._layers){const t=e;if(!t)continue;const n=t.getTileId(s,l);if(void 0===n)return!1;if(this._tileSet.get(n).hasTaggedHitBox(i))return!0}return!1}setBackgroundResourceName(e){this._backgroundResourceName=e}isEmpty(){return this._layers.every((e=>e.isEmpty()))}getTileId(e,t,i){const s=this.getTileLayer(i);if(!s)return-1;const l=s.getTileId(e,t);return void 0===l?-1:l}setTile(e,t,i,s){const l=this.getTileLayer(i);l&&l.setTile(e,t,s)}flipTileOnY(e,t,i,s){const l=this.getTileLayer(i);l&&l.setFlippedVertically(e,t,s)}flipTileOnX(e,t,i,s){const l=this.getTileLayer(i);l&&l.setFlippedHorizontally(e,t,s)}isTileFlippedOnX(e,t,i){const s=this.getTileLayer(i);return!!s&&s.isFlippedHorizontally(e,t)}isTileFlippedOnY(e,t,i){const s=this.getTileLayer(i);return!!s&&s.isFlippedVertically(e,t)}removeTile(e,t,i){if(e<0||e>=this.dimX||t<0||t>=this.dimY)return;const s=this.getTileLayer(i);s&&s.removeTile(e,t)}trimEmptyColumnsAndRowToFitLayer(e){const t=this.getTileLayer(e);if(!t)return;const i=this.dimY,s=this.dimX;if(t.isEmpty()&&1===this._layers.length)return t.buildEmptyLayer(1,1),this.dimX=1,this.dimY=1,{shiftedRows:0,shiftedColumns:0,poppedRows:i-1,poppedColumns:s-1};const l=t.getTrimmingData();for(const e of this.getLayers())e instanceof h&&e.reduceDimensions(l.columnsToPop,l.columnsToShift,l.rowsToPop,l.rowsToShift);return this.dimX=s-l.columnsToPop-l.columnsToShift,this.dimY=i-l.rowsToPop-l.rowsToShift,{poppedRows:l.rowsToPop,poppedColumns:l.columnsToPop,shiftedRows:l.rowsToShift,shiftedColumns:l.columnsToShift}}}class a{constructor(e,t){this.visible=!0,this.tileMap=e,this.id=t}setVisible(e){this.visible=e}toJSObject(){return{}}isVisible(){return this.visible}isEmpty(){return!0}}class d extends a{constructor(e,t){super(e,t),this.objects=[]}add(e){this.objects.push(e)}isEmpty(){return 0===this.objects.length}}class c{constructor(e,t,i){this.tileId=i,this.x=e,this.y=t}getTileId(){return l.getTileId(this.tileId)}setFlippedHorizontally(e){this.tileId=l.setFlippedHorizontally(this.tileId,e)}setFlippedVertically(e){this.tileId=l.setFlippedVertically(this.tileId,e)}setFlippedDiagonally(e){this.tileId=l.setFlippedDiagonally(this.tileId,e)}isFlippedHorizontally(){return l.isFlippedHorizontally(this.tileId)}isFlippedVertically(){return l.isFlippedVertically(this.tileId)}isFlippedDiagonally(){return l.isFlippedDiagonally(this.tileId)}}class h extends a{constructor(e,t){super(e,t),this.buildEmptyLayer(this.tileMap.getDimensionX(),this.tileMap.getDimensionY()),this._alpha=1}buildEmptyLayer(e,t){this._tiles=[],this._tiles.length=t;for(let t=0;t<this._tiles.length;t++)this._tiles[t]=new Int32Array(e)}static from(e,t,i){const s=new h(t,e.id);return s.setAlpha(e.alpha),e.tiles.forEach(((e,t)=>e.forEach(((e,n)=>{const o=l.getTileId(e);i(o)&&s.setTileGID(n,t,e)})))),s}toJSObject(){return{id:this.id,alpha:this._alpha,tiles:this._tiles.map(((e,t)=>Array.from(e.map(((e,i)=>{const s=this.getTileGID(i,t);return void 0===s?-1:s})))))}}getAlpha(){return this._alpha}setAlpha(e){this._alpha=e}isEmpty(){return this._tiles.every((e=>e.every((e=>0===e))))}reduceDimensions(e,t,i,s){(i>0||s>0)&&(this._tiles=this._tiles.slice(s,i?-i:void 0)),(e>0||t>0)&&this._tiles.forEach(((i,s)=>{this._tiles[s]=this._tiles[s].slice(t,e?-e:void 0)}))}increaseDimensions(e,t,i,s){const l=this._tiles.length,n=this._tiles[0].length;if((e>0||t>0)&&this._tiles.forEach(((i,s)=>{const l=new Int32Array(n+e+t).fill(0);l.set(i,t),this._tiles[s]=l})),i>0||s>0){this._tiles.unshift(...new Array(s).fill(0).map((()=>new Int32Array(n+e+t).fill(0)))),this._tiles.length=l+i+s;for(let i=l+s;i<this._tiles.length;i++)this._tiles[i]=new Int32Array(n+e+t).fill(0)}}setTile(e,t,i){if(!this.tileMap.getTileDefinition(i))return void console.error(`Invalid tile definition index: ${i}`);const s=this._tiles[t];!s||e>=s.length||(s[e]=i+1)}setTileGID(e,t,i){const s=this._tiles[t];!s||e>=s.length||(s[e]=i+1)}getTrimmingData(){let e=0,t=0;const i=this.getDimensionX(),s=this.getDimensionY(),l=new Array(this._tiles.length).fill(this._tiles[0].length),n=new Array(this._tiles.length).fill(this._tiles[0].length);let o=!1;for(let i=0;i<this._tiles.length;i++){const s=this._tiles[i];let r=!1;for(let e=0;e<s.length;e++){0!==s[e]&&(n[i]=s.length-1-e,r||(l[i]=e,r=!0))}!r||(t=this._tiles.length-1-i,o||(e=i,o=!0))}if(!o)return{columnsToShift:0,rowsToShift:0,columnsToPop:i-1,rowsToPop:s-1};return{rowsToShift:e,columnsToShift:Math.min(...l),rowsToPop:t,columnsToPop:Math.min(...n)}}removeTile(e,t){const i=this._tiles[t];!i||e>=i.length||(i[e]=0)}setFlippedHorizontally(e,t,i){const s=this._tiles[t];if(!s||e>=s.length)return;const n=s[e];0!==n&&(s[e]=l.setFlippedHorizontally(n,i))}setFlippedVertically(e,t,i){const s=this._tiles[t];if(!s||e>=s.length)return;const n=s[e];0!==n&&(s[e]=l.setFlippedVertically(n,i))}setFlippedDiagonally(e,t,i){const s=this._tiles[t];if(!s||e>=s.length)return;const n=s[e];0!==n&&(s[e]=l.setFlippedDiagonally(n,i))}isFlippedHorizontally(e,t){const i=this._tiles[t];return!(!i||e>=i.length)&&l.isFlippedHorizontally(i[e])}isFlippedVertically(e,t){const i=this._tiles[t];return!(!i||e>=i.length)&&l.isFlippedVertically(i[e])}isFlippedDiagonally(e,t){const i=this._tiles[t];return!(!i||e>=i.length)&&l.isFlippedDiagonally(i[e])}getTileGID(e,t){const i=this._tiles[t];if(i&&!(e>=i.length)&&0!==i[e])return i[e]-1}getTileId(e,t){const i=this._tiles[t];if(!i||e>=i.length||0===i[e])return;return l.getTileId(i[e]-1)}getDimensionX(){return 0===this._tiles.length?0:this._tiles[0].length}getDimensionY(){return this._tiles.length}getWidth(){return this.tileMap.getWidth()}getHeight(){return this.tileMap.getHeight()}}class u{constructor(e){this.taggedHitBoxes=[],this.animationLength=null!=e?e:0,this.stackedTiles=[]}addHitBox(e,t,i){let s=this.taggedHitBoxes.find((t=>t.tag===e));s||(s={tag:e,polygons:[],hasFullHitBox:!1},this.taggedHitBoxes.push(s)),s.hasFullHitBox||(s.hasFullHitBox=i),s.polygons.push(t)}hasTaggedHitBox(e){return this.taggedHitBoxes.some((t=>t.tag===e))}getHitBoxes(e){const t=this.taggedHitBoxes.find((t=>t.tag===e));return t&&t.polygons}hasFullHitBox(e){const t=this.taggedHitBoxes.find((t=>t.tag===e));return t&&t.hasFullHitBox}getAnimationLength(){return this.animationLength}getStackTileId(){return this.stackTileId}getStackedTiles(){return this.stackedTiles}hasStackedTiles(){return this.stackedTiles.length>0}setStackedTiles(e,...t){this.stackedTiles=t,this.stackTileId=e}}class p{constructor(){this._cachedValues=new Map,this._callbacks=new Map}getOrLoad(e,t,i){{const t=this._cachedValues.get(e);if(t)return void i(t)}{const t=this._callbacks.get(e);if(t)return void t.push(i);this._callbacks.set(e,[i])}t((t=>{t&&this._cachedValues.set(e,t);const i=this._callbacks.get(e);this._callbacks.delete(e);for(const e of i)e(t)}))}}class g{constructor(){this._levelBackgroundTextures=new Map,this._textures=new Map}setTexture(e,t){this._textures.set(e,t)}getTexture(e){return this._textures.get(e)}getLevelBackgroundTexture(e){return this._levelBackgroundTextures.get(e)}setLevelBackgroundTexture(e,t){this._levelBackgroundTextures.set(e,t)}}const f=(e,t)=>{const{data:i,compression:s}=t;if(!i)return i;let l=4;const n=[];let o=atob(i).split("").map((function(e){return e.charCodeAt(0)}));try{const t=(e,t)=>e[t]+(e[t+1]<<8)+(e[t+2]<<16)+(e[t+3]<<24)>>>0;if("zlib"===s){const i=new Uint8Array(o),s=e.inflate(i);for(;l<=s.length;)n.push(t(s,l-4)),l+=4}else{if("zstd"===s)return console.error("Zstandard compression is not supported for layers in a Tilemap. Use instead zlib compression or no compression."),null;for(;l<=o.length;)n.push(t(o,l-4)),l+=4}return n}catch(e){return console.error("Failed to decompress and unzip base64 layer.data string",e),null}},y=e=>{const l=e&t,n=e&i,o=e&s;return{id:T(536870911&e),flippedHorizontally:!!l,flippedVertically:!!n,flippedDiagonally:!!o}};function T(e){return 0===e?void 0:e-1}var m,_,w,x,I;function b(e,t){let i=e<<16;return i+=t,i}function k(e,t,i,s){var l;if(e[s])return e[s];let n=null;const o=t[s];return(null==o?void 0:o.relPath)?(n=i(o.relPath),"res/error48.png"===(null===(l=n.baseTexture)||void 0===l?void 0:l.cacheId)&&(console.error(`The atlas texture "${o.relPath}" can't be loaded`),n=null)):console.error(`The tileset "${o.identifier}" doesn't seems to contain an atlas texture`),e[s]=n,n}!function(e){e.parseAtlas=function(e,t,i,s){if(!e.tiledversion)return console.warn("The loaded Tiled map does not contain a 'tiledversion' key. Are you sure this file has been exported from Tiled (mapeditor.org)?"),null;if(!e.tilesets.length||"source"in e.tilesets[0])return console.warn("The loaded Tiled map seems not to contain any tileset data (nothing in 'tilesets' key)."),null;const l=e.tilesets[0],{tilewidth:n,tileheight:o,tilecount:r,image:a,columns:d,spacing:c,margin:h}=l,u=void 0===l.firstgid?1:l.firstgid;i||(i=s(a));const p=r/d,f=n*d+c*(d-1)+2*h,y=o*p+c*(p-1)+2*h;if(i.width<f||i.height<y)return console.error(`It seems the atlas file was resized, which is not supported. It should be ${f}x${y} px, but it's actually ${i.width}x${i.height} px.`),null;i.width===f&&i.height===y||console.warn(`It seems the atlas file has unused pixels. It should be ${f}x${y} px, but it's actually ${i.width}x${i.height} px.`);const m=new g;for(let e=0;e<r;e++){const t=h+Math.floor(e%d)*(n+c),s=h+Math.floor(e/d)*(o+c),l=T(u+e);try{const e=new PIXI.Rectangle(t,s,n,o),r=new PIXI.Texture(i,e);m.setTexture(l,r)}catch(e){console.error("An error occurred while creating a PIXI.Texture to be used in a TileMap:",e)}}return m}}(m||(m={})),function(e){e.parseAtlas=function(e,t,i,s){const l=e.levels[t>-1?t:0];if(!l||!l.layerInstances)return null;const n={};for(const t of e.defs.tilesets)n[t.uid]=t;const o=new g,r={},a={};for(let e=l.layerInstances.length-1;e>=0;--e){const t=l.layerInstances[e];if("Entities"===t.__type)continue;const i=t.__tilesetDefUid;if("number"!=typeof i)continue;const d=n[i],c=k(a,n,s,i);if(!c)continue;const h={},u=d.tileGridSize;for(const e of[...t.autoLayerTiles,...t.gridTiles]){if(h[e.t])continue;const t=b(i,e.t);if(r[t])h[e.t]=!0;else{try{const[i,s]=e.src,l=new PIXI.Rectangle(i,s,u,u),n=new PIXI.Texture(c,l);o.setTexture(t,n)}catch(e){console.error("An error occurred while creating a PIXI.Texture to be used in a TileMap:",e)}h[e.t]=!0,r[t]=!0}}}if(l.bgRelPath){const e=s(l.bgRelPath),t=new PIXI.Rectangle(0,0,l.pxWid,l.pxHei),i=new PIXI.Texture(e,t);o.setLevelBackgroundTexture(l.bgRelPath,i)}return o}}(_||(_={})),e.PixiTileMapHelper=void 0,function(e){function t(e,t,i,s,l){const n=t.tileMap,o=n.getTileWidth(),r=n.getTileHeight();for(let a=0;a<n.getDimensionY();a++)for(let d=0;d<n.getDimensionX();d++){const c=o*d,h=r*a,u=t.getTileId(d,a),p=t.isFlippedHorizontally(d,a),g=t.isFlippedVertically(d,a),f=t.isFlippedDiagonally(d,a),y=n.getTileDefinition(u);if(!y)continue;const T=y.getHitBoxes(i);if(T)for(const t of T)if(0!==t.length){e.beginFill(s,l);for(let i=0;i<t.length;i++){let s=t[i][0],l=t[i][1];if(f){const e=s;s=l,l=e}p&&(s=o-s),g&&(l=r-l),0===i?e.moveTo(c+s,h+l):e.lineTo(c+s,h+l)}e.closePath(),e.endFill()}}}e.parseAtlas=function(e,t,i,s){return"ldtk"===e.kind?_.parseAtlas(e.data,t,i,s):"tiled"===e.kind?m.parseAtlas(e.data,t,i,s):(console.warn("The loaded Tiled map data does not contain a 'tiledversion' or '__header__' key. Are you sure this file has been exported from Tiled (mapeditor.org) or LDtk (ldtk.io)?"),null)},e.parseSimpleTileMapAtlas=function(e,t,i,s){const l=new g;for(let n=0;n<t;n++)for(let o=0;o<i;o++){const i=new PIXI.Rectangle(n*s,o*s,s,s),r=new PIXI.Texture(e,i);l.setTexture(t*o+n,r)}return l},e.updatePixiTileMap=function(e,t,i,s,o){const r=e;if(!r)return;r.clear();const a=t.getBackgroundResourceName();if(a){const e=i.getLevelBackgroundTexture(a);r.tile(e,0,0)}for(const e of t.getLayers())if(!("index"===s&&o!==e.id||"visible"===s&&!e.isVisible()))if(e instanceof d){const t=e;for(const e of t.objects){const s=e.getTileId(),l=i.getTexture(s);if(l){const i=n(s);r.tile(l,e.x,e.y-t.tileMap.getTileHeight(),{rotate:i})}}}else if(e instanceof h){const t=e,s=t.tileMap.getTileWidth(),o=t.tileMap.getTileHeight(),a=t.tileMap.getDimensionX(),d=t.tileMap.getDimensionY(),c=t.getAlpha();for(let e=0;e<d;e++)for(let d=0;d<a;d++){const a=s*d,h=o*e,u=t.getTileGID(d,e);if(void 0===u)continue;const p=l.getTileId(u),g=t.tileMap.getTileDefinition(p);if(g.hasStackedTiles())for(const e of g.getStackedTiles()){const t=l.getTileId(e),s=i.getTexture(t);if(!s)continue;const o=n(e);r.tile(s,a,h,{alpha:c,rotate:o})}else{const t=i.getTexture(p);if(!t){console.warn(`Unknown tile id: ${p} at (${d}, ${e})`);continue}const l=n(u),o=r.tile(t,a,h,{alpha:c,rotate:l});g.getAnimationLength()>0&&o.tileAnimX(s,g.getAnimationLength())}}}},e.updatePixiCollisionMask=function(e,i,s,l,n,o,r,a,d){if(e)if(e.clear(),e.lineStyle(n,o,r),e.drawRect(0,0,i.getWidth(),i.getHeight()),l){t(e,i.getTileLayer(l),s,a,d)}else for(const l of i.getLayers())l instanceof h&&t(e,l,s,a,d)}}(e.PixiTileMapHelper||(e.PixiTileMapHelper={})),function(e){e.load=function(e,t){const i=e.levels[t>-1?t:0];if(!i||!i.layerInstances)return null;const s=new Map;let l=0,n=0,a=0;for(let e=i.layerInstances.length-1;e>=0;--e){const t=i.layerInstances[e],o=t.__tilesetDefUid,r={};for(const e of[...t.autoLayerTiles,...t.gridTiles]){if(r[e.t])continue;const t=b(o,e.t);if(s.has(t)){r[e.t]=!0;continue}const i=new u(0);r[e.t]=!0,s.set(t,i)}"IntGrid"!==t.__type&&"AutoLayer"!==t.__type&&"Tiles"!==t.__type||(0===l?(l=t.__gridSize,n=t.__cWid,a=t.__cHei):t.__gridSize!==l&&console.warn("Grid size is different across layers. Only the first layer grid size will be followed."))}const d=new r(l,l,n,a,s),c=new Map;let h=268435455;for(let e=i.layerInstances.length-1;e>=0;--e){const t=i.layerInstances[e],l=t.__gridSize,n=t.__tilesetDefUid,r=d.addNewTileLayer(e);r.setAlpha(t.__opacity),r.setVisible(t.visible);for(const e of[...t.autoLayerTiles,...t.gridTiles]){const t=Math.floor(e.px[0]/l),i=Math.floor(e.px[1]/l),a=b(n,e.t),d=r.getTileId(t,i);if(void 0===d)r.setTile(t,i,a),r.setFlippedHorizontally(t,i,1===e.f||3===e.f),r.setFlippedVertically(t,i,2===e.f||3===e.f);else{const l=o(a,1===e.f||3===e.f,2===e.f||3===e.f,!1),n=s.get(d);if(null==n?void 0:n.hasStackedTiles()){const e=`${n.getStackedTiles().map((e=>`${e}`)).join(";")};${l}`,o=c.get(e);if(o)r.setTile(t,i,o.getStackTileId());else{const o=new u(0);o.setStackedTiles(h,...n.getStackedTiles(),l),s.set(h,o),h-=1,c.set(e,o),r.setTile(t,i,o.getStackTileId())}}else{const e=r.getTileGID(t,i),n=`${e};${l}`,o=new u(0);o.setStackedTiles(h,e,l),s.set(h,o),h-=1,c.set(n,o),r.setTile(t,i,o.getStackTileId())}}}}return i.bgRelPath&&d.setBackgroundResourceName(i.bgRelPath),d}}(w||(w={})),function(e){e.load=function(e,t){if(!e.tiledversion)return console.warn("The loaded Tiled map does not contain a 'tiledversion' key. Are you sure this file has been exported from Tiled (mapeditor.org)?"),null;const i=new Map;for(const t of e.tilesets){const s=void 0===t.firstgid?1:t.firstgid;if(t.tiles)for(const l of t.tiles){const t=new u(l.animation?l.animation.length:0),n=l.type||l.class;if(l.objectgroup)for(const i of l.objectgroup.objects){const s=i.type||i.class||n;if(!s||0===s.length)continue;let l=null,o=!1;if(i.polygon){const e=i.rotation*Math.PI/180;let t=Math.cos(e),s=Math.sin(e);-1!==t&&1!==t||(s=0),-1!==s&&1!==s||(t=0),l=i.polygon.map((e=>[i.x+e.x*t-e.y*s,i.y+e.x*s+e.y*t]))}else void 0!==i.x&&void 0!==i.y&&void 0!==i.width&&void 0!==i.height&&(l=[[i.x,i.y],[i.x,i.y+i.height],[i.x+i.width,i.y+i.height],[i.x+i.width,i.y]],o=0===i.x&&0===i.y&&i.width===e.tilewidth&&i.height===e.tileheight);l&&t.addHitBox(s,l,o)}else if(n){const i=[[0,0],[0,e.tileheight],[e.tilewidth,e.tileheight],[e.tilewidth,0]];t.addHitBox(n,i,!0)}i.set(T(s+l.id),t)}for(let e=0;e<t.tilecount;e++){const t=T(s+e);i.has(t)||i.set(t,new u(0))}}const s=new r(e.tilewidth,e.tileheight,e.width,e.height,i);for(const i of e.layers)if("objectgroup"===i.type){const e=s.addObjectLayer(i.id);e.setVisible(i.visible);for(const t of i.objects){if(!t.visible||!t.gid)continue;const i=y(t.gid),s=new c(t.x,t.y,i.id);e.add(s),s.setFlippedHorizontally(i.flippedHorizontally),s.setFlippedVertically(i.flippedVertically),s.setFlippedDiagonally(i.flippedDiagonally)}}else if("tilelayer"===i.type){let e=0,l=null;if("base64"===i.encoding?(l=f(t,i),l||console.warn("Failed to uncompress layer.data")):l=i.data,l){const t=s.addNewTileLayer(i.id);t.setAlpha(i.opacity),t.setVisible(i.visible);for(let s=0;s<i.height;s++)for(let n=0;n<i.width;n++){const i=l[e],o=y(i);void 0!==o.id&&(t.setTile(n,s,o.id),t.setFlippedHorizontally(n,s,o.flippedHorizontally),t.setFlippedVertically(n,s,o.flippedVertically),t.setFlippedDiagonally(n,s,o.flippedDiagonally)),e+=1}}}return s}}(x||(x={})),function(e){e.load=function(e,t,i){return"ldtk"===e.kind?w.load(e.data,t):"tiled"===e.kind?x.load(e.data,i):(console.warn("The loaded Tile Map data does not contain a 'tiledversion' or '__header__' key. Are you sure this file has been exported from Tiled (mapeditor.org) or LDtk (ldtk.io)?"),null)}}(I||(I={}));class M{constructor(){this._tileMapCache=new p,this._textureCacheCaches=new p}static getManager(e){return e.tileMapCollisionMaskManager||(e.tileMapCollisionMaskManager=new M),e.tileMapCollisionMaskManager}static identify(e){return e.tiledversion?(console.info("Detected the json file was created in Tiled"),{kind:"tiled",data:e}):e.__header__&&"LDtk"===e.__header__.app?(console.info("Detected the json/ldtk file was created in LDtk"),{kind:"ldtk",data:e}):(console.warn("The loaded Tile Map data does not contain a 'tiledversion' or '__header__' key. Are you sure this file has been exported from Tiled (mapeditor.org) or LDtk (ldtk.io)?"),null)}getOrLoadTileMap(e,t,i,s,l,n){const o=t+"|"+i+"|"+s;this._tileMapCache.getOrLoad(o,(n=>{e(t,i,(e=>{if(!e)return void n(null);const t=I.load(e,s,l);n(t)}))}),n)}getOrLoadSimpleTileMap(e,t,i,s,l,n){n(r.from(e,{tileSize:i,tileSetColumnCount:s,tileSetRowCount:l}))}getOrLoadTextureCache(t,i,s,l,n,o,r){const a=l+"|"+n+"|"+s+"|"+o;this._textureCacheCaches.getOrLoad(a,(r=>{t(l,n,(t=>{if(!t)return void r(null);const l=s?i(s):null,n=e.PixiTileMapHelper.parseAtlas(t,o,l,i);r(n)}))}),r)}getOrLoadSimpleTileMapTextureCache(t,i,s,l,n,o){const r=`${i}|${s}|${l}|${n}`;this._textureCacheCaches.getOrLoad(r,(o=>{if(!i)return void o(null);const r=t(i);o(e.PixiTileMapHelper.parseSimpleTileMapAtlas(r,l,n,s))}),o)}clearCaches(){this._tileMapCache=new p,this._textureCacheCaches=new p}}e.EditableTileMap=r,e.EditableTileMapLayer=h,e.TileDefinition=u,e.TileMapManager=M,e.TileTextureCache=g,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=TileMapHelper.js.map
