export default function App() {
  return (
    <div style={{ backgroundColor: '#0A0A0A', color: 'white', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      {/* Navigation */}
      <nav style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', padding: '24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '40px', height: '40px', backgroundColor: '#CCFF00', display: 'flex', alignItems: 'center', justifyContent: 'center', transform: 'rotate(45deg)' }}>
              <span style={{ color: 'black', fontWeight: '900', fontSize: '20px', transform: 'rotate(-45deg)' }}>V</span>
            </div>
            <div>
              <h1 style={{ margin: 0, fontSize: '18px', textTransform: 'uppercase', letterSpacing: '-1px' }}>Valor</h1>
              <p style={{ margin: 0, fontSize: '10px', color: '#CCFF00', textTransform: 'uppercase', letterSpacing: '2px' }}>Performance Lab</p>
            </div>
          </div>
          <button style={{ backgroundColor: '#CCFF00', color: 'black', border: 'none', padding: '10px 24px', borderRadius: '100px', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', cursor: 'pointer' }}>
            Book Diagnostic
          </button>
        </div>
      </nav>

      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 24px' }}>
        {/* Hero Section */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '80px', alignItems: 'center' }}>
          <div>
            <div style={{ display: 'inline-block', padding: '4px 12px', border: '1px solid rgba(204,255,0,0.3)', borderRadius: '100px', marginBottom: '24px' }}>
              <span style={{ fontSize: '10px', color: '#CCFF00', textTransform: 'uppercase', fontWeight: 'bold', letterSpacing: '1px' }}>TPI Level 3 Certified</span>
            </div>
            <h2 style={{ fontSize: 'clamp(3rem, 10vw, 8rem)', fontWeight: '900', textTransform: 'uppercase', margin: '0 0 24px 0', lineHeight: '0.85', letterSpacing: '-4px' }}>
              Force <br /> <span style={{ color: '#CCFF00' }}>Refined.</span>
            </h2>
            <p style={{ color: '#888', fontSize: '18px', maxWidth: '400px', lineHeight: '1.6' }}>
              The elite laboratory for golf biomechanics. We bridge the gap between physical therapy and raw power development.
            </p>
          </div>

          <div style={{ aspectRatio: '16/9', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
             <span style={{ color: 'rgba(255,255,255,0.1)', textTransform: 'uppercase', fontSize: '12px', letterSpacing: '4px' }}>System_Active</span>
          </div>
        </div>

        {/* Services */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginTop: '120px' }}>
          <div style={{ padding: '40px', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.1)' }}>
            <div style={{ color: '#CCFF00', fontSize: '32px', marginBottom: '24px' }}>01</div>
            <h3 style={{ fontSize: '24px', textTransform: 'uppercase', margin: '0 0 16px 0' }}>360° Diagnostic</h3>
            <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.5' }}>Full physical screening to find your swing's power leaks.</p>
          </div>
          <div style={{ padding: '40px', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.1)' }}>
            <div style={{ color: '#CCFF00', fontSize: '32px', marginBottom: '24px' }}>02</div>
            <h3 style={{ fontSize: '24px', textTransform: 'uppercase', margin: '0 0 16px 0' }}>Power Engineering</h3>
            <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.5' }}>Translating strength into explosive clubhead speed.</p>
          </div>
          <div style={{ padding: '40px', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.1)' }}>
            <div style={{ color: '#CCFF00', fontSize: '32px', marginBottom: '24px' }}>03</div>
            <h3 style={{ fontSize: '24px', textTransform: 'uppercase', margin: '0 0 16px 0' }}>Clinical Rehab</h3>
            <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.5' }}>Specialized therapy to keep you on the course.</p>
          </div>
        </div>
      </main>
    </div>
  );
}