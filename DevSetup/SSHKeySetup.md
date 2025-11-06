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
