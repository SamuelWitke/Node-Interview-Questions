const {expect}= require('chai')
const stringCompress = require('../index.js');
describe('stringCompress()', function () {
	it('should compress string', function () {

		// 1. ARRANGE
		let s1 = 'aabcccccaaa';
		let ansS1 = 'a2b1c5a3'
	
		expect(stringCompress(s1)).to.be.equal(ansS1);
	});

	it('should compress string', function () {
		const s1 = 'aaaa';
		const ansS1 = 'a4'
		
		expect(stringCompress(s1)).to.be.equal(ansS1);
	});	

 it('should compress string', function () {
		const s1 = 'aaab';
		const ansS1 = 'a3b1'
		
		expect(stringCompress(s1)).to.be.equal(ansS1);
	});	




});
