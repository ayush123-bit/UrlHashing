
### 3. **assumptions.md**

This file contains the assumptions you’ve made during the development of your project.

```markdown
# Assumptions

1. **URL Integrity**:
   - The system assumes that the URLs provided by the users are valid.
   - The system does not validate the URL beyond ensuring it has a valid structure (e.g., `http://`, `https://`).

2. **Click Tracking**:
   - A hash URL can be clicked a maximum of 5 times. After that, it is considered expired.
   - The clicks are stored in the MongoDB database to track usage.

3. **MongoDB**:
   - MongoDB is used to store both the original URLs and their corresponding hashed URLs.
   - The database is expected to handle a moderate number of requests (thousands of URLs).

4. **Security and Privacy**:
   - Hashed URLs are generated using an encryption algorithm to ensure privacy.
   - The system does not expose or store user-sensitive information.

5. **Single-Use or Limited-Use URLs**:
   - The hashed URLs are designed for limited use (default: 5). They will expire once the limit is reached.

6. **Frontend and Backend Communication**:
   - The React frontend interacts with the Node.js backend via API calls for URL creation and click tracking.

7. **User Interface**:
   - The user interface is designed for simplicity, where users input a long URL and receive a hashed URL in return.
