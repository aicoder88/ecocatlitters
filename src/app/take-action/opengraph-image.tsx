import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Take Action - Join the Eco Cat Litter Revolution';
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
          background: 'linear-gradient(135deg, #FF6B35 0%, #F7B538 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '60px',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '40px',
            left: '40px',
            fontSize: '70px',
            opacity: 0.3,
            display: 'flex',
          }}
        >
          🌍
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: '100px',
            right: '60px',
            fontSize: '60px',
            opacity: 0.3,
            display: 'flex',
          }}
        >
          ✊
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              fontSize: '24px',
              fontWeight: 500,
              color: '#FFFFFF',
              marginBottom: '16px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              opacity: 0.9,
            }}
          >
            <span style={{ display: 'flex' }}>🐱</span>
            <span>EcoCatLitters</span>
          </div>

          <div
            style={{
              fontSize: '72px',
              fontWeight: 700,
              color: '#FFFFFF',
              marginBottom: '24px',
              display: 'flex',
            }}
          >
            Take Action Now
          </div>

          <div
            style={{
              fontSize: '28px',
              fontWeight: 400,
              color: '#FFFFFF',
              marginBottom: '40px',
              opacity: 0.95,
              display: 'flex',
            }}
          >
            Be Part of the Solution, Not the Pollution
          </div>

          <div
            style={{
              background: '#1B4332',
              color: '#FFFFFF',
              fontSize: '24px',
              fontWeight: 600,
              padding: '16px 48px',
              borderRadius: '50px',
              display: 'flex',
            }}
          >
            Join the Revolution
          </div>
        </div>

        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            fontSize: '18px',
            color: '#FFFFFF',
            opacity: 0.8,
            display: 'flex',
          }}
        >
          ecocatlitters.com/take-action
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
