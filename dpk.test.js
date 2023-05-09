const { deterministicPartitionKey } = require("./dpk");
const crypto = require("crypto");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Should return a newly generated hash generated from input if partitionKey is not passed in input", () => {
    const hashMock = {
      update: jest.fn().mockReturnThis(),
      digest: jest.fn().mockReturnValueOnce('encrypt 123')
    };
    const createHashMock = jest.spyOn(crypto, 'createHash').mockImplementationOnce(() => hashMock);
    const data = { partition: '123' };
    const partitionKey = deterministicPartitionKey(data);
    expect(createHashMock).toBeCalledWith('sha3-512');
    expect(hashMock.update).toBeCalledWith(JSON.stringify(data));
    expect(hashMock.digest).toBeCalledWith('hex');
    expect(partitionKey.length).toBeLessThan(256);
    expect(typeof partitionKey).toBe("string");
    createHashMock.mockRestore();
  })

  it("Should return the partition key in string format if passed in input", () => {
    const data = { partitionKey: 123 };
    const partitionKey = deterministicPartitionKey(data);
    expect(partitionKey.length).toBeLessThan(256);
    expect(typeof partitionKey).toBe("string");
    expect(partitionKey).toBe('123');
  })

  it("Length of the partition key returned should be less than 256", () => {
    const hashMock = {
      update: jest.fn().mockReturnThis(),
      digest: jest.fn().mockReturnValueOnce('encrypt 123')
    };
    const createHashMock = jest.spyOn(crypto, 'createHash').mockImplementationOnce(() => hashMock);
    const string = new Array(260 + 1).join( 'a' );
    const data = { partitionKey: string };
    const partitionKey = deterministicPartitionKey(data);
    expect(createHashMock).toBeCalledWith('sha3-512');
    expect(hashMock.update).toBeCalledWith(data.partitionKey);
    expect(hashMock.digest).toBeCalledWith('hex');
    expect(partitionKey.length).toBeLessThan(256);
    expect(typeof partitionKey).toBe("string");
  })
});
