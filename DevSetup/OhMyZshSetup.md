# Oh My Zsh Setup

## Overview
Oh My Zsh is a framework for managing your Zsh configuration. It provides themes, plugins, and helpful features to enhance your terminal experience.

## Prerequisites
- Zsh shell installed (available on most Linux distributions and macOS)
- Terminal access (WSL, macOS Terminal, or Linux terminal)

## Installation

### 1. Install Zsh (if not already installed)
**Ubuntu/WSL:**
```bash
sudo apt update
sudo apt install zsh -y
```

**macOS:**
Zsh comes pre-installed on macOS Catalina and later. For older versions:
```bash
brew install zsh
```

### 2. Install Oh My Zsh
```bash
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

### 3. Set Zsh as Default Shell (if prompted)
```bash
chsh -s $(which zsh)
```

## Configuration

### Sample .zshrc Configuration
Replace or update your `~/.zshrc` file with this configuration:

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
alias gch='git checkout'
alias gfp='git fetch origin && git pull && git fetch -p'
alias nrd='npm run dev'
alias nrb='npm run build'
alias nrs='npm run start'
alias nrl='npm run lint' 
alias nrlf='npm run lint:fix'
alias nrf='npm run format:check'
alias nrff='npm run format'
alias zshrc='source ~/.zshrc'
alias mkvenv='python3 -m venv .venv'
alias venv='source .venv/bin/activate'
alias pm='python main.py'
alias rch='ruff check .'

function md() {
  pandoc $1 > /tmp/$1.html
  xdg-open /tmp/$1.html
}
 
# Enable completion (if available)
autoload -Uz compinit && compinit
 
# Always start in your project folder
#cd ~/DevProjectseval "$(pyenv init -)"
```

### Editing Your Configuration
To edit your Zsh configuration:
```bash
code ~/.zshrc    # If VS Code is available
# or
nano ~/.zshrc    # Using nano editor
```

After making changes, reload the configuration:
```bash
source ~/.zshrc
```

## Customization

### Popular Themes
- `robbyrussell` (default, clean)
- `agnoster` (powerline-style)
- `powerlevel10k` (highly customizable)

### Useful Plugins
Add these to your `plugins=()` line:
- `git` - Git aliases and status info
- `python` - Python-specific shortcuts
- `virtualenvwrapper` - Python virtual environment management
- `zsh-autosuggestions` - Command suggestions
- `zsh-syntax-highlighting` - Syntax highlighting

### Theme Gallery
Explore more themes: [Oh My Zsh Themes](https://github.com/ohmyzsh/ohmyzsh/wiki/themes)

## Troubleshooting

### Common Issues
- **Slow startup**: Too many plugins can slow down shell startup
- **Theme not displaying correctly**: Some themes require specific fonts
- **Plugins not working**: Ensure plugin names are spelled correctly in `.zshrc`

### Reset to Default
If something breaks, you can restore the default configuration:
```bash
cp ~/.oh-my-zsh/templates/zshrc.zsh-template ~/.zshrc
```

## Next Steps
After setting up Oh My Zsh:
- [Install development tools](./DevToolsInstallation.md)
- [Configure VS Code](./VSCodeSetup.md)
- [Set up SSH keys](./SSHKeySetup.md)