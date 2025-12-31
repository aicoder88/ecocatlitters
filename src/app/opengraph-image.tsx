import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'EcoCatLitters - Sustainable Cat Litter Solutions';
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
          background: 'linear-gradient(135deg, #1B4332 0%, #2D6A4F 50%, #40916C 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '60px',
        }}
      >
        {/* Decorative leaf elements */}
        <div
          style={{
            position: 'absolute',
            top: '40px',
            left: '40px',
            fontSize: '80px',
            opacity: 0.3,
            display: 'flex',
          }}
        >
          🌿
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            right: '40px',
            fontSize: '80px',
            opacity: 0.3,
            display: 'flex',
          }}
        >
          🌱
        </div>

        {/* Main content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          {/* Logo/Title */}
          <div
            style={{
              fontSize: '72px',
              fontWeight: 700,
              color: '#FFFFFF',
              marginBottom: '20px',
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
            }}
          >
            <span style={{ display: 'flex' }}>🐱</span>
            <span>EcoCatLitters</span>
          </div>

          {/* Tagline */}
          <div
            style={{
              fontSize: '32px',
              fontWeight: 500,
              color: '#B7E4C7',
              marginBottom: '40px',
              display: 'flex',
            }}
          >
            Sustainable Cat Litter for a Greener Planet
          </div>

          {/* CTA Badge */}
          <div
            style={{
              background: '#FF6B35',
              color: '#FFFFFF',
              fontSize: '24px',
              fontWeight: 600,
              padding: '16px 40px',
              borderRadius: '50px',
              display: 'flex',
            }}
          >
            Join the Eco Revolution
          </div>
        </div>

        {/* Bottom URL */}
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            fontSize: '20px',
            color: '#B7E4C7',
            opacity: 0.8,
            display: 'flex',
          }}
        >
          ecocatlitters.com
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
