import json

with open("questions/01-arrays-hashing/014-rotate-image/sync/05-why-extra-space.json") as f:
    sync_data = json.load(f)

words = sync_data["words"]

raw_anchors = [
    {
        "anchor_id": "S05_METHOD1_STOPPING",
        "name": "Only thing stopping Method 1 is extra matrix",
        "phrase": "The only thing stopping method 1 from being in place is the extra matrix.",
        "word_start_index": 0,
        "word_end_index": 13,
        "start_frame": words[0]["start_frame"],
        "end_frame": words[13]["end_frame"],
        "start_ms": words[0]["start_ms"],
        "end_ms": words[13]["end_ms"]
    },
    {
        "anchor_id": "S05_WHAT_IF_REMOVE",
        "name": "What happens if we remove it?",
        "phrase": "So what happens if we remove it?",
        "word_start_index": 14,
        "word_end_index": 20,
        "start_frame": words[14]["start_frame"],
        "end_frame": words[20]["end_frame"],
        "start_ms": words[14]["start_ms"],
        "end_ms": words[20]["end_ms"]
    },
    {
        "anchor_id": "S05_TRY_DIRECT_MOVE",
        "name": "Try moving values directly inside original matrix",
        "phrase": "Suppose we try to move values directly inside the original matrix.",
        "word_start_index": 21,
        "word_end_index": 31,
        "start_frame": words[21]["start_frame"],
        "end_frame": words[31]["end_frame"],
        "start_ms": words[21]["start_ms"],
        "end_ms": words[31]["end_ms"]
    },
    {
        "anchor_id": "S05_FIRST_CORNER",
        "name": "Look at the first corner",
        "phrase": "Look at the first corner.",
        "word_start_index": 32,
        "word_end_index": 36,
        "start_frame": words[32]["start_frame"],
        "end_frame": words[36]["end_frame"],
        "start_ms": words[32]["start_ms"],
        "end_ms": words[36]["end_ms"]
    },
    {
        "anchor_id": "S05_ONE_TO_FIVE",
        "name": "One needs to move into position of 5",
        "phrase": "One needs to move into the current position of 5.",
        "word_start_index": 37,
        "word_end_index": 46,
        "start_frame": words[37]["start_frame"],
        "end_frame": words[46]["end_frame"],
        "start_ms": words[37]["start_ms"],
        "end_ms": words[46]["end_ms"]
    },
    {
        "anchor_id": "S05_OVERWRITE_DISASTER",
        "name": "Write 1 over 5: old value 5 disappears",
        "phrase": "But if we immediately write 1 over 5, the old value 5 disappears.",
        "word_start_index": 47,
        "word_end_index": 59,
        "start_frame": words[47]["start_frame"],
        "end_frame": words[59]["end_frame"],
        "start_ms": words[47]["start_ms"],
        "end_ms": words[59]["end_ms"]
    },
    {
        "anchor_id": "S05_STILL_NEED_FIVE",
        "name": "Still need 5 because 5 must move",
        "phrase": "And we still need 5 because 5 must move to another position.",
        "word_start_index": 60,
        "word_end_index": 71,
        "start_frame": words[60]["start_frame"],
        "end_frame": words[71]["end_frame"],
        "start_ms": words[60]["start_ms"],
        "end_ms": words[71]["end_ms"]
    },
    {
        "anchor_id": "S05_OVERWRITE_PROBLEM",
        "name": "Creates an overwrite problem",
        "phrase": "So this creates an overwrite problem.",
        "word_start_index": 72,
        "word_end_index": 77,
        "start_frame": words[72]["start_frame"],
        "end_frame": words[77]["end_frame"],
        "start_ms": words[72]["start_ms"],
        "end_ms": words[77]["end_ms"]
    },
    {
        "anchor_id": "S05_NOT_INDEPENDENT",
        "name": "Values are not moving independently",
        "phrase": "The values are not moving independently.",
        "word_start_index": 78,
        "word_end_index": 83,
        "start_frame": words[78]["start_frame"],
        "end_frame": words[83]["end_frame"],
        "start_ms": words[78]["start_ms"],
        "end_ms": words[83]["end_ms"]
    },
    {
        "anchor_id": "S05_THEY_ARE_CONNECTED",
        "name": "They are connected",
        "phrase": "They are connected.",
        "word_start_index": 84,
        "word_end_index": 86,
        "start_frame": words[84]["start_frame"],
        "end_frame": words[86]["end_frame"],
        "start_ms": words[84]["start_ms"],
        "end_ms": words[86]["end_ms"]
    },
    {
        "anchor_id": "S05_CYCLE_1_TO_5",
        "name": "1 moves to position of 5",
        "phrase": "1 moves to the position of 5.",
        "word_start_index": 87,
        "word_end_index": 93,
        "start_frame": words[87]["start_frame"],
        "end_frame": words[93]["end_frame"],
        "start_ms": words[87]["start_ms"],
        "end_ms": words[93]["end_ms"]
    },
    {
        "anchor_id": "S05_CYCLE_5_TO_25",
        "name": "5 moves to position of 25",
        "phrase": "5 moves to the position of 25.",
        "word_start_index": 94,
        "word_end_index": 100,
        "start_frame": words[94]["start_frame"],
        "end_frame": words[100]["end_frame"],
        "start_ms": words[94]["start_ms"],
        "end_ms": words[100]["end_ms"]
    },
    {
        "anchor_id": "S05_CYCLE_25_TO_21",
        "name": "25 moves to position of 21",
        "phrase": "25 moves to the position of 21.",
        "word_start_index": 101,
        "word_end_index": 107,
        "start_frame": words[101]["start_frame"],
        "end_frame": words[107]["end_frame"],
        "start_ms": words[101]["start_ms"],
        "end_ms": words[107]["end_ms"]
    },
    {
        "anchor_id": "S05_CYCLE_21_TO_1",
        "name": "21 moves back to position of 1",
        "phrase": "And 21 moves back to the original position of 1.",
        "word_start_index": 108,
        "word_end_index": 117,
        "start_frame": words[108]["start_frame"],
        "end_frame": words[117]["end_frame"],
        "start_ms": words[108]["start_ms"],
        "end_ms": words[117]["end_ms"]
    },
    {
        "anchor_id": "S05_CLOSED_CYCLE",
        "name": "These 4 positions form a closed cycle",
        "phrase": "So these 4 positions form a closed cycle.",
        "word_start_index": 118,
        "word_end_index": 125,
        "start_frame": words[118]["start_frame"],
        "end_frame": words[125]["end_frame"],
        "start_ms": words[118]["start_ms"],
        "end_ms": words[125]["end_ms"]
    },
    {
        "anchor_id": "S05_SOLUTION_DISCOVERED",
        "name": "That gives us the solution",
        "phrase": "That gives us the solution.",
        "word_start_index": 126,
        "word_end_index": 130,
        "start_frame": words[126]["start_frame"],
        "end_frame": words[130]["end_frame"],
        "start_ms": words[126]["start_ms"],
        "end_ms": words[130]["end_ms"]
    },
    {
        "anchor_id": "S05_ROTATE_FOUR_TOGETHER",
        "name": "Rotate all 4 connected values together",
        "phrase": "Instead of moving one value alone, we rotate all 4 connected values together.",
        "word_start_index": 131,
        "word_end_index": 143,
        "start_frame": words[131]["start_frame"],
        "end_frame": words[143]["end_frame"],
        "start_ms": words[131]["start_ms"],
        "end_ms": words[143]["end_ms"]
    },
    {
        "anchor_id": "S05_ONE_TEMP_VARIABLE",
        "name": "Only need to save one value temporarily",
        "phrase": "And to prevent data loss, we only need to save one value temporarily.",
        "word_start_index": 144,
        "word_end_index": 156,
        "start_frame": words[144]["start_frame"],
        "end_frame": words[156]["end_frame"],
        "start_ms": words[144]["start_ms"],
        "end_ms": words[156]["end_ms"]
    },
    {
        "anchor_id": "S05_TRACE_HANDOFF",
        "name": "Trace complete in-place rotation",
        "phrase": "Now let's trace the complete in -place rotation.",
        "word_start_index": 157,
        "word_end_index": 164,
        "start_frame": words[157]["start_frame"],
        "end_frame": words[164]["end_frame"],
        "start_ms": words[157]["start_ms"],
        "end_ms": words[164]["end_ms"]
    }
]

anchors_output = {
    "scene": "05-why-extra-space",
    "question": "014-rotate-image",
    "audio_file": "05-why-extra-space.mp3",
    "fps": 30,
    "duration_frames": sync_data["duration_frames"],
    "duration_ms": sync_data["duration_ms"],
    "anchor_count": len(raw_anchors),
    "anchors": raw_anchors
}

out_path = "questions/01-arrays-hashing/014-rotate-image/sync/05-why-extra-space.anchors.json"
with open(out_path, "w") as f:
    json.dump(anchors_output, f, indent=2)

print(f"Generated {len(raw_anchors)} exact anchors for Scene 05 -> {out_path}")
