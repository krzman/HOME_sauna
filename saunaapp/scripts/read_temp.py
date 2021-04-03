import w1thermsensor

# get temperature from sensor and return as int
def getTemperature():
    tempOK = False

    while not tempOK:
        try:
            sensor = w1thermsensor.W1ThermSensor()
        except Exception:
            print('error')
        else:
            # temp = int(sensor.get_temperature())
            temp = sensor.get_temperature()
            tempOK = True

    return temp
