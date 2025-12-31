import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Eco-Certifications Guide for Cat Litter';
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
          ✅
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
              fontSize: '60px',
              fontWeight: 700,
              color: '#FFFFFF',
              marginBottom: '24px',
              display: 'flex',
            }}
          >
            Eco-Certifications Guide
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
            Know What to Look For When Shopping Green
          </div>

          <div
            style={{
              display: 'flex',
              gap: '20px',
            }}
          >
            {['USDA Organic', 'FSC Certified', 'Biodegradable'].map((cert) => (
              <div
                key={cert}
                style={{
                  background: 'rgba(255, 255, 255, 0.2)',
                  color: '#FFFFFF',
                  fontSize: '18px',
                  fontWeight: 500,
                  padding: '14px 28px',
                  borderRadius: '30px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <span style={{ display: 'flex' }}>✓</span>
                {cert}
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
          ecocatlitters.com/certifications
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
