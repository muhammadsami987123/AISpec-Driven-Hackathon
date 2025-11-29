import React, { useState } from 'react';
import Layout from '@theme/Layout';
import styles from './login.module.css';

function LoginPage() {
  const [isSignup, setIsSignup] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState('weak');
  const [showPassword, setShowPassword] = useState(false);

  const toggleForm = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsSignup(!isSignup);
  };

  const calculatePasswordStrength = (password: string) => {
    if (password.length === 0) return 'weak';
    if (password.length < 6) return 'weak';
    if (password.length < 10) return 'medium';
    
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    
    const strength = [hasUpperCase, hasLowerCase, hasNumbers, hasSpecialChar].filter(Boolean).length;
    
    if (strength >= 3 && password.length >= 10) return 'strong';
    if (strength >= 2 && password.length >= 8) return 'medium';
    return 'weak';
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const strength = calculatePasswordStrength(e.target.value);
    setPasswordStrength(strength);
  };

  const handleLoginSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add login logic here
    console.log('Login submitted');
  };

  const handleSignupSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add signup logic here
    console.log('Signup submitted');
  };

  return (
    <Layout
      title="Login"
      description="Login or Sign up to AI Spec-Driven Hackathon Platform">
      <div className={styles.loginPage}>
        <div className={styles.container}>
          {/* Left Panel - Branding & Info */}
          <div className={styles.leftPanel}>
            <div className={styles.brandContent}>
              <div className={styles.logoSection}>
                <div className={styles.logoIcon}>
                  <svg width="64" height="64" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 4L6 14V34L24 44L42 34V14L24 4Z" fill="url(#gradient1)" stroke="white" strokeWidth="2"/>
                    <circle cx="24" cy="24" r="8" fill="white" opacity="0.9"/>
                    <defs>
                      <linearGradient id="gradient1" x1="6" y1="4" x2="42" y2="44" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#667eea"/>
                        <stop offset="1" stopColor="#764ba2"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <h1 className={styles.brandTitle}>AI Spec-Driven</h1>
                <p className={styles.brandSubtitle}>Hackathon Platform</p>
              </div>
              
              <div className={styles.features}>
                <div className={styles.featureItem}>
                  <div className={styles.featureIcon}>✨</div>
                  <div className={styles.featureText}>
                    <h3>AI-Powered Development</h3>
                    <p>Build smarter with specification-driven workflows</p>
                  </div>
                </div>
                <div className={styles.featureItem}>
                  <div className={styles.featureIcon}>🚀</div>
                  <div className={styles.featureText}>
                    <h3>Rapid Prototyping</h3>
                    <p>Turn ideas into reality in record time</p>
                  </div>
                </div>
                <div className={styles.featureItem}>
                  <div className={styles.featureIcon}>🏆</div>
                  <div className={styles.featureText}>
                    <h3>Compete & Win</h3>
                    <p>Showcase your skills and earn recognition</p>
                  </div>
                </div>
              </div>

              <div className={styles.testimonial}>
                <p className={styles.quote}>
                  "This platform revolutionized how we approach hackathons. The AI-driven specs made our development process incredibly efficient!"
                </p>
                <div className={styles.author}>
                  <div className={styles.authorAvatar}>JD</div>
                  <div>
                    <p className={styles.authorName}>John Doe</p>
                    <p className={styles.authorRole}>Previous Winner</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel - Auth Forms */}
          <div className={styles.rightPanel}>
            <div className={styles.authContainer}>
              {/* Login Form */}
              <div className={`${styles.authForm} ${!isSignup ? styles.active : ''}`}>
                <div className={styles.formHeader}>
                  <h2>Welcome Back</h2>
                  <p>Enter your credentials to access your account</p>
                </div>

                <form onSubmit={handleLoginSubmit} className={styles.form}>
                  <div className={styles.formGroup}>
                    <label htmlFor="login-email">Email Address</label>
                    <div className={styles.inputWrapper}>
                      <svg className={styles.inputIcon} width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M3 4h14a1 1 0 011 1v10a1 1 0 01-1 1H3a1 1 0 01-1-1V5a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.5"/>
                        <path d="M2 5l8 5 8-5" stroke="currentColor" strokeWidth="1.5"/>
                      </svg>
                      <input type="email" id="login-email" placeholder="you@example.com" required />
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="login-password">Password</label>
                    <div className={styles.inputWrapper}>
                      <svg className={styles.inputIcon} width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <rect x="3" y="8" width="14" height="9" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                        <path d="M6 8V6a4 4 0 018 0v2" stroke="currentColor" strokeWidth="1.5"/>
                      </svg>
                      <input 
                        type={showPassword ? "text" : "password"} 
                        id="login-password" 
                        placeholder="••••••••" 
                        required 
                      />
                      <button 
                        type="button" 
                        className={styles.togglePassword}
                        onClick={() => setShowPassword(!showPassword)}
                        aria-label="Toggle password visibility"
                      >
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <path d="M10 4C5 4 2 10 2 10s3 6 8 6 8-6 8-6-3-6-8-6z" stroke="currentColor" strokeWidth="1.5"/>
                          <circle cx="10" cy="10" r="2" stroke="currentColor" strokeWidth="1.5"/>
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className={styles.formOptions}>
                    <label className={styles.checkboxLabel}>
                      <input type="checkbox" id="remember-me" />
                      <span>Remember me</span>
                    </label>
                    <a href="#" className={styles.forgotLink}>Forgot password?</a>
                  </div>

                  <button type="submit" className={styles.btnPrimary}>
                    <span>Sign In</span>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M4 10h12m0 0l-4-4m4 4l-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </button>

                  <div className={styles.divider}>
                    <span>or continue with</span>
                  </div>

                  <div className={styles.socialButtons}>
                    <button type="button" className={styles.btnSocial}>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M19.6 10.23c0-.82-.1-1.42-.25-2.05H10v3.72h5.5c-.15.96-.74 2.31-2.04 3.22v2.45h3.16c1.89-1.73 2.98-4.3 2.98-7.34z" fill="#4285F4"/>
                        <path d="M13.46 15.13c-.83.59-1.96 1-3.46 1-2.64 0-4.88-1.74-5.68-4.15H1.07v2.52C2.72 17.71 6.09 20 10 20c2.7 0 4.96-.89 6.62-2.42l-3.16-2.45z" fill="#34A853"/>
                        <path d="M3.99 10c0-.69.12-1.35.32-1.97V5.51H1.07A9.973 9.973 0 000 10c0 1.61.39 3.14 1.07 4.49l3.24-2.52c-.2-.62-.32-1.28-.32-1.97z" fill="#FBBC05"/>
                        <path d="M10 3.88c1.88 0 3.13.81 3.85 1.48l2.84-2.76C14.96.99 12.7 0 10 0 6.09 0 2.72 2.29 1.07 5.51l3.24 2.52C5.12 5.62 7.36 3.88 10 3.88z" fill="#EA4335"/>
                      </svg>
                      <span>Google</span>
                    </button>
                    <button type="button" className={styles.btnSocial}>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M10 0C4.477 0 0 4.477 0 10c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0110 4.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C17.137 18.165 20 14.418 20 10c0-5.523-4.477-10-10-10z" fill="#181717"/>
                      </svg>
                      <span>GitHub</span>
                    </button>
                  </div>
                </form>

                <p className={styles.switchForm}>
                  Don't have an account? 
                  <a href="#" onClick={toggleForm}> Sign up</a>
                </p>
              </div>

              {/* Signup Form */}
              <div className={`${styles.authForm} ${isSignup ? styles.active : ''}`}>
                <div className={styles.formHeader}>
                  <h2>Create Account</h2>
                  <p>Join the hackathon and start building amazing projects</p>
                </div>

                <form onSubmit={handleSignupSubmit} className={styles.form}>
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="signup-firstname">First Name</label>
                      <div className={styles.inputWrapper}>
                        <svg className={styles.inputIcon} width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <path d="M10 10a4 4 0 100-8 4 4 0 000 8zM3 18a7 7 0 0114 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                        <input type="text" id="signup-firstname" placeholder="John" required />
                      </div>
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="signup-lastname">Last Name</label>
                      <div className={styles.inputWrapper}>
                        <svg className={styles.inputIcon} width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <path d="M10 10a4 4 0 100-8 4 4 0 000 8zM3 18a7 7 0 0114 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                        <input type="text" id="signup-lastname" placeholder="Doe" required />
                      </div>
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="signup-email">Email Address</label>
                    <div className={styles.inputWrapper}>
                      <svg className={styles.inputIcon} width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M3 4h14a1 1 0 011 1v10a1 1 0 01-1 1H3a1 1 0 01-1-1V5a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.5"/>
                        <path d="M2 5l8 5 8-5" stroke="currentColor" strokeWidth="1.5"/>
                      </svg>
                      <input type="email" id="signup-email" placeholder="you@example.com" required />
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="signup-password">Password</label>
                    <div className={styles.inputWrapper}>
                      <svg className={styles.inputIcon} width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <rect x="3" y="8" width="14" height="9" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                        <path d="M6 8V6a4 4 0 018 0v2" stroke="currentColor" strokeWidth="1.5"/>
                      </svg>
                      <input 
                        type={showPassword ? "text" : "password"} 
                        id="signup-password" 
                        placeholder="••••••••" 
                        onChange={handlePasswordChange}
                        required 
                      />
                      <button 
                        type="button" 
                        className={styles.togglePassword}
                        onClick={() => setShowPassword(!showPassword)}
                        aria-label="Toggle password visibility"
                      >
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <path d="M10 4C5 4 2 10 2 10s3 6 8 6 8-6 8-6-3-6-8-6z" stroke="currentColor" strokeWidth="1.5"/>
                          <circle cx="10" cy="10" r="2" stroke="currentColor" strokeWidth="1.5"/>
                        </svg>
                      </button>
                    </div>
                    <div className={styles.passwordStrength}>
                      <div className={styles.strengthBar}>
                        <div className={`${styles.strengthFill} ${styles[passwordStrength]}`}></div>
                      </div>
                      <p className={styles.strengthText}>
                        Password strength: <span style={{ 
                          color: passwordStrength === 'strong' ? '#48bb78' : 
                                 passwordStrength === 'medium' ? '#ed8936' : '#f56565',
                          fontWeight: 600
                        }}>
                          {passwordStrength.charAt(0).toUpperCase() + passwordStrength.slice(1)}
                        </span>
                      </p>
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="signup-confirm-password">Confirm Password</label>
                    <div className={styles.inputWrapper}>
                      <svg className={styles.inputIcon} width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <rect x="3" y="8" width="14" height="9" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                        <path d="M6 8V6a4 4 0 018 0v2" stroke="currentColor" strokeWidth="1.5"/>
                      </svg>
                      <input type="password" id="signup-confirm-password" placeholder="••••••••" required />
                    </div>
                  </div>

                  <label className={styles.checkboxLabel}>
                    <input type="checkbox" id="terms" required />
                    <span>I agree to the <a href="#" className={styles.link}>Terms of Service</a> and <a href="#" className={styles.link}>Privacy Policy</a></span>
                  </label>

                  <button type="submit" className={styles.btnPrimary}>
                    <span>Create Account</span>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M4 10h12m0 0l-4-4m4 4l-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </button>

                  <div className={styles.divider}>
                    <span>or sign up with</span>
                  </div>

                  <div className={styles.socialButtons}>
                    <button type="button" className={styles.btnSocial}>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M19.6 10.23c0-.82-.1-1.42-.25-2.05H10v3.72h5.5c-.15.96-.74 2.31-2.04 3.22v2.45h3.16c1.89-1.73 2.98-4.3 2.98-7.34z" fill="#4285F4"/>
                        <path d="M13.46 15.13c-.83.59-1.96 1-3.46 1-2.64 0-4.88-1.74-5.68-4.15H1.07v2.52C2.72 17.71 6.09 20 10 20c2.7 0 4.96-.89 6.62-2.42l-3.16-2.45z" fill="#34A853"/>
                        <path d="M3.99 10c0-.69.12-1.35.32-1.97V5.51H1.07A9.973 9.973 0 000 10c0 1.61.39 3.14 1.07 4.49l3.24-2.52c-.2-.62-.32-1.28-.32-1.97z" fill="#FBBC05"/>
                        <path d="M10 3.88c1.88 0 3.13.81 3.85 1.48l2.84-2.76C14.96.99 12.7 0 10 0 6.09 0 2.72 2.29 1.07 5.51l3.24 2.52C5.12 5.62 7.36 3.88 10 3.88z" fill="#EA4335"/>
                      </svg>
                      <span>Google</span>
                    </button>
                    <button type="button" className={styles.btnSocial}>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M10 0C4.477 0 0 4.477 0 10c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0110 4.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C17.137 18.165 20 14.418 20 10c0-5.523-4.477-10-10-10z" fill="#181717"/>
                      </svg>
                      <span>GitHub</span>
                    </button>
                  </div>
                </form>

                <p className={styles.switchForm}>
                  Already have an account? 
                  <a href="#" onClick={toggleForm}> Sign in</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default LoginPage;
