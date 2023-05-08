let step = 1
basic.forever(function () {
    if (step == 1) {
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_SpinLeft, 50)
        if (Tinybit.Ultrasonic_CarV2() < 30 || Tinybit.Ultrasonic_CarV2() > 0) {
            step = 2
        }
    } else if (step == 2) {
        if (Tinybit.Ultrasonic_CarV2() < 30) {
            Tinybit.CarCtrl(Tinybit.CarState.Car_Run)
        } else if (Tinybit.Ultrasonic_CarV2() < 20) {
            Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 100)
        } else if (Tinybit.Ultrasonic_CarV2() < 10) {
            Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 50)
        } else if (Tinybit.Ultrasonic_CarV2() < 5) {
            step = 3
        } else if (Tinybit.Ultrasonic_CarV2() > 30) {
            step = 1
        }
    } else if (step == 3) {
        Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
        if (Tinybit.Ultrasonic_CarV2() > 30) {
            step = 4
        }
    } else if (step == 4) {
    	
    } else if (step == 5) {
    	
    } else if (step == 6) {
    	
    } else if (step == 7) {
    	
    } else if (step == 8) {
    	
    } else if (step == 9) {
    	
    }
})
