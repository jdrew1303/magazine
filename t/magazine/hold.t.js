#!/usr/bin/env node

require('proof')(3, function (assert) {
    var Cache = require('../..')
    var cache = new Cache
    var magazine = cache.createMagazine()

    var cartridge = magazine.hold(1, { number: 1 })
    assert(cartridge.value.number, 1, 'initialize')
    cartridge.value.number++
    cartridge.release()

    var cartridge = magazine.hold(1, { number: 1 })
    assert(cartridge.value.number, 2, 'exists')
    cartridge.release()

    try {
        cartridge.release()
    } catch (e) {
        assert(e.message, 'attempt to release a cartridge not held', 'release not held')
    }
})
