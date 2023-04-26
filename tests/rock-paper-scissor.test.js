
import scriptFunctions from '../script.js';

describe("chooseSymbol for the computer", () => {
    it("returns 'Rock' if selectionNumber is 1", () => {
        expect(scriptFunctions.chooseSymbol(1)).toBe("Rock");
    });
  
    it("returns 'Paper' if selectionNumber is 2", () => {
        expect(scriptFunctions.chooseSymbol(2)).toBe("Paper");
    });
  
    it("returns 'Scissor' if selectionNumber is 3", () => {
        expect(scriptFunctions.chooseSymbol(3)).toBe("Scissor");
    });

    it('should return an type error if its not a number', () => {
        expect(() => {
            scriptFunctions.chooseSymbol("😎");
        }).toThrow(TypeError);
    });

    it("returns 'not a symbol' if selectionNumber is not 1,2 or 3", () => 
    {
        expect(scriptFunctions.chooseSymbol(-1)).toBe("not a symbol");
        expect(scriptFunctions.chooseSymbol(0)).toBe("not a symbol");
        expect(scriptFunctions.chooseSymbol(4)).toBe("not a symbol");
    });
});
  
describe('testing game result', () => {
    it('should return player won if he wons', () => {
        expect(scriptFunctions.getWinner(5,0)).toBe("Player Won");
    });

    it('should return Computer won if the computer wins', () => {
        expect(scriptFunctions.getWinner(0,5)).toBe("Computer Won");
    });
});