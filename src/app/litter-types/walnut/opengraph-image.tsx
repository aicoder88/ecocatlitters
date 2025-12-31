import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Walnut Shell Cat Litter - Natural & Clumping';
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
        <div
          style={{
            position: 'absolute',
            top: '40px',
            right: '40px',
            fontSize: '80px',
            opacity: 0.4,
            display: 'flex',
          }}
        >
          🥜
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
              color: '#B7E4C7',
              marginBottom: '16px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            }}
          >
            <span style={{ display: 'flex' }}>🐱</span>
            <span>EcoCatLitters</span>
          </div>

          <div
            style={{
              background: 'rgba(255, 255, 255, 0.15)',
              color: '#B7E4C7',
              fontSize: '18px',
              fontWeight: 500,
              padding: '8px 24px',
              borderRadius: '20px',
              marginBottom: '20px',
              display: 'flex',
            }}
          >
            LITTER TYPE GUIDE
          </div>

          <div
            style={{
              fontSize: '64px',
              fontWeight: 700,
              color: '#FFFFFF',
              marginBottom: '24px',
              display: 'flex',
            }}
          >
            Walnut Cat Litter
          </div>

          <div
            style={{
              display: 'flex',
              gap: '30px',
              marginTop: '20px',
            }}
          >
            {[
              { icon: '💪', label: 'Super Strong' },
              { icon: '🔄', label: 'Clumping' },
              { icon: '🌍', label: 'Sustainable' },
            ].map((feature) => (
              <div
                key={feature.label}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <span style={{ fontSize: '36px', display: 'flex' }}>{feature.icon}</span>
                <span style={{ fontSize: '18px', color: '#FFFFFF', display: 'flex' }}>{feature.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            fontSize: '18px',
            color: '#B7E4C7',
            opacity: 0.8,
            display: 'flex',
          }}
        >
          ecocatlitters.com/litter-types/walnut
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
