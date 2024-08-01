describe("Teste de validação -  Maior Idade" , function(){
    
    it("validação Maior idade", function(){
        expect(maioridade(18)).toBe('Maior Idade');
    });

});

describe("Teste de validação -  Menor de  Idade" , function(){
    it("validação Menor idade", function(){
        expect(maioridade(10)).toBe('Menor Idade');
    });
});