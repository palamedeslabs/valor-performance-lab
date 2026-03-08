import { useState } from 'react';

export default function App() {
  const [view, setView] = useState('home'); 
  const accent = '#C5A059';
  const bg = '#080808';

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
                <span style={{ fontSize: '9px', color: accent, textTransform: 'uppercase', fontWeight: 'bold', letterSpacing: '2px' }}>TPI CERTIFIED // NASM PERFORMANCE SPECIALIST</span>
              </div>
              <h2 style={{ fontSize: 'clamp(3.5rem, 10vw, 8.5rem)', fontWeight: '900', textTransform: 'uppercase', margin: '0 0 32px 0', lineHeight: '0.8', letterSpacing: '-5px' }}>
                Force <br /> <span style={{ color: accent }}>Refined.</span>
              </h2>
              <p style={{ color: '#888', fontSize: '18px', maxWidth: '480px', lineHeight: '1.6', fontWeight: '400', marginBottom: '40px' }}>
                Alex Peckham merges NASM-CES Corrective Exercise and PES Performance Enhancement to engineer swings that are faster, more efficient, and built for a lifetime on the course.
              </p>
              <div style={{ display: 'flex', gap: '40px' }}>
                  <div>
                      <div style={{ fontSize: '28px', fontWeight: '800', color: accent }}>50k+</div>
                      <div style={{ fontSize: '10px', color: '#444', textTransform: 'uppercase', letterSpacing: '2px' }}>Client Hours</div>
                  </div>
                  <div>
                      <div style={{ fontSize: '28px', fontWeight: '800', color: accent }}>MASTER</div>
                      <div style={{ fontSize: '10px', color: '#444', textTransform: 'uppercase', letterSpacing: '2px' }}>Level Coach</div>
                  </div>
              </div>
            </div>
            <div style={{ flex: '1 1 400px', position: 'relative' }}>
              <img 
                src="https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?q=80&w=2076&auto=format&fit=crop" 
                alt="Golf Performance" 
                style={{ width: '100%', height: '600px', objectFit: 'cover', border: '1px solid rgba(255,255,255,0.1)', filter: 'grayscale(1) brightness(0.7)' }}
              />
            </div>
          </section>

          {/* TRUST BAR */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '60px', padding: '40px 0', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)', opacity: 0.4 }}>
              <span style={{ fontSize: '12px', fontWeight: 'bold', letterSpacing: '4px' }}>NASM-PES</span>
              <span style={{ fontSize: '12px', fontWeight: 'bold', letterSpacing: '4px' }}>NASM-CES</span>
              <span style={{ fontSize: '12px', fontWeight: 'bold', letterSpacing: '4px' }}>TPI CERTIFIED</span>
              <span style={{ fontSize: '12px', fontWeight: 'bold', letterSpacing: '4px' }}>PGA TOUR</span>
          </div>

          {/* THE EXPERT SECTION */}
          <section style={{ padding: '140px 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '80px', alignItems: 'center' }}>
                  <div style={{ flex: '1 1 300px' }}>
                      <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop" alt="Alex Peckham" style={{ width: '100%', height: '550px', objectFit: 'cover', filter: 'grayscale(1)' }} />
                  </div>
                  <div style={{ flex: '1 1 400px' }}>
                      <h3 style={{ color: accent, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '4px', marginBottom: '20px' }}>The Authority</h3>
                      <h2 style={{ fontSize: '3.5rem', fontWeight: '900', textTransform: 'uppercase', marginBottom: '32px', letterSpacing: '-2px' }}>Alex Peckham</h2>
                      <p style={{ color: '#888', lineHeight: '1.8', fontSize: '17px', marginBottom: '24px' }}>
                          With over 15 years and 50,000+ hours of on-floor experience, Alex Peckham has become the go-to performance architect for golfers who demand a clinical edge. 
                      </p>
                      <p style={{ color: '#888', lineHeight: '1.8', fontSize: '17px', marginBottom: '24px' }}>
                          As a dual-certified **NASM Corrective Exercise (CES)** and **Performance Enhancement (PES)** specialist, Alex understands that maximizing swing speed requires a foundation of perfect movement. He has successfully utilized this hybrid methodology to train PGA Tour, Korn Ferry Tour, and elite NCAA D1 athletes.
                      </p>
                      <p style={{ color: '#888', lineHeight: '1.8', fontSize: '17px', marginBottom: '40px' }}>
                        Based at **Crull Fitness in Richardson, TX**, his approach is simple: Identify physical limitations through TPI screening, correct them through clinical programming, and enhance them through tour-level power protocols.
                      </p>
                      <div style={{ display: 'flex', gap: '24px' }}>
                          <div style={{ width: '50px', height: '1px', backgroundColor: accent, marginTop: '12px' }}></div>
                          <span style={{ fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px' }}>Performance Architect</span>
                      </div>
                  </div>
              </div>
          </section>

        </main>
      ) : (
        /* INTAKE FORM */
        <main style={{ maxWidth: '800px', margin: '0 auto', padding: '100px 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h3 style={{ color: accent, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '6px', marginBottom: '24px' }}>Request Assessment</h3>
            <h2 style={{ fontSize: '3rem', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '-2px' }}>Diagnostic Protocol</h2>
            <p style={{ color: '#666', marginTop: '20px' }}>Join the elite. Alex reviews all diagnostic requests to ensure a fit with the Lab's high-performance methodology.</p>
          </div>
          <form style={{ backgroundColor: 'rgba(255,255,255,0.02)', padding: '40px', border: '1px solid rgba(255,255,255,0.05)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
              <FormInput label="Full Name" placeholder="Required" />
              <FormInput label="Email Address" placeholder="Required" type="email" />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
              <FormInput label="Current Handicap" placeholder="e.g. 4" />
              <FormInput label="Primary Goal" placeholder="Speed / Corrective / Prep" />
            </div>
            <button type="button" style={{ width: '100%', backgroundColor: accent, color: 'black', border: 'none', padding: '20px', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '4px', cursor: 'pointer' }}>
              Initialize Intake
            </button>
          </form>
        </main>
      )}

      <footer style={{ padding: '80px 24px', borderTop: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
           <p style={{ fontSize: '10px', color: '#444', textTransform: 'uppercase', letterSpacing: '4px', marginBottom: '16px' }}>Crull Fitness / Richardson, TX</p>
           <p style={{ fontSize: '10px', color: accent, textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 'bold' }}>Valor Performance Lab © 2026</p>
      </footer>
    </div>
  );
}