import sys, json

def dump(filename):
    with open(filename, 'r', encoding='utf-8') as f:
        data = json.load(f)
    print(f"=== {data.get('scene_slug')} ({data.get('total_frames_30fps')} frames) ===")
    for a in data.get('anchors', []):
        print(f"{a['id']}: [{a['start_frame']}-{a['end_frame_exclusive']}] {a['exact_spoken_phrase']}")

if __name__ == '__main__':
    dump(sys.argv[1])
