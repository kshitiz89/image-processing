const mockRequest = (Body,Files) => ({
 body:Body,
 files:Files
});

const mockResponse = () => {
  const res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
};

const {imagerequest,processImage} = require('../imageprocessing/resizeimage');

describe('check empty file', () => {
  test('should 401 if session data is not set', async () => {
    const req = mockRequest();
    const res = mockResponse();
    await imagerequest(req, res);
    expect(res.status).toHaveBeenCalledWith(401);
  });
});