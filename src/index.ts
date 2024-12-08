import { Buffer } from 'buffer';

export type EncodingType = 'hex' | 'base64' | 'utf8' | 'ascii' | 'base64url';

/**
 * Generates cryptographically secure random bytes in specified encoding
 * @param {number} numBytes - Number of random bytes to generate
 * @param {EncodingType} [encoding='hex'] - Encoding format to convert to
 * @returns {string} Encoded random bytes
 */
export function decaRandomBytes(
  numBytes: number, 
  encoding: EncodingType = 'hex'
): string {
  const randomBytes = new Uint8Array(numBytes);
  
  if (typeof window !== 'undefined' && window.crypto) {
    window.crypto.getRandomValues(randomBytes);
  } else if (typeof global !== 'undefined' && global.crypto) {
    const { randomBytes: nodeCrypto } = require('crypto');
    return nodeCrypto(numBytes).toString(encoding);
  } else {
    throw new Error('No cryptographically secure random number generator available');
  }

  return Buffer.from(randomBytes).toString(encoding);
}

/**
 * Generates multiple random byte strings in different lengths and encodings
 * @param {Object} config - Configuration for generating random bytes
 * @returns {Object} Object with generated random bytes
 */
export function decaMultiRandomBytes(config: {
  [key: string]: { 
    bytes: number, 
    encoding?: EncodingType 
  }
}) {
  const result: { [key: string]: string } = {};
  
  for (const [key, { bytes, encoding }] of Object.entries(config)) {
    result[key] = decaRandomBytes(bytes, encoding);
  }
  
  return result;
}

/**
 * Generates a random integer within a specified range
 * @param {number} min - Minimum value (inclusive)
 * @param {number} max - Maximum value (inclusive)
 * @returns {number} Random integer between min and max
 */
export function decaRandomInt(min: number, max: number): number {
  if (min > max) {
    throw new Error('Minimum value must be less than or equal to maximum value');
  }

  const range = max - min + 1;

  const randomBuffer = new Uint8Array(4);
  
  if (typeof window !== 'undefined' && window.crypto) {
    window.crypto.getRandomValues(randomBuffer);
  } else if (typeof global !== 'undefined' && global.crypto) {
    const { randomBytes: nodeCrypto } = require('crypto');
    randomBuffer.set(nodeCrypto(4));
  } else {
    throw new Error('No cryptographically secure random number generator available');
  }

  const randomUint32 = new DataView(randomBuffer.buffer).getUint32(0, true);

  return min + (randomUint32 % range);
}
