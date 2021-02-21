const proj4 = require('proj4');
const db = require('./db');

// const first = 'EPSG:5179';
const first = "+proj=tmerc +lat_0=38 +lon_0=127.5 +k=0.9996 +x_0=1000000 +y_0=2000000 +ellps=GRS80 +units=m +no_defs";

// const second = 'EPSG:4326';
const second = "+proj=longlat +ellps=WGS84 +datum=WGS84 +no_defs";

// console.log(JSON.stringify(db.db.geometries[0].coordinates[0][0]));
let n1, n2, output;


//서울
// const loc = db.db.geometries[0].coordinates[0];
// loc.forEach((v,i) => {
//     n1 = loc[i][0];
//     n2 = loc[i][1];
//     // console.log(JSON.stringify(n1));
//     // console.log(JSON.stringify(n2));
//     output = proj4(first, second, [n1,n2]);

//     let x = output[1];
//     let y = output[0];

//     console.log(x+', '+y);
// })

// const loc = db.db.geometries[0].coordinates[0] //서울특별시
// const loc = db.db.geometries[1].coordinates; //부산광역시
// const loc = db.db.geometries[2].coordinates; //대구광역시
// const loc = db.db.geometries[3].coordinates; //인천광역시
// const loc = db.db.geometries[4].coordinates; //광주광역시
// const loc = db.db.geometries[5].coordinates; //대전광역시
// const loc = db.db.geometries[6].coordinates; //울산광역시
// const loc = db.db.geometries[7].coordinates; //세종특별자치시
// const loc = db.db.geometries[8].coordinates; //경기도
// const loc = db.db.geometries[9].coordinates; //강원도
// const loc = db.db.geometries[10].coordinates; //충북
// const loc = db.db.geometries[11].coordinates; //충남
// const loc = db.db.geometries[12].coordinates //전북
// const loc = db.db.geometries[13].coordinates //전남
// const loc = db.db.geometries[14].coordinates //경북
// const loc = db.db.geometries[15].coordinates //경남
// const loc = db.db.geometries[16].coordinates //제주



// const loc = db.db.geometries;
// console.log(loc.length)

// console.log(loc);

// n1 = loc[0][0][0];
// n2 = loc[0][0][1];

// output = proj4(first, second, [n1,n2]);

// let x = output[1];
// let y = output[0];

// console.log(x+', '+y);