from readTemp import getTemperature
from gpiozero import LED
from time import sleep

heater = LED(17)


def heater_control(set_temp):
    while True:
        actual_temp = getTemperature()
        print(actual_temp)
        if set_temp > actual_temp:
            heater.on()
        else:
            heater.off()
        sleep(10)


if __name__ == '__main__':
    heater_control(70)
