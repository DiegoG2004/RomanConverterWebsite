// tests.js

// Use Chai's expect for assertions
const expect = chai.expect;

//it(description, function(){expect(convert(input)).to.equal(output);});
//it(description, function(){expect(() => convert(input)).to.throw(message);});
describe('ToRoman, Ones', function() 
{
  it("Should convert 1 to I", function(){expect(integerToRoman(1)).to.equal("I");});
  it("Should convert 2 to II", function(){expect(integerToRoman(2)).to.equal("II");});
  it("Should convert 3 to III", function(){expect(integerToRoman(3)).to.equal("III");});
  it("Should convert 4 to IV", function(){expect(integerToRoman(4)).to.equal("IV");});
  it("Should convert 5 to V", function(){expect(integerToRoman(5)).to.equal("V");});
  it("Should convert 6 to VI", function(){expect(integerToRoman(6)).to.equal("VI");});
  it("Should convert 7 to VII", function(){expect(integerToRoman(7)).to.equal("VII");});
  it("Should convert 8 to VIII", function(){expect(integerToRoman(8)).to.equal("VIII");});
  it("Should convert 9 to IX", function(){expect(integerToRoman(9)).to.equal("IX");});
});

describe('ToRoman, Tens', function() 
{
  it("Should convert 10 to X", function(){expect(integerToRoman(10)).to.equal("X");});
  it("Should convert 20 to XX", function(){expect(integerToRoman(20)).to.equal("XX");});
  it("Should convert 30 to XXX", function(){expect(integerToRoman(30)).to.equal("XXX");});
  it("Should convert 40 to XL", function(){expect(integerToRoman(40)).to.equal("XL");});
  it("Should convert 50 to L", function(){expect(integerToRoman(50)).to.equal("L");});
  it("Should convert 60 to LX", function(){expect(integerToRoman(60)).to.equal("LX");});
  it("Should convert 70 to LXX", function(){expect(integerToRoman(70)).to.equal("LXX");});
  it("Should convert 80 to LXXX", function(){expect(integerToRoman(80)).to.equal("LXXX");});
  it("Should convert 90 to XC", function(){expect(integerToRoman(90)).to.equal("XC");});
});

describe('ToRoman, Hundreds', function() 
{
  it("Should convert 100 to C", function(){expect(integerToRoman(100)).to.equal("C");});
  it("Should convert 200 to CC", function(){expect(integerToRoman(200)).to.equal("CC");});
  it("Should convert 300 to CCC", function(){expect(integerToRoman(300)).to.equal("CCC");});
  it("Should convert 400 to CD", function(){expect(integerToRoman(400)).to.equal("CD");});
  it("Should convert 500 to D", function(){expect(integerToRoman(500)).to.equal("D");});
  it("Should convert 600 to DC", function(){expect(integerToRoman(600)).to.equal("DC");});
  it("Should convert 700 to DCC", function(){expect(integerToRoman(700)).to.equal("DCC");});
  it("Should convert 800 to DCCC", function(){expect(integerToRoman(800)).to.equal("DCCC");});
  it("Should convert 900 to CM", function(){expect(integerToRoman(900)).to.equal("CM");});
});

describe('ToRoman, Thousands', function() 
{
  it("Should convert 1000 to M", function(){expect(integerToRoman(1000)).to.equal("M");});
  it("Should convert 2000 to MM", function(){expect(integerToRoman(2000)).to.equal("MM");});
  it("Should convert 3000 to MMM", function(){expect(integerToRoman(3000)).to.equal("MMM");});
  it("Should convert 3999 to MMMCMXCIX", function(){expect(integerToRoman(3999)).to.equal("MMMCMXCIX");});
});
describe('ToRoman, Errors', function() 
{
  it("Should give an error for 0", function(){
    expect(() => integerToRoman(0)).to.throw("The number must be between 1 and 3999.");});
  it("Should give an error for negative numbers", function(){
    expect(() => integerToRoman(-1)).to.throw("The number must be between 1 and 3999.");});
  it("Should give an error for numbers over 3999", function(){
    expect(() => integerToRoman(4000)).to.throw("The number must be between 1 and 3999.");});
  it("Should give an error for fractions or floating numbers", function(){
    expect(() => integerToRoman(3/2)).to.throw("The number must be an integer");});
  //This one fails since it just truncates to 1 and thus prints I
});

describe('ToInteger, Ones', function() 
{
  it("Should convert I to 1", function(){expect(romanToInteger('I')).to.equal(1);});
  it("Should convert II to 2", function(){expect(romanToInteger('II')).to.equal(2);});
  it("Should convert III to 3", function(){expect(romanToInteger('III')).to.equal(3);});
  it("Should convert IV to 4", function(){expect(romanToInteger('IV')).to.equal(4);});
  it("Should convert V to 5", function(){expect(romanToInteger('V')).to.equal(5);});
  it("Should convert VI to 6", function(){expect(romanToInteger('VI')).to.equal(6);});
  it("Should convert VII to 7", function(){expect(romanToInteger('VII')).to.equal(7);});
  it("Should convert VIII to 8", function(){expect(romanToInteger('VIII')).to.equal(8);});
  it("Should convert IX to 9", function(){expect(romanToInteger('IX')).to.equal(9);});
});

describe('ToInteger, Tens', function() 
{
  it("Should convert X to 10", function(){expect(romanToInteger('X')).to.equal(10);});
  it("Should convert XX to 20", function(){expect(romanToInteger('XX')).to.equal(20);});
  it("Should convert XXX to 30", function(){expect(romanToInteger('XXX')).to.equal(30);});
  it("Should convert XL to 40", function(){expect(romanToInteger('XL')).to.equal(40);});
  it("Should convert L to 50", function(){expect(romanToInteger('L')).to.equal(50);});
  it("Should convert LX to 60", function(){expect(romanToInteger('LX')).to.equal(60);});
  it("Should convert LXX to 70", function(){expect(romanToInteger('LXX')).to.equal(70);});
  it("Should convert LXXX to 80", function(){expect(romanToInteger('LXXX')).to.equal(80);});
  it("Should convert XC to 90", function(){expect(romanToInteger('XC')).to.equal(90);});
});

describe('ToInteger, Hundreds', function() 
{
  it("Should convert C to 100", function(){expect(romanToInteger('C')).to.equal(100);});
  it("Should convert CC to 200", function(){expect(romanToInteger('CC')).to.equal(200);});
  it("Should convert CCC to 300", function(){expect(romanToInteger('CCC')).to.equal(300);});
  it("Should convert CD to 400", function(){expect(romanToInteger('CD')).to.equal(400);});
  it("Should convert D to 500", function(){expect(romanToInteger('D')).to.equal(500);});
  it("Should convert DC to 600", function(){expect(romanToInteger('DC')).to.equal(600);});
  it("Should convert DCC to 700", function(){expect(romanToInteger('DCC')).to.equal(700);});
  it("Should convert DCCC to 800", function(){expect(romanToInteger('DCCC')).to.equal(800);});
  it("Should convert CM to 900", function(){expect(romanToInteger('CM')).to.equal(900);});
});

describe('ToInteger, Thousands', function() 
{
  it("Should convert M to 1000", function(){expect(romanToInteger('M')).to.equal(1000);});
  it("Should convert MM to 2000", function(){expect(romanToInteger('MM')).to.equal(2000);});
  it("Should convert MMM to 3000", function(){expect(romanToInteger('MMM')).to.equal(3000);});
  it("Should convert MMMCMXCIX to 3999", function(){expect(romanToInteger('MMMCMXCIX')).to.equal(3999);});
});

describe('ToInteger, Errors', function() 
{
  //Taken from feedback of both teacher and classmates
  it("Should give an error for empty input", function(){
    expect(() => romanToInteger("")).to.throw("Input must be a valid Roman numeral.");});
  it("Should give an error for any normal word", function(){
    expect(() => romanToInteger("Hello")).to.throw("The Roman numeral contains invalid characters.");});
  it("Should check for canonical Romans", function(){
    expect(() => romanToInteger("IC")).to.throw("The Roman numeral is not in canonical form.");});
  it("Should not accept lowercase letters", function(){
    expect(() => romanToInteger("v")).to.throw("The Roman numeral contains invalid characters.");});
  //This one fails since it is not case-sensitive
});

