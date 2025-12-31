import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'How to Switch Your Cat to Eco-Friendly Litter';
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
            fontSize: '70px',
            opacity: 0.4,
            display: 'flex',
          }}
        >
          📖
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
              background: '#FF6B35',
              color: '#FFFFFF',
              fontSize: '18px',
              fontWeight: 600,
              padding: '8px 24px',
              borderRadius: '20px',
              marginBottom: '20px',
              display: 'flex',
            }}
          >
            STEP-BY-STEP GUIDE
          </div>

          <div
            style={{
              fontSize: '56px',
              fontWeight: 700,
              color: '#FFFFFF',
              marginBottom: '24px',
              display: 'flex',
              textAlign: 'center',
            }}
          >
            Switch to Eco-Friendly Litter
          </div>

          <div
            style={{
              fontSize: '26px',
              fontWeight: 400,
              color: '#B7E4C7',
              marginBottom: '40px',
              display: 'flex',
            }}
          >
            A Stress-Free Transition for Your Cat
          </div>

          <div
            style={{
              display: 'flex',
              gap: '40px',
            }}
          >
            {['1. Gradual Mix', '2. Observe', '3. Full Switch'].map((step) => (
              <div
                key={step}
                style={{
                  background: 'rgba(255, 255, 255, 0.15)',
                  color: '#FFFFFF',
                  fontSize: '18px',
                  fontWeight: 500,
                  padding: '12px 24px',
                  borderRadius: '25px',
                  display: 'flex',
                }}
              >
                {step}
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
          ecocatlitters.com/switching-guide
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
