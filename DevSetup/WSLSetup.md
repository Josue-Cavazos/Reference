# Windows Subsystem for Linux (WSL) Setup

## Overview
WSL allows you to run a Linux environment directly on Windows, providing access to Linux tools and utilities without needing a virtual machine.

## Installation Steps

### 1. Install WSL
Open Windows Command Prompt (CMD) as Administrator and run:
```cmd
wsl --install
```

### 2. Restart Your Computer
After installation completes, restart your computer to finish the setup.

### 3. Initial Setup
1. After restart, open Command Prompt and type:
   ```cmd
   wsl
   ```
   This should launch your Linux shell for the first time.
   
   If applicable, you may need to install a distribution
   ```cmd
   wsl.exe --install Ubuntu
   ```

2. You'll be prompted to create a username and password for your Linux environment.

### 4. Update Your Linux Distribution
Once in the Linux shell, update your system:
```bash
sudo apt update && sudo apt upgrade -y
```

### 5. Install Essential Packages
```bash
sudo apt install curl wget git -y
```

## VS Code Integration

### Install Remote - WSL Extension
1. Open VS Code
2. Click the remote connection icon (><) in the bottom left corner
3. Install the "Remote - WSL" extension
4. You can now open VS Code from WSL with: `code .`

## Troubleshooting

### Common Issues
- **WSL not starting**: Try `wsl --shutdown` then `wsl` again
- **Network issues**: Check Windows Defender firewall settings
- **Permission errors**: Ensure you're running CMD as Administrator during installation

### Useful WSL Commands
```cmd
wsl --list --verbose          # List installed distributions
wsl --shutdown               # Shutdown all WSL instances
wsl --set-default Ubuntu     # Set default distribution
```

## Next Steps
After WSL is set up, consider:
- [Setting up Oh My Zsh](./OhMyZshSetup.md) for an enhanced terminal experience
- [Installing development tools](./DevToolsInstallation.md)
- [Configuring SSH keys](./SSHKeySetup.md)