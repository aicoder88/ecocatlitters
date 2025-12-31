import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Is Eco-Friendly Cat Litter Safe for Kittens? Safety Guide';
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
        {/* Decorative elements */}
        <div
          style={{
            position: 'absolute',
            top: '40px',
            right: '40px',
            fontSize: '80px',
            opacity: 0.3,
            display: 'flex',
          }}
        >
          🐱
        </div>

        <div
          style={{
            position: 'absolute',
            top: '40px',
            left: '40px',
            fontSize: '60px',
            opacity: 0.3,
            display: 'flex',
          }}
        >
          ✅
        </div>

        {/* Main content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            maxWidth: '1000px',
          }}
        >
          {/* Site name */}
          <div
            style={{
              fontSize: '28px',
              fontWeight: 500,
              color: '#B7E4C7',
              marginBottom: '20px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            }}
          >
            <span style={{ display: 'flex' }}>🐱</span>
            <span>EcoCatLitters</span>
          </div>

          {/* Article Title */}
          <div
            style={{
              fontSize: '52px',
              fontWeight: 700,
              color: '#FFFFFF',
              marginBottom: '24px',
              display: 'flex',
              lineHeight: 1.2,
              textAlign: 'center',
            }}
          >
            Is Eco-Friendly Cat Litter Safe for Kittens?
          </div>

          {/* Subtitle */}
          <div
            style={{
              fontSize: '28px',
              fontWeight: 400,
              color: '#B7E4C7',
              marginBottom: '40px',
              display: 'flex',
            }}
          >
            Complete Safety Guide for New Cat Parents
          </div>

          {/* Topics */}
          <div
            style={{
              display: 'flex',
              gap: '16px',
            }}
          >
            {['Safe Litters', 'What to Avoid', 'When to Switch'].map((topic) => (
              <div
                key={topic}
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
                {topic}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom URL */}
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
          ecocatlitters.com/blog/eco-friendly-litter-safe-for-kittens
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
