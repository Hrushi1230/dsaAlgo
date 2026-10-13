import json

with open('questions/01-arrays-hashing/017-encode-and-decode-strings/sync/06-decode-trace.json', encoding='utf-8') as f:
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
            print(f'{p:<30} -> frame [{words[i]["start_frame"]:>4} .. {words[i+len(p_words)-1]["end_frame"]:>4}]')

find_phrase('complete encoded string')
find_phrase('empty result list')
find_phrase('set i to 0')
find_phrase('set i to zero')
find_phrase('first record')
find_phrase('length text is three')
find_phrase('length equals three')
find_phrase('start is 2')
find_phrase('start is two')
find_phrase('equals 5')
find_phrase('equals five')
find_phrase('a hash b')
find_phrase('move i to end')
find_phrase('second record')
find_phrase('length is 0')
find_phrase('length is zero')
find_phrase('payload is empty')
find_phrase('second record complete')
find_phrase('next record')
find_phrase('length is 11')
find_phrase('length is eleven')
find_phrase('hello world')
find_phrase('third record complete')
find_phrase('one record remains')
find_phrase('length is 2')
find_phrase('length is two')
find_phrase('4 2')
find_phrase('four 2')
find_phrase('four two')
find_phrase('25 is the length')
find_phrase('twenty-five is the length')
find_phrase('look at our result')
find_phrase('complete decode trace')
find_phrase('write the decoder')
