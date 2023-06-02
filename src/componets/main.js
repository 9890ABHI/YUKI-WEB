import * as THREE from "three";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// const geometry = new THREE.BoxGeometry(2, 1, 2);
// // const geometry = new THREE.B (2, 1, 2);
// const material = new THREE.MeshBasicMaterial({ color: "#696969" });
// const cube = new THREE.Mesh(geometry, material);
// scene.add(cube);

const geometry = new THREE.BoxGeometry(10, 10, 100);
const edges = new THREE.EdgesGeometry(geometry);
const line = new THREE.LineSegments(
  edges,
  new THREE.LineBasicMaterial({ color: 0xffffff })
);

camera.position.z = 5;

export const Animate = () => {
  // requestAnimationFrame(Animate);

  // cube.rotation.x += 0.009;
  // cube.rotation.y += 0.01;
  // cube.rotation.z += 0.001;

  scene.add(line);

  renderer.render(scene, camera);
};
