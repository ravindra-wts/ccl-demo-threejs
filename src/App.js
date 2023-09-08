import React, {
  useRef,
  useMemo,
  useLayoutEffect,
  useState,
  useEffect
} from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Billboard,
  Environment,
  OrbitControls,
  useGLTF,
  Html
} from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import {
  Mesh,
  PlaneGeometry,
  MeshStandardMaterial,
  CSS3DObject,
  MeshBasicMaterial
} from "three";

import "./styles.css";

export default function App() {
  const controlsRef = useRef();

  // useEffect(() => {
  //   if (!controlsRef.current) return;
  //   controlsRef.current.minDistance = 5;
  // }, []);

  return (
    <>
      {/* <video src="/bg15.mp4" autoPlay loop /> */}
      <video src="/bg5.mp4" autoPlay loop />
      <div className="sign" id="instructions">
        <div id="animation"></div>
        <div className="helptext">
          <span className="helptext">Drag to explore</span>
        </div>
      </div>
      <Canvas camera={{ position: [0, 0, -0.2], near: 0.025 }}>
        <ambientLight intensity={0.2} />
        {/* <Environment
          // files="https://cdn.jsdelivr.net/gh/Sean-Bradley/React-Three-Fiber-Boilerplate@annotations/public/img/workshop_1k.hdr"
          // background
          preset={"forest"}
          intensity={0}
        /> */}
        {/* <ambientLight intensity={0.8} /> */}
        <OrbitControls
          ref={controlsRef}
          autoRotate
          enablePan={false}
          minPolarAngle={Math.PI / 2.9}
          maxPolarAngle={Math.PI / 2.5}
          minDistance={8}
          maxDistance={10}
        />
        <Model controlerRef={controlsRef} />
      </Canvas>
    </>
  );
}

export function Model({ controlerRef, ...props }) {
  const [showProduct, setShowProduct] = useState({});

  // const [toggleShowDescription, setToggleShowDescription] = useState(false);
  // const [newObjId, setNewObjId] = useState(null);

  const { camera, scene } = useThree();

  const group = useRef();
  const { nodes, materials } = useGLTF("/ccl.glb");

  let showProductDescription = false;
  let newObjectId;

  const allProductDetails = [
    {
      name: "Circle2",
      title: "NFTrace",
      description: "Traceability with private dynamic NFTs",
      link: "https://www.chaincodeconsulting.com/case-studies/nft-race"
    },

    {
      name: "Circle6",
      title: "URUS",
      description: "Self Sovereign EHR",
      link: "https://www.chaincodeconsulting.com/comingsoon"
    },
    {
      name: "Circle1",
      title: "Smart Hub",
      description: "Smart Supply Chain Management",
      link:
        "https://www.chaincodeconsulting.com/services/enterprise-blockchain-development-company#obortech"
    },
    {
      name: "Circle7",
      title: "dKYC",
      description: "Decentralised  KYC with Metaverse",
      link: "https://www.chaincodeconsulting.com/services"
    },

    {
      name: "Circle3",
      title: "cPERK$",
      description: "Interoperable Loyalty Program",
      link: "https://www.chaincodeconsulting.com/comingsoon"
    },

    {
      name: "Circle5",
      title: "LIVE LEDGER",
      description: "Future of End To End Supply Chain Management",
      link:
        "https://www.chaincodeconsulting.com/services/enterprise-blockchain-development-company#liveledger"
    },
    {
      name: "Circle4",
      title: "GDPR",
      description: "Decentralized Identity Management",
      link:
        "https://www.chaincodeconsulting.com/services/hyperledger-fabric-development-company#gdpr"
    }
  ];

  const handlePointerOver = (event) => {
    // console.log("event", event.object.name);
    event.stopPropagation();
    controlerRef.current.autoRotate = false;
    let filteredProduct = allProductDetails.filter(
      (product) => product.name === event.object.name
    );
    filteredProduct = filteredProduct[0];

    setShowProduct(filteredProduct);
    setTimeout(() => {
      controlerRef.current.autoRotate = true;
      setShowProduct({});
    }, 3000);
  };

  const getProductCard = () => {
    return (
      <Html
        // transform
        // wrapperClass="htmlScreen"
        distanceFactor={4}
        position={[0, 0.95, 0]}
        center={true}
        // position={[0, 0, 0]}
        //   rotation-y={1.565}
      >
        <div
          className="description-box"
          unselectable="on"
          // onClick={window.open(showProduct.link, "_blank")}
          onClick={() => {
            window.open(showProduct.link, "_blank");
          }}
        >
          <div className="product-container">
            <span className="title">{showProduct.title}</span>
            {/* <button>More Info</button> */}
            <hr />
            <p>{showProduct.description}</p>
          </div>
          <div className="vertical-dotted-line"></div>
        </div>
      </Html>
    );
  };
  return (
    <group {...props} dispose={null}>
      <mesh
        name="orbit_1"
        castShadow
        receiveShadow
        geometry={nodes.orbit_1.geometry}
        material={materials.white}
        rotation={[-Math.PI, 1.21, -Math.PI]}
        scale={[230.84, 0.05, 230.84]}
      />
      <mesh
        name="orbit_2"
        castShadow
        receiveShadow
        geometry={nodes.orbit_2.geometry}
        material={materials["white.001"]}
        rotation={[Math.PI, -0.35, Math.PI]}
        scale={[318.16, 0.05, 318.16]}
      />
      <mesh
        name="orbit_4"
        castShadow
        receiveShadow
        geometry={nodes.orbit_4.geometry}
        material={materials["white.003"]}
        rotation={[Math.PI, -0.58, Math.PI]}
        scale={[490.04, 0.05, 490.04]}
      />
      <mesh
        name="orbit_3"
        castShadow
        receiveShadow
        geometry={nodes.orbit_3.geometry}
        material={materials["white.002"]}
        rotation={[Math.PI, -0.93, Math.PI]}
        scale={[401.27, 0.05, 401.27]}
      />
      <mesh
        name="orbit_6"
        castShadow
        receiveShadow
        geometry={nodes.orbit_6.geometry}
        material={materials["white.005"]}
        rotation={[-Math.PI, 0.18, -Math.PI]}
        scale={[665, 0.05, 665]}
      />
      <mesh
        name="orbit_5"
        castShadow
        receiveShadow
        geometry={nodes.orbit_5.geometry}
        material={materials["white.004"]}
        rotation={[0, 0.21, 0]}
        scale={[576.38, 0.05, 576.38]}
      />
      <Billboard position={[0.34, 0, -2.19]} args={[1000, 1100]}>
        <mesh
          onPointerOver={handlePointerOver}
          name="Circle2"
          castShadow
          receiveShadow
          geometry={nodes.Circle2.geometry}
          material={materials["Material.011"]}
          // position={[0.34, 0, -2.19]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.57}
        />
        {showProduct.name === "Circle2" && getProductCard()}
      </Billboard>

      <Billboard position={[-2.6, 0, 1.06]} args={[1000, 1100]}>
        <mesh
          onPointerOver={handlePointerOver}
          name="Circle3"
          castShadow
          receiveShadow
          geometry={nodes.Circle3.geometry}
          material={materials["Material.004"]}
          // position={[-2.6, 0, 1.06]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.57}
        />
        {showProduct.name === "Circle3" && getProductCard()}
      </Billboard>

      <Billboard position={[-2.49, 0, -2.33]} args={[1000, 1100]}>
        <mesh
          onPointerOver={handlePointerOver}
          name="Circle4"
          castShadow
          receiveShadow
          geometry={nodes.Circle4.geometry}
          material={materials["Material.009"]}
          // position={[-2.49, 0, -2.33]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.57}
        />
        {showProduct.name === "Circle4" && getProductCard()}
      </Billboard>

      <Billboard position={[1.6, 0, 0.21]} args={[1000, 1100]}>
        <mesh
          onPointerOver={handlePointerOver}
          name="Circle1"
          castShadow
          receiveShadow
          geometry={nodes.Circle1.geometry}
          material={materials["Material.002"]}
          // position={[1.6, 0, 0.21]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.57}
        />
        {showProduct.name === "Circle1" && getProductCard()}
      </Billboard>

      <Billboard position={[0.86, 0, -4.56]} args={[1000, 1100]}>
        <mesh
          onPointerOver={handlePointerOver}
          name="Circle6"
          castShadow
          receiveShadow
          geometry={nodes.Circle6.geometry}
          material={materials["Material.010"]}
          // position={[0.86, 0, -4.56]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.57}
        />
        {showProduct.name === "Circle6" && getProductCard()}
      </Billboard>

      <Billboard position={[5.08, 0, -1.6]} args={[1000, 1100]}>
        <mesh
          onPointerOver={handlePointerOver}
          name="Circle7"
          castShadow
          receiveShadow
          geometry={nodes.Circle7.geometry}
          material={materials["Material.008"]}
          // position={[5.08, 0, -1.6]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.57}
        />
        {showProduct.name === "Circle7" && getProductCard()}
      </Billboard>

      <Billboard position={[0.41, 0, 4.01]} args={[1000, 1100]}>
        <mesh
          onPointerOver={handlePointerOver}
          name="Circle5"
          castShadow
          receiveShadow
          geometry={nodes.Circle5.geometry}
          material={materials["Material.003"]}
          // position={[0.41, 0, 4.01]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.57}
        />
        {showProduct.name === "Circle5" && getProductCard()}
      </Billboard>

      <Billboard position={[0, 0, 0]} args={[1000, 1100]}>
        <mesh
          name="ccLogo"
          castShadow
          receiveShadow
          geometry={nodes.ccLogo.geometry}
          material={materials["Frame 1"]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.78}
        />
      </Billboard>
      <mesh
        name="orbit_7"
        castShadow
        receiveShadow
        geometry={nodes.orbit_7.geometry}
        material={materials["white.006"]}
        rotation={[-Math.PI, 0.26, -Math.PI]}
        scale={[763.17, 0.05, 763.17]}
      />
    </group>
  );
}

useGLTF.preload("/ccl.glb");

{
  /* <Billboard position={[0, 0, 0]} args={[1000, 1100]}>
<mesh
  name="cc_logo"
  castShadow
  receiveShadow
  geometry={nodes.cc_logo.geometry}
  material={materials.cc_gradient_01}
  rotation={[Math.PI / 2, 0, 0]}
  scale={2.69}
/>
</Billboard> */
}
