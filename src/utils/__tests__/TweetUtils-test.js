// this is what we're going to test so we don't want to mock it
var tweetUtilsFile = '../TweetUtils.js';
jest.dontMock(tweetUtilsFile);

describe('Tweet utilities module', function () {
  it('returns an array of tweet ids', function () {
    var TweetUtils = require(tweetUtilsFile);
    var tweetsMock = {
      tweet1: {},
      tweet2: {},
      tweet3: {}
    };
    var expectedListOfTweetIds = ['tweet1', 'tweet2', 'tweet3'];
    var actualListOfTweetIds = TweetUtils.getListOfTweetIds(tweetsMock);

    // perform the the test evaluation
    expect(actualListOfTweetIds).toEqual(expectedListOfTweetIds);
  });
});
