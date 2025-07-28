"use client";

import { useState } from "react";
import { Play } from "lucide-react";

interface VideoPlayerProps {
  videoId: string;
  thumbnail?: string;
  title?: string;
}

export function VideoPlayer({ videoId, thumbnail, title }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const getYouTubeEmbedUrl = (id: string) => {
    return `https://www.youtube.com/embed/${id}?autoplay=1`;
  };

  if (isPlaying) {
    return (
      <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-black">
        <iframe
          src={getYouTubeEmbedUrl(videoId)}
          title={title || "Course Trailer"}
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <div
      className="relative w-full aspect-video rounded-lg overflow-hidden cursor-pointer group bg-gray-200"
      onClick={() => setIsPlaying(true)}
    >
      <img
        src={
          thumbnail ||
          "/placeholder.svg?height=400&width=600&query=video thumbnail"
        }
        alt={title || "Video thumbnail"}
        className="w-full h-full object-cover"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.src = "/placeholder.svg?height=400&width=600";
        }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center group-hover:bg-opacity-40 transition-all">
        <div className="bg-white rounded-full p-4 group-hover:scale-110 transition-transform shadow-lg">
          <Play className="w-8 h-8 text-gray-800 ml-1" fill="currentColor" />
        </div>
      </div>
    </div>
  );
}
