import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'José Rodriguez - Full-Stack Developer';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          padding: '80px',
        }}
      >
        <div
          style={{
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '24px',
            padding: '60px 80px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              fontSize: '72px',
              fontWeight: 'bold',
              marginBottom: '20px',
              textAlign: 'center',
              letterSpacing: '-0.02em',
            }}
          >
            José Rodriguez
          </div>
          <div
            style={{
              fontSize: '36px',
              marginBottom: '30px',
              textAlign: 'center',
              opacity: 0.9,
            }}
          >
            Full-Stack Developer
          </div>
          <div
            style={{
              display: 'flex',
              gap: '20px',
              fontSize: '24px',
              opacity: 0.8,
            }}
          >
            <span>React</span>
            <span>•</span>
            <span>Next.js</span>
            <span>•</span>
            <span>Node.js</span>
            <span>•</span>
            <span>TypeScript</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
