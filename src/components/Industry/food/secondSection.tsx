import React, { useRef, useEffect, useState } from 'react';
// import fastfood from "../../../assets/fast-food.mp4"
import ImageHostLink from '../../../variable';

interface CinematicFoodSectionProps {
  videoPath?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  secondaryDescription?: string;
  brandName?: string;
}

const CinematicFoodSection: React.FC<CinematicFoodSectionProps> = ({
  videoPath = ImageHostLink+ "fast-food.mp4",
  title = "Smart Food Ordering App Solutions for",
  subtitle = "Modern Businesses",
  description = "The food delivery boom in the online space has revolutionized eating habits. With more and more users choosing to order food from the comfort of their own homes or offices, the demand for hassle-free digital platforms is rising by leaps and bounds. On-demand food delivery has fully replaced the traditional dine-in model, enabling restaurants to deliver directly to customers' doorsteps—anywhere, anytime.",
  secondaryDescription = "Led by an expert team of developers, we deal in the creation of custom food delivery app solutions for startups, standalone eateries, and café owners. Our user-friendly platforms are intended to assist you in growing, expanding, and serving more with efficiency and innovation.",
  brandName = "Lazy Do"
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  // const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedMetadata = () => {
      // setIsVideoLoaded(true);
      video.play().catch(e => {
        console.log('Video autoplay failed:', e);
      });
    };

    const handleError = () => {
      setHasError(true);
      console.log('Video loading error');
    };

    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('error', handleError);

    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('error', handleError);
    };
  }, []);

  const styles = {
    section: {
      position: 'relative' as const,
      background: 'linear-gradient(135deg, #000 0%, #111 50%, #000 100%)',
      padding: '7rem 1.5rem',
      overflow: 'hidden',
      color: 'white',
      fontFamily: 'Arial, sans-serif'
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '4rem',
      alignItems: 'center'
    },
    textContent: {
      zIndex: 10,
      position: 'relative' as const
    },
    title: {
      fontSize: 'clamp(2rem, 5vw, 3rem)',
      fontWeight: 300,
      lineHeight: 1.2,
      letterSpacing: '-0.02em',
      marginBottom: '2rem',
      opacity: 0,
      transform: 'translateY(30px)',
      animation: 'fadeInUp 1s ease-out forwards'
    },
    highlight: {
      color: '#ff6b35',
      fontWeight: 600
    },
    description: {
      fontSize: '1.125rem',
      lineHeight: 1.7,
      marginBottom: '1.5rem',
      color: '#d1d5db',
      opacity: 0,
      transform: 'translateY(30px)',
      animation: 'fadeInUp 1s ease-out 0.3s forwards'
    },
    secondaryDescription: {
      fontSize: '1rem',
      lineHeight: 1.7,
      color: '#9ca3af',
      opacity: 0,
      transform: 'translateY(30px)',
      animation: 'fadeInUp 1s ease-out 0.6s forwards'
    },
    brandHighlight: {
      color: 'white',
      fontWeight: 500
    },
    videoContainer: {
      width: '100%',
      height: '450px',
      borderRadius: '0.75rem',
      overflow: 'hidden',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8)',
      position: 'relative' as const,
      opacity: 0,
      transform: 'translateX(50px)',
      animation: 'fadeInRight 1s ease-out 0.9s forwards'
    },
    video: {
      width: '100%',
      height: '100%',
      objectFit: 'cover' as const,
      borderRadius: '0.75rem'
    },
    glowEffect: {
      position: 'absolute' as const,
      top: '50%',
      left: '50%',
      width: '300px',
      height: '300px',
      background: 'radial-gradient(circle, rgba(255, 107, 53, 0.1) 0%, transparent 70%)',
      borderRadius: '50%',
      transform: 'translate(-50%, -50%)',
      animation: 'pulse 4s ease-in-out infinite',
      pointerEvents: 'none' as const
    },
    floatingElements: {
      position: 'absolute' as const,
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      pointerEvents: 'none' as const,
      zIndex: 1
    },
    floatingIcon: {
      position: 'absolute' as const,
      width: '60px',
      height: '60px',
      background: 'rgba(255, 107, 53, 0.1)',
      border: '2px solid rgba(255, 107, 53, 0.3)',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#ff6b35',
      fontSize: '24px',
      animation: 'float 6s ease-in-out infinite'
    },
    errorMessage: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100%',
      background: 'linear-gradient(45deg, #111, #000)',
      borderRadius: '0.75rem',
      color: '#9ca3af',
      fontSize: '1rem'
    }
  };

  const keyframes = `
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    @keyframes fadeInRight {
      from {
        opacity: 0;
        transform: translateX(50px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
    
    @keyframes float {
      0%, 100% {
        transform: translateY(0) rotate(0deg);
      }
      50% {
        transform: translateY(-20px) rotate(180deg);
      }
    }
    
    @keyframes pulse {
      0%, 100% {
        transform: translate(-50%, -50%) scale(1);
        opacity: 0.3;
      }
      50% {
        transform: translate(-50%, -50%) scale(1.2);
        opacity: 0.1;
      }
    }
  `;

  return (
    <>
      <style>{keyframes}</style>
      <section style={styles.section}>
       
        
        <div style={styles.container}>
          <div style={styles.textContent}>
            <h2 style={styles.title}>
              {title}{' '}
              <span style={styles.highlight}>{subtitle}</span>
            </h2>
            
            <p style={styles.description}>
              {description}
            </p>
            
            <p style={styles.secondaryDescription}>
              At <span style={styles.brandHighlight}>{brandName}</span>, we have achieved a solid 
              presence in this dynamic landscape as a reliable Food Delivery App Development Company in India. 
              {secondaryDescription}
            </p>
          </div>
          
          <div style={styles.videoContainer}>
            <div style={styles.glowEffect}></div>
            {hasError ? (
              <div style={styles.errorMessage}>
                Video could not be loaded
              </div>
            ) : (
              <video
                ref={videoRef}
                style={styles.video}
                autoPlay
                muted
                loop
                playsInline
                onError={() => setHasError(true)}
              >
                <source src={videoPath} type="video/mp4" />
                {/* <source src={videoPath.replace('.mp4', '.webm')} type="video/webm" /> */}
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default CinematicFoodSection;