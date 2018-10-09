const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
window.alert = expect.createSpy()
for (let i = 0, l = code.length; i < l; i++) {
  triggerKeyDown(code[i])
}
}