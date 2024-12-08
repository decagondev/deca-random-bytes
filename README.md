# 🎲 Deca Random Bytes

A comprehensive, cryptographically secure random byte and number generator with multiple encoding support. 🔐🚀

## ✨ Features

- 🧩 Generate random bytes in multiple encodings
- 🎳 Generate random integers in a specified range
- 🌍 Cross-environment support (Browser and Node.js)
- 📘 TypeScript types included
- 🛡️ Cryptographically secure random generation

## 📦 Installation

```bash
npm install deca-random-bytes
```

## 📂 Project Structure

```
deca-random-bytes/
│
├── src/
│   └── index.ts         # Main source file
│
├── dist/                # Compiled JavaScript files
│   └── index.js
│   └── index.d.ts       # TypeScript declaration file
│
├── tests/
│   └── index.test.ts    # Unit tests
│
├── package.json         # Project configuration
├── tsconfig.json        # TypeScript configuration
└── README.md            # Project documentation
```

## 🚀 Usage

### Random Byte Generation

```javascript
import { decaRandomBytes } from 'deca-random-bytes';

// Generate 16 random bytes in hex (default)
const hexToken = decaRandomBytes(16);

// Generate in different encodings
const base64Token = decaRandomBytes(16, 'base64');
const utf8Token = decaRandomBytes(16, 'utf8');
```

### Multiple Random Byte Generation

```javascript
import { decaMultiRandomBytes } from 'deca-random-bytes';

const tokens = decaMultiRandomBytes({
  apiToken: { bytes: 16, encoding: 'hex' },
  userId: { bytes: 8, encoding: 'base64url' },
  sessionKey: { bytes: 32, encoding: 'base64' }
});

console.log(tokens.apiToken);     // Hex-encoded random bytes
console.log(tokens.userId);       // Base64URL-encoded random bytes
console.log(tokens.sessionKey);   // Base64-encoded random bytes
```

### Random Integer Generation

```javascript
import { decaRandomInt } from 'deca-random-bytes';

// Generate a random integer between 1 and 100 (inclusive)
const randomNumber = decaRandomInt(1, 100);
console.log(randomNumber);
```

## 🌈 Supported Encodings

- `hex`: Hexadecimal encoding 🔢
- `base64`: Base64 encoding 📃
- `utf8`: UTF-8 text encoding 📝
- `ascii`: ASCII encoding 💻
- `base64url`: URL-safe Base64 encoding 🌐

## 🌍 Environment Support

Works in both browser and Node.js environments with cryptographically secure random number generation. 🖥️ 📱

## 📜 License

MIT License 🏛️

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! 
Feel free to check [issues page](your-github-repo-issues-link). 

## 👨‍💻 Author

Tom Tarpey 
- GitHub: [@decagondev](https://github.com/decagondev)


