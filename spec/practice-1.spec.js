

describe('favoriteTVShows', function(){
    it('should be an array', function(){
      assert.equal(Array.isArray(favoriteTVShows), true);
    });
    it('array should have 5 items', function(){
      assert.equal(favoriteTVShows.length, 5);
    });
    it('all five items should be strings', function(){
      assert.equal(typeof favoriteTVShows[0], 'string');
      assert.equal(typeof favoriteTVShows[1], 'string');
      assert.equal(typeof favoriteTVShows[2], 'string');
      assert.equal(typeof favoriteTVShows[3], 'string');
      assert.equal(typeof favoriteTVShows[4], 'string');
    });
  });
  
  // SAMPLE DATA //
  const data = [
    {
      title: "It's Always Sunny in Philadelphia",
      genre: "Comedy",
      seasons: 15,
      stillRunning: true
    },
    {
      title: "The Leftovers",
      genre: "Drama",
      seasons: 3,
      stillRunning: false
    },
    {
      title: "Succession",
      genre: "Drama",
      seasons: 3,
      stillRunning: true
    },
    {
      title: "Star Trek: Voyager",
      genre: "Science Fiction",
      seasons: 7,
      stillRunning: false
    },
    {
      title: "Curb Your Enthusiasm",
      genre: "Comedy",
      seasons: 11,
      stillRunning: true
    }
  ];
  
  describe('#printValuesInReverse', function(){
    beforeEach(() => {
      sinon.spy(console, 'log');
    });
    afterEach(() => {
      console.log.restore();
    });

    it('should print values in reverse only if length is odd', function(){
      let data = ["The Leftovers", "Succession", "It's Always Sunny in Philadelphia"];
      printValuesInReverse(data);
      console.log.firstCall.calledWith("It's Always Sunny in Philadelphia").should.be.true;
      console.log.secondCall.calledWith('The Leftovers').should.be.true;

    });
  });
  
  describe('favoriteShow', function(){
    it('should be an object', function(){
      assert.equal(typeof favoriteShow, 'object');
    });
    it('should only have 3 keys', function(){
      let keys = Object.keys(favoriteShow);
      assert.equal(keys.length, 3);
    });
    it('should have correct keys', function(){
      let keys = Object.keys(favoriteShow);
      assert.equal(keys.includes('title'), true);
      assert.equal(keys.includes('genre'), true);
      assert.equal(keys.includes('stillRunning'), true);
    });
    it('should only have values with correct datatypes', function(){
      assert.equal(typeof favoriteShow.title, 'string');
      assert.equal(typeof favoriteShow.genre, 'string');
      assert.equal(typeof favoriteShow.stillRunning, 'boolean');
    });
  });
  
  describe('#getObjectKeys', function(){
    let data = {
      title: "It's Always Sunny in Philadelphia",
      genre: "Comedy",
      stillRunning: true
    };
    let result = getObjectKeys(data);
    it('should be an array', function(){
      assert.equal(Array.isArray(result), true);
    });
    it('output array should only contain keys whose values are boolean', function(){
      assert.equal(result.length, 1);
      assert.equal(result[0], 'stillRunning');
    });
  });
  
  describe('#getObjectValues', function(){
    let result = getObjectValues({
      title: "It's Always Sunny in Philadelphia",
      genre: "Comedy",
      stillRunning: true
    });
    it('should return an array', function(){
      assert.equal(Array.isArray(result), true);
    });
    it('should return an array of only string values from object', function(){
      assert.equal(result.length, 2);
      assert.equal(typeof result[0], 'string');
      assert.equal(typeof result[1], 'string');
    });
  });
  
  describe('#returnNewObj', function(){
    let data = {
      title: "It's Always Sunny in Philadelphia",
      genre: "Comedy",
      stillRunning: true
    };
    it('should create an object with the correct keys', function(){
      const result = returnNewObj(data, 'network', 'FX');
      const keys = Object.keys(result);
      assert.equal(keys.includes('title'), true);
      assert.equal(keys.includes('genre'), true);
      assert.equal(keys.includes('stillRunning'), true);
      assert.equal(keys.includes('network'), true);
    })
    it('should create an object with the correct values', function(){
      const result = returnNewObj(data, 'network', 'FX');
      const values = Object.values(result);
      assert.equal(values.includes("It's Always Sunny in Philadelphia"), true);
      assert.equal(values.includes('Comedy'), true);
      assert.equal(values.includes(true), true);
      assert.equal(values.includes('FX'), true);
      assert.equal(values.length, 4);
    });
    it('should not mutate original object', function(){
      let result = returnNewObj(data, 'network', 'FX');
      assert.notDeepEqual(result, data);
    });
  });
  
  describe('#addProperty', function(){
    let data = {
      title: "It's Always Sunny in Philadelphia",
      genre: "Comedy",
      stillRunning: true
    };
    it('should add input key/value to object', function(){
      let result = addProperty(data, 'numberOfSeasons', 15);
      assert.equal(result.numberOfSeasons, 15);
    });
    it('should correctly update input object', function(){
      let result = addProperty(data, 'numberOfSeasons', 15);
      let keys = Object.keys(result);
      assert.equal(data.title, "It's Always Sunny in Philadelphia");
      assert.equal(data.genre, "Comedy");
      assert.equal(data.stillRunning, true);
      assert.equal(data.numberOfSeasons, 15);
      assert.equal(keys.length, 4);
    });
  });
  
  describe('#findByTitle', function(){
    it('should return correct object', function(){
      let result = findByTitle(shows, "The Leftovers");
      assert.deepEqual(result, shows[1]);
    });
    it('should return undefined if no match exists', function(){
      let result = findByTitle(shows, "Watchmen");
      assert.deepEqual(result, undefined);
    });
  });
  
  describe('#getComedies', function(){
    it('should return an array', function(){
      let result = getComedies(shows);
      assert.equal(Array.isArray(result), true);
    });
    it('should return array of comedies', function(){
      let result = getComedies(shows);
      let testArr = [shows[0], shows[4]];
      assert.deepEqual(result, testArr);
    });
    it('should use the native filter method', function(){
      let filter = sinon.spy(Array.prototype, "filter");
      let result = getComedies(shows);
      assert(filter.calledOnce, true);
    });
  });
  
  describe('#getAverageOfSeasons', function(){
    it('should return a number', function(){
      let result = getAverageOfSeasons(shows);
      assert.equal(typeof result, 'number');
    });
    it('should return the correct average of seasons for all shows', function(){
      let result = getAverageOfSeasons(shows);
      assert.equal(result, 7.8);
    });
  });
  
  describe('#recursivelyGetNodeSum', function(){
    let data = {
      value: 10,
      node: {
        value: 20,
        node: {
          value: 30,
          node: null
        }
      }
    };
    it('should return a number', function(){
      let func = recursivelyGetNodeSum;
      assert.equal(typeof func(data), 'number');
    });
    it('should return correct sum', function(){
      let func = recursivelyGetNodeSum;
      assert.equal(func(data), 60);
    });
    it('should use recursion', function(){
      let func = recursivelyGetNodeSum.toString();
      assert.equal(func.includes('recursivelyGetNodeSum('), true);
    })
  });