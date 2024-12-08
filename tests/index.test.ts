import { decaRandomBytes, decaMultiRandomBytes, decaRandomInt } from '../src/index';

describe('Deca Random Bytes', () => {
  const encodings = ['hex', 'base64', 'utf8', 'ascii', 'base64url'] as const;

  test.each(encodings)('should generate %s encoded random bytes', (encoding) => {
    const bytes = 16;
    const randomEncoded = decaRandomBytes(bytes, encoding);
    
    expect(randomEncoded).toBeTruthy();
    expect(randomEncoded.length).toBeGreaterThan(0);
  });

  it('should generate multiple random byte strings', () => {
    const multipleBytes = decaMultiRandomBytes({
      token: { bytes: 16, encoding: 'hex' },
      apiKey: { bytes: 32, encoding: 'base64' },
      userId: { bytes: 8, encoding: 'base64url' }
    });

    expect(multipleBytes.token).toBeTruthy();
    expect(multipleBytes.apiKey).toBeTruthy();
    expect(multipleBytes.userId).toBeTruthy();
  });

  it('should generate random integer within specified range', () => {
    const min = 1;
    const max = 100;
    const randomInt = decaRandomInt(min, max);

    expect(randomInt).toBeGreaterThanOrEqual(min);
    expect(randomInt).toBeLessThanOrEqual(max);
  });

  it('should throw error for invalid integer range', () => {
    expect(() => decaRandomInt(100, 1)).toThrow('Minimum value must be less than or equal to maximum value');
  });

  it('should throw error in unsupported environment', () => {
    const originalCrypto = global.crypto;
    global.crypto = undefined as any;

    expect(() => decaRandomBytes(16)).toThrow('No cryptographically secure random number generator available');
    expect(() => decaRandomInt(1, 100)).toThrow('No cryptographically secure random number generator available');

    global.crypto = originalCrypto;
  });
});
