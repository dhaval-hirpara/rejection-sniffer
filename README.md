# Rejection Sniffer

A Google Apps Script to automatically filter job rejection emails in Gmail.

## Overview

Rejection Sniffer is a simple tool designed to help you keep your inbox organized by automatically filtering job rejection emails. With just a few steps, you can have this script running and decluttering your inbox.

## Setup Instructions

1. **Access Google Apps Script**  
   - Open [Google Apps Script](https://script.google.com/) in your browser.
   - Sign in or create a Google account if you don't have one.

2. **Create a New Script**  
   - Click on "New Project."
   - Copy and paste the provided script code into the editor.

3. **Set Up a Time-Driven Trigger**  
   - In the left-hand pane, click the clock icon (Triggers).
   - Select "Add Trigger" and choose the function `createTimeDrivenTrigger`.
   - Set the frequency for the script to run automatically.

4. **Create a Gmail Filter**  
   - Open Gmail, go to **Settings > Filters and Blocked Addresses**.
   - Create a new filter called "Job Rejections" based on your preferred criteria.

5. **Run the Script**  
   - Go back to the Apps Script editor.
   - Click the "Run" button to check for any initial errors.

6. **Enjoy a Clean Inbox!**  
   - Your script will now run at the scheduled intervals, keeping your inbox free of rejection emails.
