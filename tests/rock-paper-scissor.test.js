
const methods = require('../script');

describe("chooseSymbol for the computer", () => {
    it("returns 'Rock' if selectionNumber is 1", () => {
        expect(methods.chooseSymbol(1)).toBe("Rock");
    });
  
    it("returns 'Paper' if selectionNumber is 2", () => {
        expect(methods.chooseSymbol(2)).toBe("Paper");
    });
  
    it("returns 'Scissor' if selectionNumber is 3", () => {
        expect(methods.chooseSymbol(3)).toBe("Scissor");
    });

    it('should return an type error if its not a number', () => {
        expect(() => {
            methods.chooseSymbol("😎");
        }).toThrow(TypeError);
    });

    it("returns 'not a symbol' if selectionNumber is not 1,2 or 3", () => 
    {
        expect(methods.chooseSymbol(-1)).toBe("not a symbol");
        expect(methods.chooseSymbol(0)).toBe("not a symbol");
        expect(methods.chooseSymbol(4)).toBe("not a symbol");
    });
});
  