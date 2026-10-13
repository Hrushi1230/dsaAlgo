import json

with open('questions/01-arrays-hashing/017-encode-and-decode-strings/sync/08-correctness-complexity.json', encoding='utf-8') as f:
    d = json.load(f)

words = d['words']
print('Total words:', len(words), 'Total frames:', d['duration_frames'])

def find_phrase(p):
    p_words = p.lower().split()
    for i in range(len(words) - len(p_words) + 1):
        match = True
        for k in range(len(p_words)):
            w = words[i+k]['word'].lower().strip('.,!?\"')
            if w != p_words[k]:
                match = False
                break
        if match:
            print(f'{p:<32} -> frame [{words[i]["start_frame"]:>4} .. {words[i+len(p_words)-1]["end_frame"]:>4}]')

find_phrase('Why does this work')
find_phrase('does not decide its own boundary')
find_phrase('The stored length does')
find_phrase('Now complexity')
find_phrase('total number of payload characters')
find_phrase('number of strings')
find_phrase('Encoding processes every string')
find_phrase('Time complexity')
find_phrase('O of C plus N')
find_phrase('Decoding reads the headers')
find_phrase('O of C plus N space')
