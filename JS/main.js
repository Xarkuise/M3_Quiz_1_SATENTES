import * as THREE from './three.module.js';
import { OrbitControls } from './OrbitControls.js';

// Scene setup
const scene = new THREE.Scene();

// Create camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 0, 5); // Adjusted camera position

// Create renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Add lights
const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
directionalLight.position.set(1, 1, 1).normalize(); // Normalize directional light position
scene.add(directionalLight);

const pointLight = new THREE.PointLight(0xffffff, 0.8);
pointLight.position.set(0, 3, 0);
scene.add(pointLight);

// Create textures
const floorTexture = new THREE.TextureLoader().load('Texture/floor.jpg');
const wallTexture = new THREE.TextureLoader().load('Texture/wall.jpg');
const screenTexture = new THREE.TextureLoader().load('Texture/loading_Screen.jpg');
const tvScreenTexture = new THREE.TextureLoader().load('Texture/Kingdom_hearts.jpg');

// Create floor
const floorGeometry = new THREE.PlaneGeometry(20, 15);
const floorMaterial = new THREE.MeshStandardMaterial({ map: floorTexture });
const floorMesh = new THREE.Mesh(floorGeometry, floorMaterial);
floorMesh.rotation.x = -Math.PI / 2; // Rotate to lay flat
scene.add(floorMesh);

// Create walls
const wallMaterial = new THREE.MeshStandardMaterial({ map: wallTexture });

// Right wall
const rightWallGeometry = new THREE.PlaneGeometry(15, 6);
const rightWallMesh = new THREE.Mesh(rightWallGeometry, wallMaterial);
rightWallMesh.position.set(10, 3, 0);
rightWallMesh.rotation.y = -Math.PI / 2;
scene.add(rightWallMesh);

// Left wall
const leftWallGeometry = new THREE.PlaneGeometry(15, 6);
const leftWallMesh = new THREE.Mesh(leftWallGeometry, wallMaterial);
leftWallMesh.position.set(-10, 3, 0);
leftWallMesh.rotation.y = Math.PI / 2;
scene.add(leftWallMesh);

// Middle wall
const middleWallGeometry = new THREE.PlaneGeometry(20, 6);
const middleWallMesh = new THREE.Mesh(middleWallGeometry, wallMaterial);
middleWallMesh.position.set(0, 3, -7.5);
scene.add(middleWallMesh);

// Create table
const tableGeometry = new THREE.BoxGeometry(6.5, .2, 3);
const tableMaterial = new THREE.MeshStandardMaterial({ color: "red" });
const tableMesh = new THREE.Mesh(tableGeometry, tableMaterial);
scene.add(tableMesh);
tableMesh.position.set(6.549, 2, -6);

//Front Left Leg stand of the table
const frontLeftLegGeometry = new THREE.BoxGeometry(.2, 2.2, .2);
const frontLeftLegMaterial = new THREE.MeshStandardMaterial({ color: "black" });
const frontLeftLegMesh = new THREE.Mesh(frontLeftLegGeometry, frontLeftLegMaterial);
scene.add(frontLeftLegMesh);
frontLeftLegMesh.position.set(3.20, 1.01, -4.59);

//Back Left Leg stand of the table
const backLeftLegGeometry = new THREE.BoxGeometry(.2, 2.2, .2);
const backLeftLegMaterial = new THREE.MeshStandardMaterial({ color: "black" });
const backLeftLegMesh = new THREE.Mesh(backLeftLegGeometry, backLeftLegMaterial);
scene.add(backLeftLegMesh);
backLeftLegMesh.position.set(3.20, 1.01, -7.4);

//Upper Rim Left leg of the table
const upperLeftLegGeometry = new THREE.BoxGeometry(0.2, .2, 3);
const upperLeftLegMaterial = new THREE.MeshStandardMaterial({ color: "black" });
const upperLeftLegMesh = new THREE.Mesh(upperLeftLegGeometry, upperLeftLegMaterial);
scene.add(upperLeftLegMesh);
upperLeftLegMesh.position.set(3.20, 2, -6);

//Lower Rim Left leg of the table
const lowerLeftLegGeometry = new THREE.BoxGeometry(0.2, .2, 3);
const lowerLeftLegMaterial = new THREE.MeshStandardMaterial({ color: "black" });
const lowerLeftLegMesh = new THREE.Mesh(lowerLeftLegGeometry, lowerLeftLegMaterial);
scene.add(lowerLeftLegMesh);
lowerLeftLegMesh.position.set(3.20, .1, -6);

//Front Right Leg stand of the table
const frontRightLegGeometry = new THREE.BoxGeometry(.2, 2.2, .2);
const frontRightLegMaterial = new THREE.MeshStandardMaterial({ color: "black" });
const frontRightLegMesh = new THREE.Mesh(frontRightLegGeometry, frontRightLegMaterial);
scene.add(frontRightLegMesh);
frontRightLegMesh.position.set(9.90, 1.01, -4.59);

//Back Right Leg stand of the table
const backRightLegGeometry = new THREE.BoxGeometry(.2, 2.2, .2);
const backRightLegMaterial = new THREE.MeshStandardMaterial({ color: "black" });
const backRightLegMesh = new THREE.Mesh(backRightLegGeometry, backRightLegMaterial);
scene.add(backRightLegMesh);
backRightLegMesh.position.set(9.90, 1.01, -7.4);

//Upper Rim Right leg of the table
const upperRightLegGeometry = new THREE.BoxGeometry(0.2, .2, 3);
const upperRightLegMaterial = new THREE.MeshStandardMaterial({ color: "black" });
const upperRightLegMesh = new THREE.Mesh(upperRightLegGeometry, upperRightLegMaterial);
scene.add(upperRightLegMesh);
upperRightLegMesh.position.set(9.90, 2, -6);

//Lower Rim Right leg of the table
const lowerRightLegGeometry = new THREE.BoxGeometry(0.2, .2, 3);
const lowerRightLegMaterial = new THREE.MeshStandardMaterial({ color: "black" });
const lowerRightLegMesh = new THREE.Mesh(lowerRightLegGeometry, lowerRightLegMaterial);
scene.add(lowerRightLegMesh);
lowerRightLegMesh.position.set(9.90, .1, -6);

// Create Monitor
const monitorGeometry = new THREE.BoxGeometry(3, 2, 0.1);
const monitorMaterial = new THREE.MeshStandardMaterial({ color: "black" });
const monitorMesh = new THREE.Mesh(monitorGeometry, monitorMaterial);
scene.add(monitorMesh);
monitorMesh.position.set(6.8, 4, -6.5);

// Create Monitor Screen
const screenGeometry = new THREE.BoxGeometry(2.7, 1.7, 0.01);
const screenMaterial = new THREE.MeshStandardMaterial({ color: "white", map: screenTexture }); 
const screenMesh = new THREE.Mesh(screenGeometry, screenMaterial);
scene.add(screenMesh);
screenMesh.position.set(6.8, 4, -6.45);

// Create Monitor Stand
const standGeometry = new THREE.BoxGeometry(.4, 2.6, .3);
const standMaterial = new THREE.MeshStandardMaterial({ color: "gray" }); 
const standMesh = new THREE.Mesh(standGeometry, standMaterial);
scene.add(standMesh);
standMesh.position.set(6.8, 3.6, -6.7);

// Create Monitor foot
const footGeometry = new THREE.BoxGeometry(1, 0.2, 1);
const footMaterial = new THREE.MeshStandardMaterial({ color: "gray" }); 
const footMesh = new THREE.Mesh(footGeometry, footMaterial);
scene.add(footMesh);
footMesh.position.set(6.8, 2.2, -6.7);

// Create Keyboard
const keyboardGeometry = new THREE.BoxGeometry(2.5, 0.3, 1);
const keyboardMaterial = new THREE.MeshStandardMaterial({ color: "black" }); 
const keyboardMesh = new THREE.Mesh(keyboardGeometry, keyboardMaterial);
scene.add(keyboardMesh);
keyboardMesh.position.set(6.7, 2.1, -5.3);

// Create Keyboard
const mouseGeometry = new THREE.BoxGeometry(0.4, 0.3, .6);
const mouseMaterial = new THREE.MeshStandardMaterial({ color: "black" }); 
const mouseMesh = new THREE.Mesh(mouseGeometry, mouseMaterial);
scene.add(mouseMesh);
mouseMesh.position.set(8.8, 2.1, -5.3);


// Create Gaming Chair Head
const gamingChairGeometry = new THREE.BoxGeometry(2, 3, .6);
const gamingChairMaterial = new THREE.MeshStandardMaterial({ color: "white" }); 
const gamingChairMesh = new THREE.Mesh(gamingChairGeometry, gamingChairMaterial);
scene.add(gamingChairMesh);
gamingChairMesh.position.set(6.8, 2.1, -2.6);

//Create Gaming Chair body
const gamingChairBodyGeometry = new THREE.BoxGeometry(2, 2, 2);
const gamingChairBodyMaterial = new THREE.MeshStandardMaterial({ color: "white" }); 
const gamingChairBodyMesh = new THREE.Mesh(gamingChairBodyGeometry, gamingChairBodyMaterial);
scene.add(gamingChairBodyMesh);
gamingChairBodyMesh.position.set(6.8, .5, -3.6);


// Create TV
const tvGeometry = new THREE.BoxGeometry(5, 3, 0.1);
const tvMaterial = new THREE.MeshStandardMaterial({ color: "black" });
const tvMesh = new THREE.Mesh(tvGeometry, tvMaterial);
scene.add(tvMesh);
tvMesh.position.set(-8.8, 4, .9);
tvMesh.rotation.y = Math.PI / 2;

// Creat TV Screen
const tvScreenGeometry = new THREE.BoxGeometry(4.5, 2.5, 0.01);
const tvScreenMaterial = new THREE.MeshStandardMaterial({ color: "gray", map : tvScreenTexture});
const tvScreenMesh = new THREE.Mesh(tvScreenGeometry, tvScreenMaterial);
scene.add(tvScreenMesh);
tvScreenMesh.position.set(-8.73, 4, .9);
tvScreenMesh.rotation.y = Math.PI / 2;

// Create TV STAND
const tvStandGeometry = new THREE.BoxGeometry(1, 3, .4);
const tvStandMaterial = new THREE.MeshStandardMaterial({ color: "gray" });
const tvStandMesh = new THREE.Mesh(tvStandGeometry, tvStandMaterial);
scene.add(tvStandMesh);
tvStandMesh.position.set(-9, 3, .9);
tvStandMesh.rotation.y = Math.PI / 2;

//Creat TV Foot
const tvFootGeometry = new THREE.BoxGeometry(1.5, .2, 1);
const tvFootMaterial = new THREE.MeshStandardMaterial({ color: "gray" });
const tvFootMesh = new THREE.Mesh(tvFootGeometry, tvFootMaterial);
scene.add(tvFootMesh);
tvFootMesh.position.set(-9, 2, .9);
tvFootMesh.rotation.y = Math.PI / 2;

// Create TV Table
const tvtableGeometry = new THREE.BoxGeometry(5, 2, 2);
const tvtableMaterial = new THREE.MeshStandardMaterial({ color: "#CD7F32" });
const tvtableMesh = new THREE.Mesh(tvtableGeometry, tvtableMaterial);
scene.add(tvtableMesh);
tvtableMesh.position.set(-9, 1, .9);
tvtableMesh.rotation.y = Math.PI / 2;

// Create Playstation
const playstationGeometry = new THREE.BoxGeometry(1.5, 0.4, 1);
const playstationMaterial = new THREE.MeshStandardMaterial({ color: 0x000000 }); // Black color
const playstationMesh = new THREE.Mesh(playstationGeometry, playstationMaterial);
scene.add(playstationMesh);
playstationMesh.position.set(-8.73, 2, -.7);
playstationMesh.rotation.y = Math.PI / 2;

// Create couch
const couchGeometry = new THREE.BoxGeometry(8, 3, .5);
const couchMaterial = new THREE.MeshStandardMaterial({ color: "white" }); // Red color
const couchMesh = new THREE.Mesh(couchGeometry, couchMaterial);
scene.add(couchMesh);
couchMesh.position.set(-2.73, 1.5, 1);
couchMesh.rotation.y = Math.PI / 2;

// Create couch body
const couchBodyGeometry = new THREE.BoxGeometry(7, 1.5, 2);
const couchBodyMaterial = new THREE.MeshStandardMaterial({ color: "white" }); // Red color
const couchBodyMesh = new THREE.Mesh(couchBodyGeometry, couchBodyMaterial);
scene.add(couchBodyMesh);
couchBodyMesh.position.set(-3.73, .75, 1);
couchBodyMesh.rotation.y = Math.PI / 2;

// Create couch left arm
const couchLeftArmGeometry = new THREE.BoxGeometry(.7, 2, 2);
const couchLeftArmMaterial = new THREE.MeshStandardMaterial({ color: "white" }); // Red color
const couchLeftArmMesh = new THREE.Mesh(couchLeftArmGeometry, couchLeftArmMaterial);
scene.add(couchLeftArmMesh);
couchLeftArmMesh.position.set(-3.73, 1, 4.67);
couchLeftArmMesh.rotation.y = Math.PI / 2;

// Create couch right arm
const couchRightArmGeometry = new THREE.BoxGeometry(.7, 2, 2);
const couchRightArmMaterial = new THREE.MeshStandardMaterial({ color: "white" }); // Red color
const couchRightArmMesh = new THREE.Mesh(couchRightArmGeometry, couchRightArmMaterial);
scene.add(couchRightArmMesh);
couchRightArmMesh.position.set(-3.73, 1, -2.67);
couchRightArmMesh.rotation.y = Math.PI / 2;

// Add orbital camera control
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.25;
controls.screenSpacePanning = false;
controls.maxPolarAngle = Math.PI / 2;

// Render loop
function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}
animate();