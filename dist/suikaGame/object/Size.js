export var getRenderHeight = function () { return Math.min(window.innerHeight - 64 - 8, 700); };
export var getRenderWidth = function () { return Math.round(getRenderHeight() * 0.5714); };
