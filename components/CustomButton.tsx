'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface CustomButtonProps {
  href: string;
  label: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  external?: boolean;
}

export default function CustomButton({
  href,
  label,
  variant = 'primary',
  external = false,
}: CustomButtonProps) {
  const styles = {
    primary:
      'border border-[#8EA0FF33] bg-gradient-to-r from-accent to-accent2 text-white shadow-glow',
    secondary: 'border border-white/10 bg-white/5 text-white hover:bg-white/10',
    ghost: 'border border-transparent bg-transparent text-[#D7DDFF] hover:bg-white/5',
  };

  return (
    <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
      <Link
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noreferrer' : undefined}
        className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-all duration-300 ${styles[variant]}`}
      >
        <span>{label}</span>
        <ArrowUpRight size={16} />
      </Link>
    </motion.div>
  );
}
