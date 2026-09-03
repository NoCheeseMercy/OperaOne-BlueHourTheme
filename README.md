# Opera One: Blue Hour —  Opera One Custom Theme

This is a **custom theme package for Opera One**. It bundles video
wallpapers, browser & keyboard sound packs, color themes, and a 130‑entry
dark color‑set plus 130‑entry light color‑set into a single Opera theme.

> **This is NOT a normal Chrome extension.** Even though it uses a
> `manifest.json` (manifest v3 with Opera's `mod` payload), it must be
> loaded through **Opera's supported mod/theme workflow** — it will not
> work in Chrome and should not be treated as a Chrome Web Store
> extension.

## What's inside

| Component | Details |
|---|---|
| Wallpapers | 11 video wallpapers (`.mp4`) with previews |
| Browser sounds | "Blue Hour" pack (tab, panel, split-screen, island sounds) — sounds from **Mizumi** |
| Keyboard sounds | "Blue Hour Typing" pack (letters, space, enter, backspace) — sounds from **Mizumi** |
| Color themes | Blue Hour Neon, White Frost, Black Onyx |
| Color-sets | 130 dark entries, 130 light entries (verified) |
| Localization | English (`_locales/en/messages.json`) |

> **Sound attribution:** The keyboard sounds and browser sounds in this
> pack are taken from **Mizumi**, an existing Opera theme created by
**Opera Software**. All credit for the audio assets goes to Opera
> Software.

## Required folder structure

```
OperaOneHermesTheme/
├── manifest.json              # Opera theme manifest (v3, schema_version 2)
├── iconimage.png                   # 218px theme icon
├── background.js
├── wallpaper/
│   ├── preview.png
│   ├── *.mp4                  # video wallpapers
│   ├── previews/              # preview images (.png/.jpg/.webp)
│   └── color_picker/
│       ├── accent.png
│       ├── dark.png
│       └── light.png
├── sounds/                    # .mp3 UI sound effects (15 files)
└── _locales/
    └── en/
        └── messages.json
```

Every path referenced by `manifest.json` must exist — do not rename or
delete assets, or the mod will fail to load.

## How to install it locally

1. Download or clone this repository.
2. In Opera One, open `opera://extensions`.
3. Enable **Developer mode** (top-right toggle).
4. Click **Load unpacked** and select the `OperaOne-BlueHourTheme` folder.
5. Open **Themes** and pick **Blue Hour**.

## How to update it

1. Pull the latest version (`git pull`) or replace the folder contents
   with the new release.
2. Go to `opera://extensions` and click **Reload** on the mod card
   (or restart Opera).
3. Your selected wallpaper/sounds/colors are preserved unless the asset
   filenames change.

## Validation

The dark color-set contains **exactly 130 entries** and the light
color-set contains **130 entries** — both verified against
`mod.vibe.color-sets` (0 invalid HSL values, valid JSON). All HSL values
follow `h: 0–360`, `s: 0–100`, `l: 0–100`. All wallpaper, preview,
sound, icon, and locale paths referenced by `manifest.json` exist in the
package.
