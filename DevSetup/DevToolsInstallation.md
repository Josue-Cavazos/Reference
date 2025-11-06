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