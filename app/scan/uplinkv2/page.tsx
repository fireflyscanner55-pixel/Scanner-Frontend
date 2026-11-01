"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import type { UserScenarioConfig } from "@/types/radioanalysis";

const VIDEOS = [
  "/assets/uplink_Videos/Timeline_2.mp4",
  "/assets/uplink_Videos/Timeline_3.mp4",
] as const;

export default function UplinkV2Page() {
  const router = useRouter();
  const videoRef = useRef<HTMLVideoElement>(null);

  const [error, setError] = useState("");
  const [ready, setReady] = useState(false);
  const [videoIndex, setVideoIndex] = useState(0);

  // Prevent duplicate completion/navigation.
  const completedRef = useRef(false);

  // Verify scan completion and assigned scenario.
  useEffect(() => {
    let cancelled = false;

    const check = async () => {
      try {
        const end = Number(sessionStorage.getItem("radioanalysis_scan_end"));

        if (!end || Date.now() < end) {
          router.replace("/scan/initialize");
          return;
        }

        const response = await fetch("/api/user/scenario", {
          cache: "no-store",
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message ?? "Unable to load scenario");
        }

        const scenario = (data.data ?? data) as UserScenarioConfig;

        if (cancelled) return;

        if (scenario.scenarioType === "negative") {
          router.replace("/scan/live");
          return;
        }

        if (scenario.scenarioType === "positive") {
          setReady(true);
          return;
        }

        throw new Error("Invalid scenario assignment");
      } catch (cause) {
        if (!cancelled) {
          setError(
            cause instanceof Error ? cause.message : "Unable to start video",
          );
        }
      }
    };

    void check();

    return () => {
      cancelled = true;
    };
  }, [router]);

  // Automatically play the current video.
  useEffect(() => {
    if (!ready) return;

    const video = videoRef.current;
    if (!video) return;

    let cancelled = false;

    setError("");

    video.muted = true;
    video.volume = 0;
    video.controls = false;

    // Begin each new video from the start.
    video.load();

    const playVideo = async () => {
      try {
        await video.play();
      } catch {
        if (!cancelled) {
          setError(
            "Autoplay was blocked by the browser. Allow autoplay to continue.",
          );
        }
      }
    };

    void playVideo();

    return () => {
      cancelled = true;
      video.pause();
    };
  }, [ready, videoIndex]);

  // Disable page-level keyboard video controls.
  useEffect(() => {
    if (!ready) return;

    const blockedKeys = [
      " ",
      "Spacebar",
      "ArrowLeft",
      "ArrowRight",
      "ArrowUp",
      "ArrowDown",
      "k",
      "j",
      "l",
      "f",
      "m",
      "Home",
      "End",
      "MediaPlayPause",
      "MediaTrackNext",
      "MediaTrackPrevious",
    ];

    const blockKeyboard = (event: KeyboardEvent) => {
      if (blockedKeys.includes(event.key)) {
        event.preventDefault();
        event.stopPropagation();
      }
    };

    window.addEventListener("keydown", blockKeyboard, true);

    return () => {
      window.removeEventListener("keydown", blockKeyboard, true);
    };
  }, [ready]);

  // Advance sequentially when playback finishes.
  const handleVideoEnd = () => {
    if (completedRef.current) return;

    if (videoIndex < VIDEOS.length - 1) {
      setVideoIndex((previous) => previous + 1);
      return;
    }

    // Mark uplink complete only after all 4 videos.
    completedRef.current = true;

    sessionStorage.setItem("radioanalysis_uplink_complete", "1");

    router.replace("/scan/live");
  };

  const handleVideoError = () => {
    setError(
      `Unable to load scanner video ${videoIndex + 1}: ${VIDEOS[videoIndex]}`,
    );
  };

  return (
    <main
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-black"
      onContextMenu={(event) => event.preventDefault()}
    >
      {error && (
        <p
          role="alert"
          className="absolute z-10 max-w-lg px-5 text-center text-red-400"
        >
          {error}
        </p>
      )}

      {ready && (
        <video
          key={videoIndex}
          ref={videoRef}
          src={VIDEOS[videoIndex]}
          autoPlay
          muted
          playsInline
          controls={false}
          disablePictureInPicture
          disableRemotePlayback
          tabIndex={-1}
          preload="auto"
          controlsList="nodownload noplaybackrate noremoteplayback"
          className="pointer-events-none h-full w-full select-none object-cover"
          onEnded={handleVideoEnd}
          onError={handleVideoError}
          onVolumeChange={(event) => {
            const video = event.currentTarget;

            if (!video.muted || video.volume !== 0) {
              video.muted = true;
              video.volume = 0;
            }
          }}
        />
      )}
    </main>
  );
}
