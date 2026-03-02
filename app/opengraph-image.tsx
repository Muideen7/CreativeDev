import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'CreativeDev | Engineering Digital Emotions';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#050505', // Your --color-obsidian
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        {/* Background Gradient Glow */}
        <div 
          style={{
            position: 'absolute',
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, rgba(93,38,255,0.2) 0%, transparent 70%)',
            top: '-200px',
            left: '-100px',
          }} 
        />
        
        <h1
          style={{
            fontSize: 80,
            fontWeight: 800,
            background: 'linear-gradient(to right, #00F0FF, #5D26FF, #FF00D6)',
            backgroundClip: 'text',
            color: 'transparent',
            letterSpacing: '-0.05em',
            marginBottom: '20px',
          }}
        >
          CreativeDev
        </h1>
        
        <p
          style={{
            fontSize: 32,
            color: '#F9F9F9',
            textAlign: 'center',
            maxWidth: '800px',
            lineHeight: 1.4,
          }}
        >
          Engineering Digital Emotions
        </p>
        
        <div style={{ marginTop: '40px', display: 'flex' }}>
          <div style={{ background: '#5D26FF', padding: '10px 24px', borderRadius: '50px', color: 'white', fontSize: 20 }}>
            Website Development & Design Agency
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}