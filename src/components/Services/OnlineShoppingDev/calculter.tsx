import React, { useState, useRef, useEffect } from 'react';
import * as THREE from 'three';

interface PricingState {
  duration: number;
  languages: number;
  currency: 'USD' | 'EUR';
}

const PricingCalculator: React.FC = () => {
  const [pricing, setPricing] = useState<PricingState>({
    duration: 25,
    languages: 19,
    currency: 'USD'
  });
  
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene>(null);
  const rendererRef = useRef<THREE.WebGLRenderer>(null);
  const spheresRef = useRef<THREE.Mesh[]>([]);

  // Calculate price based on duration and languages
  const calculatePrice = (): number => {
    return Math.round(pricing.duration * pricing.languages);
  };

  const price = calculatePrice();
  const currencySymbol = pricing.currency === 'USD' ? '$' : '€';

  // Initialize Three.js scene
  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(60, 60);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    // Create floating spheres
    const spheres: THREE.Mesh[] = [];
    for (let i = 0; i < 5; i++) {
      const geometry = new THREE.SphereGeometry(0.1 + Math.random() * 0.1, 16, 16);
      const material = new THREE.MeshPhongMaterial({
        color: new THREE.Color().setHSL(0.6 + i * 0.1, 0.7, 0.6),
        transparent: true,
        opacity: 0.8
      });
      const sphere = new THREE.Mesh(geometry, material);
      sphere.position.set(
        (Math.random() - 0.5) * 2,
        (Math.random() - 0.5) * 2,
        (Math.random() - 0.5) * 2
      );
      spheres.push(sphere);
      scene.add(sphere);
    }

    // Add lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    camera.position.z = 3;

    sceneRef.current = scene;
    rendererRef.current = renderer;
    spheresRef.current = spheres;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      spheres.forEach((sphere, index) => {
        sphere.rotation.x += 0.01;
        sphere.rotation.y += 0.01;
        sphere.position.y += Math.sin(Date.now() * 0.001 + index) * 0.001;
        sphere.position.x += Math.cos(Date.now() * 0.001 + index) * 0.001;
      });
      
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  // Update sphere colors based on price
  useEffect(() => {
    if (spheresRef.current.length > 0) {
      const intensity = Math.min(price / 1000, 1);
      spheresRef.current.forEach((sphere) => {
        const material = sphere.material as THREE.MeshPhongMaterial;
        material.color.setHSL(0.6 - intensity * 0.3, 0.7, 0.6);
        material.opacity = 0.6 + intensity * 0.4;
      });
    }
  }, [price]);

  return (
    <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto p-4">
      <div className="bg-gradient-to-br from-orange-200/30 via-pink-200/30 to-teal-200/30 backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg w-full transform hover:scale-105 transition-transform duration-300 overflow-hidden border border-white/20">
        
        {/* Mobile Layout - Stacked */}
        <div className="flex flex-col lg:hidden space-y-6">
          {/* Controls Section */}
          <div className="space-y-4">
            {/* Duration Selector */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">
                Selected Items
              </label>
              <div className="flex items-center justify-center space-x-2 p-3 sm:p-4 bg-gray-50/80 rounded-lg">
                <span className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">{Math.floor(pricing.duration)}Pcs</span>
              </div>
              <input
                type="range"
                min="5"
                max="100"
                value={pricing.duration}
                onChange={(e) => setPricing(prev => ({ ...prev, duration: parseFloat(e.target.value) }))}
                className="w-full mt-3 h-2 bg-gradient-to-r from-teal-300 to-teal-500 rounded-full appearance-none cursor-pointer slider"
              />
            </div>

            {/* Languages Selector */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">
                Price
              </label>
              <div className="p-3 sm:p-4 bg-gray-50/80 rounded-lg text-center">
                <span className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">{pricing.languages}</span>
              </div>
              <input
                type="range"
                min="1"
                max="50"
                value={pricing.languages}
                onChange={(e) => setPricing(prev => ({ ...prev, languages: parseInt(e.target.value) }))}
                className="w-full mt-3 h-2 bg-gradient-to-r from-orange-300 to-orange-500 rounded-full appearance-none cursor-pointer slider"
              />
            </div>
          </div>

          {/* Arrow for mobile */}
          <div className="flex items-center justify-center">
            <svg className="w-8 h-8 text-gray-600 transform rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </div>

          {/* Price Display Section */}
          <div className="flex flex-col items-center space-y-4">
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setPricing(prev => ({ ...prev, currency: 'USD' }))}
                className={`px-3 py-2 rounded-full text-sm transition-all duration-300 ${
                  pricing.currency === 'USD' 
                    ? 'bg-gray-200 text-gray-800' 
                    : 'bg-transparent text-gray-500 hover:bg-gray-100'
                }`}
              >
                USD
              </button>
              <button
                onClick={() => setPricing(prev => ({ ...prev, currency: 'EUR' }))}
                className={`px-3 py-2 rounded-full text-sm transition-all duration-300 ${
                  pricing.currency === 'EUR' 
                    ? 'bg-teal-400 text-white' 
                    : 'bg-transparent text-gray-500 hover:bg-teal-100'
                }`}
              >
                EUR
              </button>
            </div>
            
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 animate-pulse">
              {price}{currencySymbol}
            </div>
            
            <div className="text-sm sm:text-base text-gray-600 text-center">
              <div>You will be charged</div>
              <div>per translation</div>
            </div>
            
            <button className="bg-gradient-to-r from-orange-400 to-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-orange-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base whitespace-nowrap">
              See pricing
            </button>
          </div>
        </div>

        {/* Desktop Layout - Horizontal */}
        <div className="hidden lg:flex items-center space-x-6 xl:space-x-8 h-full min-h-[200px]">
          {/* Left Side - Controls */}
          <div className="flex-1 space-y-4">
            {/* Duration Selector */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2 text-sm xl:text-base">
                Selected Items
              </label>
              <div className="flex items-center space-x-2 p-3 xl:p-4 bg-gray-50/80 rounded-lg">
                <span className="text-lg xl:text-xl font-bold text-gray-800">{Math.floor(pricing.duration)}Pcs</span>
              </div>
              <input
                type="range"
                min="5"
                max="100"
                value={pricing.duration}
                onChange={(e) => setPricing(prev => ({ ...prev, duration: parseFloat(e.target.value) }))}
                className="w-full mt-3 h-1 bg-gradient-to-r from-teal-300 to-teal-500 rounded-full appearance-none cursor-pointer slider"
              />
            </div>

            {/* Languages Selector */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2 text-sm xl:text-base">
                Price
              </label>
              <div className="p-3 xl:p-4 bg-gray-50/80 rounded-lg">
                <span className="text-lg xl:text-xl font-bold text-gray-800">{pricing.languages}</span>
              </div>
              <input
                type="range"
                min="1"
                max="50"
                value={pricing.languages}
                onChange={(e) => setPricing(prev => ({ ...prev, languages: parseInt(e.target.value) }))}
                className="w-full mt-3 h-1 bg-gradient-to-r from-orange-300 to-orange-500 rounded-full appearance-none cursor-pointer slider"
              />
            </div>
          </div>

          {/* Center - Arrow */}
          <div className="flex items-center justify-center">
            <svg className="w-6 h-6 xl:w-8 xl:h-8 text-gray-600 transform rotate-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </div>

          {/* Right Side - Price Display */}
          <div className="flex flex-col items-end space-y-3 xl:space-y-4 min-w-0">
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setPricing(prev => ({ ...prev, currency: 'USD' }))}
                className={`px-2 py-1 rounded-full text-xs xl:text-sm transition-all duration-300 ${
                  pricing.currency === 'USD' 
                    ? 'bg-gray-200 text-gray-800' 
                    : 'bg-transparent text-gray-500 hover:bg-gray-100'
                }`}
              >
                USD
              </button>
              <button
                onClick={() => setPricing(prev => ({ ...prev, currency: 'EUR' }))}
                className={`px-2 py-1 rounded-full text-xs xl:text-sm transition-all duration-300 ${
                  pricing.currency === 'EUR' 
                    ? 'bg-teal-400 text-white' 
                    : 'bg-transparent text-gray-500 hover:bg-teal-100'
                }`}
              >
                EUR
              </button>
            </div>
            
            <div className="text-3xl xl:text-4xl font-bold text-gray-800 animate-pulse">
              {price}{currencySymbol}
            </div>
            
            <div className="text-xs xl:text-sm text-gray-600 text-center">
              <div>You will be charged</div>
              <div>per translation</div>
            </div>
            
            <button className="bg-gradient-to-r from-orange-400 to-orange-500 text-white px-4 py-2 xl:px-6 xl:py-3 rounded-lg font-semibold hover:from-orange-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg text-xs xl:text-sm whitespace-nowrap">
              See pricing
            </button>
          </div>
        </div>

        <style>{`
          .slider::-webkit-slider-thumb {
            appearance: none;
            width: 16px;
            height: 16px;
            border-radius: 50%;
            background: white;
            box-shadow: 0 2px 6px rgba(0,0,0,0.2);
            cursor: pointer;
            border: 2px solid #14b8a6;
            transition: all 0.2s ease;
          }
          
          .slider::-webkit-slider-thumb:hover {
            transform: scale(1.1);
            box-shadow: 0 3px 10px rgba(0,0,0,0.3);
          }
          
          .slider::-moz-range-thumb {
            width: 16px;
            height: 16px;
            border-radius: 50%;
            background: white;
            box-shadow: 0 2px 6px rgba(0,0,0,0.2);
            cursor: pointer;
            border: 2px solid #14b8a6;
            transition: all 0.2s ease;
          }
          
          .slider::-moz-range-thumb:hover {
            transform: scale(1.1);
            box-shadow: 0 3px 10px rgba(0,0,0,0.3);
          }

          @media (max-width: 1024px) {
            .slider::-webkit-slider-thumb {
              width: 20px;
              height: 20px;
            }
            
            .slider::-moz-range-thumb {
              width: 20px;
              height: 20px;
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default PricingCalculator;