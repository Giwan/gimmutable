'use strict'
/*
 * Normally jest replaces the require fucntion and
 * creates a mock if the item being required.
 * We turn off this feature here. If we wanted to turn it on again:
 * jest.autoMockOn();

 * The alternative is to use:
 * jest.dontMock('../CollectionUtils');
 * jest.dontMock('../TweetUtils'); // This is a dependency of CollectionUtils
 * These are the two components we're looking to test here
 */

jest.autoMockOff();
const CollectionUtils = require('../CollectionUtils');


/*
 * Test description and setup
 */
describe('Collection  utilities module', () => {
  // var CollectionUtils = require('../CollectionUtils');


  var collectionTweetsMock = {
    collectionTweet7: {},
    collectionTweet8: {},
    collectionTweet9: {}
  };


  it('returns a number of tweets in collection', function getNumberOfTweetsInCollection() {
    var actualNumberOfTweetsInCollection = CollectionUtils.getNumberOfTweetsInCollection(collectionTweetsMock);
    var expectedNumberOfTweetsInCollection = 3;

    // Call expect global function
    expect(actualNumberOfTweetsInCollection).toBe(expectedNumberOfTweetsInCollection);
  });

  it('checks if collection is not empty', function isNotEmptyCollection() {
    var actualIsEmptyCollectionValue = CollectionUtils.isEmptyCollection(collectionTweetsMock);

    expect(actualIsEmptyCollectionValue).toBeDefined();
    expect(actualIsEmptyCollectionValue).toBe(false);
    expect(actualIsEmptyCollectionValue).not.toBe(true);
  });
});
