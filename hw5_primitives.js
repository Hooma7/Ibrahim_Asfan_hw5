//Basketball 
basketball_vertices = [];
basketball_indices = [];
basketball_colors = [];
basketball_normals = [];
basketball_texcoords = [];
let vsteps = 50;
let usteps = 50;
let r = 1;
for (let i=0; i<=vsteps; i++){
  const v = i * Math.PI / vsteps;
  const sinv = Math.sin(v);
  const cosv = Math.cos(v);

  for (let j=0; j<=usteps; j++){
    const u=j * 2 * Math.PI / usteps;
    const sinu = Math.sin(u);
    const cosu = Math.cos(u);
    const x = cosu * sinv;
    const y = cosv;
    const z = sinu * sinv;

    basketball_vertices.push(r*x, r*y, r*z);
    basketball_colors.push(0.9453125, 0.41015625, 0.1953125);

    basketball_normals.push(x, y, z);
    basketball_texcoords.push(j / usteps, 1-(i/vsteps));
  }
}

for(let i=0; i<vsteps; i++){
  for(let j=0; j<usteps; j++){
    const k1 = (i* (usteps + 1)) + j;
    const k2 = (i + 1) * (usteps + 1) + j;
    basketball_indices.push(k1, k2, k1 + 1);
    basketball_indices.push(k2, k2+1, k1+1);
  }
}

basketball_vertices = new Float32Array(basketball_vertices);
basketball_indices = new Uint16Array(basketball_indices);
basketball_colors = new Float32Array(basketball_colors);
basketball_normals = new Float32Array(basketball_normals);
basketball_texcoords = new Float32Array(basketball_texcoords);



//Rim
rim_vertices = [];
rim_indices = [];
rim_colors = [];
rim_normals = [];
rim_texcoords = [];
r = 0.25;
let R = 2; 
for (let i=0; i<=vsteps; i++){
  const v = i * 2 * Math.PI / vsteps;
  const sinv = Math.sin(v);
  const cosv = Math.cos(v);

  for (let j=0; j<=usteps; j++){
    const u=j * 2 * Math.PI / usteps;
    const sinu = Math.sin(u);
    const cosu = Math.cos(u);


    const x = (R+r*cosv)*cosu;
    const y = (R+r*cosv)*sinu;
    const z = r*sinv;

    rim_vertices.push(x, y, z);
    rim_colors.push(0.8984375, 0.22265625, 0.16015625);


    const dpdu = [-(R+r*cosv) * sinu, (R+r*cosv)*cosu,  0];

    const dpdv = [-r*sinv*cosu, -r*sinv*sinu, r*cosv];

    const nx = dpdu[1]*dpdv[2] - dpdu[2]*dpdv[1];
    const ny = dpdu[2]*dpdv[0] - dpdu[0]*dpdv[2];
    const nz = dpdu[0]*dpdv[1] - dpdu[1]*dpdv[0];

    const len = Math.sqrt(nx*nx + ny*ny + nz*nz);

    rim_normals.push(nx/len, ny/len, nz/len);
    rim_texcoords.push(u/usteps, v/vsteps);
  }
}

for(let i=0; i<vsteps; i++){
  for(let j=0; j<usteps; j++){
    const k1 = (i* (usteps + 1)) + j;
    const k2 = (i + 1) * (usteps + 1) + j;
    rim_indices.push(k1, k2, k1 + 1);
    rim_indices.push(k2, k2+1, k1+1);
  }
}

rim_vertices = new Float32Array(rim_vertices);
rim_indices = new Uint16Array(rim_indices);
rim_colors = new Float32Array(rim_colors);
rim_normals = new Float32Array(rim_normals);
rim_texcoords = new Float32Array(rim_texcoords);



//Unit Cube
const unitcube_vertices = new Float32Array([
  // Front face (+Z)
  -0.5, -0.5,  0.5,
   0.5, -0.5,  0.5,
   0.5,  0.5,  0.5,
  -0.5,  0.5,  0.5,
  // Back face (−Z)
  -0.5, -0.5, -0.5,
  -0.5,  0.5, -0.5,
   0.5,  0.5, -0.5,
   0.5, -0.5, -0.5,
  // Top face (+Y)
  -0.5,  0.5, -0.5,
  -0.5,  0.5,  0.5,
   0.5,  0.5,  0.5,
   0.5,  0.5, -0.5,
  // Bottom face (−Y)
  -0.5, -0.5, -0.5,
   0.5, -0.5, -0.5,
   0.5, -0.5,  0.5,
  -0.5, -0.5,  0.5,
  // Right face (+X)
   0.5, -0.5, -0.5,
   0.5,  0.5, -0.5,
   0.5,  0.5,  0.5,
   0.5, -0.5,  0.5,
  // Left face (−X)
  -0.5, -0.5, -0.5,
  -0.5, -0.5,  0.5,
  -0.5,  0.5,  0.5,
  -0.5,  0.5, -0.5,
]);
const unitcube_normals = new Float32Array([
  // Front
   0,  0,  1,
   0,  0,  1,
   0,  0,  1,
   0,  0,  1,
  // Back
   0,  0, -1,
   0,  0, -1,
   0,  0, -1,
   0,  0, -1,
  // Top
   0,  1,  0,
   0,  1,  0,
   0,  1,  0,
   0,  1,  0,
  // Bottom
   0, -1,  0,
   0, -1,  0,
   0, -1,  0,
   0, -1,  0,
  // Right
   1,  0,  0,
   1,  0,  0,
   1,  0,  0,
   1,  0,  0,
  // Left
  -1,  0,  0,
  -1,  0,  0,
  -1,  0,  0,
  -1,  0,  0,
]);
const unitcube_indices = new Uint16Array([
  0, 1, 2,   0, 2, 3,     // front
  4, 5, 6,   4, 6, 7,     // back
  8, 9,10,   8,10,11,     // top
 12,13,14,  12,14,15,     // bottom
 16,17,18,  16,18,19,     // right
 20,21,22,  20,22,23      // left
]);
unitcube_colors = [];
for(let i=0; i<8; i++){
  unitcube_colors.push(0.0, 0.0, 0.0);
}

unitcube_colors = new Float32Array(unitcube_colors);

unitcube_texcoords = new Float32Array([
  //Front
  0, 0,
  1, 0,
  1, 1,
  0, 1,
  //Back
  0, 0,
  0, 1,
  1, 1,
  1, 0,
  //Top
  0, 0,
  1, 0,
  1, 1,
  0, 1,
  //Bottom
  0, 0,
  1, 0,
  1, 1,
  0, 1,
  //Right
  1, 0,
  1, 1,
  0, 1,
  0, 0,
  //Left
  0, 0,
  1, 0,
  1, 1,
  0, 1,
]);


//Unit Cylinder
unitcylinder_vertices = [];
unitcylinder_indices = [];
unitcylinder_colors = [];
unitcylinder_normals = [];
unitcylinder_texcoords = [];
usteps = 50;
r = 1;
height = 1;
for (let h=0; h<=height; h++){
  for (let j=0; j<=usteps; j++){
    const u=j * 2 * Math.PI / usteps;
    const x = Math.cos(u);
    const y = Math.sin(u);
    const z = h;

    unitcylinder_vertices.push(r*x, z, r*y);
    unitcylinder_colors.push(0.0, 0.0, 0.0);

    unitcylinder_normals.push(r*x, 0, r*y);
    unitcylinder_texcoords.push(u/usteps, h/height);
  }
}
for(let i=0; i<vsteps; i++){
  for(let j=0; j<usteps; j++){
    const k1 = (i* (usteps + 1)) + j;
    const k2 = (i + 1) * (usteps + 1) + j;
    unitcylinder_indices.push(k1, k2, k1 + 1);
    unitcylinder_indices.push(k2, k2+1, k1+1);
  }
}

unitcylinder_vertices = new Float32Array(unitcylinder_vertices);
unitcylinder_colors = new Float32Array(unitcylinder_colors);
unitcylinder_indices = new Uint16Array(unitcylinder_indices);
unitcylinder_normals = new Float32Array(unitcylinder_normals);
unitcylinder_texcoords = new Float32Array(unitcylinder_texcoords);