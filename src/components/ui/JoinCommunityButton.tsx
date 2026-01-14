"use client";

import { ArrowRight } from "lucide-react";
import React from "react";

interface JoinCommunityButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  showIcon?: boolean;
}

export default function JoinCommunityButton({ 
  children = "Join Community Now", 
  className = "", 
  showIcon = true,
  ...props 
}: JoinCommunityButtonProps) {
  return (
    <button 
      data-tally-open="OD4lLg" 
      data-tally-layout="modal" 
      data-tally-width="406" 
      data-tally-align-left="1" 
      data-tally-hide-title="1" 
      data-tally-emoji-text="👋" 
      data-tally-emoji-animation="wave" 
      data-tally-auto-close="0" 
      data-tally-form-events-forwarding="1"
      className={`btn-primary text-xl lg:text-2xl px-8 py-4 lg:px-16 lg:py-6 inline-flex group items-center ${className}`}
      {...props}
    >
      {children}
      {showIcon && <ArrowRight className="group-hover:translate-x-2 transition-transform ml-2" />}
    </button>
  );
}
