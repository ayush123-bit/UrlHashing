# URL Hashing System

## Overview

This project is a URL Hashing System designed to shorten and hash long URLs (including UTM tracking links) while ensuring the integrity and privacy of the original URL. It also implements click tracking, limiting the number of times a generated hashed URL can be used (up to 5 times). Once the limit is reached, the hashed URL will expire.

## Features
- **Long URL Hashing**: Converts long URLs into shorter, hashed versions.
- **Click Tracking**: Tracks how many times a hashed URL has been used.
- **Expiration of Hashed URLs**: Hashed URLs can be limited to a set number of uses (default: 5).
- **MongoDB for storage**: Uses MongoDB to store and retrieve URLs and usage data.

## Tech Stack
- **Frontend**: React
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Compass for local development)
- **Deployment**: GitHub, MongoDB Compass

## Database Details
- **Database Name**: `Url`
- **Collection Name**: `urls`

The hashed URLs and their respective metadata (like click limits) are stored in this collection.

## Getting Started

### Prerequisites
- Node.js installed
- MongoDB Compass (or any MongoDB instance)
- Git installed
- React installed

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ayush123-bit/UrlHashing.git
