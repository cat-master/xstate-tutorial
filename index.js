import fetchService from "./machine/fetch"
import toggleService from "./machine/toggler"
import lighsService from "./machine/lights"
import wordService from "./machine/word"
import paymentService from "./machine/payment"

promiseService.send("FETCH")
toggleService.send("TOGGLE")
lightsService.send("TIMER")
wordService.send("TOGGLE_BOLD")
paymentService.send("CHECK")