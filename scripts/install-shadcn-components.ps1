# shadcn/ui Component Installation Script for Windows PowerShell
# Usage: .\scripts\install-shadcn-components.ps1 [component-set]

param(
    [string]$ComponentSet = "help"
)

Write-Host "🎨 shadcn/ui Component Installer" -ForegroundColor Cyan
Write-Host "=================================" -ForegroundColor Cyan

# Function to install components
function Install-Components {
    param([string]$Components)
    Write-Host "Installing components: $Components" -ForegroundColor Blue
    npx shadcn@latest add $Components.Split(' ') --yes
}

# Function to show available component sets
function Show-Help {
    Write-Host "Available component sets:" -ForegroundColor Yellow
    Write-Host "  basic     - Essential components (button, card, input, label)" -ForegroundColor White
    Write-Host "  forms     - Form components (input, label, textarea, select, checkbox)" -ForegroundColor White
    Write-Host "  layout    - Layout components (card, separator, tabs, sheet)" -ForegroundColor White
    Write-Host "  feedback  - Feedback components (alert, toast, dialog, badge)" -ForegroundColor White
    Write-Host "  data      - Data components (table, pagination, command)" -ForegroundColor White
    Write-Host "  navigation- Navigation components (menubar, breadcrumb, navigation-menu)" -ForegroundColor White
    Write-Host "  advanced  - Advanced components (calendar, date-picker, chart)" -ForegroundColor White
    Write-Host "  all       - Install all essential components" -ForegroundColor White
    Write-Host ""
    Write-Host "Usage examples:" -ForegroundColor Yellow
    Write-Host "  .\scripts\install-shadcn-components.ps1 basic" -ForegroundColor White
    Write-Host "  .\scripts\install-shadcn-components.ps1 forms" -ForegroundColor White
    Write-Host "  .\scripts\install-shadcn-components.ps1 all" -ForegroundColor White
}

# Check if shadcn is configured
if (-not (Test-Path "components.json")) {
    Write-Host "❌ components.json not found. Please run 'npx shadcn@latest init' first." -ForegroundColor Red
    exit 1
}

# Parse arguments
switch ($ComponentSet.ToLower()) {
    "basic" {
        Write-Host "📦 Installing basic components..." -ForegroundColor Green
        Install-Components "button card input label badge"
    }
    "forms" {
        Write-Host "📝 Installing form components..." -ForegroundColor Green
        Install-Components "input label textarea select checkbox radio-group switch form"
    }
    "layout" {
        Write-Host "🏗️ Installing layout components..." -ForegroundColor Green
        Install-Components "card separator tabs sheet accordion collapsible"
    }
    "feedback" {
        Write-Host "💬 Installing feedback components..." -ForegroundColor Green
        Install-Components "alert dialog toast sonner badge progress"
    }
    "data" {
        Write-Host "📊 Installing data components..." -ForegroundColor Green
        Install-Components "table pagination command data-table"
    }
    "navigation" {
        Write-Host "🧭 Installing navigation components..." -ForegroundColor Green
        Install-Components "menubar breadcrumb navigation-menu dropdown-menu"
    }
    "advanced" {
        Write-Host "🚀 Installing advanced components..." -ForegroundColor Green
        Install-Components "calendar date-picker popover tooltip hover-card"
    }
    "all" {
        Write-Host "🎯 Installing all essential components..." -ForegroundColor Green
        Install-Components "button card input label badge separator tabs alert dialog sonner form select checkbox textarea switch"
    }
    default {
        Show-Help
        exit 0
    }
}

Write-Host "✅ Components installed successfully!" -ForegroundColor Green
Write-Host "💡 Tip: Check the examples folder for usage examples." -ForegroundColor Blue
