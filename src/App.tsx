import { useState } from 'react';

export default function App() {
  const [view, setView] = useState('home'); // 'home' or 'booking'
  const accent = '#C5A059';
  const bg = '#080808';

  // HELPER COMPONENT FOR THE FORM
  const FormInput = ({ label, placeholder, type = "text" }: any) => (
    <div style={{ marginBottom: '24px' }}>
      <label style={{ display: 'block', fontSize: '10px', color: accent, textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '8px' }}>{label}</label>
      <input type={type} placeholder={placeholder} style={{ width: '100%', backgroundColor: 'transparent', border: '1px solid rgba(255,255,255,0.1)', padding: '16px', color: 'white', borderRadius: '2px', outline: 'none' }} />
    </div>
  );

  return (
    <div style={{ backgroundColor: bg, color: 'white', minHeight: '100vh', fontFamily: 'system-ui, -apple-system, sans-serif', WebkitFontSmoothing: 'antialiased' }}>
      
      {/* Navigation */}
      <nav style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', padding: '24px 0', position: 'sticky', top: 0, backgroundColor: 'rgba(8,8,8,0.95)', backdropFilter: 'blur(10px)', zIndex: 100 }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div onClick={() => setView('home')} style={{ display: 'flex', alignItems: 'center', gap: '16px', cursor: 'pointer' }}>
            <div style={{ width: '36px', height: '36px', border: `1px solid ${accent}`, display: 'flex', alignItems: 'center', justifyContent: 'center', transform: 'rotate(45deg)' }}>
              <span style={{ color: accent, fontWeight: '800', fontSize: '18px', transform: 'rotate(-45deg)', letterSpacing: '-1px' }}>V</span>
            </div>
            <div>
              <h1 style={{ margin: 0, fontSize: '16px', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '800' }}>Valor</h1>
              <p style={{ margin: 0, fontSize: '9px', color: accent, textTransform: 'uppercase', letterSpacing: '4px', opacity: 0.8 }}>Performance Lab</p>
            </div>
          </div>
          <button 
            onClick={() => setView('booking')}
            style={{ backgroundColor: accent, color: 'black', border: 'none', padding: '10px 24px', borderRadius: '2px', fontSize: '11px', fontWeight: 'bold', textTransform: 'uppercase', cursor: 'pointer', letterSpacing: '2px' }}>
            {view === 'home' ? 'Request Diagnostic' : 'Back to Lab'}
          </button>
        </div>
      </nav>

      {view === 'home' ? (
        <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          {/* HERO SECTION */}
          <section style={{ display: 'flex', flexWrap: 'wrap', gap: '60px', alignItems: 'center', padding: '100px 0' }}>
            <div style={{ flex: '1 1 450px' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', padding: '4px 12px', border: `1px solid rgba(197, 160, 89, 0.2)`, borderRadius: '2px', marginBottom: '32px' }}>
                <div style={{ width: '6px', height: '6px', backgroundColor: accent, borderRadius: '50%' }}></div>
                <span style={{ fontSize: '9px', color: accent, textTransform: 'uppercase', fontWeight: 'bold', letterSpacing: '2px' }}>TPI Level 3 Medical & Power Professional</span>
              </div>
              <h2 style={{ fontSize: 'clamp(3.5rem, 10vw, 8.5rem)', fontWeight: '900', textTransform: 'uppercase', margin: '0 0 32px 0', lineHeight: '0.8', letterSpacing: '-5px' }}>
                Force <br /> <span style={{ color: accent }}>Mastered.</span>
              </h2>
              <p style={{ color: '#888', fontSize: '18px', maxWidth: '480px', lineHeight: '1.6', fontWeight: '400', marginBottom: '40px' }}>
                Bridging the gap between clinical science and raw power. We utilize advanced biomechanical data to engineer a swing that is faster, more efficient, and pain-free.
              </p>
              <button 
                onClick={() => setView('booking')}
                style={{ backgroundColor: 'transparent', color: accent, border: `1px solid ${accent}`, padding: '16px 32px', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '3px', cursor: 'pointer' }}>
                Initialize Assessment
              </button>
            </div>
            <div style={{ flex: '1 1 400px', position: 'relative' }}>
              <img 
                src="https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?q=80&w=2076&auto=format&fit=crop" 
                alt="Golf Athlete" 
                style={{ width: '100%', height: '600px', objectFit: 'cover', border: '1px solid rgba(255,255,255,0.1)', filter: 'grayscale(1) brightness(0.7)' }}
              />
            </div>
          </section>

          {/* METHODOLOGY PREVIEW */}
          <section style={{ padding: '100px 0', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
                <div style={{ padding: '40px', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <p style={{ color: accent, fontSize: '10px', marginBottom: '20px' }}>PHASE_01</p>
                    <h4 style={{ textTransform: 'uppercase', fontSize: '20px', marginBottom: '16px' }}>The Audit</h4>
                    <p style={{ color: '#555', fontSize: '14px', lineHeight: '1.6' }}>Identify the power leaks and mobility restrictions dictating your swing flaws.</p>
                </div>
                <div style={{ padding: '40px', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <p style={{ color: accent, fontSize: '10px', marginBottom: '20px' }}>PHASE_02</p>
                    <h4 style={{ textTransform: 'uppercase', fontSize: '20px', marginBottom: '16px' }}>Optimization</h4>
                    <p style={{ color: '#555', fontSize: '14px', lineHeight: '1.6' }}>Translate physical stability into raw, repeatable clubhead speed.</p>
                </div>
              </div>
          </section>
        </main>
      ) : (
        <main style={{ maxWidth: '800px', margin: '0 auto', padding: '100px 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h3 style={{ color: accent, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '6px', marginBottom: '24px' }}>Request Access</h3>
            <h2 style={{ fontSize: '3rem', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '-2px' }}>The Diagnostic Intake</h2>
            <p style={{ color: '#666', marginTop: '20px' }}>Complete the profile below. Michael will personally review your data before scheduling your initial assessment.</p>
          </div>

          <form style={{ backgroundColor: 'rgba(255,255,255,0.02)', padding: '40px', border: '1px solid rgba(255,255,255,0.05)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <FormInput label="Full Name" placeholder="John Doe" />
              <FormInput label="Email Address" placeholder="john@example.com" type="email" />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <FormInput label="Current Handicap" placeholder="e.g. 12" />
              <FormInput label="Primary Goal" placeholder="e.g. Speed, Pain Relief" />
            </div>
            <div style={{ marginBottom: '40px' }}>
              <label style={{ display: 'block', fontSize: '10px', color: accent, textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '8px' }}>History of Injury / Physical Constraints</label>
              <textarea style={{ width: '100%', height: '120px', backgroundColor: 'transparent', border: '1px solid rgba(255,255,255,0.1)', padding: '16px', color: 'white', borderRadius: '2px', outline: 'none' }} placeholder="Please describe any previous surgeries or chronic pain..." />
            </div>
            <button style={{ width: '100%', backgroundColor: accent, color: 'black', border: 'none', padding: '20px', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '4px', cursor: 'pointer' }}>
              Submit Intake For Review
            </button>
          </form>
        </main>
      )}

      <footer style={{ padding: '80px 24px', borderTop: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
           <p style={{ fontSize: '10px', color: '#444', textTransform: 'uppercase', letterSpacing: '4px' }}>Valor Performance Lab / South Florida</p>
      </footer>
    </div>
  );
}