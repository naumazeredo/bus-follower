describe('clicking the button', function() {
    beforeEach(function() {
        Session.set('counter', 0);
    });

    it('should show how many times the button was pressed', function() {
        var text = $('p#buttontext').text();

        $('button').click();

        expect(text).toEqual("You've pressed the button 1 times.");
    });
});
