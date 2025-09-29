'use client';

import Image from 'next/image';
import { useRef, useState, useEffect } from 'react';
import { trackVideoUnmuted, trackVideo10Percent, trackVideo25Percent, trackVideo50Percent, trackVideo75Percent, trackVideoComplete } from '@/components/tracking/MetaPixel';

/**
 * HeroMedia Component - Automatically detects and displays YouTube videos or images
 * 
 * YOUTUBE VIDEO URLS (any of these formats work):
 * - https://www.youtube.com/watch?v=dQw4w9WgXcQ
 * - https://youtu.be/dQw4w9WgXcQ
 * - https://youtube.com/watch?v=dQw4w9WgXcQ
 * - https://www.youtube.com/embed/dQw4w9WgXcQ
 * 
 * IMAGE URLS (any of these formats work):
 * - https://example.com/image.jpg (external image)
 * - /images/hero.png (local image in public folder)
 * - https://via.placeholder.com/800x450 (placeholder service)
 * - Any valid image URL (.jpg, .png, .gif, .webp, etc.)
 */

interface HeroMediaProps {
  url: string;
  caption?: string;
}

export default function HeroMedia({ url, caption }: HeroMediaProps) {
  // Minimal state for native video controls
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showMutedNotification, setShowMutedNotification] = useState(true);
  const [mounted, setMounted] = useState(false);

  // Video tracking state - track milestones only once per session
  const [trackedMilestones, setTrackedMilestones] = useState<Set<number>>(new Set());

  // Handle client-side mounting to prevent hydration issues
  useEffect(() => {
    setMounted(true);
  }, []);

  // Hide muted notification after 4 seconds - only for direct video URLs
  useEffect(() => {
    if (!isDirectVideoUrl(url) || !mounted) return;

    const timer = setTimeout(() => {
      setShowMutedNotification(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, [url, mounted]);

  // Video tracking handlers
  const handleVideoVolumeChange = () => {
    const video = videoRef.current;
    if (!video) return;

    // Track when user unmutes (shows real engagement intent)
    if (!video.muted && !trackedMilestones.has(0)) {
      trackVideoUnmuted('VSL Hero Video');
      setTrackedMilestones(prev => new Set(prev).add(0));
    }
  };

  const handleVideoTimeUpdate = () => {
    const video = videoRef.current;
    if (!video || video.duration === 0) return;

    const progressPercent = (video.currentTime / video.duration) * 100;

    // Track milestones (only once each)
    if (progressPercent >= 10 && !trackedMilestones.has(10)) {
      trackVideo10Percent('VSL Hero Video');
      setTrackedMilestones(prev => new Set(prev).add(10));
    } else if (progressPercent >= 25 && !trackedMilestones.has(25)) {
      trackVideo25Percent('VSL Hero Video');
      setTrackedMilestones(prev => new Set(prev).add(25));
    } else if (progressPercent >= 50 && !trackedMilestones.has(50)) {
      trackVideo50Percent('VSL Hero Video');
      setTrackedMilestones(prev => new Set(prev).add(50));
    } else if (progressPercent >= 75 && !trackedMilestones.has(75)) {
      trackVideo75Percent('VSL Hero Video');
      setTrackedMilestones(prev => new Set(prev).add(75));
    } else if (progressPercent >= 95 && !trackedMilestones.has(95)) {
      trackVideoComplete('VSL Hero Video');
      setTrackedMilestones(prev => new Set(prev).add(95));
    }
  };

  // Check if the URL is a YouTube video (contains youtube.com or youtu.be)
  const isYouTubeUrl = (url: string): boolean => {
    return url.includes('youtube.com') || url.includes('youtu.be');
  };

  // Check if the URL is a Bunny Stream video
  const isBunnyStreamUrl = (url: string): boolean => {
    return url.includes('iframe.mediadelivery.net') || url.includes('video.bunnycdn.com');
  };

  // Check if the URL is a direct video file (MP4, WebM, MOV, etc.)
  const isDirectVideoUrl = (url: string): boolean => {
    const videoExtensions = ['.mp4', '.webm', '.mov', '.avi', '.mkv', '.m4v'];
    return videoExtensions.some(ext => url.toLowerCase().includes(ext)) || 
           url.includes('s3.') || // S3 URLs
           url.includes('cloudfront.') || // CloudFront URLs
           url.includes('blob.') || // Azure Blob
           url.includes('googleapis.'); // Google Cloud
  };

  // Extract the video ID from various YouTube URL formats
  const extractYouTubeId = (url: string): string | null => {
    const patterns = [
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
      /youtube\.com\/watch\?.*v=([^&\n?#]+)/
    ];
    
    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match && match[1]) {
        return match[1];
      }
    }
    return null;
  };

  // Extract Bunny Stream embed URL and add our parameters
  const getBunnyStreamEmbedUrl = (url: string): string => {
    // If it's already an embed URL, modify its parameters
    if (url.includes('iframe.mediadelivery.net/embed/')) {
      const baseUrl = url.split('?')[0]; // Remove existing parameters
      return `${baseUrl}?autoplay=true&loop=true&muted=true&preload=true&responsive=true&controls=false&playsinline=true`;
    }
    // If it's a play URL, convert to embed URL
    if (url.includes('iframe.mediadelivery.net/play/')) {
      const embedUrl = url.replace('/play/', '/embed/');
      return `${embedUrl}?autoplay=true&loop=true&muted=true&preload=true&responsive=true&controls=false&playsinline=true`;
    }
    return url;
  };

  // If URL is a direct video file, render HTML5 video element
  if (isDirectVideoUrl(url)) {
    return (
      <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden bg-card/50 backdrop-blur-sm border border-accent/20">
        {mounted ? (
          <video
            ref={videoRef}
            src={url}
            className="w-full h-full object-cover"
            controls
            autoPlay
            muted
            playsInline
            preload="metadata"
            onVolumeChange={handleVideoVolumeChange}
            onTimeUpdate={handleVideoTimeUpdate}
          />
        ) : (
          <div className="w-full h-full bg-card/30 animate-pulse" />
        )}
        
        {/* Muted notification */}
        {showMutedNotification && (
          <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-2 rounded-lg text-sm backdrop-blur-sm transition-opacity duration-500">
            🔇 Video starts muted
          </div>
        )}

        {caption && (
          <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-3 text-sm text-center">
            {caption}
          </div>
        )}
      </div>
    );
  }

  // If URL is a Bunny Stream video, render the iframe
  if (isBunnyStreamUrl(url)) {
    const embedUrl = getBunnyStreamEmbedUrl(url);
    
    return (
      <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden bg-card/50 backdrop-blur-sm border border-accent/20">
        <div className="relative w-full h-full">
          <iframe
            src={embedUrl}
            title="Hero Video"
            className="w-full h-full border-0"
            allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture; autoplay"
            allowFullScreen
          />
        </div>
        {caption && (
          <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-3 text-sm text-center">
            {caption}
          </div>
        )}
      </div>
    );
  }

  // If URL contains youtube.com or youtu.be, treat it as a YouTube video
  if (isYouTubeUrl(url)) {
    const videoId = extractYouTubeId(url);
    if (!videoId) {
      return (
        <div className="relative z-10 w-full h-full rounded-2xl bg-card/50 backdrop-blur-sm border border-accent/20 flex items-center justify-center">
          <div className="text-center p-8">
            <p className="text-muted">Invalid YouTube URL</p>
          </div>
        </div>
      );
    }

    // Render YouTube video embed
    return (
      <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden bg-card/50 backdrop-blur-sm border border-accent/20">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=1&modestbranding=1&rel=0&showinfo=0&controls=0&loop=1&playlist=${videoId}&iv_load_policy=3&disablekb=1&fs=0`}
          title="Hero Video"
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        {caption && (
          <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-3 text-sm text-center">
            {caption}
          </div>
        )}
      </div>
    );
  }

  // If not a YouTube URL, treat it as an image
  return (
    <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden bg-card/50 backdrop-blur-sm border border-accent/20">
      <Image
        src={url}
        alt={caption || "Hero image"}
        fill
        className="object-cover"
        priority
      />
      {caption && (
        <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-3 text-sm text-center">
          {caption}
        </div>
      )}
    </div>
  );
}