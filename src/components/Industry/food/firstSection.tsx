import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { ArrowRight } from "lucide-react";
// import foodImage from "../../../assets/food1.jpg";
import useGoToContactPage from "../../Contact/contactFn";
import ImageHostLink from "../../../variable";


const FoodAppLanding: React.FC = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const goContact = useGoToContactPage();

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      mount.clientWidth / mount.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 8;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    const light = new THREE.DirectionalLight(0xffffff, 0.3);
    light.position.set(5, 5, 5);
    scene.add(light);

    const particles: THREE.Mesh[] = [];
    const geometry = new THREE.SphereGeometry(0.02, 8, 8);
    const material = new THREE.MeshBasicMaterial({
      color: 0xff6b35,
      transparent: true,
      opacity: 0.5,
    });

    for (let i = 0; i < 12; i++) {
      const particle = new THREE.Mesh(geometry, material);
      particle.position.set(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 5
      );
      scene.add(particle);
      particles.push(particle);
    }

    const animate = () => {
      particles.forEach((p, i) => {
        p.position.y += Math.sin(Date.now() * 0.001 + i) * 0.0012;
        p.rotation.y += 0.001;
      });
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      const width = mount.clientWidth;
      const height = mount.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden bg-black" style={{marginTop:"-50px"}}>
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={`${ImageHostLink}food1.jpg`}
          alt="Delicious Food"
          className="w-full h-full object-cover"
           loading="lazy"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* 3D Canvas */}
      <div
        ref={mountRef}
        className="absolute inset-0 pointer-events-none opacity-40 z-10"
      />

      {/* Main Content */}
      <div className="relative z-20 min-h-screen flex items-center justify-center px-6 py-16">
        <div className="text-center max-w-5xl mx-auto space-y-12">
          <div className="space-y-6">
            <h1 className="text-white text-5xl md:text-7xl font-light leading-tight tracking-tight">
              Build Your{" "}
              <span className="font-semibold text-orange-400 drop-shadow-md">
                Premium
              </span>{" "}
              Food Ordering App
            </h1>
            <p className="text-gray-200 text-lg md:text-2xl font-light leading-relaxed max-w-3xl mx-auto">
              Serve your customers with a stunning, lightning-fast, and
              mobile-friendly experience that elevates food delivery.
            </p>
          </div>

          <div className="flex justify-center">
            <button  onClick={goContact} className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 md:px-10 md:py-5 rounded-full font-medium flex items-center gap-3 transition-all duration-300 hover:scale-105 shadow-xl text-lg">
              Start Project
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodAppLanding;
