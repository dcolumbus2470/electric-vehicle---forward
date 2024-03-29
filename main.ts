fwdMotors.setupDriving(
fwdMotors.leftServo,
fwdMotors.rightServo,
0
)
basic.forever(function () {
    if (fwdSensors.sonar1.fwdDistancePastThreshold(0.2, fwdSensors.ThresholdDirection.Under)) {
        fwdMotors.stop()
        basic.pause(1000)
        fwdMotors.drive(fwdMotors.DrivingDirection.Reverse, 50)
        basic.pause(1000)
        fwdMotors.turn(25)
        basic.pause(1000)
    } else {
        fwdMotors.drive(fwdMotors.DrivingDirection.Forward, 50)
    }
})
