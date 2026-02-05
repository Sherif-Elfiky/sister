# sister

Scrapes TikTok follower/like counts and emails the summary via Gmail.

## Setup

1. Clone and install:

   ```bash
   npm install
   ```

2. Copy env template and add your values:

   ```bash
   cp .env.example .env
   ```

   Edit `.env` with your Gmail address and a [Gmail App Password](https://support.google.com/accounts/answer/185833).

3. Run:

   ```bash
   npm start
   ```

## Requirements

- Node.js (project uses ESM and current TS)
- Gmail account with App Password
