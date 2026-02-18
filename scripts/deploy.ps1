param(
  [switch]$Local
)

$ErrorActionPreference = 'Stop'
$PSNativeCommandUseErrorActionPreference = $true

if ($Local) {
  pnpm run fetch
  pnpm run format

  miho bump -k
  git add -A
  git commit -m 'chore: deploy'
  git push
}
else {
  pnpm install
  pnpm run build

  New-Item './dist/CNAME' -Force -ItemType 'file' -Value 'tb.dev.br'
  New-Item './dist/.nojekyll' -Force -ItemType 'file'
}
