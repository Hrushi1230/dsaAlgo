# Code With Animation — DSA Video Production Pipeline

## Quick Start

```bash
# 1. Install Remotion project
cd algora-videos && npm install

# 2. Install audio tools
pip install -r tools/requirements.txt

# 3. Preview in Remotion Studio
npx remotion studio
```

## The Roadmap (follow this order, always)

```
STEP 0: Pick question from docs/dsa.md
STEP 1: Write script → get approval
STEP 2: Record audio per scene
STEP 3: Run audio-to-json tool
STEP 4: Create frame-by-frame scene plan → get approval
STEP 5: Build Remotion animation per scene
STEP 6: Assemble all scenes → final video
```

## Project Structure

```
DsaAlgo/
├── .agents/AGENTS.md          # Rules for all AI agents
├── docs/                      # Reference documents (DO NOT MODIFY)
├── tools/                     # Audio processing scripts
├── shared/                    # Reusable Remotion components
├── questions/                 # One folder per DSA question
├── templates/                 # JSON schema templates
└── algora-videos/             # Remotion project root
```

See [docs/ROADMAP.md](file:///c:/Users/hrkes/Desktop/DsaAlgo/docs/ROADMAP.md) for the complete 1-by-1 step execution guide.
See `.agents/AGENTS.md` for full rules.
