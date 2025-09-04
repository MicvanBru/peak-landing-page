'use client';

export function FloatingOrbs() {
  return (
    <>
      {/* Floating Gradient Orbs - Behind all content */}
      <div 
        className="floating-orb orb-cyan w-96 h-96 top-1/4 left-1/12 gpu-accelerated"
        style={{ 
          animation: 'floatUp 25s ease-in-out infinite',
          animationDelay: '0s',
          zIndex: -1,
          opacity: 0.25
        }}
      />
      <div 
        className="floating-orb orb-purple w-80 h-80 top-1/3 right-1/6 gpu-accelerated"
        style={{ 
          animation: 'floatDiagonal 30s ease-in-out infinite',
          animationDelay: '8s',
          zIndex: -1,
          opacity: 0.2
        }}
      />
      <div 
        className="floating-orb orb-blend w-72 h-72 bottom-1/3 left-1/4 gpu-accelerated"
        style={{ 
          animation: 'floatCircular 22s ease-in-out infinite',
          animationDelay: '15s',
          zIndex: -1,
          opacity: 0.2
        }}
      />
      <div 
        className="floating-orb orb-cyan w-64 h-64 bottom-1/4 right-1/12 gpu-accelerated"
        style={{ 
          animation: 'floatGentle 20s ease-in-out infinite',
          animationDelay: '5s',
          zIndex: -1,
          opacity: 0.25
        }}
      />
    </>
  );
}

export function GeometricShapes() {
  return (
    <>
      {/* Rotating Square */}
      <div className="geometric-shape top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div 
          className="w-16 h-16 rotate-slow gpu-accelerated"
          style={{
            background: 'linear-gradient(45deg, rgba(6,182,212,0.3), rgba(147,51,234,0.2))',
            borderRadius: '12px',
            border: '1px solid rgba(6,182,212,0.4)'
          }}
        />
      </div>

      {/* Rotating Hexagon */}
      <div className="geometric-shape top-1/4 right-1/4">
        <div 
          className="w-12 h-12 rotate-reverse gpu-accelerated"
          style={{
            background: 'linear-gradient(135deg, rgba(147,51,234,0.4), rgba(6,182,212,0.3))',
            clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
            border: '1px solid rgba(147,51,234,0.5)'
          }}
        />
      </div>

      {/* Rotating Circle */}
      <div className="geometric-shape bottom-1/3 right-1/3">
        <div 
          className="w-8 h-8 rotate-slow gpu-accelerated rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(6,182,212,0.5), rgba(147,51,234,0.3))',
            border: '2px solid rgba(6,182,212,0.6)',
            animationDelay: '10s'
          }}
        />
      </div>

      {/* Small Diamond */}
      <div className="geometric-shape top-3/4 left-1/5">
        <div 
          className="w-6 h-6 rotate-reverse gpu-accelerated"
          style={{
            background: 'linear-gradient(45deg, rgba(236,72,153,0.4), rgba(6,182,212,0.3))',
            transform: 'rotate(45deg)',
            border: '1px solid rgba(236,72,153,0.5)',
            animationDelay: '5s'
          }}
        />
      </div>
    </>
  );
}

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  overlap?: boolean;
}

export function GlassCard({ children, className = '', overlap = false }: GlassCardProps) {
  const overlapClasses = overlap ? '-mt-24 -mb-24 z-20' : '';
  
  return (
    <div className={`glass-card glass-card-hover rounded-3xl p-8 lg:p-12 ${overlapClasses} ${className}`}>
      {children}
    </div>
  );
}

interface AnimatedTextProps {
  children: React.ReactNode;
  className?: string;
}

export function AnimatedGradientText({ children, className = '' }: AnimatedTextProps) {
  return (
    <span className={`gradient-text-animated ${className}`}>
      {children}
    </span>
  );
}

interface MeshBackgroundProps {
  variant?: 1 | 2;
  className?: string;
}

export function MeshBackground({ variant = 1, className = '' }: MeshBackgroundProps) {
  const meshClass = variant === 1 ? 'mesh-gradient-1' : 'mesh-gradient-2';
  
  return (
    <div className={`absolute inset-0 ${meshClass} ${className}`} style={{ zIndex: 2 }} />
  );
}