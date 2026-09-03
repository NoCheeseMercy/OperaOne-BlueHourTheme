# Opera One: Blue Hour

**Blue Hour** is a custom theme package for Opera One. It bundles 11 video wallpapers, a full browser and keyboard sound pack, three color themes, and a 260-entry color system (130 dark, 130 light) into a single installable Opera theme.

> **This is not a Chrome extension.** Blue Hour ships a `manifest.json` (Manifest V3 with Opera's `mod` payload), but it only works through Opera's mod/theme loading workflow. It will not install or run in Chrome, and it is not distributed through the Chrome Web Store.

---

## What's inside

| Component | Details |
|---|---|
| Wallpapers | 11 video wallpapers (`.mp4`) with static previews |
| Wallpaper coverage | Fills the full browser surface, not just the new-tab page |
| Browser sounds | "Blue Hour" pack — tab, panel, split-screen, and island interaction sounds |
| Keyboard sounds | "Blue Hour Typing" pack — letters, space, enter, backspace |
| Color themes | Blue Hour Neon, White Frost, Black Onyx |
| Color-sets | 130 dark entries, 130 light entries |
| Localization | English (`_locales/en/messages.json`) |

### Full-browser wallpaper

Unlike a standard new-tab background, the wallpaper in Blue Hour extends across the whole browser surface — it's part of the shell, not just something you see on a new tab.

### Sound packs

Blue Hour includes two sound packs:

- **Browser sounds** — UI feedback for tabs, panels, split-screen, and islands.
- **Typing sounds** — a full keyboard set covering letters, space, enter, and backspace.

Both packs use audio taken from **Mizumi**, an existing Opera theme by Opera Software. I liked how those sounds felt and reused them here — I didn't create them.

> **Sound attribution:** All browser and keyboard sound assets in this package originate from Mizumi, an Opera Software theme. Full credit for the audio goes to Opera Software. See [Third-party assets](#third-party-assets) below.

### Color themes

Blue Hour ships three color themes, each with its own visual identity:

| Theme | Style |
|---|---|
| **Blue Hour Neon** | The signature look — deep blues with neon accents |
| **White Frost** | A bright, cool-toned light variant |
| **Black Onyx** | A high-contrast, near-black dark variant |

All three draw from the same underlying 130-entry dark and 130-entry light color-sets.

---

## Repository structure

```
OperaOne-BlueHourTheme/
├── manifest.json               # Opera theme manifest (v3, schema_version 2)
├── iconimage.png                # 218px theme icon
├── background.js
├── wallpaper/
│   ├── preview.png
│   ├── *.mp4                    # video wallpapers
│   ├── previews/                # preview images
│   └── color_picker/
│       ├── accent.png
│       ├── dark.png
│       └── light.png
├── sounds/                      # .mp3 UI sound effects (15 files)
└── _locales/
    └── en/
        └── messages.json
```

Every path referenced in `manifest.json` must exist as-is — don't rename or remove assets, or the theme will fail to load.

---

## Installation

1. Download or clone this repository.
2. In Opera One, go to `opera://extensions`.
3. Enable **Developer mode** (top-right toggle).
4. Click **Load unpacked** and select the `OperaOne-BlueHourTheme` folder.
5. Open **Themes** and select **Blue Hour**.
6. Pick your wallpaper, sound pack, and color-set from the theme's options.

## Updating

1. Pull the latest changes (`git pull`) or replace the folder contents with the new release.
2. Go to `opera://extensions` and click **Reload** on the theme's card (or restart Opera).
3. Your selected wallpaper, sounds, and colors carry over, as long as the underlying asset filenames haven't changed.

## Validation

The color system has been checked for structural correctness:

- Dark mode color-set: **exactly 130 entries**
- Light mode color-set: **exactly 130 entries**
- Verified against `mod.vibe.color-sets` — valid JSON, 0 invalid HSL values
- All HSL values fall within `h: 0–360`, `s: 0–100`, `l: 0–100`
- Every wallpaper, preview, sound, icon, and locale path referenced in `manifest.json` exists in the package

## Contributing

Contributions are welcome — bug reports, new wallpapers, additional color-sets, or general fixes.

If you're submitting a PR:

- Keep any new color-set entries within valid HSL ranges (`h: 0–360`, `s: 0–100`, `l: 0–100`).
- Don't rename or move existing assets referenced by `manifest.json` unless you're also updating the manifest.
- Test that the theme still loads via `opera://extensions` before submitting.

## Third-party assets

The browser and keyboard sounds bundled with Blue Hour are sourced from **Mizumi**, an Opera theme created by **Opera Software**. These assets are included here because I liked how they sounded — they are not original work, and no ownership over them is claimed. All credit belongs to Opera Software.
