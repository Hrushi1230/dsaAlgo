# Sync Audit — Scene 07: Method 2 · Full Verified Trace

- **Audio File:** `07-optimal-trace.mp3`
- **Duration:** 117.320s / 3520 frames @ 30 fps
- **Words:** 251
- **Anchors:** 46

| Anchor ID | Spoken Phrase | Frame Range | Total Frames | Spoken Range | Pause After |
|---|---|---|---|---|---|
| `S07_MASTER` | Our array is | `[F0..F34]` | 34 | `[F0..F34]` | 0f (0ms) |
| `S07_VALUES` | two... one... five... four... four... three... zero. | `[F34..F232]` | 198 | `[F34..F211]` | 21f (700ms) |
| `S07_I_START` | We start the pivot search from the second-last index. | `[F232..F322]` | 90 | `[F232..F304]` | 18f (600ms) |
| `S07_C5` | At index five... three is smaller than zero? | `[F322..F423]` | 101 | `[F322..F406]` | 17f (567ms) |
| `S07_N5` | No. | `[F423..F448]` | 25 | `[F423..F434]` | 14f (467ms) |
| `S07_M54` | Move left. | `[F448..F478]` | 30 | `[F448..F464]` | 14f (467ms) |
| `S07_C4` | At index four... four is smaller than three? | `[F478..F560]` | 82 | `[F478..F553]` | 7f (233ms) |
| `S07_N4` | No. | `[F560..F584]` | 24 | `[F560..F570]` | 14f (467ms) |
| `S07_M43` | Move left. | `[F584..F612]` | 28 | `[F584..F601]` | 11f (367ms) |
| `S07_C3` | At index three... four is smaller than four? | `[F612..F709]` | 97 | `[F612..F692]` | 17f (567ms) |
| `S07_NEQ` | No. | `[F709..F729]` | 20 | `[F709..F718]` | 11f (367ms) |
| `S07_EQ_RULE` | Equal values do not satisfy the condition. | `[F729..F809]` | 80 | `[F729..F794]` | 15f (500ms) |
| `S07_M32` | Move left. | `[F809..F839]` | 30 | `[F809..F830]` | 9f (300ms) |
| `S07_C2` | At index two... five is smaller than four? | `[F839..F936]` | 97 | `[F839..F923]` | 13f (433ms) |
| `S07_N2` | No. | `[F936..F958]` | 22 | `[F936..F946]` | 12f (400ms) |
| `S07_M21` | Move left. | `[F958..F989]` | 31 | `[F958..F973]` | 16f (533ms) |
| `S07_C1` | At index one... one is smaller than five? | `[F989..F1071]` | 82 | `[F989..F1063]` | 8f (267ms) |
| `S07_Y1` | Yes. | `[F1071..F1096]` | 25 | `[F1071..F1083]` | 13f (433ms) |
| `S07_PIVOT` | So index one is our pivot. | `[F1096..F1152]` | 56 | `[F1096..F1139]` | 13f (433ms) |
| `S07_PIVOT_VAL` | The pivot value is one. | `[F1152..F1202]` | 50 | `[F1152..F1192]` | 10f (333ms) |
| `S07_SUFFIX` | Everything after it... five... four... four... three... zero... is non-increasing. | `[F1202..F1406]` | 204 | `[F1202..F1391]` | 15f (500ms) |
| `S07_FIND_REPL` | Now we find the value that should replace the pivot. | `[F1406..F1511]` | 105 | `[F1406..F1481]` | 30f (1000ms) |
| `S07_J_START` | Start from the last index. | `[F1511..F1565]` | 54 | `[F1511..F1549]` | 16f (533ms) |
| `S07_J6` | Zero is greater than one? | `[F1565..F1637]` | 72 | `[F1565..F1609]` | 28f (933ms) |
| `S07_J6_NO` | No. | `[F1637..F1648]` | 11 | `[F1637..F1648]` | 0f (0ms) |
| `S07_J_MOVE` | Move left. | `[F1648..F1693]` | 45 | `[F1648..F1685]` | 8f (267ms) |
| `S07_J5` | Three is greater than one? | `[F1693..F1750]` | 57 | `[F1693..F1734]` | 16f (533ms) |
| `S07_J5_YES` | Yes. | `[F1750..F1782]` | 32 | `[F1750..F1763]` | 19f (633ms) |
| `S07_SUCCESSOR` | So index five is our successor. | `[F1782..F1838]` | 56 | `[F1782..F1826]` | 12f (400ms) |
| `S07_SUCCESSOR_VAL` | The successor value is three. | `[F1838..F1892]` | 54 | `[F1838..F1880]` | 12f (400ms) |
| `S07_SWAP_PREP` | Now swap the pivot and successor. | `[F1892..F1955]` | 63 | `[F1892..F1939]` | 16f (533ms) |
| `S07_SWAP` | One swaps with three. | `[F1955..F2000]` | 45 | `[F1955..F1988]` | 12f (400ms) |
| `S07_AFTER_SWAP` | The array becomes... two... three... five... four... four... one... zero. | `[F2000..F2217]` | 217 | `[F2000..F2197]` | 20f (667ms) |
| `S07_LARGER` | Now the permutation is larger... | `[F2217..F2272]` | 55 | `[F2217..F2260]` | 12f (400ms) |
| `S07_SUFFIX_MAX` | but the suffix is still as large as possible. | `[F2272..F2351]` | 79 | `[F2272..F2341]` | 10f (333ms) |
| `S07_MIN_SUFFIX` | We need the smallest possible suffix. | `[F2351..F2430]` | 79 | `[F2351..F2420]` | 10f (333ms) |
| `S07_RANGE` | So reverse everything after the pivot. Our reverse range is index two to index six. | `[F2430..F2618]` | 188 | `[F2430..F2611]` | 7f (233ms) |
| `S07_RSWAP1` | Swap five and zero. | `[F2618..F2677]` | 59 | `[F2618..F2662]` | 15f (500ms) |
| `S07_STATE1` | The array becomes... two... three... zero... four... four... one... five. | `[F2677..F2850]` | 173 | `[F2677..F2848]` | 2f (67ms) |
| `S07_INWARD1` | Move inward. | `[F2850..F2885]` | 35 | `[F2850..F2876]` | 9f (300ms) |
| `S07_RSWAP2` | Swap four and one. | `[F2885..F2936]` | 51 | `[F2885..F2918]` | 18f (600ms) |
| `S07_STATE2` | The array becomes... two... three... zero... one... four... four... five. | `[F2936..F3114]` | 178 | `[F2936..F3105]` | 9f (300ms) |
| `S07_MEET` | Now both reverse pointers meet. | `[F3114..F3170]` | 56 | `[F3114..F3160]` | 10f (333ms) |
| `S07_STOP` | We stop. | `[F3170..F3206]` | 36 | `[F3170..F3189]` | 17f (567ms) |
| `S07_FINAL` | Our final answer is... two... three... zero... one... four... four... five. | `[F3206..F3446]` | 240 | `[F3206..F3414]` | 32f (1067ms) |
| `S07_IMMEDIATE` | That is the immediate next permutation. | `[F3446..F3520]` | 74 | `[F3446..F3520]` | 0f (0ms) |
