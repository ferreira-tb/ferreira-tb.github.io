$ErrorActionPreference = 'Stop'
$PSNativeCommandUseErrorActionPreference = $true

$Fields = @(
  'name',
  'description',
  'url',
  'languages',
  'primaryLanguage',
  'updatedAt',
  'stargazerCount'
)

function Get-Repository {
  param(
    [string]$Name,
    [string[]]$ExtraLanguages = @()
  )

  return Invoke-Expression "gh repo view $Name --json $($Fields -join ',')" | 
    ConvertFrom-Json | 
    Add-Member -MemberType NoteProperty -Name 'extraLanguages' -Value $ExtraLanguages -PassThru
}

$Names = @(
  'ferreira-tb/nil',
  'ferreira-tb/tauri-store',
  'ferreira-tb/tauri-plugin-prevent-default'
)

$Repositories = $Names |
  ForEach-Object { Get-Repository -Name $_ } |
  Sort-Object -Property { $_.stargazerCount } -Descending | 
  ConvertTo-Json -Compress -Depth 4

New-Item './public/data/repos.json' -Force -ItemType 'file' -Value $Repositories
