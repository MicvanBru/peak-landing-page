'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import Link from 'next/link';

const WEBHOOK_URL = 'https://n8n.channelcrafters.synology.me/webhook-test/b8e3e523-ab92-4f72-b199-46baadc2926e';

const roleOptions = [
  { value: '', label: 'Select one...' },
  { value: 'employee', label: 'Employee (want to automate my job)' },
  { value: 'business_owner', label: 'Business owner (want to automate work)' },
];

const incomeOptions = [
  { value: '$0', label: '$0' },
  { value: '$0-$1k/mth', label: '$0-$1k/mth' },
  { value: '$1k-$10k/mth', label: '$1k-$10k/mth' },
  { value: '$10k-$25k/mth', label: '$10k-$25k/mth' },
  { value: '$25k-$100k/mth', label: '$25k-$100k/mth' },
  { value: '$100k/mth+', label: '$100k/mth+' },
];

const countryCodes = [
  { value: '+1', label: '+1 (US/CA)' },
  { value: '+44', label: '+44 (UK)' },
  { value: '+61', label: '+61 (AU)' },
  { value: '+91', label: '+91 (IN)' },
  { value: '+49', label: '+49 (DE)' },
  { value: '+33', label: '+33 (FR)' },
  { value: '+81', label: '+81 (JP)' },
  { value: '+86', label: '+86 (CN)' },
  { value: '+55', label: '+55 (BR)' },
  { value: '+52', label: '+52 (MX)' },
  { value: '+234', label: '+234 (NG)' },
  { value: '+27', label: '+27 (ZA)' },
  { value: '+971', label: '+971 (UAE)' },
  { value: '+65', label: '+65 (SG)' },
  { value: '+64', label: '+64 (NZ)' },
];

const benefits = [
  {
    title: "Why most AI systems are actually hurting your business",
    description: "I'll break down exactly what's going wrong — and why it's not your fault."
  },
  {
    title: "The \"quiet\" opportunities everyone ignores",
    description: "You'll see how businesses are actually using AI to save real time and money (not just chasing shiny tools)."
  },
  {
    title: "How to land in the 5% that actually see results",
    description: "I'll show you the approach that works 2x more often than what most people do."
  }
];

interface FormData {
  fullName: string;
  email: string;
  role: string;
  monthlyIncome: string;
  countryCode: string;
  phone: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  role?: string;
  monthlyIncome?: string;
  phone?: string;
}

export default function AITrainingPage() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    role: '',
    monthlyIncome: '',
    countryCode: '+1',
    phone: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.role) {
      newErrors.role = 'Please select an option';
    }
    if (!formData.monthlyIncome) {
      newErrors.monthlyIncome = 'Please select your income range';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{7,15}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          role: formData.role,
          monthlyIncome: formData.monthlyIncome,
          phone: `${formData.countryCode}${formData.phone}`,
          submittedAt: new Date().toISOString(),
          source: 'ai-training-signup',
        }),
      });

      if (!response.ok) {
        throw new Error('Request failed');
      }

      setSubmitStatus('success');
      setFormData({
        fullName: '',
        email: '',
        role: '',
        monthlyIncome: '',
        countryCode: '+1',
        phone: '',
      });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative overflow-hidden w-full py-12 sm:py-16 lg:py-20">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Text */}
          <div className="max-w-4xl mx-auto text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-black tracking-tight leading-tight mb-4">
                Why <span className="text-accent">95%</span> of AI Systems Fail in Business
              </h1>
              <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-6">
                (And How to Be in the 5%)
              </p>
              <p className="text-fluid-base text-muted leading-relaxed max-w-3xl mx-auto">
                Join this 60-minute session to discover why most businesses fail with AI — and the simple approach that actually works.
              </p>
            </motion.div>
          </div>

          {/* Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ width: '100%', maxWidth: '512px', margin: '0 auto' }}
          >
            <div
              className="bg-card/80 backdrop-blur-sm rounded-2xl border border-secondary"
              style={{ padding: '24px' }}
            >
              <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: 'var(--accent)', textAlign: 'center', marginBottom: '24px' }}>
                Reserve Your Spot
              </h2>

              {submitStatus === 'success' ? (
                <div style={{ textAlign: 'center', padding: '32px 0' }}>
                  <CheckCircle2 style={{ width: '64px', height: '64px', color: 'var(--accent)', margin: '0 auto 16px' }} />
                  <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: 'var(--foreground)', marginBottom: '8px' }}>
                    You&apos;re In!
                  </h3>
                  <p style={{ color: 'var(--muted)' }}>
                    Check your phone for a confirmation message with the session details.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  {/* Name and Email Fields - Side by Side */}
                  <div style={{ display: 'flex', gap: '16px', marginBottom: '20px' }}>
                    <div style={{ flex: 1 }}>
                      <input
                        type="text"
                        placeholder="Full name"
                        value={formData.fullName}
                        onChange={(e) => handleInputChange('fullName', e.target.value)}
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          backgroundColor: 'var(--background)',
                          border: errors.fullName ? '1px solid var(--destructive)' : '1px solid var(--secondary)',
                          borderRadius: '12px',
                          color: 'var(--foreground)',
                          minHeight: '48px',
                          boxSizing: 'border-box',
                        }}
                      />
                      {errors.fullName && (
                        <p style={{ color: 'var(--destructive)', fontSize: '14px', marginTop: '4px' }}>{errors.fullName}</p>
                      )}
                    </div>
                    <div style={{ flex: 1 }}>
                      <input
                        type="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          backgroundColor: 'var(--background)',
                          border: errors.email ? '1px solid var(--destructive)' : '1px solid var(--secondary)',
                          borderRadius: '12px',
                          color: 'var(--foreground)',
                          minHeight: '48px',
                          boxSizing: 'border-box',
                        }}
                      />
                      {errors.email && (
                        <p style={{ color: 'var(--destructive)', fontSize: '14px', marginTop: '4px' }}>{errors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Role Dropdown */}
                  <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: 'var(--muted)', marginBottom: '8px' }}>
                      What sounds like you?
                    </label>
                    <select
                      value={formData.role}
                      onChange={(e) => handleInputChange('role', e.target.value)}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        backgroundColor: 'var(--background)',
                        border: errors.role ? '1px solid var(--destructive)' : '1px solid var(--secondary)',
                        borderRadius: '12px',
                        color: formData.role ? 'var(--foreground)' : 'var(--muted)',
                        minHeight: '48px',
                        boxSizing: 'border-box',
                      }}
                    >
                      {roleOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                    {errors.role && (
                      <p style={{ color: 'var(--destructive)', fontSize: '14px', marginTop: '4px' }}>{errors.role}</p>
                    )}
                  </div>

                  {/* Income Options */}
                  <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: 'var(--muted)', marginBottom: '12px' }}>
                      Monthly income
                    </label>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {incomeOptions.map((option) => (
                        <label
                          key={option.value}
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '8px 12px',
                            borderRadius: '8px',
                            border: formData.monthlyIncome === option.value ? '1px solid var(--accent)' : '1px solid var(--secondary)',
                            backgroundColor: formData.monthlyIncome === option.value ? 'rgba(56, 189, 248, 0.1)' : 'transparent',
                            color: formData.monthlyIncome === option.value ? 'var(--accent)' : 'var(--muted)',
                            cursor: 'pointer',
                            fontSize: '14px',
                            minHeight: '40px',
                          }}
                        >
                          <input
                            type="radio"
                            name="monthlyIncome"
                            value={option.value}
                            checked={formData.monthlyIncome === option.value}
                            onChange={(e) => handleInputChange('monthlyIncome', e.target.value)}
                            style={{ position: 'absolute', opacity: 0, pointerEvents: 'none' }}
                          />
                          {option.label}
                        </label>
                      ))}
                    </div>
                    {errors.monthlyIncome && (
                      <p style={{ color: 'var(--destructive)', fontSize: '14px', marginTop: '8px' }}>{errors.monthlyIncome}</p>
                    )}
                  </div>

                  {/* Phone Field */}
                  <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: 'var(--muted)', marginBottom: '8px' }}>
                      Phone number
                    </label>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <select
                        value={formData.countryCode}
                        onChange={(e) => handleInputChange('countryCode', e.target.value)}
                        style={{
                          width: '120px',
                          padding: '12px 8px',
                          backgroundColor: 'var(--background)',
                          border: '1px solid var(--secondary)',
                          borderRadius: '12px',
                          color: 'var(--foreground)',
                          minHeight: '48px',
                          fontSize: '14px',
                          boxSizing: 'border-box',
                        }}
                      >
                        {countryCodes.map((code) => (
                          <option key={code.value} value={code.value}>
                            {code.label}
                          </option>
                        ))}
                      </select>
                      <input
                        type="tel"
                        placeholder="Phone number"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        style={{
                          flex: 1,
                          padding: '12px 16px',
                          backgroundColor: 'var(--background)',
                          border: errors.phone ? '1px solid var(--destructive)' : '1px solid var(--secondary)',
                          borderRadius: '12px',
                          color: 'var(--foreground)',
                          minHeight: '48px',
                          boxSizing: 'border-box',
                        }}
                      />
                    </div>
                    {errors.phone && (
                      <p style={{ color: 'var(--destructive)', fontSize: '14px', marginTop: '4px' }}>{errors.phone}</p>
                    )}
                  </div>

                  {/* Error Message */}
                  {submitStatus === 'error' && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--destructive)', backgroundColor: 'rgba(239, 68, 68, 0.1)', padding: '12px 16px', borderRadius: '12px', marginBottom: '20px' }}>
                      <AlertCircle style={{ width: '20px', height: '20px', flexShrink: 0 }} />
                      <p style={{ fontSize: '14px' }}>Something went wrong. Please try again.</p>
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    style={{
                      width: '100%',
                      backgroundColor: 'var(--accent)',
                      color: 'var(--background)',
                      fontWeight: 'bold',
                      padding: '16px 24px',
                      borderRadius: '12px',
                      border: 'none',
                      minHeight: '52px',
                      cursor: isSubmitting ? 'not-allowed' : 'pointer',
                      opacity: isSubmitting ? 0.5 : 1,
                      fontSize: '16px',
                    }}
                  >
                    {isSubmitting ? (
                      <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                        <Loader2 style={{ width: '20px', height: '20px', animation: 'spin 1s linear infinite' }} />
                        Reserving...
                      </span>
                    ) : (
                      'Reserve Your Spot'
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Session Info Bar - Wider than form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-card/70 backdrop-blur-sm rounded-2xl border border-secondary"
            style={{ marginTop: '24px', padding: '16px 20px', width: 'fit-content', marginLeft: 'auto', marginRight: 'auto' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0' }}>
              {/* Live Session */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '0 20px' }}>
                <span style={{ fontSize: '28px' }}>📅</span>
                <div style={{ whiteSpace: 'nowrap' }}>
                  <p style={{ fontSize: '11px', fontWeight: '600', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '2px' }}>Live Session</p>
                  <p style={{ fontSize: '18px', fontWeight: '700', color: 'var(--accent)' }}>Wednesday, Jan 14th</p>
                </div>
              </div>

              {/* Divider */}
              <div style={{ width: '1px', height: '48px', backgroundColor: 'var(--secondary)' }} />

              {/* Time */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '0 20px' }}>
                <span style={{ fontSize: '28px' }}>⏰</span>
                <div style={{ whiteSpace: 'nowrap' }}>
                  <p style={{ fontSize: '11px', fontWeight: '600', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '2px' }}>Time</p>
                  <p style={{ fontSize: '18px', fontWeight: '700', color: 'var(--foreground)' }}>1:00 PM ET</p>
                </div>
              </div>

              {/* Divider */}
              <div style={{ width: '1px', height: '48px', backgroundColor: 'var(--secondary)' }} />

              {/* Duration */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '0 20px' }}>
                <span style={{ fontSize: '28px' }}>⏱️</span>
                <div style={{ whiteSpace: 'nowrap' }}>
                  <p style={{ fontSize: '11px', fontWeight: '600', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '2px' }}>Duration</p>
                  <p style={{ fontSize: '18px', fontWeight: '700', color: 'var(--foreground)' }}>60 Min</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Background elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-accent/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px]"></div>
        </div>
      </section>

      {/* What You'll Learn Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-card/20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
              What You&apos;ll Learn in <span className="text-accent">60 Minutes</span>
            </h2>
            <p className="text-lg text-muted mt-4">
              In this session, you&apos;ll discover:
            </p>
          </motion.div>

          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex gap-4 items-start"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center mt-1">
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {benefit.title}
                  </h3>
                  <p className="text-muted leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Back to Homepage */}
      <div className="text-center py-12">
        <Link
          href="/"
          className="inline-flex items-center text-accent hover:text-accent/80 transition-colors duration-300"
        >
          ← Back to Homepage
        </Link>
      </div>
    </main>
  );
}
