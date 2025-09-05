'use client';

import Image from 'next/image';

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
  // Check if the URL is a YouTube video (contains youtube.com or youtu.be)
  const isYouTubeUrl = (url: string): boolean => {
    return url.includes('youtube.com') || url.includes('youtu.be');
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
          src={`https://www.youtube-nocookie.com/embed/${videoId}?modestbranding=1&rel=0&showinfo=0`}
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