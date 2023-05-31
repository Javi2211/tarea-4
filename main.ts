let velocidad = 30
let tiempo_de_espera = 1000
maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, velocidad)
basic.pause(tiempo_de_espera)
maqueen.motorStop(maqueen.Motors.M2)
maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, velocidad)
basic.pause(tiempo_de_espera)
maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, velocidad)
basic.pause(1250)
maqueen.motorStop(maqueen.Motors.M1)
maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, velocidad)
basic.pause(1500)
maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, velocidad)
basic.pause(tiempo_de_espera)
maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, velocidad)
basic.pause(tiempo_de_espera)
maqueen.motorStop(maqueen.Motors.M2)
maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, velocidad)
basic.pause(1000)
maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, velocidad)
basic.pause(500)
basic.forever(function () {
	
})
