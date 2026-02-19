import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export default function Contact() {
  const location = useLocation();

  const [role, setRole] = useState('Family seeking honest food');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // ✅ NEW (dropdown state)
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const options = [
    "Family seeking honest food",
    "Farmer seeking soil recovery",
    "Urban Landowner"
  ];

  useEffect(() => {
    if (location?.state?.role) {
      setRole(location.state.role);
    }
  }, [location]);

  // ✅ NEW (click outside)
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('https://formspree.io/f/mreeqqel', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          Role: role,
          Name: name,
          Phone: phone,
          Message: message,
        }),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        alert('Submission failed. Please try again.');
      }
    } catch (err) {
      alert('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-32 pb-20 px-6 bg-beejam-brown text-beejam-beige min-h-screen">
      <div className="max-w-3xl mx-auto">

        <h1 className="font-heritage text-6xl mb-8">
          Join the Movement
        </h1>

        <p className="font-premium text-xl opacity-70 mb-16 leading-relaxed">
          This is not a sign-up form.
          It is an expression of intent.
          Every message is read personally.
        </p>

        {submitted ? (
          <div className="border border-beejam-beige/30 p-12 rounded-2xl">
            <p className="font-heritage text-3xl mb-4">
              Intent received.
            </p>
            <p className="font-premium text-xl opacity-80">
              We’ll reach out after reviewing your message.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-12">

            {/* ROLE (UPDATED ONLY THIS PART) */}
            <div className="border-b border-beejam-beige/30 pb-4" ref={dropdownRef}>
              <label className="block font-sans text-xs uppercase tracking-widest opacity-50 mb-2">
                I am a
              </label>

              {/* SELECT BOX */}
              <div
                onClick={() => setOpen(!open)}
                className="w-full cursor-pointer font-heritage text-3xl flex justify-between items-center"
              >
                <span>{role}</span>
                <span className={`transition-transform ${open ? 'rotate-180' : ''}`}>⇣</span>
              </div>

              {/* DROPDOWN */}
              {open && (
                <div className="mt-4 border border-beejam-beige/20 rounded-xl overflow-hidden bg-beejam-brown shadow-xl">
                  {options.map((opt) => (
                    <div
                      key={opt}
                      onClick={() => {
                        setRole(opt);
                        setOpen(false);
                      }}
                      className={`px-6 py-4 font-premium text-lg cursor-pointer transition-all 
                        ${
                          role === opt
                            ? 'bg-beejam-clay text-beejam-brown'
                            : 'hover:bg-beejam-beige hover:text-beejam-brown'
                        }`}
                    >
                      {opt}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* NAME */}
            <div className="border-b border-beejam-beige/30 pb-4">
              <label className="block font-sans text-xs uppercase tracking-widest opacity-50 mb-2">
                Full Name
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-transparent font-premium text-2xl focus:outline-none placeholder:opacity-20"
                placeholder="Ananda Vardhan"
              />
            </div>

            {/* PHONE */}
            <div className="border-b border-beejam-beige/30 pb-4">
              <label className="block font-sans text-xs uppercase tracking-widest opacity-50 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-transparent font-premium text-2xl focus:outline-none placeholder:opacity-20"
                placeholder="+91 9XXXXXXXXX"
              />
            </div>

            {/* MESSAGE */}
            <div className="border-b border-beejam-beige/30 pb-6">
              <label className="block font-sans text-xs uppercase tracking-widest opacity-50 mb-2">
                Your Message
              </label>
              <textarea
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-transparent font-premium text-xl focus:outline-none placeholder:opacity-20 resize-none"
                placeholder={
                  role === 'Family seeking honest food'
                    ? 'Why does food integrity matter to your family?'
                    : role === 'Farmer seeking soil recovery'
                      ? 'Tell us about your land, crops, and challenges.'
                      : 'Tell us about the land you wish to restore.'
                }
              />
            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-6 border border-beejam-beige/30 hover:bg-beejam-beige hover:text-beejam-brown transition-all font-heritage text-2xl tracking-[0.2em] uppercase disabled:opacity-50"
            >
              {loading ? 'Sending…' : 'Submit Intent'}
            </button>

            <p className="text-xs text-center opacity-40 uppercase tracking-widest">
              Messages are securely delivered to beejam.organics@gmail.com
            </p>

          </form>
        )}
      </div>
    </div>
  );
}
