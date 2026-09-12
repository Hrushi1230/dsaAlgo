"""
generate_sfx.py — Programmatic Synthesizer for 100% Copyright-Free Studio SFX
Generates mathematically pure acoustic waveforms (WAV) and converts to MP3 using ffmpeg.
"""
import os
import math
import wave
import struct
import subprocess

SAMPLE_RATE = 44100
OUT_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "remotion-project", "public", "audio", "sfx"))
os.makedirs(OUT_DIR, exist_ok=True)


def write_wav(filename: str, samples: list[float]):
    wav_path = os.path.join(OUT_DIR, filename + ".wav")
    mp3_path = os.path.join(OUT_DIR, filename + ".mp3")
    
    # Write WAV
    with wave.open(wav_path, "w") as wav_file:
        wav_file.setnchannels(1)  # Mono
        wav_file.setsampwidth(2)  # 16-bit
        wav_file.setframerate(SAMPLE_RATE)
        
        raw_bytes = bytearray()
        for s in samples:
            # Clamp to [-1.0, 1.0]
            val = max(-1.0, min(1.0, s))
            int_val = int(val * 32767.0)
            raw_bytes.extend(struct.pack("<h", int_val))
        
        wav_file.writeframes(raw_bytes)
    
    # Convert to high-quality MP3 via ffmpeg
    subprocess.run(
        ["ffmpeg", "-y", "-i", wav_path, "-codec:a", "libmp3lame", "-b:a", "192k", mp3_path],
        stdout=subprocess.DEVNULL,
        stderr=subprocess.DEVNULL,
        check=True
    )
    print(f"Generated: {mp3_path} ({len(samples)/SAMPLE_RATE:.2f}s)")


# ---------------------------------------------------------------------------
# 1. Countdown Tick (Crisp Woodblock / Clock Tick)
# ---------------------------------------------------------------------------
def gen_countdown_tick():
    duration = 0.12  # 120ms
    num_samples = int(SAMPLE_RATE * duration)
    samples = []
    
    f0 = 1200.0  # 1.2 kHz resonant frequency
    for i in range(num_samples):
        t = i / SAMPLE_RATE
        # Fast exponential decay
        env = math.exp(-35.0 * t)
        # Resonant tone + harmonic
        val = 0.7 * math.sin(2.0 * math.pi * f0 * t) + 0.3 * math.sin(2.0 * math.pi * 2.4 * f0 * t)
        samples.append(val * env)
    
    write_wav("countdown-tick", samples)


# ---------------------------------------------------------------------------
# 2. Countdown Chime (Harmonic Crystal Bell on 'Go')
# ---------------------------------------------------------------------------
def gen_countdown_chime():
    duration = 0.9  # 900ms
    num_samples = int(SAMPLE_RATE * duration)
    samples = []
    
    f0 = 880.0  # A5 note
    for i in range(num_samples):
        t = i / SAMPLE_RATE
        env = math.exp(-6.0 * t)
        # Rich harmonic bell structure
        val = (
            0.50 * math.sin(2.0 * math.pi * f0 * t) +
            0.30 * math.sin(2.0 * math.pi * 2.0 * f0 * t) +
            0.15 * math.sin(2.0 * math.pi * 3.0 * f0 * t) +
            0.05 * math.sin(2.0 * math.pi * 4.2 * f0 * t)
        )
        samples.append(val * env)
    
    write_wav("countdown-chime", samples)


# ---------------------------------------------------------------------------
# 3. Transition Whoosh (Smooth Airflow Sweep)
# ---------------------------------------------------------------------------
def gen_transition_whoosh():
    duration = 0.35  # 350ms
    num_samples = int(SAMPLE_RATE * duration)
    samples = []
    
    # Pseudo-random noise with modulated bandpass envelope
    import random
    rng = random.Random(42)
    
    for i in range(num_samples):
        t = i / SAMPLE_RATE
        # Bell-shaped amplitude envelope
        p = t / duration
        env = math.sin(math.pi * p) ** 2
        # Frequency modulation sweep (200Hz -> 800Hz -> 300Hz)
        center_f = 250.0 + 700.0 * math.sin(math.pi * p)
        # Filtered noise component
        noise = (rng.random() * 2.0 - 1.0)
        tone = math.sin(2.0 * math.pi * center_f * t)
        val = (0.4 * noise + 0.6 * tone) * env * 0.7
        samples.append(val)
    
    write_wav("transition-whoosh", samples)


# ---------------------------------------------------------------------------
# 4. Chalk Tap (Tactile Blackboard Tap)
# ---------------------------------------------------------------------------
def gen_chalk_tap():
    duration = 0.08  # 80ms
    num_samples = int(SAMPLE_RATE * duration)
    samples = []
    
    import random
    rng = random.Random(123)
    
    for i in range(num_samples):
        t = i / SAMPLE_RATE
        env = math.exp(-70.0 * t)
        noise = (rng.random() * 2.0 - 1.0)
        val = (0.6 * math.sin(2.0 * math.pi * 1800.0 * t) + 0.4 * noise) * env
        samples.append(val)
    
    write_wav("chalk-tap", samples)


# ---------------------------------------------------------------------------
# 5. Success Ding (Pleasant Dual Harmonic Chord)
# ---------------------------------------------------------------------------
def gen_success_ding():
    duration = 1.1  # 1.1s
    num_samples = int(SAMPLE_RATE * duration)
    samples = []
    
    f1 = 1046.5  # C6
    f2 = 1318.5  # E6
    f3 = 1567.98 # G6 (Major chord)
    
    for i in range(num_samples):
        t = i / SAMPLE_RATE
        env = math.exp(-4.5 * t)
        val = (
            0.40 * math.sin(2.0 * math.pi * f1 * t) +
            0.35 * math.sin(2.0 * math.pi * f2 * t) +
            0.25 * math.sin(2.0 * math.pi * f3 * t)
        )
        samples.append(val * env * 0.8)
    
    write_wav("success-ding", samples)


if __name__ == "__main__":
    print(f"Synthesizing 100% copyright-free sound effects into {OUT_DIR}...")
    gen_countdown_tick()
    gen_countdown_chime()
    gen_transition_whoosh()
    gen_chalk_tap()
    gen_success_ding()
    print("Done! All SFX generated successfully.")
