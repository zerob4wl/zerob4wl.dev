import EventManager from './index';

describe('Event Manager Listener', () => {

    const eventManager = new EventManager();

    test('Add Listener', () => {
        const mockFn = jest.fn();
        eventManager.on('a', new mockFn());
        eventManager.on('a', new mockFn());
        expect(Object.keys(eventManager._eventsList).length).toBe(1);
        expect(eventManager._eventsList['a'].length).toBe(2);
        eventManager.reset();
        expect(Object.keys(eventManager._eventsList).length).toBe(0);
    });


});


describe('Event Manager Emitter', () => {

    const mockFn = jest.fn(() => undefined);
    const eventManager = new EventManager();

    beforeEach(() => {
        eventManager.on('a', mockFn);
        eventManager.on('a.*', mockFn);
        eventManager.on('a.*.c', mockFn);
        eventManager.on('a.c', mockFn);
        eventManager.on('a.cb1', mockFn);
    });

    afterEach(()=>{
        eventManager.reset();
        mockFn.mockReset();
    })

    it('Emit `a`', () => {
        eventManager.emit('a');
        expect(mockFn).toHaveBeenCalledTimes(1);
    });


    it('Emit `a.*`', () => {
        eventManager.emit(`a.bs`);
        expect(mockFn).toHaveBeenCalledTimes(1);
    });

    it('Emit `a.*.c`', () => {
        eventManager.emit(`a.b.c`);
        expect(mockFn).toHaveBeenCalledTimes(1);
    });

    it('Emit `a.c.*`', () => {
        eventManager.emit(`a.a.c`);
        expect(mockFn).toHaveBeenCalledTimes(1);
    });

    it('Emit `a.c`', () => {
        eventManager.emit(`a.c`);
        expect(mockFn).toHaveBeenCalledTimes(2);
    });
    
    it('remove `a.cb1`', () => {
        eventManager.remove(`a.cb1`, mockFn); 
        expect(eventManager._eventsList['a.cb1'].length).toBe(0);
    });


});