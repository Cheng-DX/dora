
## v0.11.4


### 🚀 Enhancements

  - **shared:** New type `ArrayLike` (7536dbf)
  - **shared:** New function `groupArray` (27c666c)

### 📖 Documentation

  - **shared:** Patch (fe52d31)
  - **shared:** New readme (52ea19c)
  - **shared:** Add group docs (366ee74)

### 🏡 Chore

  - Resolve types (3c282d4)



## v0.11.3

## v0.11.2


### 🏡 Chore

  - Rename (249c920)



## v0.11.1


### 🚀 Enhancements

  - **naive-ui:** Add renderlabel in `use-selection` (a548086)
  - **naive-ui:** New function `createPropsPreset` (cf19e42)
  - **use-echarts:** Refector createToggleTool (ce25d90)
  - **fs:** New package `fs` (2b48518)
  - **fs:** New function `getFile` (5ae407c)
  - **fs:** New function `typeMD` (c8c600f)

### 🩹 Fixes

  - Issues in types RefSymbol (4ddc87a)
  - **shared:** Type-safed isFunction in `MaybeCallable` (29d3ef8)
  - Wrong license path in readme (da471be)

### 💅 Refactors

  - **use-echarts:** `useChart` (a5f7b43)

### 📖 Documentation

  - Rename repo name into dora (2f68815)
  - UseSelection (14a0c46)

### 🏡 Chore

  - Remove build step in each sub package (204d5a0)
  - Move getFile into `fs` (5b43466)
  - Playground (2a575eb)
  - Presets and readme (8eab990)
  - **shared:** Better type decleration for `createArray` (0ae40c0)
  - **use-echarts:** `useSimpleChart` (2c269b3)

### ✅ Tests

  - Echarts (6763d80)



## v0.11.0


### 🚀 Enhancements

  - **shared:** New function `getFile` (add2e56)

### 🩹 Fixes

  - Wrong link (5faf181)

### 📖 Documentation

  - Match docs (68649d9)
  - Update readme and presets (c378420)

### 🏡 Chore

  - Remove createHandler into shared (c55d2e4)
  - Clean deps (aedf130)



## v0.10.2


### 🚀 Enhancements

  - New function run-gap (f3d7387)
  - Back to turbo (aa18881)
  - **composables:** New function `useOptions` (629eee7)

### 🩹 Fixes

  - Wrong ts-error (d28559c)
  - Dismatched lock file (38ea566)

### 🏡 Chore

  - Rename type `Match` as `Mather`, add function matchSome (abf8281)
  - Update (04b6144)
  - Typo (5cc1e7d)
  - Add tests (294de5c)
  - Update (be0b988)
  - Make package resolver reasonable (ac36f45)
  - Clean unuse config files (f19580d)
  - Lint (9272b00)



## v0.10.1


### 🚀 Enhancements

  - **shared:** New function `resolveMatch` (f5dcd6d)

### 🩹 Fixes

  - **script:** Should update workspace version concurrently (ab92fa0)

### 🏡 Chore

  - Clean turbo stuff (521fd98)
  - **action:** Add test action (01c86ad)
  - Play (51c0bd7)

### ✅ Tests

  - Change test script (0510546)

### 🎨 Styles

  - Lint (a518fc1)



## v0.10.0


### 🚀 Enhancements

  - **shared:** Add args type for `MaybeCallable` (8d44fd7)
  - **composables:** New function `useLocalStorage` (5d94e74)
  - **composables:** New function `useEventListener` (16ee93a)
  - **composables:** New function `useToggle` (0738890)
  - **meybe-ref:** Add element types (fa12bf7)

### 🩹 Fixes

  - Add `--access=public` to avoid errors for new package (b048f3b)
  - Wrong action when the path is a file (dd61865)

### 📖 Documentation

  - Update readme (b03b725)

### 🏡 Chore

  - **script:** Add template string in `getFile` for better customize (0131941)
  - Use new version `MaybeCallable` (e5c4bd0)
  - Remove dep @vueuse/core (094d7c0)
  - Update presets and readme (40b534a)

### ✅ Tests

  - New composables functions tests (90d4b1c)



## v0.9.0


### 🚀 Enhancements

  - **shard:** Create an iterator by `Array.from` to avoid boundary check for performance improving (8d7d0ee)
  - Update version scripts (0553954)
  - **components:** New package (8344e61)
  - PostContainer and PostItem (84fc7cb)
  - **composables:** New function `useMax` (2cf8734)

### 🏡 Chore

  - Ignore defa in addFunctions (ed4a88d)
  - Update version (739bb5c)
  - Update pnpm version (ea2762c)
  - Test (91f8661)
  - Add getFIle (b9a5e3e)
  - Add presets (67b2946)

### ✅ Tests

  - Test Post components (29850d2)



## v0.8.0


### 🚀 Enhancements

  - Make defa be default export (a3f4de4)



## v0.7.2


### 🚀 Enhancements

  - **defa:** New package (9d22a0a)
  - **`use-fetch`:** New package (b26cc3f)
  - Drop package `use-fetch` (e83c6f7)

### 🩹 Fixes

  - Create presets when no file found (c0055fe)

### 🏡 Chore

  - Add patch script (9e10094)
  - Change publish scipt (d7ba105)
  - Use fs/promises (ab3886b)
  - Ignore (3e97d91)

### ✅ Tests

  - **defa:** Test (83cc496)



## v0.7.1


### 🚀 Enhancements

  - **shared:** New function `replaceSubString` (d91ca98)

### 🩹 Fixes

  - Wrong [] for no matched apis (71d6f91)
  - Add presets readme path, remove [] for no matched apis (68c9547)
  - Add missing formatNaimg (adb44e3)
  - Wrong presets in shared and composables (9267d4f)

### 📖 Documentation

  - Default-export-reolver can be used in both auto import plugins (ee0172f)
  - Fix (f672862)
  - Add readme for formatNaming (60ec81f)



## v0.7.0


### 🚀 Enhancements

  - **shared:** Char handlers (4636d7f)
  - **shared:** Var naming transformer (033958c)
  - **composables:** New function `useFormatNaming` (4fcbabf)
  - Add script to generate persets (bfc80a2)

### 🩹 Fixes

  - Use * to match latest package version (855fdf9)
  - Use * to match verison (12ceb0c)

### 🏡 Chore

  - Rename files to dashed named (9eea017)
  - Use dashed naming (8c660fc)
  - Style (74db64c)
  - Presets (cfd1325)
  - Create function `getPackages` (f3a7560)
  - Script `addFunctions` (acd804d)
  - Test (d3b68f3)

### ✅ Tests

  - Transformer test (d893b58)

### 🎨 Styles

  - Disable new line after if condition (831ba08)
  - Use * export instead of named (3525c17)



## v0.6.3


### 🚀 Enhancements

  - **shared:** New function `MaybeArray` (1dd290d)

### 🩹 Fixes

  - **shared:** Remove unused vue deps (d3b563d)
  - Remove wrong unplugin (a21a243)

### 📖 Documentation

  - Better lint positon (8664952)



## v0.6.2


### 🩹 Fixes

  - Wrong package version in use-echarts (4437047)



## v0.6.1


### 🚀 Enhancements

  - **naive-ui:** UseSelection (b866fd7)

### 🩹 Fixes

  - Exclude playground to ignore auto import apis (2a506ce)
  - Add missed types (41f55ea)

### 🏡 Chore

  - Switch to turbo (a70d488)
  - Add script (e8992ab)
  - Add useSelectin (80b1a4a)

### ✅ Tests

  - UseSelection (3de155e)



## v0.6.0


### 🚀 Enhancements

  - Extendable interface test (ab316f0)
  - **`maybe-ref`:** New package (b040e2a)
  - Remove maybe-ref stuff in shared package (4830043)

### 🩹 Fixes

  - Wrong package version (07774fb)

### 🏡 Chore

  - Add playground (003d08a)
  - Update deps (e2a68d5)
  - **use-echarts:** Add comments (8ba26f2)
  - Move use-echarts maybe-ref deps into new package (0cefb19)
  - Update deps (5c88466)
  - Ignore playground (bc18aab)



## v0.5.1


### 🚀 Enhancements

  - Use echarts (b6c67d2)
  - Use echarts (cc7b824)
  - **naive-ui:** `createMenu` (43448cf)

### 📖 Documentation

  - Update readme (32fabcd)

### 🏡 Chore

  - Update (19b7576)



## v0.4.0


### 🚀 Enhancements

  - New package `naive-ui` (b01bb9d)
  - **naive-ui:** RenderIcon (cd6f9b8)

### 🩹 Fixes

  - Fixed unexported type by vue (758333e)

### 🏡 Chore

  - Update readme (2dfc725)
  - Change dependencies to peer (98b04d3)



## v0.3.0


### 🚀 Enhancements

  - CreateArray (13ab543)

### 🏡 Chore

  - Update docs (0b40ee9)



## v0.2.2


### 🚀 Enhancements

  - Add auto import (1513e68)



## v0.2.1


### 🚀 Enhancements

  - Auto import presets for composables (31a3e86)



## v0.2.0


### 🚀 Enhancements

  - Add composables (c5f5e40)
  - V0.2.0 (b2b5f35)

### 🏡 Chore

  - V0.1.1 (fb39924)
  - Readme (92cfd37)
  - Delete github action (7b43ca3)
  - Update (eba38e8)
  - Unused (c377767)

### ✅ Tests

  - Add test for default-- (038122c)



