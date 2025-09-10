#!/bin/bash

# shadcn/ui Component Installation Script
# Usage: ./scripts/install-shadcn-components.sh [component-set]

set -e

echo "🎨 shadcn/ui Component Installer"
echo "================================="

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to install components
install_components() {
    local components="$1"
    echo -e "${BLUE}Installing components: ${components}${NC}"
    npx shadcn@latest add ${components} --yes
}

# Function to show available component sets
show_help() {
    echo -e "${YELLOW}Available component sets:${NC}"
    echo "  basic     - Essential components (button, card, input, label)"
    echo "  forms     - Form components (input, label, textarea, select, checkbox)"
    echo "  layout    - Layout components (card, separator, tabs, sheet)"
    echo "  feedback  - Feedback components (alert, toast, dialog, badge)"
    echo "  data      - Data components (table, pagination, command)"
    echo "  navigation- Navigation components (menubar, breadcrumb, navigation-menu)"
    echo "  advanced  - Advanced components (calendar, date-picker, chart)"
    echo "  all       - Install all essential components"
    echo ""
    echo "Usage examples:"
    echo "  ./scripts/install-shadcn-components.sh basic"
    echo "  ./scripts/install-shadcn-components.sh forms"
    echo "  ./scripts/install-shadcn-components.sh all"
    echo ""
    echo "Or install specific components:"
    echo "  ./scripts/install-shadcn-components.sh button card input"
}

# Check if shadcn is configured
if [ ! -f "components.json" ]; then
    echo -e "${RED}❌ components.json not found. Please run 'npx shadcn@latest init' first.${NC}"
    exit 1
fi

# Parse arguments
case "${1:-help}" in
    "basic")
        echo -e "${GREEN}📦 Installing basic components...${NC}"
        install_components "button card input label badge"
        ;;
    "forms")
        echo -e "${GREEN}📝 Installing form components...${NC}"
        install_components "input label textarea select checkbox radio-group switch form"
        ;;
    "layout")
        echo -e "${GREEN}🏗️ Installing layout components...${NC}"
        install_components "card separator tabs sheet accordion collapsible"
        ;;
    "feedback")
        echo -e "${GREEN}💬 Installing feedback components...${NC}"
        install_components "alert dialog toast sonner badge progress"
        ;;
    "data")
        echo -e "${GREEN}📊 Installing data components...${NC}"
        install_components "table pagination command data-table"
        ;;
    "navigation")
        echo -e "${GREEN}🧭 Installing navigation components...${NC}"
        install_components "menubar breadcrumb navigation-menu dropdown-menu"
        ;;
    "advanced")
        echo -e "${GREEN}🚀 Installing advanced components...${NC}"
        install_components "calendar date-picker popover tooltip hover-card"
        ;;
    "all")
        echo -e "${GREEN}🎯 Installing all essential components...${NC}"
        install_components "button card input label badge separator tabs alert dialog sonner form select checkbox textarea switch"
        ;;
    "help"|"-h"|"--help")
        show_help
        exit 0
        ;;
    *)
        if [ $# -eq 0 ]; then
            show_help
            exit 0
        else
            # Install specific components passed as arguments
            echo -e "${GREEN}🔧 Installing specific components...${NC}"
            install_components "$*"
        fi
        ;;
esac

echo -e "${GREEN}✅ Components installed successfully!${NC}"
echo -e "${BLUE}💡 Tip: Check the examples folder for usage examples.${NC}"
