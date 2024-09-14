import React from "react";
import { Canvas } from "@react-three/fiber";
import "./style.css";
import { Environment, OrbitControls, ScrollControls } from "@react-three/drei";
import MacContainer from "./MacContainer";

const App = () => {
  return (
    <div className="w-full h-screen">
      <div className="navbar line flex gap-10 pt-10 pb-3 absolute top-0 left-1/2 -translate-x-1/2 ">
        {[
          "iPhone",
          "iPad",
          "ios",
          "mac",
          "products",
          "earbuds",
          "iwatch",
          "type-c-cable",
          "type-c-adapter",
        ].map((e) => (
          <a href="" className="text-white font-[400] text-sm capitalize">
            {e}
          </a>
        ))}
      </div>
      <div className="absolute flex flex-col items-center top-20 left-1/2 -translate-x-1/2  text-white">
        <h3 className=" masked text-7xl tracking-tighter font-[600]">
          MacBook Pro.
        </h3>
        <h5>Oh So Pro !</h5>
        <p className="text-center w-3/4">
          The MacBook Pro stands sleek and refined, with power and performance
          intertwined. Its Retina display, vivid and bright, elevates work and
          play to new heights.
        </p>
      </div>
      {/* // fov = feel of view --- [x,y,z] */}
      <Canvas camera={{ fov: 12, position: [0, -10, 220] }}>
        {/* <OrbitControls /> */}
        <Environment
          files={[
            "https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr",
          ]}
        />
        <ScrollControls pages={3}>
          <MacContainer />
        </ScrollControls>
      </Canvas>
    </div>
  );
};

export default App;
