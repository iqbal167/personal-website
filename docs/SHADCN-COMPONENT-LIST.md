# shadcn/ui Component Reference

Daftar lengkap semua komponen shadcn/ui yang tersedia dengan deskripsi dan use case.

## 📋 Complete Component List

### Form & Input Components

| Component     | Command                  | Description           | Use Case                  |
| ------------- | ------------------------ | --------------------- | ------------------------- |
| `input`       | `shadcn:add input`       | Text input field      | Form inputs, search boxes |
| `textarea`    | `shadcn:add textarea`    | Multi-line text input | Comments, descriptions    |
| `label`       | `shadcn:add label`       | Form labels           | Accessibility labels      |
| `button`      | `shadcn:add button`      | Interactive buttons   | Actions, submissions      |
| `checkbox`    | `shadcn:add checkbox`    | Checkbox input        | Multiple selections       |
| `radio-group` | `shadcn:add radio-group` | Radio button group    | Single selection          |
| `switch`      | `shadcn:add switch`      | Toggle switch         | Settings, preferences     |
| `select`      | `shadcn:add select`      | Dropdown selection    | Option selection          |
| `form`        | `shadcn:add form`        | Form wrapper          | Form validation           |

### Layout & Structure

| Component     | Command                  | Description          | Use Case               |
| ------------- | ------------------------ | -------------------- | ---------------------- |
| `card`        | `shadcn:add card`        | Content container    | Content grouping       |
| `separator`   | `shadcn:add separator`   | Visual divider       | Section separation     |
| `tabs`        | `shadcn:add tabs`        | Tab navigation       | Content organization   |
| `accordion`   | `shadcn:add accordion`   | Collapsible sections | FAQ, content hiding    |
| `collapsible` | `shadcn:add collapsible` | Expandable content   | Show/hide content      |
| `sheet`       | `shadcn:add sheet`       | Slide-out panel      | Side navigation, forms |
| `scroll-area` | `shadcn:add scroll-area` | Custom scrollbar     | Scrollable content     |

### Navigation

| Component         | Command                      | Description           | Use Case          |
| ----------------- | ---------------------------- | --------------------- | ----------------- |
| `navigation-menu` | `shadcn:add navigation-menu` | Navigation menu       | Site navigation   |
| `menubar`         | `shadcn:add menubar`         | Menu bar              | Application menus |
| `dropdown-menu`   | `shadcn:add dropdown-menu`   | Dropdown menu         | Context menus     |
| `breadcrumb`      | `shadcn:add breadcrumb`      | Breadcrumb navigation | Page hierarchy    |
| `pagination`      | `shadcn:add pagination`      | Page navigation       | Data pagination   |

### Feedback & Notifications

| Component      | Command                   | Description                      | Use Case                |
| -------------- | ------------------------- | -------------------------------- | ----------------------- |
| `alert`        | `shadcn:add alert`        | Alert messages                   | Notifications, warnings |
| `toast`        | `shadcn:add toast`        | Toast notifications (deprecated) | Temporary messages      |
| `sonner`       | `shadcn:add sonner`       | Modern toast                     | Temporary notifications |
| `dialog`       | `shadcn:add dialog`       | Modal dialogs                    | Confirmations, forms    |
| `alert-dialog` | `shadcn:add alert-dialog` | Alert dialogs                    | Confirmations           |
| `badge`        | `shadcn:add badge`        | Status badges                    | Labels, status          |
| `progress`     | `shadcn:add progress`     | Progress bar                     | Loading states          |

### Data Display

| Component    | Command                 | Description      | Use Case             |
| ------------ | ----------------------- | ---------------- | -------------------- |
| `table`      | `shadcn:add table`      | Data table       | Tabular data         |
| `data-table` | `shadcn:add data-table` | Advanced table   | Complex data display |
| `avatar`     | `shadcn:add avatar`     | User avatar      | Profile pictures     |
| `skeleton`   | `shadcn:add skeleton`   | Loading skeleton | Loading states       |

### Interactive Elements

| Component      | Command                   | Description      | Use Case           |
| -------------- | ------------------------- | ---------------- | ------------------ |
| `popover`      | `shadcn:add popover`      | Floating content | Additional info    |
| `tooltip`      | `shadcn:add tooltip`      | Hover tooltip    | Help text          |
| `hover-card`   | `shadcn:add hover-card`   | Hover card       | Rich hover content |
| `context-menu` | `shadcn:add context-menu` | Right-click menu | Context actions    |
| `command`      | `shadcn:add command`      | Command palette  | Quick actions      |

### Date & Time

| Component     | Command                  | Description     | Use Case       |
| ------------- | ------------------------ | --------------- | -------------- |
| `calendar`    | `shadcn:add calendar`    | Calendar widget | Date selection |
| `date-picker` | `shadcn:add date-picker` | Date picker     | Date input     |

### Advanced Components

| Component      | Command                   | Description            | Use Case         |
| -------------- | ------------------------- | ---------------------- | ---------------- |
| `slider`       | `shadcn:add slider`       | Range slider           | Value selection  |
| `toggle`       | `shadcn:add toggle`       | Toggle button          | Binary states    |
| `toggle-group` | `shadcn:add toggle-group` | Toggle group           | Multiple toggles |
| `aspect-ratio` | `shadcn:add aspect-ratio` | Aspect ratio container | Media containers |
| `resizable`    | `shadcn:add resizable`    | Resizable panels       | Layout panels    |

## 🎯 Quick Install Commands

### Essential Set (Most Used)

```bash
npm run shadcn:add button card input label badge alert dialog tabs
```

### Form Complete Set

```bash
npm run shadcn:add input textarea label button checkbox radio-group switch select form
```

### Layout Complete Set

```bash
npm run shadcn:add card separator tabs accordion sheet scroll-area
```

### Navigation Complete Set

```bash
npm run shadcn:add navigation-menu menubar dropdown-menu breadcrumb pagination
```

## 📊 Component Usage Statistics

### Most Popular (Install First)

1. `button` - Used in almost every interface
2. `card` - Essential for content organization
3. `input` - Required for forms
4. `label` - Accessibility requirement
5. `badge` - Status and categorization

### Commonly Used Together

- `input` + `label` + `button` (Forms)
- `card` + `badge` + `separator` (Content display)
- `dialog` + `button` + `form` (Modal forms)
- `tabs` + `card` + `badge` (Tabbed content)

### Advanced Use Cases

- `data-table` + `pagination` + `command` (Data management)
- `calendar` + `date-picker` + `popover` (Date selection)
- `navigation-menu` + `dropdown-menu` + `sheet` (Navigation)

## 🔍 Search & Filter

### By Category

```bash
# Form components
npm run shadcn:forms

# Layout components
npm run shadcn:layout

# Navigation components
npm run shadcn:navigation
```

### By Use Case

```bash
# Building a dashboard
npm run shadcn:add card badge alert table pagination

# Building a form
npm run shadcn:add input textarea label button checkbox select

# Building navigation
npm run shadcn:add navigation-menu dropdown-menu breadcrumb
```

## 💡 Pro Tips

1. **Start with basics**: Install `button`, `card`, `input`, `label` first
2. **Install by feature**: Add components as you build specific features
3. **Check dependencies**: Some components depend on others (e.g., form needs input)
4. **Use component sets**: Use predefined sets for faster setup
5. **Customize after install**: All components can be modified after installation
