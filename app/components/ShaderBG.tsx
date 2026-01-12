import { ShaderGradientCanvas, ShaderGradient } from "@shadergradient/react";

export default function ShaderBackground() {
   return (
      <ShaderGradientCanvas
            style={{
               position: 'fixed',
               top: 0,
               left: 0,
               width: '100vw',
               height: '100vh',
               opacity: 0.4,
            }}
            pointerEvents='none'
      >
            <ShaderGradient
               control='query'
               urlString='https://www.shadergradient.co/customize?animate=on&axesHelper=off&brightness=0.9&cAzimuthAngle=180&cDistance=3.5&cPolarAngle=90&cameraZoom=11&color1=%23000000&color2=%234e00cc&color3=%23140033&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=50&frameRate=10&gizmoHelper=hide&grain=off&lightType=3d&pixelDensity=1&positionX=0&positionY=0&positionZ=0&range=enabled&rangeEnd=50&rangeStart=0&reflection=0.08&rotationX=50&rotationY=0&rotationZ=-60&shader=defaults&type=waterPlane&uAmplitude=0&uDensity=1.8&uFrequency=0&uSpeed=0.25&uStrength=1.5&uTime=8&wireframe=false'
            />
      </ShaderGradientCanvas>
   );
}