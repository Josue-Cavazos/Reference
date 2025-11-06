# Hints & Cheat Sheet
## Installing WSL & ohmyzsh
1. In Windows CMD type `wsl --install`
2. Restart your computer
3. Restart CMD and type `wsl` This should launch the linux shell
4. Install ohmyzsh with `sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"`
    
    May need to install zsh:
    ```
    sudo apt update
    sudo apt install zsh
    ```
5. Find .zshrc file and open into vscode to edit your settings
6. Stock .zshrc file (that I use):
    ```
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
    #cd ~/DevProjectseval "$(pyenv init -)"

    ```
    *I encourage you to look at all the themes/settings you can have for ohmyzsh! [Themes](https://github.com/ohmyzsh/ohmyzsh/wiki/themes)*
7. When launching VSCode, click on the bottom left corner where the two brackets are and add the "Remote - WSL" extension

## Basic Dev Tools
1. Git

    Ubuntu/WSL:
    ```
    sudo apt update
    sudo apt install git
    git config --global user.name GITHUB USERNAME
    git config --global user.email BURNS EMAIL
    ```
    macOS:
    ```
    brew install git
    ```
    *May have to install brew first*

2. Python (latest 3.x)
    
    Ubuntu/WSL:
    ```
    sudo apt update
    sudo apt install python3 python3-pip
    apt install python3-venv
    ```
    macOS:
    ```
    brew install python
    ```

3. Node.js & npm
    Ubuntu/WSL:
    ```
    sudo apt update
    sudo apt install nodejs npm
    ```
    macOS:
    ```
    brew install node
    ```

4. Build Essentials

    Ubuntu/WSL:
    ```
    sudo apt update
    sudo apt install build-essential
    ```
    macOS:
    ```
    xcode-select --install
    ```

5. Homebrew (macOS only)

    macOS:
    ```
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    ```
    
## SSH Key Gen
1. Go to home directory `cd ~` and generate a new SSH key `ssh-keygen -t ed25519 -C "your-email@example.com"`

    Recommended to have no password (Otherwise will have to type in password every time you push to GitHub). Also use default file
2. Find and copy your printed public SSH Key
    ```
    cd .ssh
    cat id_ed25519.pub
    ```
3. Go to your GitHub account, and click on your profile and go to settings
4. Find "SSH and GPG Keys" and click "New SSH Key." Give it a name like "Work Laptop"
5. Paste in your key and click "Add SSH Key"
6. After adding, find the dropdown to the right - "Configure SSO" and click Authorize for "burnsmcd"

## Nice to Have


## Learning
[Terminus for Bash](https://web.mit.edu/mprat/Public/web/Terminus/Web/main.html)

[Learn Git Branching for GitHub CLI](https://learngitbranching.js.org/)


bitwarden

vscode sql db