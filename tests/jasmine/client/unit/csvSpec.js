describe('CSV', function() {
    beforeEach(function() {
    });

    it('constructor: deve aceitar somente uma string com formato CSV', function() {
        expect(function(){ new CSV() }).toThrow()
        expect(function(){ new CSV(1) }).toThrow()

        expect(function(){ new CSV("") }).not.toThrow()
        expect(function(){ new CSV("1,2,3\na,b,c") }).not.toThrow()
    });

    it('constructor: deve fazer o parsing de um CSV em um JSON', function() {
        var csv = new CSV("")
        expect(csv.object.length).toBe(0)

        csv = new CSV("a\n1")
        expect(csv.object.length).toBe(1)
        expect(csv.object[0]['a']).toBe('1')

        csv = new CSV("a,b\n1,2")
        expect(csv.object.length).toBe(1)
        expect(csv.object[0]['a']).toBe('1')
        expect(csv.object[0]['b']).toBe('2')

        csv = new CSV("a,b\n1,2\n3,4")
        expect(csv.object.length).toBe(2)
        expect(csv.object[0]['a']).toBe('1')
        expect(csv.object[0]['b']).toBe('2')
        expect(csv.object[1]['a']).toBe('3')
        expect(csv.object[1]['b']).toBe('4')

        // Deve ignorar linhas inválidas
        csv = new CSV("a,b\n1")
        expect(csv.object.length).toBe(0)
    });
});
