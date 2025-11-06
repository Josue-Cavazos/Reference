# Developer Environment Setup Guide

## Installing WSL & Oh My Zsh (Windows)
1. In Windows CMD type:
   ```cmd
   wsl --install
   ```
2. Restart your computer
3. Restart CMD and type `wsl` - This should launch the Linux shell
4. Install Oh My Zsh:
   ```bash
   sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
   ```
    
   May need to install zsh first:
   ```bash
   sudo apt update
   sudo apt install zsh
   ```
5. Find `.zshrc` file and open it in VS Code to edit your settings
6. Sample `.zshrc` configuration (recommended):
   ```bash
   # Basic .zshrc for a clean prompt
   export ZSH_THEME="robbyrussell"
   export PATH=$HOME/bin:/usr/local/bin:$PATH
   plugins=(git python virtualenvwrapper)
   
   # Enable command auto-correction
   setopt correct
   
   # History
   HISTSIZE=1000
   SAVEHIST=1000
   HISTFILE=~/.zsh_history
   
   # Git branch support
   autoload -Uz vcs_info
   precmd() { vcs_info }
   zstyle ':vcs_info:git:*' formats '🚀 %b'
   setopt prompt_subst
   git_prompt_info() { echo "%F{white}${vcs_info_msg_0_}%f" }
   
   # Prompt with Git info
   PROMPT='%F{blue}%1~%f $(git_prompt_info) ➜  '
   
   # Aliases
   alias ll='ls -lah'
   alias gs='git status'
   alias ga='git add .'
   alias gp='git push'
   alias gc='git commit -m'
   
   # Enable completion (if available)
   autoload -Uz compinit && compinit
   
   # Always start in your project folder
   #cd ~/DevProjects
   #eval "$(pyenv init -)"
   ```
   
   💡 **Tip**: Explore more themes and settings at [Oh My Zsh Themes](https://github.com/ohmyzsh/ohmyzsh/wiki/themes)
7. When launching VS Code, click on the bottom left corner (remote connection icon) and install the "Remote - WSL" extension

## Essential Development Tools

### 1. Git
**Ubuntu/WSL:**
```bash
sudo apt update
sudo apt install git
git config --global user.name "YOUR_GITHUB_USERNAME"
git config --global user.email "YOUR_EMAIL@example.com"
```

**macOS:**
```bash
brew install git
git config --global user.name "YOUR_GITHUB_USERNAME"
git config --global user.email "YOUR_EMAIL@example.com"
```
*Note: You may need to install Homebrew first (see section 5)*

### 2. Python (Latest 3.x)
**Ubuntu/WSL:**
```bash
sudo apt update
sudo apt install python3 python3-pip python3-venv
```

**macOS:**
```bash
brew install python
```

### 3. Node.js & npm
**Ubuntu/WSL:**
```bash
sudo apt update
sudo apt install nodejs npm
```

**macOS:**
```bash
brew install node
```

### 4. Build Essentials
**Ubuntu/WSL:**
```bash
sudo apt update
sudo apt install build-essential
```

**macOS:**
```bash
xcode-select --install
```

### 5. Homebrew (macOS only)
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```
## SSH Key Setup
1. Navigate to home directory and generate a new SSH key:
   ```bash
   cd ~
   ssh-keygen -t ed25519 -C "your-email@example.com"
   ```
   
   **Recommendation**: Use no password for convenience (otherwise you'll need to enter it every time you push to GitHub). Accept the default file location.

2. Find and copy your public SSH key:
   ```bash
   cd ~/.ssh
   cat id_ed25519.pub
   ```

3. Add to GitHub:
   - Go to your GitHub account → Profile → Settings
   - Navigate to "SSH and GPG Keys"
   - Click "New SSH Key"
   - Give it a descriptive name (e.g., "Work Laptop")
   - Paste your key and click "Add SSH Key"

4. **For organization access**: After adding the key, find the dropdown to the right → "Configure SSO" → click "Authorize" for your organization

## Recommended Tools & Extensions

### VS Code Extensions
- **MSSQL**: Essential for database work
- **Remote - WSL**: For Windows users
- **GitLens**: Enhanced Git capabilities
- **Prettier**: Code formatting
- **ESLint**: JavaScript/TypeScript linting

### Security & Password Management
Get a [BitWarden](https://bitwarden.com/) account (personal with work email). This will be used to share encrypted credentials for:
- SQL databases
- Azure connection strings
- Other shared development resources

## Learning Resources
- **Bash/Terminal**: [Terminus Game](https://web.mit.edu/mprat/Public/web/Terminus/Web/main.html)
- **Git Workflows**: [Learn Git Branching](https://learngitbranching.js.org/)
- **VS Code**: Built-in tutorial and documentation