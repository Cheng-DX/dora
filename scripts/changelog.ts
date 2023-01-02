import { execSync } from 'child_process'
import { readFileSync, writeFileSync } from 'fs'
import { resolve } from 'node:path'

const log = `
94b53e9 (HEAD -> main, origin/main) Merge branch 'main' of https://github.com/Cheng-DX/utils-next
41e40bf Merge branch 'main' of https://github.com/Cheng-DX/utils-next
68dd7f9 Merge branch 'main' of https://github.com/Cheng-DX/utils-next
9256492 release: v0.11.4
22c02db release: v0.11.4
366ee74 docs(shared): add group docs
52ea19c docs(shared): new readme
5c8b054 refector(shared): create sub package \`array\` and \`strings\`
3c282d4 chore: resolve types
fe52d31 docs(shared): patch
27c666c feat(shared): new function \`groupArray\`
7536dbf feat(shared): new type \`ArrayLike\`
a2eda1b action: release action
761e316 (tag: v0.11.3) release: v0.11.3
249c920 (tag: v0.11.2) chore: rename
d889a12 (tag: v0.11.1) release: v0.11.1
da471be fix: wrong license path in readme
c8c600f feat(fs): new function \`typeMD\`
5ae407c feat(fs): new function \`getFile\`
2b48518 feat(fs): new package \`fs\`
6763d80 test: echarts
2c269b3 chore(use-echarts): \`useSimpleChart\`
a5f7b43 refactor(use-echarts): \`useChart\`
29d3ef8 fix(shared): type-safed isFunction in \`MaybeCallable\`
0ae40c0 chore(shared): better type decleration for \`createArray\`
ce25d90 feat(use-echarts): refector createToggleTool
14a0c46 docs: useSelection
8eab990 chore: presets and readme
2a575eb chore: playground
cf19e42 feat(naive-ui): new function \`createPropsPreset\`
a548086 feat(naive-ui): add renderlabel in \`use-selection\`
5b43466 chore: move getFile into \`fs\`
4ddc87a fix: issues in types RefSymbol
ed0ec5d script: improved presets generator, remove presets
2f68815 docs: rename repo name into dora
204d5a0 chore: remove build step in each sub package
b146b7a release: v0.11.0
c378420 docs: update readme and presets
68649d9 docs: match docs
ecfc030 refector: rewrite handle-char by match
add2e56 feat(shared): new function \`getFile\`
5faf181 fix: wrong link
aedf130 chore: clean deps
c55d2e4 chore: remove createHandler into shared
c369524 release: v0.10.2
9272b00 chore: lint
629eee7 feat(composables): new function \`useOptions\`
ccf129f Update test.yml
a419f53 Update and rename node.js.yml to test.yml
38ea566 fix: dismatched lock file
aa18881 feat: back to turbo
f19580d chore: clean unuse config files
f3d7387 feat: new function run-gap
ac36f45 chore: make package resolver reasonable
cf2aca9 remove for test
be0b988 chore: update
294de5c chore: add tests
5cc1e7d chore: typo
04b6144 chore: update
abf8281 chore: rename type \`Match\` as \`Mather\`, add function matchSome
d28559c fix: wrong ts-error
a4f5f2e release: v0.10.1
51c0bd7 chore: play
f5dcd6d feat(shared): new function \`resolveMatch\`
a518fc1 style: lint
c6fdd8c Merge branch 'main' of https://github.com/Cheng-DX/utils-next
ab92fa0 fix(script): should update workspace version concurrently
da6a0a3 Update node.js.yml
01c86ad chore(action): add test action
0510546 test: change test script
521fd98 chore: clean turbo stuff
0c823e4 (tag: v0.10.0) release: v0.10.0
40b534a chore: update presets and readme
90d4b1c test: new composables functions tests
fa12bf7 feat(meybe-ref): add element types
094d7c0 chore: remove dep @vueuse/core
0738890 feat(composables): new function \`useToggle\`
16ee93a feat(composables): new function \`useEventListener\`
5d94e74 feat(composables): new function \`useLocalStorage\`
e5c4bd0 chore: use new version \`MaybeCallable\`
8d44fd7 feat(shared): add args type for \`MaybeCallable\`
0131941 chore(script): add template string in \`getFile\` for better customize
dd61865 fix:  wrong action when the path is a file
b03b725 docs: update readme
b048f3b fix: add \`--access=public\` to avoid errors for new package
26d0499 (tag: v0.9.0) release: v0.9.0
67b2946 chore: add presets
2cf8734 feat(composables): new function \`useMax\`
29850d2 test: test Post components
b9a5e3e chore: add getFIle
84fc7cb feat: PostContainer and PostItem
91f8661 chore: test
ea2762c chore: update pnpm version
739bb5c chore: update version
8344e61 feat(components): new package
0553954 feat: update version scripts
0599f54 Merge branch 'main' of https://github.com/Cheng-DX/utils-next
8d7d0ee feat(shard): create an iterator by \`Array.from\` to avoid boundary check for performance improving
a95d35e feta(shard): create an interator by \`Array.from\` to avoid boundary check for performance improving
ed4a88d chore: ignore defa in addFunctions
59defa7 release: v0.8.0
a3f4de4 feat: make defa be default export
acf0844 release: v0.7.2
e83c6f7 feat: drop package \`use-fetch\`
c0055fe fix: create presets when no file found
2e05225 chore
3e97d91 chore: ignore
b26cc3f feat(\`use-fetch\`): new package
83cc496 test(defa): test
9d22a0a feat(defa): new package
ab3886b chore: use fs/promises
d7ba105 chore: change publish scipt
9e10094 chore: add patch script
3b74d8e release: v0.7.1
9267d4f fix: wrong presets in shared and composables
60ec81f docs: add readme for formatNaming
f672862 docs: fix
adb44e3 fix: add missing formatNaimg
68c9547 fix: add presets readme path, remove [] for no matched apis
71d6f91 fix: wrong [] for no matched apis
5a04079 refector: rename \`subString\` to \`substring\`
d91ca98 feat(shared): new function \`replaceSubString\`
ee0172f docs: default-export-reolver can be used in both auto import plugins
27417a1 (tag: v0.7.0) release: v0.7.0
d3b68f3 chore: test
acd804d chore: script \`addFunctions\`
f3a7560 chore: create function \`getPackages\`
cfd1325 chore: presets
bfc80a2 feat: add script to generate persets
74db64c chore: style
4fcbabf feat(composables): new function \`useFormatNaming\`
8c660fc (tag: v0.6.3) chore: use dashed naming
3525c17 style: use * export instead of named
d893b58 test: transformer test
831ba08 style: disable new line after if condition
12ceb0c fix: use * to match verison
033958c feat(shared): var naming transformer
4636d7f feat(shared): char handlers
855fdf9 fix: use * to match latest package version
9eea017 chore: rename files to dashed named
e34c822 release: v0.6.3
8664952 docs: better lint positon
1dd290d feat(shared): new function \`MaybeArray\`
a21a243 fix: remove wrong unplugin
d3b563d fix(shared): remove unused vue deps
4437047 (tag: v0.6.2) fix: wrong package version in use-echarts
fd52c5a (tag: v0.6.1) release: v0.6.1
3de155e test: useSelection
41f55ea fix: add missed types
80b1a4a chore: add useSelectin
2a506ce fix: exclude playground to ignore auto import apis
b866fd7 feat(naive-ui): useSelection
e8992ab chore: add script
a70d488 chore: switch to turbo
bc18aab (tag: v0.6.0) chore: ignore playground
07774fb fix: wrong package version
5c88466 chore: update deps
4830043 feat: remove maybe-ref stuff in shared package
0cefb19 chore: move use-echarts maybe-ref deps into new package
b040e2a feat(\`maybe-ref\`): new package
8ba26f2 chore(use-echarts): add comments
e2a68d5 chore: update deps
ab316f0 feat: extendable interface test
003d08a chore: add playground
6e39fbc (tag: v0.5.1) release: v0.5.1
43448cf feat(naive-ui): \`createMenu\`
19b7576 chore: update
32fabcd docs: update readme
cc7b824 feat: use echarts
b6c67d2 feat: use echarts
a98e558 (tag: v0.4.0) release: v0.4.0
98b04d3 chore: change dependencies to peer
cd6f9b8 feat(naive-ui): renderIcon
b01bb9d feat: new package \`naive-ui\`
2dfc725 chore: update readme
758333e fix: fixed unexported type by vue
8582b13 release: v0.3.0
b422634 refector: add tests and readme
0b40ee9 chore: update docs
13ab543 feat: createArray
70a776b release: v0.2.2
1513e68 feat: add auto import
3fe036f release: v0.2.1
31a3e86 feat: auto import presets for composables
b2b5f35 feat: v0.2.0
c5f5e40 feat: add composables
c377767 chore: unused
fe72af3 update
a06cf44 update
eba38e8 chore: update
038122c test: add test for default--
7b43ca3 chore: delete github action
92cfd37 chore: readme
fb39924 chore: v0.1.1
174dcd4 (tag: v0.1.1) 0.1.1
6878d5b chore: update scope
9ccfb08 chore: change github name
53a88ff chore: update
6f61e93 chore: update
c84ae03 feat(shared): add \`MaybeCallable\`
7f1d7f9 chore: init
`

const logs = log.split('\n')
  .filter(line => line.includes('v0'))
  .filter(line => ['(tag: v0.6.3)', 'chore: v0.1.1', '9256492'].every(i => !line.includes(i)))
  .map(line => {
    const [hash] = line.split(' ')
    const [version] = line.match(/v\d+\.\d+\.\d+/) || []
    return { hash, version }
  })
  .reverse()

// generate changelog
function generateChangelog() {
  for (let i = 0; i < logs.length - 1; i++) {
    const { hash } = logs[i]
    const next = logs[i + 1]
    execSync(`npx changelogen --to=${hash} --from=${next.hash} --output`)
  }
}
let file = readFileSync(resolve('CHANGELOG.md'), 'utf-8')
function rewriteTitle() {
  for (let i = 0; i < logs.length - 1; i++) {
    const { hash } = logs[i]
    const next = logs[i + 1]
    file = file.replaceAll(`${next.hash}...${hash}`, next.version!)
  }
}
function rewriteLink() {
  // replace hash with link
  for (const matched of file.matchAll(/(\([a-z0-9]{7}\))/g)) {
    const [hash] = matched
    file = file.replace(hash, `[${hash}](https://github.com/Cheng-DX/dora/commit/${hash.slice(1, -1)})`)
  }
}

// generateChangelog()
// rewriteTitle()
// rewriteLink()

writeFileSync(resolve('CHANGELOG.md'), file)
